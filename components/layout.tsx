import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Col } from "./base";
import "twin.macro";

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Col tw="w-screen h-screen items-center justify-between">
            <Col tw="w-full h-full max-w-screen-2xl justify-between px-24 flex-nowrap">
                <Header/>
                {children}
                <Footer/>
            </Col>
        </Col>
    )
    
}

export default Layout;

