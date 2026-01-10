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
import Window1 from "../../assets/gutterLogo/process1.png";
import Window2 from "../../assets/gutterLogo/process2.png";
import Window3 from "../../assets/gutterLogo/process3.png";
import benefit_Image_window from "../../assets/gutterBenifit.png";
import ChampionLogo from "../../assets/gutterLogo/brothers.png";
import MilgardLogo from "../../assets/gutterLogo/helmet.png";
import MarvinLogo from "../../assets/gutterLogo/leaf.png";
import { getMyLocation } from "../../service/Location";
import LeafFilter from "../../assets/gutterLogo/leafFilter.jpeg";
import Handyman from "../../assets/gutterLogo/Handyman.jpeg";
// import gutterHelmet from "../../assets/gutterLogo/Gutter-Helmet-Logo.webp";
import gutterHelmet from "../../assets/gutterLogo/gutter.jpeg";
import abcseamless from "../../assets/gutterLogo/abc-seamless-logo.png";
import process1 from "../../assets/one.png";
import process2 from "../../assets/two.png";
import process3 from "../../assets/three.png";
import { setLocalData } from "../../service/LocalData";
import Modal from "@mui/material/Modal";
import WarrantyForm from "../../forms/gutter";
import axios from "axios";

const nearYouData = [
  {
    id: 1,
    name: "LeafFilter Gutter Protection",
    rating: "",
    logo: LeafFilter,
    description:
      "Specializes in gutter protection systems that prevent clogging from debris like leaves. Their services include both installation and cleaning, and they offer a lifetime transferable warranty.",
  },
  {
    id: 2,
    name: "Gutter Helmet",
    rating: "",
    logo: gutterHelmet,
    description:
      "Known for their patented gutter guard system, Gutter Helmet provides professional installation services with a focus on protecting gutters from clogs caused by debris. They are recognized for their durability and excellent customer support.",
  },
  {
    id: 3,
    name: "The Brothers That Just Do Gutters",
    rating: "",
    logo: ChampionLogo,
    description:
      "A nationwide gutter company offering services such as gutter installation, repair, cleaning, and gutter guards. They are highly regarded for their customer service and quality workmanship.",
  },
  {
    id: 4,
    name: "ABC Seamless",
    rating: "",
    logo: abcseamless,
    description:
      "Specializes in seamless gutters that offer customized istallation services. Known for using steel gutters instead of traditional aluminum, their services are aimed at enhancing both durability and home aesthetics.",
  },
  {
    id: 5,
    name: "Mr. Handyman",
    rating: "",
    logo: Handyman,
    description:
      "Offers comprehensive gutter services, including installation, repairs, and gutter cleaning. They are a general home improvement service provider but are well-regarded for their gutter work across the country.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Why Should I Hire a Professional for Gutter Installation?",
    answer:
      "Professionals ensure proper installation, preventing leaks, water damage, and costly repairs in the future",
  },
  {
    id: 2,
    question: "What Credentials Should a Gutter Contractor Have?",
    answer:
      "Look for proper licensing, insurance, experience, and customer testimonials to ensure you’re hiring a reliable contractor.",
  },
  {
    id: 3,
    question: "What Benefits Do Professional Gutter Installers Provide?",
    answer:
      "Expert installers offer precise fitting, durable materials, efficient drainage solutions, and warranties to protect your investment",
  },
  {
    id: 4,
    question: "How Can I Find Reliable Gutter Installation Companies Near Me?",
    answer:
      "Check online reviews, ask for referrals from neighbors, or use home improvement platforms to find trusted gutter specialists in your area.",
  },
  {
    id: 5,
    question: "Can My Old Gutters Be Replaced with New Ones?",
    answer:
      "Yes, outdated or damaged gutters can be replaced with modern, more durable systems that better protect your home from water damage.",
  },
  {
    id: 6,
    question: "How Long Does It Take to Install Gutters?",
    answer:
      "Most gutter installations can be completed in a day, but the time may vary depending on the size of your home and the complexity of the project.",
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
  { id: 1, line: "Affordable local pricing for gutter installation" },
  { id: 2, line: "Protect your home’s foundation" },
  { id: 3, line: "Enhance curb appeal easily" },
  { id: 4, line: "Reduce risks of landscape erosion" },
  { id: 5, line: "Ensure hassle-free gutter installation" },
  { id: 6, line: "Extend the lifespan of your roof and exterior" },
  { id: 7, line: "Experience efficient drainage systems" },
];

const processData = [
  {
    id: 1,
    img: Window1,
    textImage: process1,
    heading: "Find Gutter Contractors ",
    subHeading:
      "We simplify the process by matching you with professionals who deliver high-quality gutter solutions.",
  },
  {
    id: 2,
    img: Window2,
    textImage: process2,
    heading: "Get Free Gutter Quotes",
    subHeading:
      "Select the right pro for your needs and experience top-class service and support every step of the way",
  },
  {
    id: 3,
    img: Window3,
    textImage: process3,
    heading: "Select Gutter Experts",
    subHeading:
      "Select the right pro for your needs and experience top-class service and support every step of the way.",
  },
];

const logosData = [
  { id: 1, img: ChampionLogo },
  { id: 2, img: MilgardLogo },
  { id: 3, img: MarvinLogo },
];

export default function Gutter() {
  const [open, setOpen] = React.useState(false);
  const redirectUrl = "/gutter";
  const [source, setSource] = useState(10);
  const [ip, setIP] = useState("");

  const certUrlField = document.querySelector(
    '[name="xxTrustedFormCertUrl"]',
  )?.value;

  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;

      const hash = window.location.hash;

      const hashParams = url.split("?")[1]; // This gets everything after the '?'

      if (hashParams) {
        const urlParams = new URLSearchParams(hashParams);

        const publisherId = urlParams.get("publisher_id");
        setSource(publisherId);
      }
    }

    getMyLocation(function (callback) {
      setLocation(callback);
      let { city, state } = callback;
      let body = { city: city, state: state };
      setLocalData("currentLocation", body);
    });
  }, []);

  const handleClose = () => setOpen(false);

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
        heading="gutter"
        subHeading="Gutter Contractor"
        city={location.city}
        state={location.state}
        country={location.country}
        setOpen={setOpen}
      />
      <GreenPallete heading="gutter" setOpen={setOpen} />
      <Benefits data={benefitsData} imageSrc={benefit_Image_window} />
      <Process data={processData} />
      <CenterSlider data={sliderData} />
      <NearYou data={nearYouData} redirectUrl={redirectUrl} />
      <GreenPallete heading="gutter" setOpen={setOpen} />
      <FAQComponent data={faqData} />
      <Logos data={logosData} />
      <GreenPallete heading="gutter" setOpen={setOpen} />
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
