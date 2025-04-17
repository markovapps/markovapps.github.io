import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { CSSProperties } from "react";

import { siteConfig } from "@/config/site";

interface Props {
  style?: CSSProperties;
  text?: string;
}
export const ContactDevs: React.FC<Props> = ({ style, text }) => (
  <Button
    as={Link}
    className="text-sm font-normal text-default-600 bg-default-100"
    href={siteConfig.links.contactUs}
    style={style}
    variant="solid"
  >
    {text}
  </Button>
);
