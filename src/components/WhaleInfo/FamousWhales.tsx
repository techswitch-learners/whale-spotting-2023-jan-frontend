import { famousWhaleInfo } from "./FamousWhalesInfo";

export function FamousWhales() {
    const contents = famousWhaleInfo();
    return <>
        {contents.map(famous => {
            return (
                <section className="whale-info-content">
                    <h4>{famous.header}</h4>
                    <p>{famous.detail}</p>
                    <img className="famous-whale-image" src={famous.imageUrl}></img>
                </section>
            )
        })}
    </>
}