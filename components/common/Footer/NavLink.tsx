import Link from 'next/link';
import cn from 'classnames';
import { FunctionComponent } from 'react';

export interface NavLinkProps {
    title: string;
    href: string;
    Icon: FunctionComponent<React.SVGAttributes<SVGElement>>;
    isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ Icon, title, isActive, href }) => {
    return (
        <Link href={href}>
            <div
                className={cn(
                    'w-1/4 flex flex-col justify-center hover:bg-gray-250 items-center cursor-pointer transition-all duration-300   ',
                    isActive ? 'text-green-550' : 'text-gray-500',
                )}
            >
                <Icon fill={isActive ? '#23c0b5' : 'gray'} className="w-6 h-6" />

                <div
                    className={cn(
                        'font-bold pt-1 text-xs transition-all duration-300 ',
                        isActive && 'font-bold',
                    )}
                >
                    {title}
                </div>
            </div>
        </Link>
    );
};

export default NavLink;
