import React from 'react';

export default function SimpleButton(
    {
        title,
        type,
        loading,
        click,
    }) {
    return (
        <button
            onClick={!loading ? click : () => {}}
            disabled={loading}
            className="loadMore"
            type={type ? 'button' : 'submit'}
        >
            {loading ? 'Loading ...' : title}
        </button>
    );
}