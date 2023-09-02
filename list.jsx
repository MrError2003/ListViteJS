import React from 'react'

export default function List({ items }) {
    
    return (
        <>
            <ul>
                {
                    items.map((item) => (
                        <li style={{ color: item.color }}>
                            <h3>{item.name}</h3>
                        </li>
                    ))
                }
            </ul>
        </>


    )
;
}
