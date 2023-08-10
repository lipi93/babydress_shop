import bn3 from "../assets/banner/bn3.jpg";
const About = () => {
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
                        <h1>About us</h1>
                        <h6 className="text-Justify ">This item is FINAL SALE. No returns or exchanges will be accepted. Sale items are NOT eligible for Try Before You Buy. If your Try Before You Buy order contains a Sale item, you will be charged for the item at the end of your trial. Sale items are not eligible for returns through Try Before You Buy.This item is FINAL SALE. No returns or exchanges will be accepted. Sale items are NOT eligible for Try Before You Buy. If your Try Before You Buy order contains a Sale item, you will be charged for the item at the end of your trial. Sale items are not eligible for returns through Try Before You Buy.This item is FINAL SALE. No returns or exchanges will be accepted. Sale items are NOT eligible for Try Before You Buy. If your Try Before You Buy order contains a Sale item, you will be charged for the item at the end of your trial. Sale items are not eligible for returns through Try Before You Buy.</h6>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;