import React, { Fragment, useState, useEffect } from "react";
import Benefits from "../../components/benefit";
import GreenPallete from "../../components/GreenPelette";
import Process from "../../components/process";
import { HeroSection } from "../../components/hero";
import NearYou from "../../components/nearYou";
import FAQComponent from "../../components/faq";
import Logos from "../../components/logos";
import Footer from "../../components/footer";
import CenterSlider from "../../components/slider";
import roofing1 from "../../assets/roofing/SAVING.png";
import roofing2 from "../../assets/roofing/Second-img.png";
import roofing3 from "../../assets/roofing/tHIRD-img.png";
import Partners1 from "../../assets/roofing/Partners1.png";
import Partners2 from "../../assets/roofing/Partners2.png";
import Partners3 from "../../assets/roofing/Partners3.png";
import Slider1 from "../../assets/roofing/slider1.png";
import Slider2 from "../../assets/roofing/slider2.png";
import Slider3 from "../../assets/roofing/slider3.png";
import Slider4 from "../../assets/roofing/slider4.png";
import Slider5 from "../../assets/roofing/slider5.png";
import Lindholm from "../../assets/roofing/The-Lindholm-Process.jpg";
import Eagle from "../../assets/roofing/Eagle-Watch-Roofing.jpg";
import BSM from "../../assets/roofing/BSM-Builders.jpg";
import Gmatt from "../../assets/roofing/Gmatt-Builder-Developer-Llc.jpg";

import roofing_benefits from "../../assets/roofing/roofing_benefits.png";
// import roofing_background from "../../assets/roofing/roofing_background_Img.png"
import process1 from "../../assets/one.png";
import process2 from "../../assets/two.png";
import process3 from "../../assets/three.png";
import { getMyLocation } from "../../service/Location";
import Disclaimer from "../../components/disclaimer";
// import { useNavigate } from "react-router-dom";
import { setLocalData } from "../../service/LocalData";
import Modal from "@mui/material/Modal";
// import WarrantyForm from "../../forms/windows";
import WarrantyForm from "../../forms/roofing";
import axios from "axios";

const nearYouData = [
  {
    id: 1,
    name: "The Lindholm Process",
    rating: "",
    logo: Lindholm,
    description:
      "The Lindholm process defines how we work with our valued customers and is paramount to our customer satisfaction. Our process allows us to maintain a level of professionalism with every job were hired for.",
  },
  {
    id: 2,
    name: "Eagle Watch Roofing",
    rating: "",
    logo: Eagle,
    description:
      "We believe that your roof is the most important part of your home. After all, it protects everything underneath it.. That is why we work so hard to out perform our competition.",
  },
  {
    id: 3,
    name: "BSM Builders",
    rating: "",
    logo: BSM,
    description:
      "Whether you need a few shingles repaired, full roof replacement, or even emergency services after a storm, BSM builder's factory trained and certified roofers are here to serve you.",
  },
  {
    id: 4,
    name: "Gmatt Builder Developer Llc",
    rating: "",
    logo: Gmatt,
    description:
      "GMATT BUILDER DEVELOPER LLC. Is a long Bergen County, NJ based construction business that provides homeowners with one-stop shoping for all Home improvement needs, Gmatt Builder Developer Llc will guide you through the lengthy process of scoping the construction proyect, obtaining permits and completing on time and on target.",
  },
];

