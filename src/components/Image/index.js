import React from 'react';

export default function Image(
    {
        image,
    }) {
    return (
        <img src={image} className="catImage" alt="Cat" />
    );
}
