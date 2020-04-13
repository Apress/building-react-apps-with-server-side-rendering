import React from 'react';

function List(props) {
    const { items } = props;
    if (!items.length) {
        return (
        <span className="empty-message">
            No items in list
        </span>
        );
    }

    return (
        <ul className="list-items">
            {items.map(item =>
                <li key={item} className="item">{item}</li>
            )}
        </ul>
    );
}

export default List;