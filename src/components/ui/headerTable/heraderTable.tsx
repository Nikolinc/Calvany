'use client'
import CopyIcon from '@/shared/assets/icon/copy.svg';
import PlusIcon from "@/shared/assets/icon/plus.svg";
import ShearchIcon from "@/shared/assets/icon/search.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import Button from '../button/button';
import Style from './hearderTable.module.css';





function HeraderTable({ table, addFunc }: { table: string, addFunc?: (...arg: any) => void }) {
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
      router.push(pathname + '?' + createQueryString(`${table}Search`, searchValue!))
    }
  };

  return (
    <header className={Style.headerTable}>
      <Button className="buttonTypeHeader" onClick={addFunc ? addFunc : (router.push(`${table}/create`))!}>
        <PlusIcon className={Style.plusIcon} />
        Add
      </Button>
      <Button className="buttonTypeHeader">
        <CopyIcon className={Style.plusIcon} />
        Copy
      </Button>
      <div className={Style.searchHeaderTable}>
        <input placeholder="Search..."
          // onKeyDown={handleKeyDown}
          className={Style.inputHeaderTable}
          onChange={(e) => setSearchValue(e.target.value)} />
        <Button className="buttonVoid"
        // onClick={() => router.push(pathname + '?' + createQueryString(`${table}Search`, searchValue!))}
        >
          <ShearchIcon />
        </Button>
      </div>
    </header>
  )
}

export default HeraderTable