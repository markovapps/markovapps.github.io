import React from 'react';

import {ContactDevs} from "./buttons";

type ContactUsProps = {
    localizedStrings: {
        contactUsForHelp: string;
        weWillHelp: string;
        thanksForChoosingUs: string;
        contactDevelopers: string;
    }
};

const ContactUs: React.FC<ContactUsProps> = ({localizedStrings}) => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat py-16 text-center">
            <div
                style={{
                    textAlign: "center",
                    backgroundColor: "var(--primary-color)",
                }}
            >
                <div style={{marginTop: 16}}>
                    {localizedStrings.contactUsForHelp}
                </div>
                <div style={{marginTop: 16}}>
                    {localizedStrings.weWillHelp}
                </div>
                <div style={{marginTop: 16}}>
                    {localizedStrings.thanksForChoosingUs}
                </div>
                <ContactDevs style={{marginTop: 24}} text={localizedStrings.contactDevelopers}/>
            </div>
        </section>
    );
};

export default ContactUs;
