import React from 'react';
import {siteConfig} from "@/config/site";
import {title} from "@/components/primitives";
import {subtitle} from "./primitives";
import {content} from "../config/content";

const Benefits: React.FC = () => {
    return (
        <section id="feature2" className="bg-white py-16">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold">Benefits</h2>
                    <p className="text-lg text-gray-600">{content.description}</p>
                </div>

                {/* Benefits Row using Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {content.benefits.map((feature, index) => (
                        <div className="text-center" key={index}>
                            <div className="mb-4">
                                <img src={feature.icon} alt={feature.title} className="w-12 h-12 mx-auto" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                <p className="text-gray-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
