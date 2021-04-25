import { Layout } from '@components/common';
import { FC } from 'react';
import { useRouter } from 'next/router';

const Search: FC = () => {
    const router = useRouter();

    return (
        <Layout title="جستجو" banner footer searchBar>
            <div className="flex flex-col justify-center w-full font-bold min-h-screen items-center">
                search page
                <div>{router.query.q}</div>
            </div>
            ;
        </Layout>
    );
};

export default Search;
