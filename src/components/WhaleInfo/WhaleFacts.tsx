import { amazingWhaleFacts } from "./AmazingWhaleFacts";

export function WhaleFacts() {
    const contents = amazingWhaleFacts();
    return <>
        {contents.map(fact => {
            return (
                <section className="whale-facts">
                    <h4>{fact.header}</h4>
                    <p>{fact.detail}</p>
                </section>
            )
        })}
    </>
}

