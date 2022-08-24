import cssfoot from "./Footer.module.css"

const Footer=()=>{
return (
    <div className={cssfoot.footer}>
  
      <div className={cssfoot.footbox1}>

        <div className={cssfoot.divfoot1}>
       
    <div  className={cssfoot.keyseries}>
        <h3>Key Series</h3>
       </div>
       <div  className={cssfoot.tea}>
        <p>Zimbabwe v India</p>
        <p>Asia Cup QLF</p>
        <p>Asia Cup</p>
        <p>England v South Africa</p>
        <p>West Indies v New Zealand</p>
        <p>Australia v Zimbabwe</p>
        <p>The Hundred (M)</p>
        <p>The Hundred (W)</p>
        <p>County Div1</p>
        <p>County Div2</p>
        <p>6IXTY (M)</p>
        <p>6IXTY (W)</p>
        <p>Women's Championship</p>
        <p>World Test Championship</p>
        <p>WORLD Cup Super League</p>
        
       </div>
                

        </div>


        <div className={cssfoot.divfoot2}>
        <div  className={cssfoot.keyseries}>
        <h3>Quick Links</h3>
       </div>
       <div  className={cssfoot.tea}>
        <p>T20 Time Out</p>
        <p>T20 Time Out Hindi</p>
        <p>ICC Rankings</p>
        <p>Fantasy Pick</p>
        <p>Haan Ya Naa</p>
      
       </div>
                

        </div>


        <div className={cssfoot.divfoot3}>
        <div  className={cssfoot.keyseries}>
        <h3>ESPNcricinfo Apps</h3>
       </div>
       <div  className={cssfoot.tea}>
        <p>Android App</p>
        <p>iOS App</p>
         </div>
        </div>


        <div className={cssfoot.divfoot4}>
        <div  className={cssfoot.keyseries}>
        <h3>Follow ESPNcricinfo Apps</h3>
       </div>
       <div  className={cssfoot.tea}>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>YouTube</p>
       </div>
        </div>


        <div className={cssfoot.divfoot5}>
        <div  className={cssfoot.keyseries}>
        <h3>ESPN Sites</h3>
       </div>
       <div  className={cssfoot.tea}>
        <p>The Cricket Monthly</p>
        <p>ESPN</p>
       </div>
        </div>
      </div>

         {/* box-2 */}
      <div className={cssfoot.footbox2}>
        <div className={cssfoot.copyrght1}>
        <p>Terms of Use</p>
            <vr>|</vr>
            <p>Privacy Policy</p>
            <vr>|</vr>
            <p>Interest-Based Ads</p>
            <vr>|</vr>
            <p>Addendum to the Global privacy Policy</p>
            <vr>|</vr>
            <p>Feedback</p>
            <vr>|</vr>
        </div>


        <div className={cssfoot.copyrght2}>
           <p>@ 2022 ESPN Sports Media Ltd.All rights reserved</p>
        </div>
      </div>
    </div>

)
}

export default Footer;