import "./SpeciesIdentification.scss"

export const SpeciesIdentification: React.FunctionComponent = () => {
    return <main>
        <h1 className="main-header">Species Identification Page</h1>
        <h2 className="sub-header">Use the filters to get species Information</h2>
        <section className="filter-container">
            <div className="filter-item">Tail Type</div>
            <div className="filter-item">Size</div>
            <div className="filter-item">Colour</div>
        </section>
        <section className="info-container">
            <div className="info-item">Species Information </div>
            <div >
                <img className="info-img" src="" alt="Image" />
            </div>
        </section>
    </main>
};