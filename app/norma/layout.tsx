import React from "react";

import {NavigationBar} from "@/components/navigationBar";
import {norma} from "@/config/norma";
import {localizedStrings} from "@/config/localizedStrings";
import {Footer} from "@/components/Footer";

export default function NormaLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <div className="flex flex-col h-screen">
        <header className="w-full">
          <NavigationBar data={norma} localizedStrings={localizedStrings.ENG}/>
        </header>

        <main className="flex-1 w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-20 mx-auto">
          {children}
        </main>

        <footer className="w-full">
          <Footer data={norma}/>
        </footer>
      </div>
  );
}