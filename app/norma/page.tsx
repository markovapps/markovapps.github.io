import React from "react";
import {Divider} from "@nextui-org/divider";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {norma} from "@/config/norma";
import {localizedStrings} from "@/config/localizedStrings";
import ContactUs from "@/components/ContactUs";

export default function NormaPage() {
    return (
        <>
            <Slider data={norma}/>
            <Divider orientation="horizontal"/>
          {/*  <Benefits data={norma} localizedStrings={localizedStrings.ENG}/>
            <Divider orientation="horizontal"/>
            <Screenshots data={norma} localizedStrings={localizedStrings.ENG}/>
            <Divider orientation="horizontal"/> */}
            <CallToAction data={norma} localizedStrings={localizedStrings.ENG}/>
            <Divider orientation="horizontal"/>
            <ContactUs data={norma} localizedStrings={localizedStrings.ENG}/>
        </>
    );
}