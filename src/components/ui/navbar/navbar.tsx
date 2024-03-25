
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
      <Link href={'/ru/personal'}>
        <PersonIcon className={Style.person} />
      </Link>
      <Link href={'/ru/favorite'}>
        <FavoritIcon className={Style.favorite} />
      </Link>
      <Link href={'/ru/shopping_basket'}>
        <ShopingBasketIcon className={Style.shoppingBasket} />
      </Link>
    </nav>
  )
}

export default Navbar
