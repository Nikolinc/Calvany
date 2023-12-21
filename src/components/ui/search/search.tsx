"use client"
import SearchIcon from "@/shared/assets/icon/search.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Style from './search.module.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // const encodedSearchQuery = encodeURI(searchQuery);
    // router.push(encodedSearchQuery)
  }

  return (
    <form className={Style.searchBox} onChange={onSearch} >
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
    </form>
  )
}

export default Search