const faqData = [
  {
    id: 1,
    question:
      "Why Should I Trust a Professional for Roofing Installation or Repair?",
    answer:
      "Hiring an expert ensures proper installation, prevents leaks or structural damage, and increases your roof’s lifespan, saving money over time.",
  },
  {
    id: 2,
    question: "What Qualifications Should I Look for in a Roofing Contractor?",
    answer:
      "Check for certifications, warranties, years of experience, and positive reviews from past customers.",
  },
  {
    id: 3,
    question:
      "What Advantages Do I Get from Hiring a Professional for Roofing Services?",
    answer:
      "Professionals provide quality materials, precise installation, and warranties, ensuring long-term durability and peace of mind.",
  },
  {
    id: 4,
    question: "How Can I Find Trusted Roofing Installers in My Area?",
    answer:
      "Look for recommendations, read reviews online, and use contractor networks or home improvement platforms to connect with verified professionals.",
  },
  {
    id: 5,
    question: "Can I Replace My Old Roof with an Energy-Efficient One?",
    answer:
      "Yes, modern roofing options like cool roofs and solar shingles improve energy efficiency, reduce utility costs, and add value to your home.",
  },
  {
    id: 6,
    question: "How Long Does It Take to Install a New Roof?",
    answer:
      "Roof installations generally take 1-3 days for residential properties, depending on the size and complexity of the project.",
  },
];

const sliderData = [
  {
    id: 1,
    image: Slider1,
  },
  {
    id: 2,
    image: Slider2,
  },
  {
    id: 3,
    image: Slider3,
  },
  {
    id: 4,
    image: Slider4,
  },
  {
    id: 5,
    image: Slider5,
  },
];

const benefitsData = [
  { id: 1, line: "Hassle free price comparison" },
  { id: 2, line: "No Overestimated labor cost" },
  { id: 3, line: "No Price surge during high demand" },
  { id: 4, line: "No Un-neccessary tool cost" },
  { id: 5, line: "No High price material recommendation" },
];

const processData = [
  {
    id: 1,
    img: roofing1,
    textImage: process1,
    heading: "Find Roofing Professionals",
    subHeading:
      "Easily locate roofing contractors near you.We connect you with trusted experts to simplify your search.",
  },
  {
    id: 2,
    img: roofing2,
    textImage: process2,
    heading: "Compare Roofing Quotes",
    subHeading:
      "Compare competitive roofing quotes and solutions from local contractors.",
  },
  {
    id: 3,
    img: roofing3,
    textImage: process3,
    heading: "Experience Quality Roofing Services",
    subHeading:
      "From repairs to full installations, enjoy reliable and lasting roofing performance. ",
  },
];

const logosData = [
  { id: 1, img: Partners1 },
  { id: 2, img: Partners2 },
  { id: 3, img: Partners3 },
];

export default function Windows() {
  const [open, setOpen] = React.useState(false);
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });
  const [source, setSource] = useState(10);
  const [clickId, setClickId] = useState(0);
  const [ip, setIP] = useState("");

  useEffect(() => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);

    const publisherId = params.get("publisher_id");
    const clickId = params.get("click_id");

    if (publisherId) setSource(publisherId);
    if (clickId) setClickId(clickId);
  }
    
    getMyLocation(function (callback) {
      setLocation(callback);
      let { city, state } = callback;
      let body = { city: city, state: state };
      setLocalData("currentLocation", body);
    });
  }, []);

  const handleClose = () => setOpen(false);
  const redirectUrl = "/#/roofing";

  const certUrlField = document.querySelector(
    '[name="xxTrustedFormCertUrl"]'
  )?.value;
  const jornayaId = window?.LeadiD?.token

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <HeroSection
        heading="roofing"
        subHeading="Roofing Contractor"
        city={location.city}
        state={location.state}
        setOpen={setOpen}
      />
      <Benefits data={benefitsData} imageSrc={roofing_benefits} />
      <Process data={processData} />
      <GreenPallete  heading='Roofing' setOpen={setOpen}/>
      <CenterSlider data={sliderData} />
      <NearYou data={nearYouData} heading="Roofing" redirectUrl={redirectUrl} />
      <FAQComponent data={faqData} heading="Roofing" />
      <Logos data={logosData} />
      <Disclaimer />
      <GreenPallete  heading='Roofing' setOpen={setOpen}/>
      <Footer />
      {
        <Modal
          className="this-ismodal"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ width: "100%", height: "100%" }}
        >
          <>
            <WarrantyForm source={{publisherId: source, clickId}} certUrlField={certUrlField} jornayaId={jornayaId} ip={ip} />
          </>
        </Modal>
      }
    </Fragment>
  );
}
