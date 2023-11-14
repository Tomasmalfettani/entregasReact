import React from 'react';
import "./itemListContainer.css"

const ItemListContainer = ({ mensaje }) => {
    return (
        <div>
            <p className="mensaje">{mensaje}</p>
        </div>
    );
};

export default ItemListContainer;