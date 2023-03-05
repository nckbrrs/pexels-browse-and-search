import { Col, Row, TextPrimary } from './base';
import 'twin.macro';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter();
    const sessionStorage = (typeof window !== 'undefined') ? window.sessionStorage : null;
    const handleClickHeader = () => {
        sessionStorage?.removeItem('pexels@@@currentPage');
        sessionStorage?.removeItem('pexels@@@latestSearchQuery');
        router.reload();
    }

    return (
        <Row tw="justify-between items-center pb-4 pt-8 sm:pt-20">
            <Col tw="drop-shadow-sm">
                <TextPrimary tw="text-6xl font-medium font-serif cursor-pointer" onClick={handleClickHeader}>Pexels</TextPrimary>
                <TextPrimary tw="text-lg font-medium font-serif pl-[2px] cursor-default">by Nick Barrs</TextPrimary>
            </Col>
        </Row>
    )
}

export default Header;

