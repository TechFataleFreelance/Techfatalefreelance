import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState((true))

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products from server');
                }

                const data = await response.json();
                setProducts(data.data);
                console.log((products))
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if(loading){
        return <div className='h-full w-full font-montserrat'>Loading...</div>
    }

    return(
        <div className='p-[0.75%] w-full object-center grid grid-cols-3 flex-wrap gap-[10px]   '>
            {products.map((product) => (
            <ProductCard pay={product.metadata.pay} description={product.description} image={product.images} name={product.name} price={product.metadata.price}/>
        ))}
        </div>
    )
}
export default ProductList