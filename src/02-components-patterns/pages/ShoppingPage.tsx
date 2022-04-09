import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee.jpeg"
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr></hr>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={{ ...product }}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={{ ...product }}>
          <ProductImage img="./coffee-mug.png" />
          <ProductTitle title="Hola Café"/>
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
