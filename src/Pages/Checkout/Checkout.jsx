import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    const {title} = service
    return (
        <div>
            <h2>Our Services: {title}</h2>
        </div>
    );
};

export default Checkout;