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
            <div className="text-[#999999] font-raleway text-sm font-normal">
                {isTimeSheet && <p className="text-center">Идейный вдохновитель: Александр Половцов</p>}

                <p>
                <span className="text-[#999999] font-raleway text-sm font-normal">
                    &copy; 2024 {data.name}, created by Kanstantsin Markau & Hanna Markava
                </span>
                </p>
            </div>
        </footer>
    );
};
