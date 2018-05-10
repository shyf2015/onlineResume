import { h,Component,render } from "preact"
import Main from "./containers/Main"
import { initData,initDataBase } from "./init"
import SchoolSelect from "./compoments/utils/SchoolSelect"


//render(<SchoolSelect/>,document.getElementById("app"))
render(<Main/>,document.getElementById("app"))
setTimeout(initData,100)