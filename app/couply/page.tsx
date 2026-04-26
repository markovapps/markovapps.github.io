import React from "react";
import {Divider} from "@nextui-org/divider";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {couply} from "@/config/couply";
import {localizedStrings} from "@/config/localizedStrings";
import ContactUs from "@/components/ContactUs";

export default function CouplyPage() {
    return (
        <>
            <Slider data={couply}/>
            <Divider orientation="horizontal"/>
            {couply.benefits.length > 0 && (
                <>
                    <Benefits data={couply} localizedStrings={localizedStrings.ENG}/>
                    <Divider orientation="horizontal"/>
                </>
            )}
            {couply.screenshots.length > 0 && (
                <>
                    <Screenshots data={couply} localizedStrings={localizedStrings.ENG}/>
                    <Divider orientation="horizontal"/>
                </>
            )}
            <CallToAction data={couply} localizedStrings={localizedStrings.ENG}/>
            <Divider orientation="horizontal"/>
            <ContactUs data={couply} localizedStrings={localizedStrings.ENG}/>
        </>
    );
}
