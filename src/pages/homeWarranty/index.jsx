import React, { Fragment, useState,useEffect } from "react"
import Benefits from "../../components/benefit";
import GreenPallete from "../../components/GreenPelette";
import Process from "../../components/process";
import { HeroSection } from "../../components/hero";
import NearYou from "../../components/nearYou";
import FAQComponent from "../../components/faq";
import Logos from "../../components/logos";
import Footer from "../../components/footer";
import CenterSlider from "../../components/slider";
import Window1 from "../../assets/homeWarranty/process1.png";
import Window2 from "../../assets/window2.jpg";
import Window3 from "../../assets/window3.jpg";
import benefit_Image_window from "../../assets/window.png";
import ChampionLogo from "../../assets/homeWarranty/american.png";
import MilgardLogo from "../../assets/homeWarranty/american.png";
import MarvinLogo from "../../assets/homeWarranty/select.png";
import AmericanHomeShield from "../../assets/homeWarranty/americanHomeShield.jpeg";
import ChinchHomeService from "../../assets/homeWarranty/chinchHomeService.jpeg";
import ChoiceHomeWarranty from "../../assets/homeWarranty/choiceHomeWarranty.jpeg";
import LibertyHomeGuard from "../../assets/homeWarranty/libertyHomeGuard.jpeg";
import SelectHomeWarranty from "../../assets/homeWarranty/selectHomeWarranty.jpeg";
import { getMyLocation } from "../../service/Location";
import process1 from "../../assets/one.png";
import process2 from "../../assets/two.png";
import process3 from "../../assets/three.png";
import { setLocalData } from "../../service/LocalData";
import Modal from '@mui/material/Modal';
import WarrantyForm from "../../forms/homeWarranty";
import axios from "axios";

const nearYouData = [
    {
        id: 1,
        name: 'American Home Shield (AHS)',
        rating: '',
        logo : AmericanHomeShield,
        description: 'Known for its eco-friendly Fibrex material, strong warranties, and excellent customer service. They offer in-home and virtual consultations, and their products are highly durable and energy-efficient.'
    },
    {
        id: 2,
        name: 'Choice Home Warranty',
        rating: '',
        logo :ChoiceHomeWarranty,
        description: 'A well-established name in the window replacement industry, Champion offers high-quality materials and services, specializing in​ custom window installations.'
    },
    {
        id: 3,
        name: 'Select Home Warranty',
        rating: '',
        logo : SelectHomeWarranty,
        description: 'This company is known for offering a broad range of affordable window double-hung, and high-performance impact windows. They are a go-to for budget-conscious homeowners.'
    },
    {
        id: 4,
        name: 'Cinch Home Services',
        rating: '',
        logo : ChinchHomeService,
        description: 'Milgard is known for offering a variety of high-quality, energy-efficient windows with customizable options. They provide reliable services across the country, focusing on durable, well-engineered windows.'
    },
    {
        id: 5,
        name: 'Liberty Home Guard',
        rating: '',
        logo : LibertyHomeGuard,
        description: 'Marvin specializes in custom window solutions that are both beautiful and energy-efficient. They provide premium materials, and their windows are built to enhance the aesthetics and functionality of homes.'
    },
]

const faqData = [
    {
        id: 1,
        question: 'What is Covered Under a Home Warranty?',
        answer: 'A home warranty typically covers major home systems (like heating, plumbing, and electrical) and appliances (such as refrigerators, dishwashers, and washers/dryers) against unexpected repairs or breakdowns.',
    },
    {
        id: 2,
        question: 'How Do I File a Claim for a Home Warranty?',
        answer: "Filing a claim is simple. Contact your home warranty provider, explain the issue, and they will arrange for a licensed technician to diagnose and resolve the problem.",
    },
    {
        id: 3,
        question: 'How Long Does a Home Warranty Last?',
        answer: "Most home warranties last for one year, but many providers offer renewal options to extend coverage.",
    },
    {
        id: 4,
        question: 'Is There a Service Fee for Repairs?',
        answer: 'Yes, when you file a claim, you typically pay a small service fee, often ranging between $60 and $150, depending on your warranty plan.',
    },
    {
        id: 5,
        question: 'Can I Transfer My Home Warranty to a New Owner?',
        answer: 'Yes, home warranties are usually transferable if you sell your home, making it an appealing benefit for potential buyers.',
    },
   
]

