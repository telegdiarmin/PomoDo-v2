import { Fragment, useEffect, useRef } from "react";
import classes from "./About.module.css";
import AboutArticle from "./AboutArticle";
import Footer from "./Footer";

const About = () => {
  const aboutRef = useRef();

  useEffect(() => {
    aboutRef.current.scrollIntoView();
  }, []);

  return (
    <Fragment>
      <section className={classes.about} ref={aboutRef}>
        <AboutArticle>
          <h2>Mi az a pomodoro?</h2>
          <div></div>
          <p>
            A pomodoro egy időmenedzsment-módszer, amit egy porgramozó,
            Francesco Cirillo talált ki az 1980-as évek végén. Az alapötlete az,
            hogy az elvégzendő feladatokat egy időzítő segítségével kisebb
            egységekre - szakaszokra - bontsa, ezzel növelve a hatékonyságot. Az
            egyes szakaszok hossza hagyományosan 25 perc, melyeket rövid
            szünetek követnek. A szakaszokat Cirillo a paradicsom olasz
            kifejezése alapján
            <span className={classes.highlight}>pomodoronak</span> nevezte el,
            ezzel utalva arra a paradicsom alakú konyhai időzítőre, melyet
            egyetemistaként használt. Ha érdekel, olvass róla többet a
            <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
              &nbsp; Wikipédián!
            </a>
          </p>
        </AboutArticle>
        <AboutArticle>
          <h2>Mi ez az app?</h2>
          <div></div>
          <p>
            Ez az egyszerű kis alkalmazás segíthet neked a feladataidra
            koncentrálni. Beállíthatsz vele egy időzítőt, és amíg le nem jár,
            csak a feladatra koncentrálsz. Ha lejárt az időzítő, tarts egy pár
            perces szünetet, aztán ha kipihented magad, folytathatod a munkádat!
            A beállítások között külön-külön beállíthatod az időzítő, a rövid
            szünet és egy hosszabb pihenő időtartamát, valamint a riasztás csengőhangját is.
          </p>
        </AboutArticle>
        <AboutArticle>
          <h2>Ki csinálja ezt az appot?</h2>
          <div></div>
          <p>
            {" "}
            Az alkalmazást tanulási céllal
            <span className={classes.highlight}>Telegdi Ármin</span> fejleszti.
            Vedd fel vele a kapcsolatot a
            <a href="https://github.com/telegdiarmin">&nbsp;GitHub-on!</a>{" "}
            Minden jog fenntartva!
          </p>
          <p>
            Készült sok &#128151;-tel{" "}
            <span className={classes.highlight}>Yuya Uzu</span> nagyszerű
            alkalmazásából, a
            <a href="https://pomofocus.io">&nbsp;Pomofocus.io</a>-ból ihletet
            merítve.
          </p>
        </AboutArticle>
      </section>
      <Footer />
    </Fragment>
  );
};

export default About;
