"use client";

import React from "react";

type FooterProps = {
    data: {
        name: string;
    };
};

export const Footer = ({data}: FooterProps) => {

    return (
        <footer
            className="w-full flex items-center justify-center py-3"
            style={{marginTop: 24}}
        >
            <p>
                <span className="text-[#999999] font-raleway text-sm font-normal">
                &copy; 2024 {data.name}, created by Kanstantsin Markau & Hanna Markava
                </span>
            </p>
        </footer>
    );
};
