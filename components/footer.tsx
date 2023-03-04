import { RowCentered, TextPrimary } from './base';
import 'twin.macro';

const Footer: React.FC = () => {
    return (
        <RowCentered tw="w-full justify-end items-center py-16">
            {/* <TextPrimary tw="text-xs font-light opacity-50 dark:opacity-30">
                made with ❤️ by&nbsp; 
                <a href="https://www.nickbarrs.com" target="_blank" rel="noopener noreferrer" tw="duration-100 hover:font-medium hover:text-black dark:hover:text-white">
                    Nick Barrs
                </a>
            </TextPrimary> */}
        </RowCentered>
    )
}

export default Footer;


