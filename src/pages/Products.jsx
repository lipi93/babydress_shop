import { useEffect, useState } from "react";
import Card from "../component/card/Card";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost/10_React/react-month-project/api/productapi.php")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false)

      })
  }, []);
  return (
    <>
      <div className="product-area my-5">
        <div className="container">
          <h1>Products</h1><hr />
          <div className="row g-4 my-4">
            {
              loading ? <div className="w-100 d-flex justify-content-center my-5">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden text-center">Loading...</span></div>
              </div> : products.map(item => <Card key={item.id} product={item} />)
            }
          </div>

        </div>
      </div>
    </>
  )
}
export default Products;