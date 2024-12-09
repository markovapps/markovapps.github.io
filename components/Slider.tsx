import React from 'react';
import {title} from "@/components/primitives";
import {subtitle} from "@/components/primitives";

type SliderProps = {
    data: {
        name: string;
        secondName: string;
        subtitle: string;
        mainScreen: string;
        links: {
            google: string;
            ios: string;
        };
    };
};

const Slider: React.FC<SliderProps> = ({ data }) => {
    return (
        <section
            id="slider"
            className="relative bg-cover bg-center bg-no-repeat py-28 flex items-center justify-center">

            <div className="slide--item">
                <div className="container">
                    <div className="flex items-center justify-between w-full">

                        {/* Left side (title, subtitle, buttons) */}
                        <div className="w-full md:w-1/2 pt-100 wow fadeInUp" data-wow-duration="1s">
                            <div className="slide--headline">
                                <span className={title({color: "violet"})}>{data.name}: </span>
                                <span className={title()}>{data.secondName}</span>
                            </div>
                            <div className={subtitle({class: "mt-4"})}>{data.subtitle}</div>

                            <div className=" mt-6 flex">
                                <a className="btn-hover" href={data.links.ios}>
                                    <img src="/appstore.png" alt="download appstore"/>
                                </a>
                                <a className="btn-hover ml-4" href={data.links.google}>
                                    <img src="/playstore.png" alt="download playstore"/>
                                </a>
                            </div>
                        </div>

                        <div className="hidden md:flex w-full md:w-1/2 flex justify-end items-center">
                            <img src={data.mainScreen} alt="screens" className="w-3/4"/>
                        </div>
                    </div>
                    <div className="flex md:hidden w-full justify-center items-center pt-14 ">
                            <img src={data.mainScreen} alt="screens" className="w-3/4"/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Slider;
