"use client"

import "@/styles/globals.css";
import {Viewport} from "next";
import clsx from "clsx";

import {Providers} from "./providers";

import {fontSans} from "@/config/fonts";
import React from "react";
import {NavigationBar} from "@/components/navigationBar";
import {usePathname} from "next/navigation";
import {content} from "@/config/content";
import {Footer} from "@/components/Footer";

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({children}: { children: React.ReactNode }) {

    const pathName = usePathname();
    const data = pathName.includes(content.timeSheet.path) ? content.timeSheet : content.welpeny;

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
            <div className="relative flex flex-col h-screen">
                <NavigationBar data={data}/>
                <main className="mx-auto">
                    {children}
                </main>
                <Footer data={data}/>
            </div>
        </Providers>
        </body>
        </html>
    );
}
