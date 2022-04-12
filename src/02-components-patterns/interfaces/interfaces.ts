import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";
export interface Product {
  id:    string;
  title: string;
  img?:  string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  initialValues?: InitialValues;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image:   (Props: ProductImageProps)     => JSX.Element;
  Title:   (Props: ProductTitleProps)     => JSX.Element;
}

export interface onChangeArgs {
  product:Product;
  count: number;
}

export interface InitialValues{
  count?: number;
  maxCount?: number;
  minCount?: number;
}

export interface Validation{
  maxCountReaced: boolean;
  minCountReaced: boolean;
}

export interface ProductCartHandlers{
  count:number;
  isMaxCountReached:boolean;
  isMinCountReached:boolean;
  maxCount?: number;
  minCount?: number;
  product: Product;
  
  increaseBy: (value:number) => void;
  reset: () => void;
}