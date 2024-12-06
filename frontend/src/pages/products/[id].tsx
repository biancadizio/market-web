import React from 'react';
import { useRouter } from 'next/router';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product data by id (substitua pela lógica real)
  const product = { id, name: 'Produto Exemplo', price: 100.0 };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Preço: R${product.price}</p>
    </div>
  );
};

export default ProductPage;
