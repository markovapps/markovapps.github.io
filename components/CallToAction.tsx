import React from 'react';

type CallToActionProps = {
    data: {
        name: string;
        links: {
            google: string;
            ios: string;
        };
    };
};

const CallToAction: React.FC<CallToActionProps> = ({data}) => {
    return (
        <section id="cta" className="relative bg-cover bg-center bg-no-repeat py-16 text-center">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">Скачай и установи {data.name} прямо сейчас</h2>
                </div>

                <div className="flex justify-center gap-4 mb-8">
                    <a href={data.links.ios} className="inline-block">
                        <img
                            src="/appstore.png"
                            alt="Download on App Store"
                            className="h-12 w-auto"
                        />
                    </a>
                    <a href={data.links.google} className="inline-block">
                        <img
                            src="/playstore.png"
                            alt="Get it on Google Play"
                            className="h-12 w-auto"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
