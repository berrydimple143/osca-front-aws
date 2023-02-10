import '../styles/globals.css';
import 'antd/dist/antd.min.css';

function MyApp({ Component, pageProps }) {
    return (
        <main className="font-Quicksand">
            <Component {...pageProps} />
        </main >
    );
}

export default MyApp;
