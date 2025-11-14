import "./footer.css";
import whiteLogo from "../../assets/ehomequote-white-logo.png";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div id="grey-container-footer">
          <div id="footer-information">
            <img src={whiteLogo} width={120} className="logo-white-e" />
            <h3>Information</h3>
            <p>
              eHome Quote is your go-to website for verified contractors in your
              area. With unbeatable pricing and best quality, find contractors
              near you.
            </p>
          </div>
          <div id="footer-nav">
            <h3>Navigation </h3>
            <div id="nav-menu-footer">
              <div>
                <a href="https://ehomequote.co/" className="underline-text"  >
                  <span>{">"}</span> Home
                </a>
              </div>
              <div>
                <a href="/privacyPolicy" className="underline-text"  >
                  <span>{">"}</span> Do Not Sell
                </a>
              </div>
              <div>
                <a href="/privacyPolicy" className="underline-text"  >
                  <span>{">"}</span> Privacy policy
                </a>
              </div>
              <div>
                <a href="/privacyPolicy" className="underline-text"  >
                  <span>{">"}</span> Terms Of Use
                </a>
              </div>
              <div>
                <a
                  style={{ cursor: "pointer",color:'#FFFFFF' }}
                  data-toggle="modal"
                  data-target="#exampleModalCalifornia"
                  className="underline-text"
                  href="/privacyPolicy"
                >
                  <span>{">"}</span> California Notice
                </a>
              </div>
            </div>
          </div>
          <div id="footer-contact">
            <h3>Contact Us</h3>
            <div id="nav-menu-footer">
              <div>
                <a className="ico-text">
                  <span>
                    <EmailIcon color="#FFFFFF" />
                  </span>
                  info@ehomequote.co
                </a>
              </div>
              <div className="icons-social">
                <a
                  href="https://www.instagram.com/ehomequote2/"
                  target="_blank"
                >
                  <InstagramIcon color="#FFFFFF" />
                </a>
                <a
                  href="https://www.facebook.com/ehomequote.co"
                  target="_blank"
                >
                  <FacebookIcon color="#FFFFFF" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="end-p">All rights Reserved - eHome quote</p>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5R8VWD3"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      </footer>
    </>
  );
};

export default Footer;
