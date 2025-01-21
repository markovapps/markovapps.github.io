import React from 'react';

import {subtitle} from "./primitives";

type BenefitsProps = {
    data: {
        description: string;
        benefits: {
            icon: string;
            title: string;
            description: string;
        }[];
    };
};

const Benefits: React.FC<BenefitsProps> = ({ data }) => {
    return (
        <section id="benefits" className="relative bg-cover bg-center bg-no-repeat py-16">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold">Основные функции</h2>
                    <p className={subtitle()}>{data.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {data.benefits.map((feature, index) => (
                        <div className="text-center" key={index}>
                            <div className="mb-4">
                                <img src={feature.icon} alt={feature.title} className="w-12 h-12 mx-auto"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                <p className="text-default-500">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
