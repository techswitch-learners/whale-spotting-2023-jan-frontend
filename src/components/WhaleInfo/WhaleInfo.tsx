import React from "react";
import './WhaleInfo.scss'

export const WhaleInfo: React.FC = () => {
    return <main className="whale-info">
        <h1 className="whale-info-header">
            All about whales!
        </h1>

        <section className="whale-info-container">
            <div className="whale-info-sidebar">
                Contents sidebar
            </div>
            <div className="whale-info-main-info">
                Main info
            </div>
        </section>
    </main>
}
