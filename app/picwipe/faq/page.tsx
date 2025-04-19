import React from "react";

import {title} from "@/components/primitives";

export default function PicWipeFAQPage() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div>
                <div className={title({size: "sm"})}>
                    Swipe Photo Cleaner PicWipe: FAQ
                </div>
                <br/>
                <br/>
                <br/>

                <strong>How do I trash a photo?</strong>
                <p>
                    Swipe the photo up to move it to the trash and it will no longer show up as unsorted.
                    To view or manage trashed photos, tap the trash bin icon.
                    You can either delete or restore them.
                </p>
                <br/>

                <strong>What happens when I delete a photo from the trash?</strong>
                <p>
                     They are deleted from your iOS Photo Library.
                     However, Apple keeps deleted photos in the "Recently Deleted" album for 30 days,
                     giving you time to recover them if needed.
                      Open iOS Photos app and go to "Recently Deleted" album to recover them.
                </p>
                <br/>

                <strong>Can anybody see my photos?</strong>
                <p>
                    No. Your photos stay private and never leave your device. Nobody else can access your photos.
                </p>
                <br/>

                <strong>Can I cancel my trial or subscription?</strong>
                <p>
                    Follow these steps to manage your subscription on iOS:
                </p>
                <ul className="list-disc list-inside indent-2">
                    <li>Open your device’s <strong>Settings</strong>.</li>
                    <li>Tap your name at the top.</li>
                    <li>Select <strong>Subscriptions</strong>.</li>
                    <li>Choose the subscription you'd like to manage.</li>
                    <li>Tap <strong>Cancel Subscription</strong> and confirm.</li>
                </ul>
                <br/>

                <strong>How can I contact someone at PicWipe?</strong>
                <p>
                    We're happy to help!
                    Reach out to us anytime at <a
                    href="mailto:thoughtsafe.bonnstsmark@gmail.com"
                    className="text-blue-600">
                        thoughtsafe.bonnstsmark@gmail.com
                    </a>.
                </p>
                <br/>
            </div>
        </section>
    );
}
