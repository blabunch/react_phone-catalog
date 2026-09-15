import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { Icon } from '../Icon/Icon';
import { formatPrice } from '../../utils/formatPrice';
import styles from './ProductCard.module.scss';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const { itemId, name, image, price, fullPrice, screen, capacity, ram } =
    product;

  const hasDiscount = fullPrice > price;

  // Тимчасові заглушки — замінимо на реальну логіку в Фазі 8-9
  const isInCart = false;
  const isFavorite = false;

  const handleAddToCart = () => {
    // TODO: підключити CartContext
  };

  const handleToggleFavorite = () => {
    // TODO: підключити FavoritesContext
  };

  return (
    <div className={styles.card}>
      <Link to={`/product/${itemId}`} className={styles.imageLink}>
        <img
          src={`${import.meta.env.BASE_URL}${image}`}
          alt={name}
          className={styles.image}
        />
      </Link>

      <Link to={`/product/${itemId}`} className={styles.name}>
        {name}
      </Link>

      <div className={styles.priceRow}>
        <span className={styles.price}>{formatPrice(price)}</span>
        {hasDiscount && (
          <span className={styles.fullPrice}>{formatPrice(fullPrice)}</span>
        )}
      </div>

      <div className={styles.divider} />

      <dl className={styles.specs}>
        <div className={styles.specsRow}>
          <dt className={styles.specsLabel}>Screen</dt>
          <dd className={styles.specsValue}>{screen}</dd>
        </div>
        <div className={styles.specsRow}>
          <dt className={styles.specsLabel}>Capacity</dt>
          <dd className={styles.specsValue}>{capacity}</dd>
        </div>
        <div className={styles.specsRow}>
          <dt className={styles.specsLabel}>RAM</dt>
          <dd className={styles.specsValue}>{ram}</dd>
        </div>
      </dl>

      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.addToCartButton} ${isInCart ? styles.added : ''}`}
          onClick={handleAddToCart}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </button>

        <button
          type="button"
          className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ''}`}
          onClick={handleToggleFavorite}
          aria-label="Add to favorites"
        >
          <Icon name={isFavorite ? 'heartFilled' : 'heart'} />
        </button>
      </div>
    </div>
  );
};
