import React from "react";
import {Divider} from "@nextui-org/divider";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {welpeny} from "@/config/welpeny";
import {localizedStrings} from "@/config/localizedStrings";
import ContactUs from "@/components/ContactUs";

export default function WelpenyPage() {
    return (
        <>
            <Slider data={welpeny}/>
            <Divider orientation="horizontal"/>
            <Benefits data={welpeny} localizedStrings={localizedStrings.RUS}/>
            <Divider orientation="horizontal"/>
            <Screenshots data={welpeny} localizedStrings={localizedStrings.RUS}/>
            <Divider orientation="horizontal"/>
            <CallToAction data={welpeny} localizedStrings={localizedStrings.RUS}/>
            <Divider orientation="horizontal"/>
            <ContactUs data={welpeny} localizedStrings={localizedStrings.RUS}/>
        </>
    );
}