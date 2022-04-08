import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import CategoryCard from './CategoryCard';
import './CategoryList.scss';

export default function CategoryList() {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8800/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setCategories(res.categoryLists);
        setLoading(false);
      });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="CategoryList">
      {loading ? (
        <div>Loading...</div>
      ) : (
        categories.map(category => (
          <CategoryCard key={category.id} name={category.name} />
        ))
      )}
    </div>
  );
}
