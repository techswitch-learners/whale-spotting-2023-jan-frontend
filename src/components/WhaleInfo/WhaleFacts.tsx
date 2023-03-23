import { amazingWhaleFacts } from "./AmazingWhaleFacts";

export function WhaleFacts(){

    const contents = amazingWhaleFacts();

    contents.map(fact=>{return (
        <>
        <h4>{fact.header}</h4>
        <p>{fact.detail}</p>
        </>
    )})
}
    
    // for (let i= 0; i< contentHeader.length; i++) {
    //     return(
    //     <>
    //         <h4>{contentHeader[i]}</h4>
    //         <p>{contentDetail[i]}</p>
    //     </>
    //     )
