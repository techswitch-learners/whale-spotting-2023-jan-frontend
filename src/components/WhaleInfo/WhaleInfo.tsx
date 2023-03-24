import React from "react";
import './WhaleInfo.scss';
import { WhaleFacts } from "./WhaleFacts";
import { WhaleInfoSidebar } from "./WhaleInfoSidebar";

export function WhaleInfo() {

    return <main className="whaleinfo">
        <h1 className="whaleinfo-header" id="top-of-page">
            All about whales!
        </h1>

        <section className="whaleinfo-container">
            <div className="whaleinfo-sidebar">
                <WhaleInfoSidebar />
            </div>
            <div className="whaleinfo-main-info">
                <h1 >
                Amazing Whale Facts!
                </h1>
                <section id="whale-facts">
                    <WhaleFacts />
                </section>
            </div>
        </section>
    </main>
}
