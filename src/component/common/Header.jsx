import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="container">
            <div className="row">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid py-4">
   
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        
        <li class="nav-item">
          <Link to="about" class="nav-link" href="#">About</Link>
        </li>
        <li class="nav-item">
          <Link to="products" class="nav-link" href="#">Products</Link>
        </li>
        <li class="nav-item">
          <Link to="contact" class="nav-link" href="#">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to="login" class="nav-link" href="#">Login </Link>
        </li>
        <li class="nav-item">
          <Link to="register" class="nav-link" href="#">Register </Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        </div>
        </>
    )
}
export default Header;