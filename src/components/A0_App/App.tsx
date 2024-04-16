import React from 'react';
import style from "./App.module.scss";
import {FirstScreen} from "../B0_FirstScreen/FirstScreen";
import {BuyAlienPepe} from "../_common/BuyAlienPepe/BuyAlienPepe";
import {SecondScreen} from "../B1_SecondScreen/SecondScreen";
import {TryPepeBotNow} from "../_common/TryPepeBotNow/TryPepeBotNow";
import {ThirdScreen} from "../B2_ThirdScreen/ThirdScreen";
import {ForthScreen} from "../B3_ForthScreen/ForthScreen";

export const App = () => {
  return (
      <div className={style.app}>

          <BuyAlienPepe/>
          <FirstScreen/>

          <div className={style.address}>
              <div className={style.address_inner}>
                  <p>
                      ca: 0x0E4A9B239D6e802850078CA96cD46Efb5Ab0885d
                  </p>
              </div>
          </div>

          <BuyAlienPepe/>
          <SecondScreen/>
          <TryPepeBotNow/>
          <ThirdScreen/>
          <BuyAlienPepe/>
          <ForthScreen/>
          <BuyAlienPepe/>

          <div className={style.address}>
              <div className={style.address_inner}>
                  <p>email</p>
                  <p>
                      ca: 0x0E4A9B239D6e802850078CA96cD46Efb5Ab0885d
                  </p>

              </div>
          </div>

      </div>
  );
}

