import Head from "next/head";

type propsType= {
  title: string
};

export default function PageTemplate({title}:propsType) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>

      <div className="h-screen w-full flex items-center justify-center bg-colorBackground dark:bg-colorBackground_DM text-colorWhite">
        <div>
          <p className="text-3xl text-center font-semibold">{title}</p>
          <p className="mt-2 text-sm text-center">
            <span>Follow me on Twitter: </span>
            <a
              className="dark:text-colorWhite font-bold"
              href="https://twitter.com/JuniorOreol"
              target="_blank"
              rel="noopener noreferrer">
              {" "}
              @JuniorOreol
            </a>
          </p>
          <p className="mt-2 text-sm text-center">
            <a
              className="flex items-center justify-center gap-1 text-colorPrimary"
              href="https://oreolnoumodong.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="bi bi-link text-xl flex items-center justify-center"></i>
              <span>www.oreolnoumodong.com</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
