import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

export default function Document() {
    
    return (
        <Html>
            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@800&family=Monoton&family=Wallpoet&display=swap" rel="stylesheet">
                </link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}