import {Link} from "react-router-dom";
const Card = ({product})=>{
    return (
        <>
        <div className="col-lg-4 col-sm-6 d-flex justify-content-strech">
            <div className="single-products shadow-lg border p-3 rounded text-center" >
                <div className="card-img-box">
                    <img  src={`http://localhost/10_React/react-month-project/api/images/${product.img}`} alt="" />
                </div>
                <div className="card-content">
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                </div>
               <Link className="btn btn-outline-danger btcls" to={`/products/${product.id}`}>View Details</Link>
            </div>
        </div>        
        </>
    )
}
export default Card;