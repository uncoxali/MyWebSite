import React, { FC } from 'react';
// import HomeIcon from '@assets/svg/homeIcon.svg';
// import UserIcon from '@assets/svg/UserIcon.svg';
// import WalletIcon from '@assets/svg/walletIcon.svg';
// import CartIcon from '@assets/svg/shoppingCartIcon.svg';
import NavLink from './NavLink';

interface FooterProps {
    selected: 'home' | 'wallet' | 'cart' | 'profile' | undefined;
}

const Footer: FC<FooterProps> = ({ selected }) => {
    return (
        <div className="w-full fixed bottom-0  bg-white  flex px-4 py-2 ">
            {/* <NavLink Icon={HomeIcon} href="/" isActive={selected === 'home'} title="خانه" />
            <NavLink
                Icon={WalletIcon}
                href="/profile/wallet"
                isActive={selected === 'wallet'}
                title="کیف پول"
            />
            <NavLink
                Icon={CartIcon}
                href="/profile/cart"
                isActive={selected === 'cart'}
                title="سفارشات من"
            />
            <NavLink
                Icon={UserIcon}
                href="/profile"
                isActive={selected === 'profile'}
                title="پروفایل"
            /> */}
        </div>
    );
};

export default Footer;
