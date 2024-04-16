import {RunningStringItem} from "../RunningStringItem/RunningStringItem";
import React from "react";
import style from "./BuyAlienPepe.module.scss";

export const BuyAlienPepe = () => {
    return (
        <div className={style.buyAlienPepe}>
            <RunningStringItem forward={false}
                               duration={180}
                               item={
                                   <div className={style.item}>
                                       {
                                           [
                                               "#f00",
                                               "#faff00",
                                               "#0085ff",
                                               "#fa00ff",
                                           ].map((color, key) => (
                                               <p key={key}
                                                  style={{color}}
                                               >
                                                   BUY $ALIENPEPE
                                               </p>
                                           ))
                                       }
                                   </div>
                               }
            />
        </div>
    )
}