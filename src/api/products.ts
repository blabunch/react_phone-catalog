import { Product } from '../types/Product';

const BASE_URL = `${import.meta.env.BASE_URL}api`;

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json();
}

export const getProducts = (): Promise<Product[]> => {
  return request<Product[]>(`${BASE_URL}/products.json`);
};

export const getPhones = (): Promise<Product[]> => {
  return request<Product[]>(`${BASE_URL}/products.json`).then(products =>
    products.filter(p => p.category === 'phones'),
  );
};

export const getTablets = (): Promise<Product[]> => {
  return request<Product[]>(`${BASE_URL}/products.json`).then(products =>
    products.filter(p => p.category === 'tablets'),
  );
};

export const getAccessories = (): Promise<Product[]> => {
  return request<Product[]>(`${BASE_URL}/products.json`).then(products =>
    products.filter(p => p.category === 'accessories'),
  );
};
