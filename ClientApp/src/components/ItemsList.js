import React  from 'react';

const ItemsList = (props) => {
    return (
        <ol>
            {props.items.map((item) => (
                <li key={item.id} id={item.id}>
                    {item.lastName} {item.firstName} {item.email}
                </li>
            ))}
        </ol>
    );
};
export default ItemsList