import { useNavigate } from 'react-router-dom';
import { ProductDetails } from '../../../../types/ProductDetails';
import styles from './ProductVariantPicker.module.scss';

type Props = {
  product: ProductDetails;
  variants: ProductDetails[];
};

const colorHexMap: Record<string, string> = {
  black: '#3b3c3e',
  white: '#faf6f3',
  gold: '#f7e7ce',
  yellow: '#f7e07f',
  green: '#a8c6a1',
  purple: '#d8cbe3',
  red: '#b21f2d',
  silver: '#e3e3e3',
  spacegray: '#6e6e6e',
  midnightgreen: '#3f4b45',
  coral: '#ff8f70',
};

export const ProductVariantPicker = ({ product, variants }: Props) => {
  const navigate = useNavigate();

  const findVariant = (color: string, capacity: string) =>
    variants.find(v => v.color === color && v.capacity === capacity);

  const handleColorSelect = (color: string) => {
    const variant = findVariant(color, product.capacity);

    if (variant) {
      navigate(`/product/${variant.id}`);
    }
  };

  const handleCapacitySelect = (capacity: string) => {
    const variant = findVariant(product.color, capacity);

    if (variant) {
      navigate(`/product/${variant.id}`);
    }
  };

  return (
    <div className={styles.picker}>
      <div className={styles.group}>
        <span className={styles.label}>Available colors</span>
        <div className={styles.colorOptions}>
          {product.colorsAvailable.map(color => (
            <button
              key={color}
              type="button"
              className={`${styles.colorOption} ${
                color === product.color ? styles.colorOptionActive : ''
              }`}
              style={{ backgroundColor: colorHexMap[color] || color }}
              onClick={() => handleColorSelect(color)}
              aria-label={color}
              title={color}
            />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.group}>
        <span className={styles.label}>Select capacity</span>
        <div className={styles.capacityOptions}>
          {product.capacityAvailable.map(capacity => (
            <button
              key={capacity}
              type="button"
              className={`${styles.capacityOption} ${
                capacity === product.capacity ? styles.capacityOptionActive : ''
              }`}
              onClick={() => handleCapacitySelect(capacity)}
            >
              {capacity}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
