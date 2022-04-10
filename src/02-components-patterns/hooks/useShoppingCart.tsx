import { useState } from 'react'
import { Product } from '../interfaces/interfaces'

interface ProductInCart extends Product{
    count:number
  }

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({})
    const onProductCountChange = ({count,product}:{count:number,product:Product}) => {
      setShoppingCart((oldShoppingCart:{[key:string]: ProductInCart}) => {
        const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product,count:0};
        if(Math.max(productInCart.count + count, 0) > 0){
          productInCart.count += count;
          return {...oldShoppingCart,[product.id]:productInCart} 
        }else{
          const {[product.id]: toDelete, ...rest} = oldShoppingCart;
          return {...rest}
        }
      })
    }
    return {shoppingCart,onProductCountChange}
}
