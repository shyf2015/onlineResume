import { h,Component,render } from "preact"
import Main from "./compoments/Main"
import { initData,initDataBase } from "./init"

render(<Main/>,document.getElementById("app"))
setTimeout(initData,100)