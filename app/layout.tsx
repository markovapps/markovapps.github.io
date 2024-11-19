import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { ContactDevs } from "@/components/buttons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}

              <div style={{ textAlign: 'center', backgroundColor: 'var(--primary-color)' }}>
                <div style={{marginTop: 16}}> Свяжитесь с нами, если у Вас есть вопросы, предложения, хотите оставить отзыв, отчет об ошибке и т.д.</div>
                <div style={{marginTop: 16}}>Мы постараемся помочь Вам в кратчайшие сроки!</div>
                <div style={{marginTop: 16}}>Спасибо, что пользуетесь нашим приложением и помогаете его развивать.</div>
                <ContactDevs style={{marginTop: 24}}/>
              </div>
            </main>
            <footer className="w-full flex items-center justify-center py-3" style={{marginTop: 24}}>
              <p><span className="text-default-600">© 2024 Kanstantsin Markau & Hanna Markava</span></p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
