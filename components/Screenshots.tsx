import React from 'react';

import {subtitle} from "./primitives";

type ScreenshotsProps = {
    data: {
        screenshotsTitle: string;
        screenshots: {
            img: string;
            title: string;
        }[];
    };
    localizedStrings: {
        mainScreens: string;
    }
};

const Screenshots: React.FC<ScreenshotsProps> = ({data, localizedStrings}) => {

    return (
        <section id="screenshots" className="relative py-16">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold">{localizedStrings.mainScreens}</h2>
                    <p className={subtitle({class: "mt-4"})}>{data.screenshotsTitle}</p>
                </div>

                <div className="relative">
                    <div className="flex space-x-6 overflow-x-auto scroll-smooth w-full">
                        {data.screenshots.map((screen, index) => (
                            <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/5">
                                <img
                                    src={screen.img}
                                    alt={screen.title}
                                    className="w-full h-auto object-cover "
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
