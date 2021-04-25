import { ReactNode } from 'react';
import Head from 'next/head';

import ShoppingIcon from '@assets/svg/shoppingIcon.svg';
import SearchBar from '../SearchBar';
import Footer from '../Footer';

export interface LayoutProps {
    children: ReactNode;
    banner?: boolean;
    footer?: boolean;
    searchBar?: boolean;
    title?: string;
    selected?: 'home' | 'wallet' | 'cart' | 'profile';
}

const Layout: React.FC<LayoutProps> = ({
    children,
    title,
    banner,
    searchBar,
    footer,
    selected,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="relative w-full bg-gray-250 flex flex-col min-h-screen  ">
                {banner && (
                    <div className="w-full justify-center flex items-center px-3 py-3 text-white  bg-green-550">
                        <div className="flex justify-center items-center ">
                            <ShoppingIcon className="w-6 -mt-1 h-6" fill="white" />
                            <div className="font-bold text-base mr-2">فروشگاه آنلاین</div>
                        </div>
                    </div>
                )}
                {searchBar && <SearchBar />}

                <div className="w-full min-h-screen">{children}</div>

                {footer && <Footer selected={selected} />}
            </div>
        </>
    );
};

export default Layout;
