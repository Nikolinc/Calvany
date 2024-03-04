'use client'
import Button from "@/components/ui/button/button"
import IconBack from "@/shared/assets/icon/back.svg"
import { useRouter } from 'next/navigation'
import Style from './headerAdminPage.module.css'

interface headerAdminProps {
  TypePage: string,
  Tables: string,
  path: string,
}

function HeaderAdminPage(props: headerAdminProps) {
  const router = useRouter();

  return (
    <header className={Style.headerAdminPage}>
      <Button className="buttonVoid" onClick={() => router.back()}><IconBack /></Button>
      <h1>
        {`${props.TypePage}  ${props.Tables[0].toUpperCase()}${props.Tables.substring(1)}`}
      </h1>
      <div className={Style.buttonSectionHAP}>
        <Button className="buttonTypeHeader">
          Сохранить
        </Button>
        <Button className="buttonTypeHeader" onClick={() => router.push(props.path)}>
          Отмена
        </Button>
      </div>

    </header >
  )
}

export default HeaderAdminPage