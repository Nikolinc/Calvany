
import FavoritIcon from "@/shared/assets/icon/favorite.svg";
import PersonIcon from "@/shared/assets/icon/person.svg";
import ShopingBasketIcon from "@/shared/assets/icon/shopping_basket.svg";
import Link from 'next/link';
import Search from "../search/search";
import Style from './navbar.module.css';

function Navbar() {
  return (
    <nav className={Style.nav}>
      <Search />
      <Link href={'/'}>
        <PersonIcon />
      </Link>
      <Link href={'/'}>
        <FavoritIcon />
      </Link>
      <Link href={'/'}>
        <ShopingBasketIcon />
      </Link>
    </nav>
  )
}

export default Navbar