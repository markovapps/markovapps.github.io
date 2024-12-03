import React from "react";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {content} from "@/config/content";
import {Divider} from "@nextui-org/divider";

export default function TimeSheetPage() {
    return (
        <>
            <Slider data={content.timeSheet}/>
            <Divider orientation="horizontal"/>
            <Benefits data={content.timeSheet}/>
            <Divider orientation="horizontal"/>
            <Screenshots data={content.timeSheet}/>
            {/*<UserReviews/>*/}
            <Divider orientation="horizontal"/>
            <CallToAction data={content.timeSheet}/>
            <Divider orientation="horizontal"/>
        </>
    );
}
