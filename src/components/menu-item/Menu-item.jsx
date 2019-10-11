import React from 'react';
import './Menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`}>
        <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span classsName="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;