import styleshot from "./shot.module.css"


const FirstPage=()=>{
return (
    <div>
        {/* <div>
            <img width="100%" height="170px" src="https://i.imgur.com/e5yltKx.jpg"/>
        </div> */}
        <div className={styleshot.headerMainSec}>
            <div className={styleshot.btn}>
                <button>Matches(8)</button>
                <button>Women's Hundred(1)</button>
                <button>Asia Cup QlF(2)</button>
                <button>6IXTY(W)(3)</button>
                <button>Men's Hundred(1)</button>
            </div>
            <div className={styleshot.headermaininner}>
                <div id="card1" className={styleshot.card}>
                    <div className={styleshot.cardInner}>
                        <div className={styleshot.hfive}>
                            <h5  id="type">RESULT</h5>
                        </div>
                        <div  className={styleshot.hfive2}>
                            <h5  id="vs">
                                <span>T20 .</span> Mumbai Indians vs Sunrisers
                            </h5>
                        </div>
                        <div className={styleshot.iplTeamName}>
                            <img className={styleshot.iplLogo} src="https://cricinfo.vercel.app/image/ipl_team_logo/mum.png" alt=""/>
                            <h5 id="teamf">Mumbai</h5>
                        </div>
                        <div className={styleshot.iplTeamName}>
                            <img className={styleshot.iplLogo} src="https://cricinfo.vercel.app/image/ipl_team_logo/sun.png" alt=""/>
                            <h5 id="teams">Sunrisers</h5>
                        </div>
                        <div className={styleshot.parafont}>
                            <p>
                                Fire chose to bat
                            </p>
                        </div>
                        <div className={styleshot.lastdiv}>
                            <h5 id="teams">Mumbai Indians won the
                                match</h5>
                        </div>
                    </div>
                </div>

                <div id="vr1" className={styleshot.verticalLine}></div>
                <div id="card2" className={styleshot.card}>
                    <div id="cardInner"  className={styleshot.cardInner}>
                        <div  className={styleshot.hfive}>
                            <h5  id="type1">RESULT</h5>
                        </div>
                        <div  className={styleshot.hfive2}>
                            <h5  id="vs">
                                <span>T20 .</span> RCB vs KKR
                            </h5>
                        </div>
                        <div className={styleshot.iplTeamName}>
                            <img className={styleshot.iplLogo} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png" alt=""/>
                            <h5  id="teamf1">SGP</h5>
                        </div>
                        <div className={styleshot.iplTeamName}>
                            <img className={styleshot.iplLogo} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313158.logo.png" alt=""/>
                            <h5 >KUW</h5>
                        </div>
                        <div className={styleshot.parafont}>
                            <p style={{marginLeft:"-10px"}}>
                            Kuwait won by 6 wickets (with 73 balls remaining)
                            </p>
                        </div>
                        <div className={styleshot.lastdiv}>
                            <h5  id="teams1">Schedule    Table</h5>
                        </div>
                    </div>
                </div>
                <div id="vr2" className={styleshot.verticalLine}></div>
                <div id="card3" className={styleshot.card}>
                    <div className={styleshot.cardInner}>
                        <div  className={styleshot.hfive}>
                            <h5 id="type2">RESULT</h5>
                        </div>
                        <div  className={styleshot.hfive2}>
                            <h5 id="vs">
                                <span>T20 .</span> Delhi Capitals vs Punjab Kings
                            </h5>
                        </div>
                        <div className={styleshot.iplTeamName}>
                            <img className={styleshot.iplLogo} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/156800/156800.png" alt=""/>
                            <h5 id="teamf2">IRE-W</h5>
                        </div>
                        <div className={styleshot.iplTeamName}>
                            <img className={styleshot.iplLogo} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313136.logo.png" alt=""/>
                            <h5  id="teams2">NL-W</h5>
                        </div>
                        <div className={styleshot.parafont}>
                            <p style={{marginLeft:"-110px"}}>
                            Ire Women won by 211 runs
                            </p>
                        </div>
                        <div className={styleshot.lastdiv}>
                            <h5 id="teams1">Schedule</h5>
                        </div>
                    </div>
                </div>

                <div id="vr3" className={styleshot.verticalLine}></div>

                <div id="card4" className={styleshot.card}>
                    <div className={styleshot.cardInner}>
                        <div  className={styleshot.hfive}>
                            <h5  id="type3">LIVE</h5>
                        </div>
                        <div  className={styleshot.hfive2}>
                            <h5 >
                                <span>T20 .</span> CSK vs Punjab RR
                            </h5>
                        </div>
                        <div className={styleshot.iplTeamName}>
                            <img className={styleshot.iplLogo} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/325900/325974.png" alt=""/>
                            <h5 id="teamf3">BR-W</h5>
                        </div>
                        <div className={styleshot.iplTeamName}>
                            <img className={styleshot.iplLogo} src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313485.logo.png" alt=""/>
                            <h5  id="teams3">TKR-W</h5>
                        </div>
                        <div className={styleshot.parafont}>
                            <p style={{marginLeft:"-40px"}}>
                            Trinbago WMN need 78 runs in 33 balls.
                            </p>
                        </div>
                        <div className={styleshot.lastdiv}>
                            <h5>Match yet to begin</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
)
}

export default FirstPage;