import { useFavorites } from '../../context/FavoritesContext';
import { ProductsList } from '../../components/ProductsList';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage = () => {
  const { items } = useFavorites();

  return (
    <div className="container">
      <h1 className={styles.title}>Favourites</h1>
      <p className={styles.count}>
        {items.length} {items.length === 1 ? 'item' : 'items'}
      </p>

      {items.length === 0 ? (
        <p className={styles.emptyMessage}>No favourites yet</p>
      ) : (
        <ProductsList products={items} />
      )}
    </div>
  );
};
