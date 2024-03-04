import Link from "next/link"
import Style from "./leftbar.module.css"


function Leftbar(props: { reference: string[] }) {
  return (
    <aside className={Style.LeftBar}>
      <h2>Tables</h2>
      <nav className={Style.references}>
        {props.reference.map((item) => (
          <Link href={`/admin/${item}`} className="un" >{item}</Link>
        ))}
      </nav>
    </aside>
  )

}

export default Leftbar