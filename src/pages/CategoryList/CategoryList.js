import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import './CategoryList.scss';

export default function CategoryList() {
  const categories = [
    {
      id: 1,
      name: '가구',
      imgUrl: '/images/furniture.jpg',
    },
    {
      id: 2,
      name: '러그',
      imgUrl: '/images/rug.jpg',
    },
    {
      id: 3,
      name: '커튼',
      imgUrl: '/images/curtain.jpg',
    },
    {
      id: 4,
      name: '거울',
      imgUrl: '/images/mirror.jpg',
    },
    {
      id: 5,
      name: '바스켓',
      imgUrl: '/images/basket.jpg',
    },
    {
      id: 6,
      name: '담요',
      imgUrl: '/images/blanket.jpg',
    },
    {
      id: 7,
      name: '액자',
      imgUrl: '/images/photoframe.jpg',
    },
    {
      id: 8,
      name: '화병',
      imgUrl: '/images/vase.jpg',
    },
  ];

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="CategoryList">
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
