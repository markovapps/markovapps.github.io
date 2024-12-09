import React from "react";
import {NavigationBar} from "@/components/navigationBar";
import {timeSheet} from "@/config/timesheet";
import {Footer} from "@/components/Footer";

export default function TimeSheetLayout({children}: { children: React.ReactNode; }) {
    return (
        <div className="flex flex-col h-screen">
            <header className="w-full">
                <NavigationBar data={timeSheet}/>
            </header>

            <main className="flex-1 w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 mx-auto">
                {children}
            </main>

            <footer className="w-full">
                <Footer data={timeSheet}/>
            </footer>
        </div>
    );
}
