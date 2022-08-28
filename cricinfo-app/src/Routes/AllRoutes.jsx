import { Routes, Route } from "react-router-dom";
import News from "../Pages/News";

import Home from "./Home";


const AllRoutes=()=>{

    return (
        <div>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/News" element={<News/>}/>
  
          </Routes>
        </div>
    )
}

export default AllRoutes