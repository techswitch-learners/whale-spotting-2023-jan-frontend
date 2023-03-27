import React from "react";
import "./SightingList.scss";

export default function SightingList() { 

    const sightings : JSX.Element[] = [];

    // replicate how the data will be returned from the DB and use that in the loop below string[WhaleSighting]

//     public class WhaleSighting
// {
//     public int Id { get; set; }
//     public DateTime DateOfSighting { get; set; }
//     public float LocationLatitude { get; set; }
//     public float LocationLongitude { get; set; }
//     public string PhotoImageURL { get; set; }
//     public int NumberOfWhales { get; set; }
//     public ApprovalStatus ApprovalStatus {get;set;}
//     public string Description { get; set; }
//     public WhaleSpecies WhaleSpecies { get; set; }
//     public User User { get; set; }
//     public ICollection<Like> Likes { get; set; }
// }

const WhaleSightingurl : string = "https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg"
    
    for (let i = 0; i < 12; i++) {
        sightings.push(
            <li className="whale-sighting-post">
                <div className="post-container">
                    <img src={WhaleSightingurl} alt="post image"/>
                    <div className="sighting-info">
                        <p>date</p>
                        <p>Username</p>
                        <button>Like</button>
                    </div>
                </div>
            </li>);
    }

    return <>
        <ul className="whale-sighting-posts">
				{sightings}
		</ul>
    </>
}


// export function ImageSelector(props: {
//     setState: React.Dispatch<React.SetStateAction<string>>,
//     date: string,
//     rover: string,
//     camera: string,
// }) {
//     const [apiImages, setApiImages] = useState<imageApiModel[]>();

//     useEffect(() => {
//         getImagesFromApi(props.date, props.rover, props.camera)
//             .then(data => setApiImages(data))
//             .then(() => { if (apiImages) props.setState(apiImages[0].img_src) });
//     }, [props.date, props.rover, props.camera]);

//     const images = apiImages
//         ? apiImages.slice(0, Math.min(apiImages.length, 12))
//             .map(data => <img src={data.img_src}
//                 key={data.id}
//                 className="individualImage"
//                 alt='Mars image'
//                 onClick={() => props.setState(data.img_src)} />)
//         : <p>No Image to Display</p>;

//     return <div>
//         <h4>Select a Photo</h4>
//         <h5>Showing for the {props.rover} rover's {props.camera} on {props.date}.</h5>
//         <div className="imageSelector">{images}</div>
//     </div>
// }