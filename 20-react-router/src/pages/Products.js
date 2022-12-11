import {Link} from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products page!</h1>
      <ul>
        <li><Link to="/products/1">Book</Link></li>
        <li><Link to="/products/2">Carpet</Link></li>
        <li><Link to="/products/3">Online course</Link></li>
      </ul>
    </section>
  );
};

export default Products;
