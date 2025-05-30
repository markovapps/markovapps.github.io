import React from "react";
import {Divider} from "@nextui-org/divider";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {timeSheet} from "@/config/timesheet";
import {localizedStrings} from "@/config/localizedStrings";
import ContactUs from "@/components/ContactUs";

export default function TimeSheetPage() {
    return (
        <>
            <Slider data={timeSheet}/>
            <Divider orientation="horizontal"/>
            <Benefits data={timeSheet} localizedStrings={localizedStrings.RUS}/>
            <Divider orientation="horizontal"/>
            <Screenshots data={timeSheet} localizedStrings={localizedStrings.RUS}/>
            <Divider orientation="horizontal"/>
            <CallToAction data={timeSheet} localizedStrings={localizedStrings.RUS}/>
            <Divider orientation="horizontal"/>
            <ContactUs data={timeSheet} localizedStrings={localizedStrings.RUS}/>
        </>
    );
}
