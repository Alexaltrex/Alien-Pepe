import style from "./ThirdScreen.module.scss"
import q1 from "../../assets/png/third_screen/Q1.png";
import q2 from "../../assets/png/third_screen/Q2.png";
import q3 from "../../assets/png/third_screen/Q3.png";
import q4 from "../../assets/png/third_screen/Q4.png";
import desktopContent from "../../assets/png/third_screen/desktop.png";

const items = [
    {
        src: q1,
        texts: [
            {
                text: "Trading Bot Development on the Solana blockchain.",
                color: "#00ffc2"
            },
            {
                text: "We launch our social media and community channels to gather supporters.",
                color: "#faff00"
            },
        ]
    },
    {
        src: q2,
        texts: [
            {
                text: "$ALIENPEPE Presale  begins",
                color: "#42ff00"
            },
            {
                text: "A big marketing  begins to spread the word about $ALIENPEPE.",
                color: "#bd9dff"
            },
        ]
    },
    {
        src: q3,
        texts: [
            {
                text: "presale ends",
                color: "#ff4d77"
            },
            {
                text: "$ALIENPEPE  goes on DEX",
                color: "#f90"
            },
            {
                text: "CG & CMC LISTINGS",
                color: "#cbcbcb"
            },
        ]
    },
    {
        src: q4,
        texts: [
            {
                text: " Add new features to the Telegram bot",
                color: "#d60000"
            },
            {
                text: "marketing and community efforts go worldwide",
                color: "#00d689"
            },

        ]
    },
]


export const ThirdScreen = () => {
    return (
        <div className={style.thirdScreen}>
            <div className={style.inner}>

                <div className={style.mobileContent}>
                    <div className={style.top}>
                        {
                            [items[0], items[1]].map(({src, texts}, key) => (
                                <div key={key}
                                     className={style.item}
                                >
                                    <img src={src} alt="" className={style.q}/>
                                    <div className={style.texts}>
                                        {
                                            texts.map(({text, color}, key) => (
                                                <p key={key}
                                                   style={{color}}
                                                >
                                                    {text}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    <div className={style.bottom}>
                        {
                            [items[2], items[3]].map(({src, texts}, key) => (
                                <div key={key}
                                     className={style.item}
                                >
                                    <img src={src} alt="" className={style.q}/>
                                    <div className={style.texts}>
                                        {
                                            texts.map(({text, color}, key) => (
                                                <p key={key}
                                                   style={{color}}
                                                >
                                                    {text}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </div>

                <img src={desktopContent} alt="" className={style.desktopContent}/>

            </div>
        </div>
    )
}
