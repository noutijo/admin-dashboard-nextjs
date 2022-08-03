import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
      <Html className="text-[14px] font-sans">
        <link rel="icon" type="image/png" href="/favicon.png" />
        <Head>
         <script
          dangerouslySetInnerHTML={{
            __html: `
                      try {
    // On page load or when changing themes, best to add inline in head to avoid FOUC(Flash of unstyled content)
  if (localStorage.theme && localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.add("light");
    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";
  }
}catch(__){
};
 `,
}}></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"></link>
        </Head>
        <body className="w-screen h-screen text-colorDark dark:text-colorDark_DM overflow-x-hidden select-none bg-colorBackground dark:bg-colorBackground_DM text-sm">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
