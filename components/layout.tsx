import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Col, Row } from "./base";
import "twin.macro";

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <Col tw="w-screen h-screen bg-background items-center">
            <Col tw="w-full h-full max-w-screen-2xl justify-between px-24">
                <Row tw="py-24">
                    <Header/>
                </Row>
                {children}
                <Row tw="py-24">
                    <Footer/>
                </Row>
            </Col>
        </Col>
    )
    
}

export default Layout;

