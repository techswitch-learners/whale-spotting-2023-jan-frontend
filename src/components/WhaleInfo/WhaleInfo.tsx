import React from "react";
import './WhaleInfo.scss';
import { WhaleFacts } from "./WhaleFacts";
import { WhaleInfoSidebar } from "./WhaleInfoSidebar";

export const WhaleInfo: React.FC = () =>{
    return <main className="whale-info">
        <h1 className="whale-info-header" id="top-of-page">
            All about whales!
        </h1>
        <section className="whale-info-container">
            <div className="whale-info-sidebar">
                <WhaleInfoSidebar />
            </div>
            <div className="whale-info-main-info" id="whale-facts">
                <h2 className="whale-facts-header">
                    Amazing Whale Facts!
                </h2>
                <section className = "whale-facts-section">
                    <WhaleFacts />
                </section>
            </div>
        </section>
    </main>
}
