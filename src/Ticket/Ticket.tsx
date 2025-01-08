import { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { format, getHours } from "date-fns";
import logo from "../assets/logo.png";
import icon_1 from "../assets/icon-1.png";
import icon_2 from "../assets/icon-2.png";

function Ticket() {
  const serial = useMemo(() => {
    const min = 312312312;
    const max = 987654321;

    return Math.floor(Math.random() * (max - min) + min);
  }, []);

  const dateShort = useMemo(() => format(new Date(), "dd.LL"), []);
  const dateLong = useMemo(() => format(new Date(), "dd.LL.yyyy"), []);

  const hour = useMemo(() => getHours(new Date()), []);
  const percent = ((hour - 7) / 17) * 100; // start 7.00 - end 24.00; 17 === 100%;

  return (
    <S.wrapper>
      <S.container>
        <S.close>x</S.close>
        <S.title>Денний проїзний (1 день)</S.title>
        
        <S.imgWrapper>
          <img src={logo} alt="" />
        </S.imgWrapper>
        <S.header>
          <div>трамвай, тролейбус</div>
          <div>Дніпро</div>
          <div>
            Серія <b>{serial}</b>
          </div>
        </S.header>

        <div>
          <S.animation>
            <S.iconRed>
              <img src={icon_1} alt="" />
            </S.iconRed>
            <S.iconBlue>
              <img src={icon_2} alt="" />
            </S.iconBlue>

            <S.iconRed_2>
              <img src={icon_1} alt="" />
            </S.iconRed_2>
            <S.iconBlue_2>
              <img src={icon_2} alt="" />
            </S.iconBlue_2>
          </S.animation>

          <S.date $percent={percent}>
            <h2>{dateShort}</h2>

            <Time />
          </S.date>
        </div>

        <div>
          <b>25.0 UAH</b>
        </div>

        <S.footer>
          <S.term>Строк дії</S.term>
          <div>
            {dateLong} - {dateLong}
          </div>
          <div>До закінчення строку дії залишилось «0» днів</div>
        </S.footer>
      </S.container>
    </S.wrapper>
  );
}

export default Ticket;

function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const t = format(new Date(), "HH:mm:ss");
      setTime(() => t);
    }, 1000);
  }, []);

  return <S.currentTime>{time}</S.currentTime>;
}
