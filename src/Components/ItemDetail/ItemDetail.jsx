import React from 'react';

const ItemDetail = ({ producto }) => {

    return (
        <div>
            <img src={producto.img} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p>$ {producto.precio}</p>
            <p>{producto.category}</p>
        </div>
    );
};

export default ItemDetail;