import { Children } from "react"
import style from "./Select.module.css"
export default function Select({ changeLimit, children, ...props }) {
  return(
  <select className={style.selector} onChange={(event) => changeLimit(event.target.value)}>
    {children}
  </select>
  )
}
