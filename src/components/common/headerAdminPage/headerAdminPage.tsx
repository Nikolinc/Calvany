import Button from "@/components/ui/button/button";
import IconBack from "@/shared/assets/icon/back.svg";
import { useTranslations } from "next-intl";
import Style from './headerAdminPage.module.css';

interface headerAdminProps {
  TypePage: string,
  Tables: string,
  back: () => void,
}



function TitleAdminPage(props: headerAdminProps) {
  const t = useTranslations('Admin');

  return (
    <header className={Style.headerAdminPage}>
      <Button className="buttonVoid" onClick={props.back}><IconBack /></Button>
      <h1>
        {` ${t(`Bar.${props.TypePage}`)} ${t(`Tables.${props.Tables}`)}`}
      </h1>
      <div className={Style.buttonSectionHAP}>
        <label className={Style.itemActionHeader}>
          <input type="submit" placeholder={t(`General.save`)} />
        </label>
        <label className={Style.itemActionHeader}>
          <input type="reset" placeholder={t(`General.cancel`)} />
        </label>
      </div>

    </header >
  )
}

export default TitleAdminPage