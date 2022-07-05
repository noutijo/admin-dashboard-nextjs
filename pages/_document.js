import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='text-[14px] font-sans'>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Head>
            <body className='w-screen h-screen text-colorDark dark:text-colorDark_DM overflow-x-hidden select-none bg-colorBackground dark:bg-colorBackground_DM text-sm'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}