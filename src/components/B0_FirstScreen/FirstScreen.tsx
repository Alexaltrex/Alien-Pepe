import style from "./FirstScreen.module.scss";
import title from "../../assets/png/first screen/title.png";
import {useEffect, useState} from "react";
import {convertToTwoDigit, getDays, getHours, getMins, getSecs} from "../../helpers/helpers";
import icon1 from "../../assets/png/first screen/icon1.png";
import icon2 from "../../assets/png/first screen/icon2.png";

export const FirstScreen = () => {

    const dateEnd = new Date(2024, 3, 24, 5, 55, 30); // дата окончания

    const [timeIsOver, setTimeIsOver] = useState(false);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const time = new Date(dateEnd.getTime() - new Date().getTime()).getTime();
        if (time > 0 && !timeIsOver) {
            setTime(time);
            setStart(true);
        }
    }, []);

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (start) {
                if (time <= 60000) {
                    setTimeIsOver(true);
                    clearTimeout(timeId);
                } else {
                    setTime(time => time - 1000);
                }
            }
        }, 1000);
        return () => {
            clearTimeout(timeId);
        }
    }, [time]);

    return (
        <div className={style.firstScreen}>
            <div className={style.inner}>

                <h1 className={style.title}>
                    <img src={title} alt="$ALIENPEPE"/>
                </h1>

                <p className={style.description}>
                    F*ck OG pepe AlienPepe is already on the moon!!
                </p>

                <div className={style.card}>
                    <p className={style.cardTitle}>
                        presale live in
                    </p>

                    <div className={style.timerWrapper}>
                        <p className={style.time}>
                            <span>{convertToTwoDigit(getDays(time))}</span>
                            <span> : </span>
                            <span>{convertToTwoDigit(getHours(time))}</span>
                            <span> : </span>
                            <span>{convertToTwoDigit(getMins(time))}</span>
                            <span> : </span>
                            <span>{convertToTwoDigit(getSecs(time))}</span>
                        </p>
                        <div className={style.labels}>
                            <p>days</p>
                            <p>hours</p>
                            <p>minutes</p>
                            <p>seconds</p>
                        </div>

                    </div>

                    <p className={style.sol}>
                        1 Sol=398,455 alienpepe
                    </p>

                    <div className={style.scale}>
                        <div className={style.scaleInner}/>
                    </div>

                    <div className={style.colorTexts}>
                        <p>Sol to be raised:</p>
                        <p>$alienpepe</p>
                        <p>1000 SOL</p>
                    </div>

                    <div className={style.divider}/>

                    <div className={style.inputs}>
                        <div className={style.inputWrapper}>
                            <img src={icon1} alt=""/>
                            <input type="number"/>
                        </div>
                        <div className={style.inputWrapper}>
                            <img src={icon2} alt=""/>
                            <input type="number"/>
                        </div>
                    </div>

                    <button className={style.connectBtn}>
                        <span>connect wallet</span>
                    </button>

                    <p className={style.end}>
                        $alienpepe will be airdropped after presale ends
                    </p>

                </div>
            </div>
        </div>
    )
}