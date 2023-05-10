import React from 'react';
import './styles.css';

import ItemCard from './ItemCard';

const items = [
  { nama: 'Total Device', number: 1000 },
  { nama: 'Total Device', number: 1000 },
  { nama: 'Total Device', number: 1000 },
  { nama: 'Total Device', number: 1000 },
  { nama: 'Total Device', number: 1000 },
  { nama: 'Total Device', number: 1000 },
  { nama: 'Total Device', number: 1000 },
  { nama: 'Total Device', number: 1000 },
  { nama: 'Total Device', number: 1000 },
];

export default function Index() {
  return (
    <div className="center flex items-center justify-center">
      <div className="mt-[15vh] flex flex-col flex-wrap items-center justify-center gap-3 align-middle md:flex-row">
        {items.map((item, index) => {
          return <ItemCard title={item.nama} number={item.number} />;
        })}
      </div>
    </div>
  );
}
