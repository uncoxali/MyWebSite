import '@assets/styles/main.css';
import 'keen-slider/keen-slider.min.css';
import { AppProps } from 'next/app';
import { wrapper } from '@store/index';
import { Hydrate } from 'react-query/hydration';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />;
            </Hydrate>
        </QueryClientProvider>
    );
}

export default wrapper.withRedux(MyApp);
