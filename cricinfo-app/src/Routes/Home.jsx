import Stylehome from "./Home.module.css"
import Footer from "../Pages/Footer";
import CricInfo from "../Pages/Cric";
import SideBar from "../Pages/Sidebar";
import ThirdBar from "../Pages/ThirdSidebar";


const Home=()=>{
    return (
        <div>
          <div className={Stylehome.home} >
            <img src="https://tpc.googlesyndication.com/simgad/931568015193886157"/>
          </div>

         {/* main containrer */}

         <div className={Stylehome.mainContainer}>

          <div className={Stylehome.khanak1}>
            <SideBar/>
          </div>

          <div className={Stylehome.khanak2}>
            <CricInfo/></div>

          <div className={Stylehome.khanak3}>
            <ThirdBar/>
          </div>
         </div>
     
     
     
        <Footer/>
        </div>
    )
}

export default Home;