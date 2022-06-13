import { Fragment, forwardRef } from "react";
import classes from "./About.module.css";
import AboutArticle from "./AboutArticle";
import Footer from "./Footer";

const About = forwardRef((props, ref) => {

  return (
    <Fragment>
      <section className={classes.about} ref={ref}>
        <AboutArticle>
          <h2>Mi az a pomodoro?</h2>
          <div></div>
          <p>
            A pomodoro egy időmenedzsment-módszer, amit Francesco Cirillo talált
            ki az 1980-as évek végén. Az alapötlete az, hogy az elvégzendő
            feladatokat egy időzítő segítségével kisebb egységekre - szakaszokra
            - bontsa, ezzel növelve a hatékonyságot. Az egyes szakaszok hossza
            hagyományosan 25 perc, melyeket rövid szünetek követnek. A szakaszok
            neve <em>"pomodoro"</em>, a paradicsom olasz kifejezése alapján,
            ezzel utalva arra a paradicsom alakú konyhai időzítőre, melyet
            Cirillo egyetemistaként használt. Olvass róla többet a
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
              &nbsp; Wikipédián!
            </a>
          </p>
        </AboutArticle>
        <AboutArticle>
          <h2>Mi ez az app?</h2>
          <div></div>
          <p>
            Beállíthatsz vele egy időzítőt, amíg csak a munkádra koncentrálsz.
            Ha lejárt az időzítő, ideje tartanod egy pár perces szünetet, aztán
            ha kipihented magad, folytathatod a munkádat!
          </p>
        </AboutArticle>
        <AboutArticle>
          <h2>Ki csinálja ezt az appot?</h2>
          <div></div>
          <p>
            {" "}
            Az alkalmazást tanulási céllal
            <em>&nbsp;Telegdi Ármin</em> fejleszti. Vedd fel vele a kapcsolatot a
            <a href="https://github.com/telegdiarmin">&nbsp;GitHub-on!</a>{" "}
            Minden jog fenntartva!
          </p>
          <p>
            Készült <em>Yuya Uzu</em> szuper alkalmazásából, a
            <a href="https://pomofocus.io">&nbsp;Pomofocus.io</a> ihletet
            merítve. A favicon forrása:{" "}
            <a href="https://www.freepik.com">&nbsp;Freepik.</a>
          </p>
        </AboutArticle>
      </section>
      <Footer/>
    </Fragment>
  );
});

export default About;
