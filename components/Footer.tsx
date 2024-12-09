"use client";

import React from "react";
import {timeSheet} from "@/config/timesheet";

type FooterProps = {
    data: {
        name: string;
    };
};

export const Footer = ({data}: FooterProps) => {

    const isTimeSheet = data.name == timeSheet.name

    return (
        <footer
            className="w-full flex items-center justify-center py-3 border-t border-gray-200"
            style={{marginTop: 24}}
        >
            <div className="text-[#999999] text-center font-raleway text-sm font-normal">
                {isTimeSheet && <p>Идейный вдохновитель: Александр Половцов</p>}

                <p>&copy; 2024 {data.name}, created by Kanstantsin Markau & Hanna Markava</p>
            </div>
        </footer>
    );
};
