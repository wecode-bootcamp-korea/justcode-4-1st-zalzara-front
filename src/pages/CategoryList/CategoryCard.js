import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.scss';

export default function CategoryCard({ category }) {
  console.log(category.imgUrl);
  return (
    <Link
      to={`/categories/${category.name}`}
      style={{ textDecoration: 'none' }}
    >
      <div className="CategoryCard">
        <img src={category.imgUrl} />
        <span>{category.name}</span>
      </div>
    </Link>
  );
}
