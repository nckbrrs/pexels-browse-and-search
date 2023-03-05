import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Col, Row } from "./base";
import "twin.macro";

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Row tw="min-h-screen justify-center">
            <Col tw="w-full max-w-screen-2xl justify-between flex-nowrap px-5 md:px-8 lg:px-12">
                <Header/>
                <Col tw="h-full justify-start flex-nowrap">
                    {children}
                </Col>
                <Footer/>
            </Col>
        </Row>
    )
    
}

export default Layout;

