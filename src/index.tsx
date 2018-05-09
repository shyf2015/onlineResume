import { h,Component,render } from "preact"
import Main from "./containers/Main"
import { initData,initDataBase } from "./init"

render(<Main/>,document.getElementById("app"))
setTimeout(initData,100)