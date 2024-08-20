import React from 'react';
import styled from 'styled-components';
// import classNames from 'classnames';

const CroppedImage = ({ className, containerWidth, image, wrapperHeight }) => {
  const { url: src, alt } = image.asset;
  const { crop } = image.crop
    ? image
    : { crop: { top: 0, bottom: 0, left: 0, right: 0 } };
  const { hotspot } = image.hotspot
    ? image
    : { hotspot: { height: 1, width: 1, x: 0.5, y: 0.5 } };

  // Original image dimensions.
  const { width, height, aspectRatio } = image.asset.metadata.dimensions;

  // Decimal percentage of the dimensions of the cropped image against the original.
  const heightRatio = 1 - crop.bottom - crop.top;
  const widthRatio = 1 - crop.left - crop.right;

  // Cropped dimensions of the original size of the image.
  const croppedFullHeight = height * heightRatio;
  const croppedFullWidth = width * widthRatio;

  // Aspect ratio of the cropped image.
  const croppedAspect = croppedFullWidth / croppedFullHeight;
  // What should the height be for the cropped image?
  const containerHeightCalculated = containerWidth / croppedAspect;

  // If the calculated height is shorter than the actual BlockWrapper (because of content length),
  // This will be how much bigger the wrapper is.
  // It will be negative if it's correctly sized.
  const difference = wrapperHeight - containerHeightCalculated;

  // If the image was correctly sized, we just get the containerHeight.
  // If the Wrapper is bigger, add the difference to the container, which should give you the BlockWrapper height.
  const containerHeight =
    difference > 0
      ? containerHeightCalculated + difference
      : containerHeightCalculated;

  console.log({ containerWidth });

  // Actual final sizes of the cropped image, resized for the container.
  const imageWidth = containerWidth / widthRatio;
  const imageHeight = imageWidth / aspectRatio;

  // Decimal percentage distance from the left and top of the original image for the crop.
  const cropLeft = crop.left;
  // If we have a difference between the containerHeight and the BlockWrapper height,
  // add half the percentage of that difference to the top crop so it's centered on its original crop.
  const cropTop =
    difference > 0 ? crop.top + difference / imageHeight / 2 : crop.top;

  return (
    <CroppedImageWrapper
      className="cropped-image-wrapper"
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      cropLeft={cropLeft}
      cropTop={cropTop}
    >
      <img src={src} alt={alt} />
    </CroppedImageWrapper>
  );
};

const CroppedImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: ${({ containerWidth }) => containerWidth}px;
  height: 300px;
  @media (min-width: 768px) {
    height: ${({ containerHeight }) => containerHeight}px;
  }
  img {
    position: absolute;
    width: ${({ imageWidth }) => imageWidth}px;
    height: ${({ imageHeight }) => imageHeight}px;
    transform: ${({ cropLeft, cropTop }) =>
      `translate(-${cropLeft * 100}%, -${cropTop * 100}%)`};
  }
`;

export default CroppedImage;
