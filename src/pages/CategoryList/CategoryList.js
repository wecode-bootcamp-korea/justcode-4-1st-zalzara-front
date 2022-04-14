import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import './CategoryList.scss';

export default function CategoryList() {
  // const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);


  /* useEffect(() => {
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
*/
  const categories = [
    {
      id: 1,
      name: '러그',
    },
    {
      id: 2,
      name: '가구',
    },
  ];

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="CategoryList">
      {categories.map(category => (
        <CategoryCard key={category.id} name={category.name} />
      ))}
    </div>
  );
}
