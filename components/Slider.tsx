import React from 'react';
import {siteConfig} from "@/config/site";
import {title} from "@/components/primitives";
import {subtitle} from "./primitives";

const Slider: React.FC = () => {
    return (
        <section
            id="slider"
            className="relative bg-cover bg-center bg-no-repeat py-28 flex items-center justify-center"
            style={{
                backgroundImage: siteConfig.background, // Replace with your background image
            }}
        >
            <div className="slide--item">
                <div className="container">
                    <div className="flex items-center justify-between w-full">

                        {/*<div className="row">*/}
                        {/*    <div className="col-xs-12 col-sm-12 col-md-12">*/}
                        {/*        <div className="slide--logo mt-100 hidden-xs wow fadeInUp" data-wow-duration="1s">*/}
                        {/*            <img src="/timesheet.png" alt="logo hero"/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/* Left side (title, subtitle, buttons) */}
                        <div className="w-full md:w-1/2 pt-100 wow fadeInUp" data-wow-duration="1s">
                            <div className="slide--headline">
                                <span className={title({color: "violet"})}>Timesheet </span>
                                <span className={title()}>календарь рабочего времени</span>
                            </div>
                            <div className={subtitle({ class: "mt-4" })}>
                                Отслеживание отработанного времени и дохода при почасовой оплате
                            </div>

                            <div className="slide--action cta mt-6 flex">
                                <a className="btn-hover" href="#">
                                    <img src="/appstore.png" alt="download appstore"/>
                                </a>
                                <a className="btn-hover ml-4" href="#">
                                    <img src="/playstore.png" alt="download playstore"/>
                                </a>
                            </div>
                        </div>

                        {/* Right side (image) */}
                        <div className="w-full md:w-1/2 flex justify-end items-center">
                            <img src="/01.png" alt="screens" className="w-3/4" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Slider;
