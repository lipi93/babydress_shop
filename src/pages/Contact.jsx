import bn3 from "../assets/banner/contact1.jpg";
const Contact = () => {
    return (
        <>
            <div className="wrapper">
                <div className="background-color">
                    <div className="bg-1"></div>
                    <div className="bg-2"></div>
                </div>
                <div className="about-container">
                    <div className="image-container">
                        <img src={bn3} alt="" />
                    </div>
                    <div className="text-container">
                      
                        <form className="" id="login">
                        <h2 className="text-danger mt-5 text-center">Contact Us</h2> 
                       
                            <label className="form-lable mt-5">Email</label>
                            <input className="form-control" type="text" />

                            <label className="form-lable mt-3">Password</label>
                            <input className="form-control" type="text" />

                            <button className="btn btn-outline-danger  my-4 mb-4"> Click Me</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;