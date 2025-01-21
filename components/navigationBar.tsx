"use client";

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem
} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {link as linkStyles} from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import React from "react";

import {ContactDevs} from "./buttons";

import {ThemeSwitch} from "@/components/theme-switch";
import {ImagePng} from "@/components/icons";

type NavProps = {
    data: {
        name: string;
        logo: string;
        path: string;
        links: {
            privacyPolicy: string;
            terms: string;
            contactUs: string;
        }
    };
};

export const NavigationBar = ({data}: NavProps) => {
    const pathName = usePathname();

    return (
        <NextUINavbar
            position="sticky"
            className="bg-background shadow-sm sticky top-0 z-50"
            maxWidth="xl"
        >
            <NavbarContent className="basis-1/5 md:basis-full flex-nowrap " justify="start">
                <NavbarBrand as="li" className="no-grow">
                    <NextLink href={data.path} className="flex items-center gap-2">
                        <ImagePng src={data.logo} alt={`${data.name} icon`}/>
                        <span className="font-bold text-inherit">{data.name}</span>
                    </NextLink>
                </NavbarBrand>

                <ul className="hidden md:flex ml-2 bg-transparent p-0">
                    <NavbarItem key={data.links.privacyPolicy}>
                        <NextLink
                            href={data.links.privacyPolicy}
                            className={clsx(
                                linkStyles({color: "foreground"}),
                                "data-[active=true]:text-primary data-[active=true]:font-medium",
                                "indent-6"
                            )}
                            color="foreground"
                            data-active={pathName === data.links.privacyPolicy ? "true" : "false"}
                        >
                            Политика конфиденциальности
                        </NextLink>
                    </NavbarItem>
                </ul>
                <ul className="hidden md:flex ml-2 bg-transparent p-0">
                    <NavbarItem key={data.links.terms}>
                        <NextLink
                            href={data.links.terms}
                            className={clsx(
                                linkStyles({color: "foreground"}),
                                "data-[active=true]:text-primary data-[active=true]:font-medium",
                            )}
                            color="foreground"
                            data-active={pathName === data.links.terms ? "true" : "false"}
                        >
                            Условия использования
                        </NextLink>
                    </NavbarItem>
                </ul>
            </NavbarContent>

            {/* Right Section: Theme and Contact */}
            <NavbarContent className="hidden md:flex basis-1/5 sm:basis-full" justify="end">
                <NavbarItem>
                    <ThemeSwitch aria-label="Toggle Theme"/>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <ContactDevs aria-label="Contact Developers"/>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu Toggle */}
            <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
                <ThemeSwitch aria-label="Toggle Theme"/>
                <NavbarMenuToggle aria-label="Open Mobile Menu"/>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
                <div className="flex flex-col gap-2 p-4">
                    <NavbarMenuItem key={data.links.privacyPolicy}>
                        <Link
                            href={data.links.privacyPolicy}
                            className={clsx("text-lg", "text-primary")}
                            aria-label={`Navigate to ${data.name}`}
                        >
                            Политика конфиденциальности
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem key={data.links.terms}>
                        <Link
                            href={data.links.terms}
                            className={clsx("text-lg", "text-primary")}
                            aria-label={`Navigate to ${data.name}`}
                        >
                            Условия использования
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem key={data.links.contactUs}>
                        <Link
                            href={data.links.contactUs}
                            className={clsx("text-lg", "text-primary")}
                            aria-label={`Navigate to ${data.name}`}
                        >
                            Связаться с разработчиками
                        </Link>
                    </NavbarMenuItem>
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
