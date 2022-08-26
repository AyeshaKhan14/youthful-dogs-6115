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
        <div className={styleNews.News}>

            <div className={styleNews.Newsbox1}>
                <h1>Latest News</h1>
            {data.map((el)=> (
          <div className={styleNews.gridboxcont} key={el.id}>

            <div className={styleNews.newimage} >
            <img style={{width:"300px", height:"150px"}} src={el.avatar} alt={el.avatar}/>
           </div>
            <div className={styleNews.namedescrpt}>
            <h1>{el.name}</h1>
            <div  className={styleNews.newpara}>
             <p>{el.desc}</p>
           </div>
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