import React from "react";
import {Divider} from "@nextui-org/divider";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {duopoints} from "@/config/duopoints";
import {localizedStrings} from "@/config/localizedStrings";
import ContactUs from "@/components/ContactUs";

export default function DuoPointsPage() {
    return (
        <>
            <Slider data={duopoints}/>
            <Divider orientation="horizontal"/>
            {duopoints.benefits.length > 0 && (
                <>
                    <Benefits data={duopoints} localizedStrings={localizedStrings.ENG}/>
                    <Divider orientation="horizontal"/>
                </>
            )}
            {duopoints.screenshots.length > 0 && (
                <>
                    <Screenshots data={duopoints} localizedStrings={localizedStrings.ENG}/>
                    <Divider orientation="horizontal"/>
                </>
            )}
            <CallToAction data={duopoints} localizedStrings={localizedStrings.ENG}/>
            <Divider orientation="horizontal"/>
            <ContactUs data={duopoints} localizedStrings={localizedStrings.ENG}/>
        </>
    );
}
