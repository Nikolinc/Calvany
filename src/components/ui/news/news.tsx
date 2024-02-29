'use client'
import { useRef } from 'react';
import Button from '../button/button';
import Style from './news.module.css';

function News() {

  const newsRef = useRef(null);

  return (
    <div ref={newsRef} className={Style.NewsContainer}>
      <div className={Style.LeftNews}>
        <header>
          <h2 style={{ fontSize: "36px" }}>Exciting</h2><b />
          <h1 style={{ fontSize: "46px" }}>Launches</h1>
        </header><b />
        <div className={Style.leftNewsFrom}><p style={{ fontSize: "16px" }}>From</p></div>
        <p className={Style.tagsNewsFrom}>Sofa, mattresses, beds & more</p>
        <Button
          className='buttonTypeOne'
          onClick={() => console.log('click')}>
          Click Here to Shop now
        </Button>
      </div>
      <div className={Style.RightNews}>
      </div>
    </div>
  )
}

export default News
