import React from "react"

export default function Image({ image }) {
    const url = "https://farm" + image.farm +".staticflickr.com/" + image.server +  "/" + image.id + "_" + image.secret + "_t.jpg"
    return (
        <div className="row">
            <div className = "col-6">
                <img src={url} alt=""></img>
            </div>
            <div className = "col-6 title">
                <p>{image.title}</p>
            </div>
        </div>
    );
}