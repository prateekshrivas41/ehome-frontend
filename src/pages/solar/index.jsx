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
import Advantage1 from "../../assets/solarLogo/process1.png";
import Advantage3 from "../../assets/solarLogo/process2.png";
import Advantage2 from "../../assets/solarLogo/process3.png";
import Slider1 from "../../assets/solarLogo/slider1.jpeg";
import Slider2 from "../../assets/solarLogo/slider2.jpeg";
import Slider3 from "../../assets/solarLogo/slider3.jpeg";
import Slider4 from "../../assets/solarLogo/slider4.jpeg";
import Slider5 from "../../assets/solarLogo/slider5.jpeg";
import benefit_Image_solar from "../../assets/solarLogo/right-potential-img.png";
import thirdPartner from "../../assets/solarLogo/partner1.jpeg";
import secondPartner from "../../assets/solarLogo/partner2.jpeg";
import firstPartner from "../../assets/solarLogo/partner3.jpeg";
import provider1 from "../../assets/solarLogo/solar-provider1.png";
import provider2 from "../../assets/solarLogo/solar-provider2.png";
import provider3 from "../../assets/solarLogo/solar-provider3.png";
import provider4 from "../../assets/solarLogo/solar-provider4.png";
import provider5 from "../../assets/solarLogo/solar-provider5.png";
import { getMyLocation } from "../../service/Location";
import process1 from "../../assets/one.png";
import process2 from "../../assets/two.png";
import process3 from "../../assets/three.png";
import { normalizeUserAgent, setLocalData } from "../../service/LocalData";
import Modal from "@mui/material/Modal";
import WarrantyForm from "../../forms/solar";
import axios from "axios";

const nearYouData = [
  {
    id: 1,
    name: "Nolasco Handy Services",
    rating: "",
    logo: provider1,
    description:
      "Known for its eco-friendly Fibrex material, strong warranties, and excellent customer service. They offer in-home and virtual consultations, and their products are highly durable and energy-efficient.Nolasco Handy Services, founded in 2010, is a locally owned and operated business serving The Bronx, NY, and surrounding areas.",
  },
  {
    id: 2,
    name: "Earthlight",
    rating: "",
    logo: provider2,
    description:
      "Earthlight Technologies is a family-owned and operated business based in Ellington, CT. Specialize in solutions for residential solar, energy efficiency projects.",
  },
  {
    id: 3,
    name: "Avila Services",
    rating: "",
    logo: provider3,
    description:
      "Professional service, 7 years working in New York as electrician, residential area. Work position reached:master electrician, foreman, project manager. Highly qualified on troubleshooting,running new installations, renovating and repairing.",
  },
  {
    id: 4,
    name: "Breltech",
    rating: "",
    logo: provider4,
    description:
      "Have been in the electrical business for 24 years. Priority to ensure that my customers are fully satisfied with every job. Always prompt, offer reasonable rates, and easy to work with.",
  },
  {
    id: 5,
    name: "Detach Reset",
    rating: "",
    logo: provider5,
    description:
      "We keep solar power systems properly cared for and optimized all across America. A trusted partner to Roofers, Homeowners, Real Estate Agents and more!",
  },
];

const faqData = [
  {
    id: 1,
    question: "Why Should I Trust a Professional for Solar Installation?",
    answer:
      "Experts ensure proper system design, optimal panel placement, and efficient installations that maximize energy production and long-term savings.",
  },
  {
    id: 2,
    question: "What Qualifications Should I Look for in a Solar Contractor?",
    answer:
      "Look for certifications (such as NABCEP), experience with residential or commercial systems, customer reviews, and knowledge of local regulations and incentives.",
  },
  {
    id: 3,
    question:
      "What Advantages Do I Get from Hiring a Professional for Solar Installation?",
    answer:
      "Professionals handle permits, ensure code compliance, provide warranties, and guarantee system performance, saving you time and effort",
  },
  {
    id: 4,
    question: "How Can I Find Trusted Solar Installers in My Area?",
    answer:
      "Search online reviews, ask for recommendations, and use platforms that connect you with pre-screened solar professionals.",
  },
  {
    id: 5,
    question: "Can I Upgrade My Existing Solar System?",
    answer:
      "Yes, you can expand your current system with additional panels, upgrade to higher-capacity inverters, or add battery storage to maximize energy use.",
  },
  {
    id: 6,
    question: "How Long Does It Take to Install a Solar Energy System?",
    answer:
      "Most residential solar installations are completed within 1-3 days, depending on the system's size and complexity.",
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
  { id: 1, line: "Find reliable local solar providers for free." },
  { id: 2, line: "Maximize the value of your investment." },
  { id: 3, line: "Get customized solar solutions." },
  { id: 4, line: "Work with trusted providers for top-quality service." },
  { id: 5, line: "Access top-rated solar contractors." },
];

const processata = [
  {
    id: 1,
    img: Advantage1,
    textImage: process1,
    heading: "Discover Leading Solar Professionals",
    subHeading:
      "Easily locate certified solar contractors near you. We connect you with top-rated experts for your solar needs",
  },
  {
    id: 2,
    img: Advantage2,
    textImage: process2,
    heading: "Choose a Solar Expert",
    subHeading:
      "Compare competitive quotes for solar installation and maintenance. Select the ideal contractor to meet your energy and budget goals",
  },
  {
    id: 3,
    img: Advantage3,
    textImage: process3,
    heading: "Experience Quality Solar Services",
    subHeading:
      "From installations to upgrades, enjoy high-performance, long-lasting solar solutions. ",
  },
];

const logosData = [
  { id: 1, img: firstPartner },
  { id: 2, img: secondPartner },
  { id: 3, img: thirdPartner },
];

export default function HomeWarranty() {
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });

  const [open, setOpen] = React.useState(false);
    const [ip, setIP] = useState("");
  
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const redirectUrl = "/solar";
  const [source, setSource] = useState(10);
  const certUrlField = document.querySelector(
    '[name="xxTrustedFormCertUrl"]'
  )?.value;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.href;

      // Get everything after the # symbol (hash)
      const hash = window.location.hash;

      // Get the part after the # (this could be like '/roofing?...')
      const hashParams = url.split("?")[1]; // This gets everything after the '?'

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

  const jornayaId = window?.LeadiD?.token

  
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
        heading="Solar"
        subHeading="Solar Company"
        city={location.city}
        state={location.state}
        country={location.country}
        setOpen={setOpen}
      />
      <GreenPallete heading="Solar" setOpen={setOpen} />
      <Benefits data={benefitsData} imageSrc={benefit_Image_solar} />
      <Process data={processata} />
      <CenterSlider data={sliderData} />
      <NearYou data={nearYouData} heading="Solar" redirectUrl={redirectUrl} />
      <GreenPallete heading="Solar" setOpen={setOpen} />
      <FAQComponent data={faqData} heading="Solar" />
      <Logos data={logosData} />
      <GreenPallete heading="Solar" setOpen={setOpen} />
      <Footer />
      {
        <Modal
          className="this-ismodal"
          open={open}
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
