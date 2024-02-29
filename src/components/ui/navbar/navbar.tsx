
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
      <Link href={'/personal'}>
        <PersonIcon className={Style.person} />
      </Link>
      <Link href={'/favorite'}>
        <FavoritIcon className={Style.favorite} />
      </Link>
      <Link href={'/shopping_basket'}>
        <ShopingBasketIcon className={Style.shoppingBasket} />
      </Link>
    </nav>
  )
}

export default Navbar
