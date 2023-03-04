import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Col } from "./base";
import "twin.macro";

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Col tw="w-screen h-screen items-center justify-between">
            <Col tw="w-full flex-1 max-w-screen-2xl justify-between px-5 md:px-24 flex-nowrap">
                <Header/>
                {children}
                <Footer/>
            </Col>
        </Col>
    )
    
}

export default Layout;

