import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {

    const {singleID} = useParams();

    const [product, setProduct] = useState('');

    useEffect(() =>{
            fetch(`http://localhost/10_React/react-month-project/api/productapi.php?id=${singleID}`)
            .then (res => res.json())
            .then(data =>{
            setProduct(data[0])
            })
    }, []);



    return (
       <>
       <div className="container">
        <h1>Products Details</h1>

        <div className="single-products shadow-lg border p-3 rounded text-center">
            <div className="single-img-box">
                <img src={`http://localhost/10_React/react-month-project/api/images/${product.img}`} alt="" />
            </div>
            <div className="product-content">
                <h3>{product.title}</h3>
                <p>Price : ${product.price}</p>
            </div>
            <button className="add-cart">Add to cart</button>
        </div>
        <hr />
       </div>

       </> 
    )
}
export default Single;