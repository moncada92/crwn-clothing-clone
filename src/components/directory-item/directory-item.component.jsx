import { DirectoryItemContainer, BackgroundImage, BodyDirectory } from './directory-item.styles.jsx'

import React from 'react';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({imageUrl, title, route}) => {

  const navigation = useNavigate()

  const handlerLinkCategory = () => {
    navigation(route);
  }

  return (
    <DirectoryItemContainer onClick={handlerLinkCategory}>
      <BackgroundImage
       imageUrl={imageUrl}
      ></BackgroundImage>
      <BodyDirectory>
        <h2>{title}</h2>
        <p>text description</p>
      </BodyDirectory>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;