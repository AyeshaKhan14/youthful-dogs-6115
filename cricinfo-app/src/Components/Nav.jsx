import {NavLink} from "react-router-dom"
import FirstPage from "../Pages/shot";
import Style from "./Nav.module.css"
import {FaBell, FaMoon ,FaSearch} from "react-icons/fa"
import {GrApps} from "react-icons/gr"
import {MdTranslate} from "react-icons/md"
import {AiFillAppstore} from "react-icons/ai"
import {useColorMode , Button} from "@chakra-ui/react"

const Navbar=()=>{
const {colorMode, toggleColorMode}= useColorMode()

  return (

    <div> 
        <FirstPage/>
        <div >
     <div className={Style.nav}>
         {/* div-1 */}
       <div>
       <NavLink to="/"> 
           <img color="white" style={{marginLeft:"-30px",  height:"20px",  width:"200px"}} src="https://wassets.hscicdn.com/static/images/logo.png"/>
       </NavLink>
       </div>
      
      {/* diiv-2 */}
       <div className={Style.navLi}>
       <NavLink to=""><h4>Live Scores</h4></NavLink>
       <NavLink to=""><h4>Series</h4></NavLink>
       <NavLink  to=""><h4>Teams</h4></NavLink>
       <NavLink to="/News"><h4>News</h4></NavLink>
       <NavLink to=""><h4>Features</h4></NavLink>
       <NavLink to=""><h4>Vedios</h4></NavLink>
       <NavLink to=""><h4>Stats</h4></NavLink>
       </div>
     
     {/* div-3 */}
     <div className={Style.fontreact}>
       <NavLink to=""><h4>Fantasy</h4></NavLink>
       <NavLink to=""><h4>EditionIN</h4></NavLink>
       <NavLink  to="">
       <FaMoon onClick={toggleColorMode} className={Style.moon} />
        {/* {colorMode==="light" ? "Dark" : "light"} */}
      </NavLink>


       <NavLink to=""><FaBell className={Style.notification}/></NavLink>
       <NavLink to=""><h4><MdTranslate className={Style.translate}/></h4></NavLink>
       <NavLink to=""><AiFillAppstore className={Style.appss}/></NavLink>
       <NavLink to=""><FaSearch className={Style.fasearch} /></NavLink>
       </div>





   </div>
   </div>
    </div>
  
  )
}

export default Navbar;