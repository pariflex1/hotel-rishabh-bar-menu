import React, { useRef, useEffect, useState } from 'react';
import type { MenuCategory } from '../data/menuData';
import MenuCard from './MenuCard';

interface CategorySectionProps {
    category: MenuCategory;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
            className={`category-section ${isVisible ? 'section-visible' : ''}`}
        >
            <div className="category-hero">
                <img
                    src={category.image}
                    alt={category.title}
                    className="category-hero-img"
                    loading="lazy"
                />
                <div className="category-hero-overlay">
                    <span className="category-hero-emoji">{category.emoji}</span>
                    <h2 className="category-title">{category.title}</h2>
                </div>
            </div>
            <div className="category-grid">
                {category.items.map((item, index) => (
                    <MenuCard key={`${category.title}-${index}`} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
