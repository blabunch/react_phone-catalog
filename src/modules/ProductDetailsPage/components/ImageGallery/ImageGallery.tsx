import { useState } from 'react';
import styles from './ImageGallery.module.scss';

type Props = {
  images: string[];
  name: string;
};

export const ImageGallery = ({ images, name }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`${styles.thumbnail} ${
              index === activeIndex ? styles.thumbnailActive : ''
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={`${name} thumbnail ${index + 1}`}
              className={styles.thumbnailImage}
            />
          </button>
        ))}
      </div>

      <div className={styles.mainImageWrapper}>
        <img
          src={`${import.meta.env.BASE_URL}${images[activeIndex]}`}
          alt={name}
          className={styles.mainImage}
        />
      </div>
    </div>
  );
};
