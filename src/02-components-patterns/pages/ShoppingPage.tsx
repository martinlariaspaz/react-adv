import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/Product";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr/>
          <ProductCard 
            key={product.id}
            product={{ ...product }} 
            className="bg-dark"
            initialValues={{
              count:0,
              maxCount: 5,
              minCount: 0,
            }}
          >
            {(args) => (       
           <> 
              <ProductImage   className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
              <ProductTitle   className="text-white text-bold" />
              <ProductButtons className={`custom-buttons`} />
              {!args.isMinCountReached && <button onClick={() => args.increaseBy(-2)}>-2</button>}
              <button onClick={args.reset}>Reset</button>
              {!args.isMaxCountReached && <button onClick={() => args.increaseBy(+2)}>+2</button>}
              <br></br>
              <span>{args.count}</span>
            </>
            )}
          </ProductCard>
    </div>
    )
};
