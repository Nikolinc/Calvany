import Navbar from "@/components/ui/navbar/navbar";
import LogoIcon from "@/shared/assets/icon/logo.svg";
import Link from "next/link";
import Style from "./header.module.css";


function Header() {
  return (
    <header className={Style.header}>
      <Link href={"home"}>
        <LogoIcon className={Style.logoIcon} />
      </Link>
      <Link href={"home"} className="un">
        <h2 className={Style.logoName}>
          CAL'VANI
        </h2>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header