import classes from "./Footer.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <a href="https://facebook.com" id="contact-facebook">
            <AccountCircleIcon />
          </a>
        </li>
        <li>
          <a href="mailto:armin.telegdigmail.com" target="_blank" rel="noreferrer noopener">
            <EmailIcon />
          </a>
        </li>
        <li>
          <a href="tel:+36309334016" id="contact-phone">
            <CallIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
