import { Children } from "react"
import style from "./Select.module.css"
export default function Select({ changeLimit, values, ...props }) {
  return(
  <select className={style.selector} onChange={(event) => changeLimit(event.target.value)}>
    {values.map((val) => <option key={val} value={val}>{val}</option>)}
  </select>
  )
}
