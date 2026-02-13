import React, { useRef, useEffect, useState } from 'react';
import type { MenuItem } from '../data/menuData';

interface MenuCardProps {
    item: MenuItem;
    index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`menu-card ${isVisible ? 'menu-card-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            <div className="menu-card-icon-wrapper">
                <span className="menu-card-icon">{item.icon}</span>
            </div>
            <div className="menu-card-info">
                <div className="menu-card-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                </div>
                <div className="menu-card-prices">
                    {item.priceCheck && (
                        <div className="price-tag">
                            <span className="price-label">QTR</span>
                            <span className="price-value">₹{item.priceCheck}</span>
                        </div>
                    )}
                    <div className="price-tag">
                        <span className="price-label">{item.priceCheck ? 'Bottle' : 'Price'}</span>
                        <span className="price-value">₹{item.priceBottle}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
