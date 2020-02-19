import React, { useState } from 'react';
import Grid from '../elements/ImageHeader/grid';
import Row from '../elements/ImageHeader/row';
import BigImage from '../elements/ImageHeader/bigImage';
import BigImageDiv from '../elements/ImageHeader/bigImageDiv';
import SmallImage from '../elements/ImageHeader/smallImage';
import SmallImageDiv from '../elements/ImageHeader/smallImageDiv';

const FiveImages = ({ viewSelectHandler, clickedImageHandler, listingObj }) => {

  const [hoveredImage, setHoveredImage] = useState(null);

  const bigImgUrl = `${listingObj.listing_images[0].url.split('?')[0]}?aki_policy=xx_large`;
  const smallImgUrl1 = `${listingObj.listing_images[1].url}`;
  const smallImgUrl2 = `${listingObj.listing_images[2].url}`;
  const smallImgUrl3 = `${listingObj.listing_images[3].url}`;
  const smallImgUrl4 = `${listingObj.listing_images[4].url}`;
  // const smallImgUrl1 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[1].id}.jpg`;
  // const smallImgUrl2 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[2].id}.jpg`;
  // const smallImgUrl3 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[3].id}.jpg`;
  // const smallImgUrl4 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[4].id}.jpg`;

  const mouseEnterHandler = (e) => {
    setHoveredImage(e.target.name);
  };

  const mouseExitHandler = () => {
    setHoveredImage(null);
  };

  const onClickHandler = (e) => {
    clickedImageHandler(e);
    viewSelectHandler(true);
  };

  return (
    <Grid width={screen.width}>
      <BigImageDiv size={50}>
        <BigImage
          data-testid="big"
          name="0"
          src={bigImgUrl}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseExitHandler}
          hoveredImage={hoveredImage}
          onClick={onClickHandler}
        />
      </BigImageDiv>
      <SmallImageDiv collapse="middle" size={25}>
        <Row>
          <SmallImage
            data-testid="small1"
            name="1"
            src={smallImgUrl1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
            hoveredImage={hoveredImage}
            onClick={onClickHandler}
          />
        </Row>
        <Row bottom="none">
          <SmallImage
            name="2"
            data-testid="small2"
            src={smallImgUrl2}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
            hoveredImage={hoveredImage}
            onClick={onClickHandler}
          />
        </Row>
      </SmallImageDiv>
      <SmallImageDiv collapse="right" size={25}>
        <Row>
          <SmallImage
            name="3"
            data-testid="small3"
            src={smallImgUrl3}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
            hoveredImage={hoveredImage}
            onClick={onClickHandler}
          />
        </Row>
        <Row bottom="none">
          <SmallImage
            name="4"
            data-testid="small4"
            src={smallImgUrl4}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseExitHandler}
            hoveredImage={hoveredImage}
            onClick={onClickHandler}
          />
        </Row>
      </SmallImageDiv>
    </Grid>
  );
};

export default FiveImages;