const sliderData = [
    {
        id: 1,
        image: Window1
    },
    {
        id: 2,
        image: Window2
    },
    {
        id: 3,
        image: Window3
    },
    {
        id: 4,
        image: Window1
    },
    {
        id: 5,
        image: Window2
    },
]

const benefitsData = [
    { id: 1, line: "Comprehensive coverage for your home" },
    { id: 2, line: "Reduce unexpected repair costs" },
    { id: 3, line: "Hassle-free claims process" },
    { id: 4, line: "Increase property value" },
    { id: 5, line: "Peace of mind for homeowners" },
    { id: 6, line: "Potential tax benefits" },
    { id: 7, line: "Access to trusted service professionals" },
];

const processata = [
    {
        id: 1,
        img: Window1,
        textImage: process1,
        heading: "Find Home Warranty Providers",
        subHeading:
            "Effortlessly locate top home warranty companies in your area. We connect you with the best providers for your home's needs.",
    },
    {
        id: 2,
        img: Window2,
        textImage: process2,
        heading: "Choose Home Warranty Plans",
        subHeading:
            "Access affordable home warranty solutions by comparing customized quotes from trusted providers near you.",
    },
    {
        id: 3,
        img: Window3,
        textImage: process3,
        heading: "Experience Home Protection",
        subHeading:
            "Whether covering systems or appliances, enjoy peace of mind with comprehensive protection and reliable service for your home. ",
    },
];

const logosData = [
    { id: 1, img: ChampionLogo },
    { id: 2, img: MilgardLogo },
    { id: 3, img: MarvinLogo },
];

export default function HomeWarranty() {
    const [location, setLocation] = useState({
        city: '',
        state: '',
        country: ''
    });

    const [open, setOpen] = React.useState(false);
      const [ip, setIP] = useState("");
    const redirectUrl= "/windows"
    const [source, setSource] = useState(10)
    const certUrlField = document.querySelector(
        '[name="xxTrustedFormCertUrl"]'
    )?.value;
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            const url = window.location.href;

            // Get everything after the # symbol (hash)
            const hash = window.location.hash;

            // Get the part after the # (this could be like '/roofing?...')
            const hashParams = url.split('?')[1]; // This gets everything after the '?'

            if (hashParams) {
                const urlParams = new URLSearchParams(hashParams);

                // Get the publisher_id parameter
                const publisherId = urlParams.get('publisher_id');
                setSource(publisherId); // Update source with publisher_id
            }
        }
        
        getMyLocation(function (callback) {
            setLocation(callback)
            let { city, state } = callback
            let body = { city: city, state: state }
            setLocalData("currentLocation", body)
        })
    }, [])

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
            <HeroSection heading='homeWarranty' subHeading='Home Warranty Company' city={location.city} state={location.state} country={location.country} setOpen={setOpen}/>
            <GreenPallete heading='homeWarranty' setOpen={setOpen}/> 
            <Benefits data={benefitsData} imageSrc={benefit_Image_window} />
            <Process data={processata} />
            <CenterSlider data={sliderData} />
            <NearYou data={nearYouData} heading="Home Warranty" redirectUrl={redirectUrl}  />
            <GreenPallete heading='homeWarranty' setOpen={setOpen}/> 
            <FAQComponent data={faqData} heading="Home Warranty" />
            <Logos data={logosData} />
            <GreenPallete heading='homeWarranty' setOpen={setOpen}/> 
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
    )
}