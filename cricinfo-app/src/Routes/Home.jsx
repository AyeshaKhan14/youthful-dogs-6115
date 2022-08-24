import Stylehome from "./Home.module.css"
import Footer from "../Pages/Footer";

const Home=()=>{
    return (
        <div>
          <div className={Stylehome.home} >
            <img src="https://tpc.googlesyndication.com/simgad/931568015193886157"/>
          </div>

        <Footer/>
        </div>
    )
}

export default Home;