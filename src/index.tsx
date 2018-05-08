import { h,Component,render } from "preact"
import Main from "./compoments/Main"
import { initData } from "./actions"

render(<Main/>,document.getElementById("app"))
setTimeout(initData,100)