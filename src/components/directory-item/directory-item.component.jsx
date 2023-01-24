import './directory-item.styles.scss'

import React from 'react';

const DirectoryItem = ({imageUrl, title}) => {
  return (
    <div className="directory-item-container">
      <div className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>text description</p>
      </div>
    </div>
  );
};

export default DirectoryItem;