'use client'
import CloseIcon from "@/shared/assets/icon/close.svg";
import PlusIcon from "@/shared/assets/icon/plus.svg";
import ShearchIcon from "@/shared/assets/icon/search.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Button from '../button/button';
import Style from './hearderTable.module.css';


function HeraderTable({ table }: { table: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState<string>();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )


  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(pathname + '?' + createQueryString('tableSearch', searchValue!))
    }
  };

  return (
    <header className={Style.headerTable}>
      <Button className="buttonTypeHeader" onClick={() => router.push(`create/${table}`)}>
        <PlusIcon className={Style.plusIcon} />
        Add
      </Button>
      <Button className="buttonTypeHeader">
        <CloseIcon className={Style.plusIcon} />
        Delete
      </Button>
      <div className={Style.searchHeaderTable}>
        <input placeholder="Search..."
          onKeyDown={handleKeyDown}
          className={Style.inputHeaderTable}
          onChange={(e) => setSearchValue(e.target.value)} />
        <Button className="buttonVoid"
          onClick={() => router.push(pathname + '?' + createQueryString('tableSearch', searchValue!))}>
          <ShearchIcon />
        </Button>
      </div>
    </header>
  )
}

export default HeraderTable