import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {

    const onAdd = (quantity) => {
        alert(quantity)
    }

    return (
        <div>
            <img src={producto.img} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p>$ {producto.precio}</p>
            <h2>{producto.stock}</h2>
            <p>{producto.category}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
        </div>
    );
};

export default ItemDetail;