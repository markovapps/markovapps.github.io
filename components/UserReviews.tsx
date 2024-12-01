import React from 'react';
import {siteConfig} from "@/config/site";
import {title} from "@/components/primitives";
import {subtitle} from "./primitives";

interface Testimonial {
    author: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        author: 'Mark Smith',
        content: 'We have worked with appify. As we have grown and evolved, appfiy has created all of our profit. What I value most about our relationship is that appfiy knows us and our business.',
        rating: 3.5
    },
    {
        author: 'Jessy Arthur',
        content: 'We have worked with appify. As we have grown and evolved, appfiy has created all of our profit. What I value most about our relationship is that appfiy knows us and our business.',
        rating: 5
    },
    {
        author: 'Nicole Jonson',
        content: 'We have worked with appify. As we have grown and evolved, appfiy has created all of our profit. What I value most about our relationship is that appfiy knows us and our business.',
        rating: 4.5
    }
];

const UserReviews: React.FC = () => {
    return (
        <section id="reviews" className="section reviews bg-white">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div className="heading heading-1 mb-60 text--center wow fadeInUp" data-wow-duration="1s">
                            <h2 className="heading--title">User reviews</h2>
                            <p className="heading--desc">We show only the best websites, portfolios and landing pages built completely with passion, simplicity & creativity!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-xs-12 col-sm-4 col-md-4">
                            <div className="testimonial-panel wow fadeInUp" data-wow-duration="1s">
                                <div className="testimonial-body">
                                    <div className="testimonial--body">
                                        <p>{testimonial.content}</p>
                                    </div>
                                    <div className="testimonial--meta">
                                        <div className="testimonial--author pull-left">
                                            <h5>{testimonial.author}</h5>
                                        </div>
                                        <div className="testimonial--rating pull-right">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`fa ${i < Math.floor(testimonial.rating) ? 'fa-star' : (i < testimonial.rating ? 'fa-star-half-full' : 'fa-star-o')}`}></i>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserReviews;
