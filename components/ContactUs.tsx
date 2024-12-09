import React from 'react';
import {ContactDevs} from "./buttons";

const ContactUs: React.FC = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat py-16 text-center">
            <div
                style={{
                    textAlign: "center",
                    backgroundColor: "var(--primary-color)",
                }}
            >
                <div style={{marginTop: 16}}>
                    Свяжитесь с нами, если у Вас есть вопросы, предложения, хотите оставить отзыв, отчет об ошибке и т.д.
                </div>
                <div style={{marginTop: 16}}>
                    Мы постараемся помочь Вам в кратчайшие сроки!
                </div>
                <div style={{marginTop: 16}}>
                    Спасибо, что пользуетесь нашим приложением и помогаете его развивать.
                </div>
                <ContactDevs style={{marginTop: 24}}/>
            </div>
        </section>
    );
};

export default ContactUs;
