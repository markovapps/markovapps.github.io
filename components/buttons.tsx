import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { CSSProperties, ReactNode } from 'react';

interface Props {
    style?: CSSProperties;
}
export const ContactDevs: React.FC<Props> = ({ style }) => (
    <Button
        style={style}
        isExternal
        as={Link}
        className="text-sm font-normal text-default-600 bg-default-100"
        href={siteConfig.links.contactUs}
        // startContent={<HeartFilledIcon className="text-danger" />}
        variant='solid'
    >
        Связаться с разработчиками
    </Button>
)