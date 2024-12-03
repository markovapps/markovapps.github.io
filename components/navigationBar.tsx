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
import {DropdownItem, DropdownMenu, DropdownTrigger, Dropdown} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";

import {ContactDevs} from "./buttons";

import {siteConfig} from "@/config/site";
import {ThemeSwitch} from "@/components/theme-switch";
import {Logo, ImagePng} from "@/components/icons";
import React from "react";

export const NavigationBar = () => {
    const pathName = usePathname();

    return (
        <NextUINavbar
            position="sticky"
            className="bg-background shadow-sm sticky top-0 z-50"
            maxWidth="xl"
        >
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3">
                    <NextLink href="/" className="flex items-center gap-1">
                        <Logo alt="Company Logo"/>
                        <span className="font-bold text-inherit">{siteConfig.name}</span>
                    </NextLink>
                </NavbarBrand>

                <ul className="hidden lg:flex gap-6 ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                href={item.href}
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                                )}
                                color="foreground"
                                data-active={pathName === item.href ? "true" : "false"}
                            >
                                <ImagePng src={item.icon} alt={`${item.label} icon`}/>
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>

                {/* Dropdown for Privacy Policy */}
                <Dropdown className="">
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                                aria-label="Open Privacy Policy Dropdown"
                            >
                                Политика конфиденциальности
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="Privacy Policy Menu" className="w-72">
                        {siteConfig.privacyPolicyNavItems.map((item) => (
                            <DropdownItem
                                key={item.href}
                                description={"Политика конфиденциальности"}
                                startContent={
                                    <ImagePng src={item.icon} alt={`${item.label} icon`}/>
                                }
                            >
                                <NextLink href={item.href}>{item.label}</NextLink>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            {/* Right Section: Theme and Contact */}
            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem>
                    <ThemeSwitch aria-label="Toggle Theme"/>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <ContactDevs aria-label="Contact Developers"/>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu Toggle */}
            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <ThemeSwitch aria-label="Toggle Theme"/>
                <NavbarMenuToggle aria-label="Open Mobile Menu"/>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
                <div className="flex flex-col gap-2 p-4">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={item.href}>
                            <Link
                                href={item.href}
                                className={clsx(
                                    "text-lg",
                                    index === 1
                                        ? "text-primary"
                                        : index === siteConfig.navMenuItems.length - 1 &&
                                        "text-danger"
                                )}
                                aria-label={`Navigate to ${item.label}`}
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
