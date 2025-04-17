import React from "react";
import {Divider} from "@nextui-org/divider";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {picWipe} from "@/config/picWipe";
import {localizedStrings} from "@/config/localizedStrings";
import ContactUs from "@/components/ContactUs";

export default function PicWipePage() {
    return (
        <>
            <Slider data={picWipe}/>
            <Divider orientation="horizontal"/>
            <Benefits data={picWipe} localizedStrings={localizedStrings.ENG}/>
            <Divider orientation="horizontal"/>
            <Screenshots data={picWipe} localizedStrings={localizedStrings.ENG}/>
            <Divider orientation="horizontal"/>
            <CallToAction data={picWipe} localizedStrings={localizedStrings.ENG}/>
            <Divider orientation="horizontal"/>
            <ContactUs data={picWipe} localizedStrings={localizedStrings.ENG}/>
        </>
    );
}