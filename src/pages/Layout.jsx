import { Outlet } from "react-router-dom";
import Header from "../component/common/Header";
import Footer from "../component/common/Footer";

const Layout = () => {
    return (
        <>
        <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout;