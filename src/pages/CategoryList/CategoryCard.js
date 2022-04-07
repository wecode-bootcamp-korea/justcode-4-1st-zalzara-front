import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.scss';

export default function CategoryCard({ name }) {
  return (
    <Link to={`/categories/${name}`} style={{ textDecoration: 'none' }}>
      <div className="CategoryCard">
        <span>{name}</span>
      </div>
    </Link>
  );
}
