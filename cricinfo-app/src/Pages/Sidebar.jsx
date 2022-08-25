import SideStyle from "./Sidebar.module.css"
import {BiRightArrow} from "react-icons/bi"


const SideBar=()=>{
    return (
        <div className={SideStyle.sidebar}>

<div  className={SideStyle.stdBox1}>
           <div className={SideStyle.askLogo}>
            <img src="https://www.espncricinfo.com/ask/images/askcriclogo.png"/>
            <div className={SideStyle.askLogospan}>
            <span>What is Joe Root's batting average against Kagiso Rabada in Tests?</span>

            </div>
            <div className={SideStyle.buttnask}>
                <button>Ask a question</button>
            </div>
           </div>
               
  </div>
      

            <div  className={SideStyle.stdBox1}>
           
     <div  className={SideStyle.key1}>
        <h3>Key Series</h3>
       </div>
       <div  className={SideStyle.coffee}>
        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Zimbabwe v India</span>
        </div>
       
        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Asia Cup QLF</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Asia Cup</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>England v South Africa</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>West Indies v New Zealand</span>
        </div>
     
        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Australia v Zimbabwe</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>The Hundred (M)</span>
        </div>
        
        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>The Hundred (W)</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>County Div1</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>County Div2</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>6IXTY (M)</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>6IXTY (W)</span>
        </div>

        
        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Women's Championship</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>World Test Championship</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>WORLD Cup Super League</span>
        </div>
       </div>
</div>
        

   <div>
   <div  className={SideStyle.stdBox1}>
       <div  className={SideStyle.key1}>
        <h3>Quick Links</h3>
       </div>
       <div  className={SideStyle.coffee}>

       <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>T20 Time Out</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>T20 Time Out Hindi</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>ICC Rankings</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Fantasy Pick</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Haan Ya Naa</span>
        </div>
      
       </div>
      </div>
</div>

<div  className={SideStyle.stdBox1}>
           
         <div  className={SideStyle.key1}>
        <h3>Follow ESPNcricinfo Apps</h3>
       </div>
       <div  className={SideStyle.coffee}>

       <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Instagram</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Twitter</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>Facebook</span>
        </div>

        <div className={SideStyle.mobile}>
        <BiRightArrow className={SideStyle.arrowfont} /> <span>YouTube</span>
        </div>
      
       </div>        
</div>

<div  className={SideStyle.stdBox1}>
           
           <div  className={SideStyle.key1}>
          <h3>ESPNcricinfo Apps</h3>
         </div>
         <div  className={SideStyle.coffee}>
  
         <div className={SideStyle.mobile}>
          <BiRightArrow className={SideStyle.arrowfont} /> <span>Android App</span>
          </div>
  
          <div className={SideStyle.mobile}>
          <BiRightArrow className={SideStyle.arrowfont} /> <span>iOS App</span>
          </div>
        </div>        
  </div>



           
  <div  className={SideStyle.stdBox1}>
           
           <div  className={SideStyle.key1}>
          <h3>ESPN Sites</h3>
         </div>
         <div  className={SideStyle.coffee}>
  
         <div className={SideStyle.mobile}>
          <BiRightArrow className={SideStyle.arrowfont} /> <span>The Cricket Monthly</span>
          </div>
  
          <div className={SideStyle.mobile}>
          <BiRightArrow className={SideStyle.arrowfont} /> <span>ESPN</span>
          </div>
        </div>        
  </div>
        </div>
    )

}

export default SideBar;