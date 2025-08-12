import React, { useEffect } from 'react';

const baseUrl = window.location.origin;
import myImage from '../../Images/385438962_790771539643042_7852980290333862625_n.jpg'
const MySeo = ({ customImage }) => {
  useEffect(() => {
    // Remove existing OG image tags
    const existingTags = document.querySelectorAll('meta[property="og:image"], meta[property="og:image:width"], meta[property="og:image:height"]');
    existingTags.forEach(tag => tag.remove());

    // Add OG image tags
    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', customImage || `${baseUrl}${myImage}`);

    const ogImageWidth = document.createElement('meta');
    ogImageWidth.setAttribute('property', 'og:image:width');
    ogImageWidth.setAttribute('content', '1200');

    const ogImageHeight = document.createElement('meta');
    ogImageHeight.setAttribute('property', 'og:image:height');
    ogImageHeight.setAttribute('content', '630');

    document.head.appendChild(ogImage);
    document.head.appendChild(ogImageWidth);
    document.head.appendChild(ogImageHeight);

    // Cleanup
    return () => {
      ogImage.remove();
      ogImageWidth.remove();
      ogImageHeight.remove();
    };
  }, [customImage]);

  return null;
};

export default MySeo;