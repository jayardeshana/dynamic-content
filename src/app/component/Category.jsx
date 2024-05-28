import Link from 'next/link';
import React from 'react';

const Category = () => {
  return (
    <h1>
      <Link href='/category/1'>mobiles</Link>
      <br />
      <Link href='/category/2'>laptops</Link>
      <br />
      <Link href='/category/3'>tablets</Link>
    </h1>
  );
};

export default Category;
