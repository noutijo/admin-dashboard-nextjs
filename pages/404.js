import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>404 -Page Not Found</title>
            </Head>

            <div className="h-screen w-screen flex items-center justify-center bg-colorBackground_DM text-colorWhite">
                <div>
                    <p className="text-3xl text-center">404 mate!</p>
                    <p className="mt-2 text-sm text-center"> <span>Follow me on Twitter:</span> <a className="text-colorPrimary" href="https://twitter.com/JuniorOreol" target="_blank" rel="noopener noreferrer">@JuniorOreol</a> </p>
                </div>
                
            </div>
        </>
    );
};

export default Home;