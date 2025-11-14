import "./logos.css";
const Logos = ({ data }) => {
  return (
    <div className="logo-container " >
      <div className="heading" >Our Top Partners</div>
      <div className="sub-heading" >Our valuable assets for quality services</div>
      <div className="logo-manager">
        {data.map((item, index) => {
          return <img src={item.img} className="logos-image" width={230} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Logos;
