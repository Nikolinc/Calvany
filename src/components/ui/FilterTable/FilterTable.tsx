"use client"

interface IForm {
  data: any,
  attributes: string[]
}


import { useSearchParams } from "next/navigation";
import Table from "../table/table";

function FilterTable(params: IForm) {

  const searchParams = useSearchParams();
  const paramReq = new URLSearchParams(searchParams.toString())
  const value = paramReq.get('tableSearch');

  const filterFunction = (item: any) => {
    if (!value)
      return true

    return item.name === value;
  };

  return (<Table filterFunction={filterFunction}  {...params} />)
}

export default FilterTable