import style from "./ForthScreen.module.scss"
import paper from "../../assets/png/forth_screen/paper.png";
import pepe from "../../assets/gif/frog_sitting.gif";
import browserMobile from "../../assets/png/forth_screen/browser_mobile.png";
import browserDesktop from "../../assets/png/forth_screen/browser.png";

export const ForthScreen = () => {
    return (
        <div className={style.forthScreen}>
            <div className={style.inner}>
                <div className={style.left}>
                    <img src={paper} alt="" className={style.paper}/>
                    <img src={pepe} alt="" className={style.pepe}/>
                </div>
                <div>
                    <img src={browserMobile} alt="" className={style.browserMobile}/>
                </div>

                <img src={browserDesktop} alt="" className={style.browserDesktop}/>


            </div>
        </div>
    )
}