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
import Window1 from "../../assets/bathroomLogo/process1.png";
import Window2 from "../../assets/bathroomLogo/process2.png";
import Window3 from "../../assets/bathroomLogo/process3.png";
import benefit_Image_window from "../../assets/bathroomBenifit.png";
import ChampionLogo from "../../assets/bathroomLogo/bathplant.png";
import MilgardLogo from "../../assets/bathroomLogo/fitter.png";
import MarvinLogo from "../../assets/bathroomLogo/rebath.png";
import Jacuzzi from "../../assets/bathroomLogo/jacuzzi.jpeg";
import ReBath from "../../assets/bathroomLogo/reBath.jpeg";
import BathFitter from "../../assets/bathroomLogo/bathFitter.jpeg";
import BathPlanet from "../../assets/bathroomLogo/bathPlanet.jpeg";
import { getMyLocation } from "../../service/Location";
import process1 from "../../assets/one.png";
import process2 from "../../assets/two.png";
import process3 from "../../assets/three.png";
import Modal from "@mui/material/Modal";
import { setLocalData } from "../../service/LocalData";
import WarrantyForm from "../../forms/bathroom";
import axios from "axios";

const nearYouData = [
  {
    id: 1,
    name: "Bath Fitter Luxury Bath",
    rating: "",
    logo: BathFitter,
    description:
      "Known for its eco-friendly Fibrex material, strong warranties, and excellent customer service. They offer in-home and virtual consultations, and their products are highly durable and energy-efficient.",
  },
  {
    id: 2,
    name: "Jacuzzi Bathrooms",
    rating: "",
    logo: Jacuzzi,
    description:
      "A well-established name in the window replacement industry, Champion offers high-quality materials and services, specializing in​ custom window installations.",
  },
  {
    id: 3,
    name: "Bath Planet",
    rating: "",
    logo: BathPlanet,
    description:
      "This company is known for offering a broad range of affordable window double-hung, and high-performance impact windows. They are a go-to for budget-conscious homeowners.",
  },
  {
    id: 4,
    name: "Re-Bath",
    rating: "",
    logo: ReBath,
    description:
      "Milgard is known for offering a variety of high-quality, energy-efficient windows with customizable options. They provide reliable services across the country, focusing on durable, well-engineered windows.",
  },
];

const faqData = [
  {
    id: 1,
    question: "How much does a bathroom renovation cost?",
    answer:
      "The cost varies depending on the size of the bathroom, materials used, and the extent of the renovation. On average, it can range from $5,000 to $15,000 or more.",
  },
  {
    id: 2,
    question: "How long does a typical bathroom remodel take?",
    answer:
      "A standard bathroom remodel takes around 2-3 weeks, though larger projects may take longer.",
  },
  {
    id: 3,
    question: "Do I need a permit for a bathroom remodel?",
    answer:
      "Yes, permits are often required, especially for plumbing, electrical, or structural changes. It's best to check with local authorities.",
  },
  {
    id: 4,
    question: "What upgrades add the most value to a bathroom?",
    answer:
      "Upgrades like installing a walk-in shower, high-quality fixtures, or modern tiling tend to add the most value.",
  },
  {
    id: 5,
    question: "Can I remodel my bathroom on a budget?",
    answer:
      "Yes, by focusing on small updates such as repainting, replacing fixtures, and using cost-effective materials, you can refresh your bathroom on a tighter budget.",
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
  { id: 1, line: "Certified local contractors" },
  { id: 2, line: "Tailored quotes instantly" },
  { id: 3, line: "High-quality bathroom service" },
  { id: 4, line: "Expert remodeling professionals" },
  { id: 5, line: "Affordable pricing options" },
  { id: 6, line: "Licensed and insured contractors" },
  { id: 7, line: "Customized designs to match your budget" },
];

const processData = [
  {
    id: 1,
    img: Window1,
    textImage: process1,
    heading: "Submit Your Info",
    subHeading:
      "Easily find top local bathroom contractors. We connect you with the best professionals in your area. ",
  },
  {
    id: 2,
    img: Window2,
    textImage: process2,
    heading: "Compare Quotes",
    subHeading:
      "Access competitive bathroom solutions by comparing online quotes from local window experts.",
  },
  {
    id: 3,
    img: Window3,
    textImage: process3,
    heading: "Choose Experts",
    subHeading:
      "Select the right pro for your needs and experience top-class service and support every step of the way.",
  },
];

const logosData = [
  { id: 1, img: ChampionLogo },
  { id: 2, img: MilgardLogo },
  { id: 3, img: MarvinLogo },
];

export default function Bathroom() {
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const redirectUrl = "/bathroom";
  const [source, setSource] = useState(10);
  const [ip, setIP] = useState("");

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

  const jornayaId = window?.LeadiD?.token;

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
        heading="bathroom"
        subHeading="Bathroom Contractor"
        city={location.city}
        state={location.state}
        country={location.country}
        setOpen={setOpen}
      />
      <GreenPallete heading="bathroom" setOpen={setOpen} />
      <Benefits data={benefitsData} imageSrc={benefit_Image_window} />
      <Process data={processData} />
      <CenterSlider data={sliderData} />
      <NearYou
        data={nearYouData}
        heading="Bathroom"
        redirectUrl={redirectUrl}
      />
      <GreenPallete heading="bathroom" setOpen={setOpen} />
      <FAQComponent data={faqData} heading="Bathroom" />
      <Logos data={logosData} />
      <GreenPallete heading="bathroom" setOpen={setOpen} />
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
