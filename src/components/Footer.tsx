import "../Footer.scss";
import React from "react"

export const Footer: React.FC = () => {
    return (
        <div className="footer-main">
            <section className="footer-left">
                <div className="about-site-paragraph">
                    <p >
                        WhaleSightings.com is dedicated to creating an online space for the whalewatching community to plan and share sightings of these majestic creatures.
                    </p>
                    <p>2023 all rights reserved - website by WhaleSpotting UK Limited</p>
                </div>
            </section>
            <section className="footer-right">
                <div className="read-more-section">
                    <p>Read more about whales at:</p>
                    <p><a href="https://www.nhm.ac.uk/discover/whales.html">https://www.nhm.ac.uk/discover/whales.html</a></p>
                    <p><a href="https://whalespotting.co.uk/">https://whalespotting.co.uk/</a></p>
                </div>
            </section>
        </div>
    )
}
