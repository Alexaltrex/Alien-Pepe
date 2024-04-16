import {RunningStringItem} from "../RunningStringItem/RunningStringItem";
import React from "react";
import style from "./TryPepeBotNow.module.scss";

export const TryPepeBotNow = () => {
    return (
        <div className={style.tryPepeBotNow}>
            <RunningStringItem forward={false}
                               duration={90}
                               item={
                                   <div className={style.item}>
                                       <p>
                                           {
                                               [
                                                   {
                                                       label: "TRY",
                                                       color: "#00FF57",
                                                   },
                                                   {
                                                       label: " PEPE",
                                                       color: "#f00",
                                                   },
                                                   {
                                                       label: " BOT",
                                                       color: "#0085ff",
                                                   },
                                                   {
                                                       label: " NOW",
                                                       color: "#faff00",
                                                   },

                                               ].map(({color, label}, key) => (
                                                   <span key={key}
                                                         style={{color}}
                                                   >
                                                   {label}
                                               </span>
                                               ))
                                           }
                                       </p>

                                   </div>
                               }
            />
        </div>
    )
}