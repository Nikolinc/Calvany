import { useTranslations } from "next-intl";
import React from "react";
import Style from './button.module.css';

interface buttonPros {
  children?: React.ReactNode
  className?: string
  onClick?: (...params: any) => void,
  pathLocalisation?: string;
  text?: string
}

function Button(props: buttonPros) {
  const t = useTranslations();
  return (
    <button className={`${Style[props.className!]} ${Style.button}`} onClick={props.onClick}>
      {props.children ? (<>{props.children}</>)
        : (<>{t(`${props.pathLocalisation}.${props.text}`)}</>)
      }
    </button>
  )
}

export default Button