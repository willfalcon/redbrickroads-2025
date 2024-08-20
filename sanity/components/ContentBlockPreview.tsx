import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';

import {client} from '../lib/client';

import Button from './Button';
import CroppedImage from './CroppedImage';
import { useElementSize } from './utils';
import bgPattern from './bgPattern';

const builder = imageUrlBuilder(client);

function imageBuilder(source) {
  return builder.image(source);
}

const ContentBlockPreview = ({ value }) => {
  const { title, text, media, reverse = false, buttonText } = value;

  const imageSrc = imageBuilder(media).url();
  const img = document.createElement('img');
  img.src = imageSrc;
  const image = {
    ...media,
    asset: {
      url: imageSrc,
      metadata: {
        dimensions: {
          width: img.naturalWidth,
          height: img.naturalHeight,
          aspectRatio: img.naturalWidth / img.naturalHeight,
        },
      },
    },
  };

  const [contentRef, contentSize] = useElementSize();
  const [wrapperRef, wrapperSize] = useElementSize();
  return (
    <BlockWrapper
      reverse={reverse}
      ref={wrapperRef}
      wrapperWidth={wrapperSize.width}
    >
      <CroppedImage
        containerWidth={wrapperSize.width / 3}
        wrapperHeight={contentSize.height}
        image={image}
        className="content-block__image"
      />
      <ContentWrapper
        reverse={reverse}
        ref={contentRef}
        wrapperSize={contentSize}
        leftAngle={63}
        rightAngle={79}
        wrapperWidth={wrapperSize.width}
      >
        <div className="content-block__content">
          <h2 className="content-block__heading">{title}</h2>
          <p
            className="content-block__body"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          {buttonText && (
            <Button className="content-block__link">{buttonText}</Button>
          )}
        </div>
      </ContentWrapper>
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  width: 100% !important;
  display: flex;
  height: 400px;
  .content-block {
    &__image {
      flex: 0 0 ${({ containerWidth }) => containerWidth}px;
      order: ${({ reverse }) => (reverse ? 2 : 1)};
    }
    &__content-wrapper {
      flex: 1 1
        ${({ containerWidth, wrapperWidth }) =>
          wrapperWidth - containerWidth - 10}px;
      margin-left: ${({ reverse }) => (reverse ? 0 : 10)}px;
      margin-right: ${({ reverse }) => (reverse ? 10 : 0)}px;
      order: ${({ reverse }) => (reverse ? 1 : 2)};
    }
  }
`;
const ContentWrapper = styled.div`
  padding: 5rem 1rem;

  ${bgPattern}
  > * {
    position: relative;
  }
  .content-block {
    &__content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      width: 65%;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    &__heading {
      margin: 0;
      color: ${({ reverse }) => (reverse ? '#c72030' : '#ff914d')};
      text-transform: uppercase;
    }
    &__body {
      margin: 0 0 4rem;
      line-height: 1.15;
    }
  }
`;

export default ContentBlockPreview;
