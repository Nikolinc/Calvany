import { useTranslations } from "next-intl";
import Link from "next/link";
import Style from "./leftbar.module.css";


function Leftbar(props: { reference: string[] }) {
  const t = useTranslations('Admin');
  return (
    <aside className={Style.LeftBar}>
      <h2>{t('Bar.tables')}</h2>
      <nav className={Style.references}>
        {props.reference.filter((item) => item.indexOf("_") < 0).map((item) => (
          <Link rel="prefetch" href={`/ru/admin/${item}/create`} as={`/ru/admin/${item}/create`} className="un">{t(`Tables.${item}`)}</Link>
        ))}
      </nav>
    </aside>
  )

}

export default Leftbar