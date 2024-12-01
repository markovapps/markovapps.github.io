import React from "react";

export default function TimeSheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //  flex flex-col items-center justify-center gap-4 py-8 md:py-10
    <section className="">
      {children}
    </section>
  );
}
