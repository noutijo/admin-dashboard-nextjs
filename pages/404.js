import Head from "next/head";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>404 -Page Not Found</title>
            </Head>

            <div className="h-screen w-full flex items-center justify-center bg-colorBackground_DM text-colorWhite">
                <div>
                    <p className="text-3xl text-center">404 mate!</p>
                    <p className="mt-2 text-sm text-center">
                        <span>Follow me on Twitter: </span>
                        <a className="text-colorWhite font-bold" href="https://twitter.com/JuniorOreol" target="_blank" rel="noopener noreferrer"> @JuniorOreol
                        </a>
                    </p>
                    <p className="mt-2 text-sm text-center">
                        <a className="flex items-center justify-center gap-1 text-colorPrimary" href="https://oreolnoumodong.com" target="_blank" rel="noopener noreferrer"><span className="material-icons-sharp flex items-center justify-center">link</span> www.oreolnoumodong.com</a>
                    </p>
                    <Link href="/profile">Go to Profile</Link>
                </div>

            </div>
        </>
    );
};

export default Home;
