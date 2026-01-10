import MCAfree from "../../assets/MCAfree.png";
import Norton from "../../assets/Norton.png";
import Trust from "../../assets/Trusted.png";
import "./Trusted.css";

const Trusted = () => {
  return (
    <div id="trusted">
      <img src={MCAfree} width={120} height={40}/>
      <img src={Norton} width={120} height={60}/>
      <img src={Trust} width={120} height={40}/>
    </div>
  );
};

export {Trusted};
