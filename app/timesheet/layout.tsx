import React from "react";

export default function TimeSheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <section>
            {children}
        </section>
    );
}
