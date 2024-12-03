import React from 'react';
import {siteConfig} from "@/config/site";
import {title} from "@/components/primitives";
import {subtitle} from "./primitives";
import {content} from "../config/content";

type ScreenshotsProps = {
    data: {
        screenshotsTitle: string;
        screenshots: [
            {
                img: string;
                title: string;
            }
        ]
    }
};

const Screenshots: React.FC = ({data}: ScreenshotsProps) => {

    return (
        <section id="screenshots" className="relative bg-cover bg-center bg-no-repeat py-16">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold">Основные экраны приложения</h2>
                    <p className="text-lg text-gray-600">{data.screenshotsTitle}</p>
                </div>

                <div className="relative">
                    <div className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide">
                        {data.screenshots.map((screen, index) => (
                            <div key={index} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/4 lg:w-1/5">
                                <img
                                    src={screen.img}
                                    alt={screen.title}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
