import {NavLink} from "react-router-dom"
import FirstPage from "../Pages/shot";
import Style from "./Nav.module.css"
import {FaBell, FaMoon ,FaSearch} from "react-icons/fa"
import {GrApps} from "react-icons/gr"
import {MdTranslate} from "react-icons/md"

const Navbar=()=>{
  return (

    <div> 
        <FirstPage/>
     <div className={Style.nav}>
         {/* div-1 */}
       <div>
       <NavLink to="/"> 
           <img color="white" width="138px" height="20px" style={{marginLeft:"-70px"}} src="https://wassets.hscicdn.com/static/images/logo.png"/>
       </NavLink>
       </div>
      
      {/* diiv-2 */}
       <div className={Style.navLi}>
       <NavLink to=""><h4>Live Scores</h4></NavLink>
       <NavLink to=""><h4>Series</h4></NavLink>
       <NavLink  to=""><h4>Teams</h4></NavLink>
       <NavLink to=""><h4>News</h4></NavLink>
       <NavLink to=""><h4>Features</h4></NavLink>
       <NavLink to=""><h4>Vedios</h4></NavLink>
       <NavLink to=""><h4>Stats</h4></NavLink>
       </div>
     
     {/* div-3 */}
     <div className={Style.fontreact}>
       <NavLink to=""><h4>Fantasy</h4></NavLink>
       <NavLink to=""><h4>EditionIN</h4></NavLink>
       <NavLink  to=""><FaMoon className={Style.moon} /></NavLink>
       <NavLink to=""><FaBell className={Style.notification}/></NavLink>
       <NavLink to=""><h4><MdTranslate className={Style.translate}/></h4></NavLink>
       <NavLink to=""><GrApps className={Style.appss}/></NavLink>
       <NavLink to=""><FaSearch className={Style.fasearch} /></NavLink>
       </div>





   </div>
    </div>
  
  )
}

export default Navbar;