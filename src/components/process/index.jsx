import { colors } from "../../constants/Colors";
import "./process.css";

const Process = ({ data }) => {
  return (
    <div className="Process">
      <h2 className="HTW">Our <span style={{ color: colors.primaryGreen }} >Process</span></h2>
      <h2 className="HTW-subheading">Step by step process of how Ehome quote works</h2>
      <div className="Content-Manager">
        {data.map((item, index) => {
          const { img, heading, subHeading, textImage } = item;
          return (
            <div key={index} className="iconAndText">
              <img src={img} className="main-img"  />
              <div className="Process-Heading-Container">
              <div className="Process-img-heading-div">
  <div className="Process-img-container">
    <img src={textImage} width={40} height={40} alt="icon" />
  </div>
  <div className="Process-text-container">
    <h3 className="Process-Heading">{heading}</h3>
  </div>
</div>
                <div className="subheading-div"><p className="Process-Subheading">{subHeading}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Process;
