import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  { id: "b1", title: "Book 1", description: "Book 1 description", price: 6 },
  { id: "b2", title: "Book 2", description: "Book 2description", price: 5 },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
