import {Viewport} from "next";
import clsx from "clsx";
import React from "react";
import "@/styles/globals.css";

import {Providers} from "./providers";

import {fontSans} from "@/config/fonts";

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html suppressHydrationWarning lang="en">
        <head/>
        {/* TODO */}
        <body
            className={clsx(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable,
            )}
        >
        <Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
            {children}
        </Providers>
        </body>
        </html>
    );
}
