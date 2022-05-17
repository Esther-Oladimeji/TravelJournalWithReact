import React from "react";

export default function Card(props) {
  return (
    <>
      <main>
        <div>
          <img src={props.items.imageUrl} className="country-img" />
        </div>
        <div className="info-right-section">
          <span className="country-info-line">
            <p>{props.items.location}</p>
            <a href={props.items.googleMapsUrl}>View on Google Maps</a>
          </span>
          <p className="location-name">{props.items.title}</p>
          <p className="date">
            {props.items.startDate} - {props.items.endDate}
          </p>
          <h3 className="description">{props.items.description}</h3>
        </div>
      </main>
      <hr />
    </>
  );
}
