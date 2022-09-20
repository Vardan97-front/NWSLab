import React from 'react';

export default function SidebarItem(
    {
        id,
        title,
        selected,
        chooseType,
    }) {
    return (
        <div className="sidebarItem">
            <label htmlFor={id}>{title}</label>

            <input
                type="checkbox"
                id={id}
                name={title}
                value={id}
                selected={selected}
                onChange={(ev) => chooseType(ev.target.value)}
            />
        </div>
    );
}
