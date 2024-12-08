import React from "react";

import Slider from "@/components/Slider";
import Benefits from "@/components/Benefits";
import Screenshots from "@/components/Screenshots";
import CallToAction from "@/components/CallToAction";
import {Divider} from "@nextui-org/divider";
import {welpeny} from "@/config/welpeny";

export default function WelpenyPage() {
  return (
      <>
        <Slider data={welpeny}/>
        <Divider orientation="horizontal"/>
        <Benefits data={welpeny}/>
        <Divider orientation="horizontal"/>
        <Screenshots data={welpeny}/>
        <Divider orientation="horizontal"/>
        <CallToAction data={welpeny}/>
      </>
  );
}