"use client";

import {usePathname} from "next/navigation";

import React from "react";

export const Footer = () => {

    const transformString = (input: string) => {
        return input
            .replace(/^\//, "") // Remove leading slash
            .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize first letter
    }

    const pathName = usePathname();
    const appName = transformString(pathName);

    return (
        <footer
            className="w-full flex items-center justify-center py-3"
            style={{marginTop: 24}}
        >
            <p>
                <span className="text-[#999999] font-raleway text-sm font-normal">
                &copy; 2024 {appName}, created by Kanstantsin Markau & Hanna Markava
                </span>
            </p>
        </footer>
    );
};
