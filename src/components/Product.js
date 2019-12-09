import React from 'react';

const Product = props => {
	return (
		<div className="product">
			<img src={props.product1.image} alt={`${props.product1.title} book`} />

			<h1 className="title">{props.product1.title}</h1>

			<p className="price">${props.product1.price}</p>

			<button onClick={() => props.addItem1(props.product1)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
