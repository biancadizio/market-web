import { useState, useEffect } from 'react';

export const useProducts = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Dados mockados
        const mockProducts = [
            { id: 1, name: "Produto A", description: "Descrição do Produto A", price: 10.0 },
            { id: 2, name: "Produto B", description: "Descrição do Produto B", price: 20.0 },
            { id: 3, name: "Produto C", description: "Descrição do Produto C", price: 30.0 }
        ];

        // Simulação de atraso para refletir o carregamento de uma API real
        const fetchProducts = () => {
            setTimeout(() => {
                setProducts(mockProducts);
                setLoading(false);
            }, 1000); // Simula 1 segundo de carregamento
        };

        fetchProducts();
    }, []);

    return { products, loading };
}
