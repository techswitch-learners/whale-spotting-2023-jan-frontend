import React from "react";
import './WhaleInfo.scss'

export function WhaleInfo() {
    return <main className="whaleinfo">
        <h1 className="whaleinfo-header">
            All about whales!
        </h1>

        <section className="whaleinfo-container">
            <div className="whaleinfo-sidebar">
                Contents sidebar
            </div>
            <div className="whaleinfo-main-info">
                Main info
            </div>
        </section>
    </main>
}
