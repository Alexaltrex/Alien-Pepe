import style from "./SecondScreen.module.scss"
import frog_head from "../../assets/gif/frog_head.gif";
import {cards, ICard} from "./cards";
import {FC} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

export const SecondScreen = () => {
    return (
        <div className={style.secondScreen}>
            <img src={frog_head} alt="" className={style.frog_head}/>

            <Swiper className={style.cardsMobile}
                    slidesPerView={1}
                    centeredSlides={true}
            >
                {
                    cards.map((card, key) => (
                        <SwiperSlide key={key}>
                            <Card key={key} {...card}/>
                        </SwiperSlide>

                    ))
                }
            </Swiper>

            <p className={style.helpText}>
                SWIPE TO READ MORE
            </p>


            <div className={style.cardsDesktop}>
                <div className={style.cardsDesktop_inner}>
                    {
                        cards.map((card, key) => (
                            <Card key={key} {...card}/>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

//========== CARD ==========//
export const Card: FC<ICard> = ({label, text}) => {
    return (
        <div className={style.card}>
            <div className={style.blur}/>

            <div className={style.content}>
                <p>{label}</p>
                <p>{text}</p>
            </div>

        </div>
    )
}