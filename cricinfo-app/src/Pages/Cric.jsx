import { useEffect, useState } from "react";
import axios from "axios";
import cricStyle from "./Cric.module.css"

const CricInfo=()=>{
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

    return (
      
            <div className={cricStyle.crcfive}>
               
           {data.map((el)=> (
          <div className={cricStyle.dataMain} key={el.id}>
            <img style={{width:"100%", height:"350px", borderRadius:"8px"}} src={el.avatar} alt={el.avatar}/>
            <h1>{el.name}</h1>
            <div>
                <p>{el.desc}</p>
            </div>
          </div>
           ))}
     
    
      
        </div>
    )

}
export default CricInfo;