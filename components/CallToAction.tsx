import React from 'react';
import {siteConfig} from "@/config/site";
import {title} from "@/components/primitives";
import {subtitle} from "./primitives";

const CallToAction: React.FC = () => {
    return (
        <section id="cta" className="section cta text-center pb-0">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                        <div className="heading heading-1 mb-50 text--center wow fadeInUp" data-wow-duration="1s">
                            <h2 className="heading--title">Download & install appy now</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mb-100 wow fadeInUp" data-wow-duration="1s">
                        <a className="btn-hover" href="#"><img src="assets/images/appstore.png" alt="download appstore" /></a>
                        <a className="btn-hover" href="#"><img src="assets/images/playstore.png" alt="download playstore" /></a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 wow fadeInUp" data-wow-duration="1s">
                        <img src="assets/images/mockup/2-layers.png" alt="mockup" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
