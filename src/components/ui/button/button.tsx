import React from "react"
import Style from './button.module.css'

interface buttonPros {
  children: React.ReactNode
  className?: string
  onClick?: (...params: any) => void
}

function Button(props: buttonPros) {
  return (
    <button className={`${Style[props.className!]} ${Style.button}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button