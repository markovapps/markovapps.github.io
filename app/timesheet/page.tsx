import React from "react";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {Divider} from "@nextui-org/divider";
import {timeSheet} from "@/config/timesheet";
import ContactUs from "@/components/ContactUs";

export default function TimeSheetPage() {
    return (
        <>
            <Slider data={timeSheet}/>
            <Divider orientation="horizontal"/>
            <Benefits data={timeSheet}/>
            <Divider orientation="horizontal"/>
            <Screenshots data={timeSheet}/>
            <Divider orientation="horizontal"/>
            <CallToAction data={timeSheet}/>
            <Divider orientation="horizontal"/>
            <ContactUs/>
        </>
    );
}
