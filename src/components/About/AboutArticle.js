import classes from "./AboutArticle.module.css";

const AboutArticle = (props) => {
  return <div className={classes.aboutArticle}>{props.children}</div>;
};

export default AboutArticle;
