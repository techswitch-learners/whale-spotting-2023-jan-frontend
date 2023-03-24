import { amazingWhaleFacts } from "./AmazingWhaleFacts";

export function WhaleFacts(){
    const contents = amazingWhaleFacts();
    return <>
        {contents.map(fact=>{return (
            <>
            <h4>{fact.header}</h4>
            <p>{fact.detail}</p>
            </>
        )})}
    </>
}

