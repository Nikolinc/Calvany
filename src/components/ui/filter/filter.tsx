'use client'
import { FilterType } from '@/shared/types/filters';
import Link from 'next/link';
import { useEffect, useState } from "react";
import filtersData from '../../../../public/data/filters.json';
import Style from './filter.module.css';

function Filter() {

  const [filters, setFilters] = useState<FilterType[] | null>(null);

  useEffect(() => {
    setFilters(filtersData?.filters);
  }, []);


  if (!filters) {
    return <div>Loading...</div>;
  }

  return (
    <nav className={Style.filterRooms}>
      {
        filters?.map((room: FilterType) => {
          return (<Link className='un' href={`rooms/${room.linc}`} key={room.name}>{room.name}</Link>)
        })
      }
    </nav>
  )
}

export default Filter