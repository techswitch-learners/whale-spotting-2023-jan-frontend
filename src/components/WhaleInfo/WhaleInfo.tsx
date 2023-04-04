import React from "react";
import './WhaleInfo.scss';
import { WhaleFacts } from "./WhaleFacts";
import { FamousWhales } from "./FamousWhales";
import { WhaleInfoSidebar } from "./WhaleInfoSidebar";
import { WhaleConservation } from "./WhaleConservation";

export const WhaleInfo: React.FC = () => {
    return <main className="whale-info">
        <h1 className="whale-info-header" id="top-of-page">
            All about whales!
        </h1>
        <section className="whale-info-container">
            <div className="whale-info-sidebar">
                <WhaleInfoSidebar />
            </div>
            <div className="whale-info-main-info">
                <div id="whale-facts">
                    <h2 className="whale-info-section-header">
                        Amazing Whale Facts!
                    </h2>
                    <section className="whale-info-section-contents">
                        <WhaleFacts />
                    </section>
                </div>
                <div id="famous-whales">
                    <h2 className="whale-info-section-header">
                        Famous Whales!
                    </h2>
                    <section className="whale-info-section-contents">
                        <FamousWhales />
                    </section>
                </div>
                <div id="whale-conservation">
                    <h2 className="whale-info-section-header">
                        Whale Conservation
                    </h2>
                    <section className="whale-info-section-contents">
                        <WhaleConservation />
                    </section>
                </div>
            </div>
        </section>
    </main>
}
