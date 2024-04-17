import React from "react";
import "../components/style.css";


export default function Card(props) {
  return (
    <>
      <section className="container">
        <div className="card">
          <div >
            <img src={props.item.imageUrl} alt="" className="card-img"/>
           
          </div>
          <div className="card-content">
            <div className="location">
              <img src="../src/assets/map.png" alt=""  target="_blank"/>
              <p>{props.item.location}</p>
              <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="card-title">{props.item.title}</h1>
            <div className="card-date">
              <span className="date">{props.item.startDate} - {props.item.endDate}</span>
            </div>
            <p className="card-info">
             {props.item.description}
            </p>
          </div>
        </div>
        <div className="border"></div>
      </section>
    </>
  );
}
