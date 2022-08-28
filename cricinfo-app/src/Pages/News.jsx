import Footer from "./Footer";
import styleNews from "./News.module.css"
import ThirdBar from "./ThirdSidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const News=()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
          axios.get("https://akcart.herokuapp.com/dataCri").then((res)=>{
             console.log(res)
              setData(res.data)
              setLoading(false)
          }).catch((err)=>{
            console.log("err:",err)
          })
        },[])




    return(
        <>
         <div className={styleNews.Newshome} >
            <img src="https://tpc.googlesyndication.com/simgad/16233217720762028300?"/>
          </div>
       
          <div  className={styleNews.NewshomePageNews} >
           
            <div className={styleNews.Newsbox1}>
             {data.map((el)=>(
              <div className={styleNews.displayFlex}>
               <img src={el.avatar}/>
                
                 <div className={styleNews.headingpara}>
                  <h1>{el.name}</h1>
                  <p>{el.desc}</p>
                 </div>
                </div>
             
             ))}
            </div>
              
          <div className={styleNews.Newsbox2}>
                <ThirdBar/>
            </div>
          </div>
          
     
       



      

        <div>
            <Footer/>
        </div>
        </>
    )
}
export default News;