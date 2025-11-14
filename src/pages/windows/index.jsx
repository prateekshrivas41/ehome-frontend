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
import Window11 from "../../assets/window11.jpg";
import Window22 from "../../assets/window22.jpg";
import Window1 from "../../assets/window1.jpg";
import Window2 from "../../assets/window2.jpg";
import Window3 from "../../assets/window3.jpg";
import benefit_Image_window from "../../assets/windowsBenifit.png";
import ChampionLogo from "../../assets/windowLogo/champion-logo-window.png";
import MilgardLogo from "../../assets/windowLogo/Milgard-logo-window.png";
import MarvinLogo from "../../assets/windowLogo/marvin-logo-window.png";
import process1 from "../../assets/one.png";
import process2 from "../../assets/two.png";
import process3 from "../../assets/three.png";
import { getMyLocation } from "../../service/Location";
import Disclaimer from "../../components/disclaimer";
import Renewal from "../../assets/windowLogo/Renewal.png";
import Marvin from "../../assets/windowLogo/Marvin.png";
import WindowWorld from "../../assets/windowLogo/windowWorld.png";
// import { useNavigate } from "react-router-dom";
import { setLocalData } from "../../service/LocalData";
import Modal from "@mui/material/Modal";
import WarrantyForm from "../../forms/windows";
import "./index.css";
import axios from "axios";

const nearYouData = [
  {
    id: 1,
    name: "Renewal by Andersen",
    rating: "",
    logo: Renewal,
    description:
      "Known for its eco-friendly Fibrex material, strong warranties, and excellent customer service. They offer in-home and virtual consultations, and their products are highly durable and energy-efficient.",
  },
  {
    id: 2,
    name: "Champion Windows",
    rating: "",
    logo: WindowWorld,
    description:
      "A well-established name in the window replacement industry, Champion offers high-quality materials and services, specializing in​ custom window installations.",
  },
  {
    id: 3,
    name: "Milgard Windows & Doors",
    rating: "",
    logo: Renewal,
    description:
      "Milgard is known for offering a variety of high-quality, energy-efficient windows with customizable options. They provide reliable services across the country, focusing on durable, well-engineered windows.",
  },
  {
    id: 4,
    name: "Marvin Windows and Doors",
    rating: "",
    logo: Marvin,
    description:
      "Marvin specializes in custom window solutions that are both beautiful and energy-efficient. They provide premium materials, and their windows are built to enhance the aesthetics and functionality of homes.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Why should I trust a professional for window installation?",
    answer:
      "Hiring an expert ensures proper fitting, longevity, and enhanced energy efficiency, saving you time and money in the long run.",
  },
  {
    id: 2,
    question: "What qualifications should I look for in a window contractor?",
    answer:
      "Look for certifications, years of experience, customer reviews, and familiarity with different types of window materials and designs.",
  },
  {
    id: 3,
    question:
      "What advantages do I get from hiring a professional for window installation?",
    answer:
      "Professional installers provide precise measurements, expert craftsmanship, warranties, and ensure that your windows perform optimally.",
  },
  {
    id: 4,
    question: "How can I find trusted window installers in my area?",
    answer:
      "You can find reliable window installers through online reviews, recommendations from friends, and contractor networks or websites that specialize in home improvement.",
  },
  {
    id: 5,
    question:
      "Is it possible to replace my old windows with modern energy-efficient ones?",
    answer:
      "Yes, older windows can be replaced with new, energy-efficient models that improve insulation, reduce noise, and lower energy bills.",
  },
  {
    id: 6,
    question: "How long will it take to install new windows in my home?",
    answer:
      "A standard window installation typically takes a few hours per window, but the entire process for multiple windows may take 1-2 days, depending on the project size.",
  },
];

const sliderData = [
  {
    id: 1,
    image: Window1,
  },
  {
    id: 2,
    image: Window2,
  },
  {
    id: 3,
    image: Window3,
  },
  {
    id: 4,
    image: Window1,
  },
  {
    id: 5,
    image: Window2,
  },
];

const benefitsData = [
  { id: 1, line: "Find reliable window contractors easily" },
  { id: 2, line: "Get customized window solutions" },
  { id: 3, line: "Lower energy costs" },
  { id: 4, line: "Quick and clean installation" },
  { id: 5, line: "Boost property value" },
];

const processData = [
  {
    id: 1,
    img: Window11,
    textImage: process1,
    heading: "Find Window Professionals",
    subHeading:
      "Easily find top local window contractors. We connect you with the best professionals in your area.",
  },
  {
    id: 2,
    img: Window22,
    textImage: process2,
    heading: "Choose Window Expert",
    subHeading:
      "Access competitive window solutions by comparing online quotes from local window experts.",
  },
  {
    id: 3,
    img: Window3,
    textImage: process3,
    heading: "Experience Window Services",
    subHeading:
      "Whether for repairs or installations, experience long-lasting performance for your windows. ",
  },
];

const logosData = [
  { id: 1, img: ChampionLogo },
  { id: 2, img: MilgardLogo },
  { id: 3, img: MarvinLogo },
];

export default function Windows() {
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });

  const [open, setOpen] = React.useState(false);
  const [ip, setIP] = useState("");
  const redirectUrl = "/windows";
  const [source, setSource] = useState(10);
  const certUrlField = document.querySelector(
    '[name="xxTrustedFormCertUrl"]',
  )?.value;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      console.log("url :", url);

      // Get the part after the # (this could be like '/roofing?...')
      const hashParams = url.split("?")[1]; // This gets everything after the '?'
      console.log("hashParams :", hashParams);

      if (hashParams) {
        const urlParams = new URLSearchParams(hashParams);
        // Get the publisher_id parameter
        const publisherId = urlParams.get("publisher_id");
        setSource(publisherId); // Update source with publisher_id
      }
    }

    getMyLocation(function (callback) {
      setLocation(callback);
      let { city, state } = callback;
      let body = { city: city, state: state };
      setLocalData("currentLocation", body);
    });
  }, []);

  useEffect(() => {}, [source]);

  const jornayaId = window?.LeadiD?.token;

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <Fragment>
      <HeroSection
        heading="window"
        subHeading="Window Contractor"
        city={location.city}
        state={location.state}
        setOpen={setOpen}
      />
      <GreenPallete heading="window" setOpen={setOpen} />
      <Benefits data={benefitsData} imageSrc={benefit_Image_window} />
      <Process data={processData} />
      <GreenPallete heading="window" setOpen={setOpen} />
      <CenterSlider data={sliderData} />
      <NearYou data={nearYouData} heading="Window" redirectUrl={redirectUrl} />
      <FAQComponent data={faqData} />
      <Logos data={logosData} />
      <Disclaimer />
      <GreenPallete heading="window" setOpen={setOpen} />
      <Footer />
      {
        <Modal
          className="this-ismodal"
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ width: "100%", height: "100%" }}
        >
          <>
            <WarrantyForm
              source={source}
              certUrlField={certUrlField}
              jornayaId={jornayaId}
              ip={ip}
            />
          </>
        </Modal>
      }
    </Fragment>
  );
}
