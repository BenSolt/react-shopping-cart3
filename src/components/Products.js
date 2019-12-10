import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';
// Components
import Product from './Product';


const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product1={product}
					addItem1={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
