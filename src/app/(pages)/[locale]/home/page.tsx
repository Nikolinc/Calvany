import Filter from "@/components/ui/filter/filter";
import { Slider } from "@/components/ui/slider/slider";
import Style from './page.module.css';


function Home() {
  return (
    <main className={Style.pageContaimer}>
      <Filter />
      <Slider />
    </main>
  )
}

export default Home
