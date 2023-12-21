import Navbar from "@/components/ui/navbar/navbar";
import LogoIcon from "@/shared/assets/icon/logo.png";
import Image from "next/image";
import Link from "next/link";
import Style from "./header.module.css";


function Header() {
  return (
    <header className={Style.header}>
      <Link href={"pages/home"}>
        <Image src={LogoIcon} alt="Logo" width={30} />
      </Link>
      <Link href={"pages/home"} className="un">
        <h2>
          Cal'vani
        </h2>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header