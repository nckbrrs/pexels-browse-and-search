import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import 'twin.macro';
import { RowCentered, TextPrimary } from "../components/base";

// Shown to user if/when they try to navigate to any page other than "/"
// Automatically redirects them to "/" after [secondsToWaitBeforeRerouting] seconds
const NotFound: React.FC = () => {
    const router = useRouter();
    const [secondsOnPage, setSecondsOnPage] = useState(0);
    const secondsToWaitBeforeRerouting = 5;

    useEffect(() => {
        setTimeout(() => {
            setSecondsOnPage(secondsOnPage + 1)
        }, 1000)
        
        if (secondsOnPage >= secondsToWaitBeforeRerouting) {
            router.push('/')
        }
    }, [secondsOnPage])
    
    return (
        <>
        <Head>
            <title>Pexels by Nick Barrs / 404</title>
        </Head>
        <RowCentered tw="w-full">
            <TextPrimary tw="w-full text-center">
                Oops! <span tw="font-bold">There's nothing here!</span>
            </TextPrimary>
            <TextPrimary tw="w-full text-center">In {secondsToWaitBeforeRerouting - secondsOnPage} seconds, you will be redirected to the&nbsp;
                <Link href="/">
                    home page.
                </Link>
            </TextPrimary>
        </RowCentered>
        </>
    )
}

export default NotFound;