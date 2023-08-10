import cus1 from "../assets/banner/cus1.webp"
import cus2 from "../assets/banner/cus2.webp"
import cus3 from "../assets/banner/cus3.webp"
import Products from "./Products"

const Home = () => {
    return (
        <>
        <div className="container">
        <div className="row">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={cus1} className="img-box d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={cus2} className="img-box d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={cus3} className="img-box d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>        
      </div>
      <Products />
  
        </>
    )
}
export default Home;