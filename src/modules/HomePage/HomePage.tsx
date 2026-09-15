import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products';
import { Product } from '../../types/Product';
import { ProductsList } from '../../components/ProductsList';

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="container">
      <h1 className="visually-hidden">Product Catalog</h1>
      <ProductsList products={products.slice(0, 8)} />
    </div>
  );
};
