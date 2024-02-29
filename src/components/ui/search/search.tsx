"use client"
import {useParams} from "@/hooks/useParams";
import SearchIcon from "@/shared/assets/icon/search.svg";
import { useState } from "react";
import Style from './search.module.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const params = useParams();

  return (
    <div className={Style.searchBox}
      onChange={() => params.set('search', searchQuery)} >
      <button className={Style.btnSearch}>
        <i className={Style.fas}>
          <SearchIcon />
        </i>
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={Style.inputSearch}
        placeholder="Type to Search..."
      />
    </div>
  )
}

export default Search
