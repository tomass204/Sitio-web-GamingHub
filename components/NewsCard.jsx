import React, { useState } from 'react';

const NewsCard = ({ title, image, summary }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card mb-4 shadow-sm">
      <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {showMore ? summary : `${summary.substring(0, 100)}...`}
        </p>
        <button className="btn btn-primary" onClick={toggleShowMore}>
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
