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
import Partners1 from "../../assets/flooringLogo/partner1.jpeg";
import Partners2 from "../../assets/flooringLogo/partner2.jpeg";
import Partners3 from "../../assets/flooringLogo/partner3.jpeg";
import Slider1 from "../../assets/flooringLogo/flooringSlider1.jpeg";
import Slider5 from "../../assets/flooringLogo/flooringSlider2.jpeg";
import Slider2 from "../../assets/flooringLogo/flooringSlider3.jpeg";
import Slider3 from "../../assets/flooringLogo/flooringSlider4.jpeg";
import Slider4 from "../../assets/flooringLogo/flooringSlider5.jpeg";
import Lindholm from "../../assets/roofing/The-Lindholm-Process.jpg";
import Eagle from "../../assets/roofing/Eagle-Watch-Roofing.jpg";
import BSM from "../../assets/roofing/BSM-Builders.jpg";
import Gmatt from "../../assets/roofing/Gmatt-Builder-Developer-Llc.jpg";

import roofing_benefits from "../../assets/WhatsApp Image 2025-04-10 at 6.00.14 PM.jpeg";
import process1 from "../../assets/one.png";
import process2 from "../../assets/two.png";
import process3 from "../../assets/three.png";
import { getMyLocation } from "../../service/Location";
import Disclaimer from "../../components/disclaimer";
import { setLocalData } from "../../service/LocalData";
import Modal from "@mui/material/Modal";
import WarrantyForm from "../../forms/flooring";
import axios from "axios";


const nearYouData = [
  {
    id: 1,
    name: "ACI Flooring",
    rating: "",
    logo: Lindholm,
    description:
      "When you need one of the most reliable flooring contractors Wethersfield, CT has to offer, our team is always here to help you. Our years of experience have given us the expertise required to provide you with some of the most high-quality flooring around.",
  },
  {
    id: 2,
    name: "Micheal USA Floors",
    rating: "",
    logo: Eagle,
    description:
      "At Michael USA Floors, we are proud to offer our Professional Flooring Services across the entirety of Virginia, delivering unparalleled expertise in Flooring Refinishing & Sanding, Flooring Installation, Flooring Repair, Handrail Installation & Refinishing, and Stair Refinishing & Installation.",
  },
  {
    id: 3,
    name: "Elite Flooring",
    rating: "",
    logo: BSM,
    description:
      "The experts at Elite Flooring are dedicated to enhancing our clients’ lives and spaces through leading indoor experiences. To accomplish this goal, the founders believed Elite Flooring must have an unrivaled commitment to operational excellence and customer satisfaction.",
  },
  {
    id: 4,
    name: "USA Flooring",
    rating: "",
    logo: Gmatt,
    description:
      "USA Flooring offers next day installation for many of its products. Once the floor is selected, one of USA Flooring’s installation experts will make it a part of your home in a timely manner.",
    },
    {
        id: 5,
        name: "Spectra Contract Flooring",
        rating: "",
        logo: Gmatt,
        description:
          "At Spectra Contract Flooring, we manage each and every detail of your flooring project. From material selection and specification to project planning, procurement, installation, logistics and maintenance planning — we do it all.",
      },
];

const faqData = [
  {
    id: 1,
    question:
      "Why Should I Trust a Professional for Flooring Repair or Replacement?",
    answer:
      "Hiring a pro ensures the right materials and techniques are used, avoiding uneven surfaces, premature wear, or structural issues that can cost more to fix later.",
  },
  {
    id: 2,
    question: "What Should I Look for in a Flooring Contractor?",
    answer:
      "Check for licensing, insurance, experience with your specific flooring type, and verified customer reviews. A solid warranty is a great bonus too.",
  },
  {
    id: 3,
    question:
      "What Are the Benefits of Hiring a Professional for Flooring Services?",
    answer:
      "Experts deliver precise installation, help you choose the best materials, and ensure a flawless finish that boosts your home's appearance and value.",
  },
  {
    id: 4,
    question: "How Can I Find Trusted Flooring Contractors in My Area?",
    answer:
      "Ask for referrals, read online reviews, or use trusted home service platforms to find licensed, background-checked flooring professionals.",
  },
  {
    id: 5,
    question: "Can I Upgrade to More Durable or Stylish Flooring During a Replacement?",
    answer:
      "Yes, replacing your old floor is a great time to upgrade to more modern, durable, or stylish materials like luxury vinyl, engineered wood, or tile.",
  },
  {
    id: 6,
    question: "How Long Does It Take to Replace Flooring in a Room or House?",
    answer:
      "Most single-room flooring jobs take 1-2 days. Whole-home projects can take several days depending on square footage, prep work, and material choice.",
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
  { id: 1, line: "Hasslefree price comparison" },
  { id: 2, line: "Avoid overestimated labor costs" },
  { id: 3, line: "Protect yourself from price surges during high demand" },
  { id: 4, line: "Save on unnecessary tool costs" },
  { id: 5, line: "Get the right materials at the right price" },
];

const processData = [
  {
    id: 1,
    img: roofing1,
    textImage: process1,
    heading: "Discover the Best Flooring Experts",
    subHeading:
      "Simply fill out the form to get connected with top-rated flooring contractors in your area. We’ve already screened and selected the best professionals to save you time and effort.",
  },
  {
    id: 2,
    img: roofing2,
    textImage: process2,
    heading: "Plan Your Flooring Project",
    subHeading:
      "Share the details of your flooring needs, such as the type of flooring, room dimensions, and your budget. This helps our recommended contractors provide accurate and tailored solutions for your project.",
  },
  {
    id: 3,
    img: roofing3,
    textImage: process3,
    heading: "Receive Free Custom Quotes",
    subHeading:
      "Get multiple free, no-obligation quotes from trusted contractors. Compare prices, materials, and timelines to choose the contractor that fits your needs. It’s quick, easy, and hassle-free!. ",
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
    const [ip, setIP] = useState("");

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
  const redirectUrl = "/flooring";

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
        heading="Flooring"
        subHeading="Flooring Contractor"
        city={location.city}
        state={location.state}
        setOpen={setOpen}
      />
      <GreenPallete heading='Flooring' setOpen={setOpen}/> 
      <Benefits data={benefitsData} imageSrc={roofing_benefits} />
      <Process data={processData} />
      <GreenPallete heading='Flooring' setOpen={setOpen}/> 
      <CenterSlider data={sliderData} />
      <NearYou data={nearYouData} heading="Flooring" redirectUrl={redirectUrl} />
      <FAQComponent data={faqData} heading="Flooring" />
      <Logos data={logosData} />
      <Disclaimer />
      <GreenPallete heading='Flooring' setOpen={setOpen}/> 
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
            <WarrantyForm source={source} certUrlField={certUrlField} jornayaId={jornayaId} ip={ip} />
          </>
        </Modal>
      }
    </Fragment>
  );
}
