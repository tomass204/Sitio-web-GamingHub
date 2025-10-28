import React, { useState } from 'react';

const NewsCard = ({ title, image, summary }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card col-md-4 d-flex">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {expanded ? summary : `${summary.substring(0, 100)}...`}
        </p>
        <button className="btn btn-primary" onClick={toggleExpanded}>
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
