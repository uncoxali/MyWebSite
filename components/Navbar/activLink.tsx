import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
    href: any;
    children: any;
}
const activLink: FC<Props> = ({ href, children }) => {
    const router = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <div>
            <div
                className={`${
                    router.asPath === href ? 'bg-green-550' : ''
                } w-16 h-1  absolute top-0`}
            ></div>
            <Link href={href}>
                <a
                    onClick={handleClick}
                    className={`${router.asPath === href ? 'text-green-550' : ''}`}
                >
                    {children}
                </a>
            </Link>
        </div>
    );
};

export default activLink;
