import { Layout } from '@components/common';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <Layout title="kookbaz" footer banner searchBar selected="home">
            <div className="bg-indigo-500 min-h-screen text-center">home page</div>
        </Layout>
    );
};

export default Home;
