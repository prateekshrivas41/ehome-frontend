import "./homePageCss.css";
import logo from "../../assets/homePage/ehomequotelogo.png";
import { useState } from "react";
import windowimg from "../../assets/homePage/window-top.png";
import roofingimg from "../../assets/homePage/roofing-art.jpg";
import solarimg from "../../assets/homePage/solar-art1.webp";
import cursorimg from "../../assets/homePage/cursor-img.png";
import houseimg from "../../assets/homePage/house-&-blue.png";
import Roofing_Video from "../../assets/homePage/Roofing_Video.mp4";
import Gallary_Ehome from "../../assets/homePage/Gallary_Ehome.mp4";
import BlackArrow from "../../assets/homePage/Black-Arrow.png";
import Threestepsimg from "../../assets/homePage/three-steps-img.jpeg";
import kiddroofingimg from "../../assets/homePage/kiddroofing.png";
import cornettroofindsystemsimg from "../../assets/homePage/cornettroofindsystems.png";
import environmentalroofingimg from "../../assets/homePage/environmentalroofing.png";
import citadelroofingandsolarimg from "../../assets/homePage/citadelroofingandsolar.webp";
import happyOwnerImg from "../../assets/homePage/happy-owner-img.png";
import Lefthouseimprovementimg from "../../assets/homePage/Left-house-improvement-img.png";
import rightimprovementbuilding from "../../assets/homePage/right-improvement-building.png";
import windowleftimprovementimg from "../../assets/homePage/window-left-improvement-img.png";
import knowmorenearicon from "../../assets/homePage/know-more-near-icon.png";
import qualityimg1 from "../../assets/homePage/quality-img1.png";
import qualityimg2 from "../../assets/homePage/quality-img2.png";
import qualityimg3 from "../../assets/homePage/quality-img3.png";
import qualityimg4 from "../../assets/homePage/quality-img4.png";
import blogimg1 from "../../assets/homePage/blog-img1.png";
import LeftImg from "../../assets/homePage/Left-Img.png";
import RightImg from "../../assets/homePage/Right-Img.png";
import Thomas from "../../assets/homePage/Thomas.png";
import homeWarrantyHomeImg from "../../assets/homePage/homeWarrantyhomeimg.jpeg";
import gutterHomeImg from "../../assets/homePage/gutterhomeimg.jpeg";
import FlooringHomeImg from "../../assets/homePage/flooringhomeimg.jpeg";
import bathroomHomeImg from "../../assets/homePage/bathroomHomeimg.jpeg";
import { Link } from "react-router-dom";

import Albert from "../../assets/homePage/Albert.png";
import roundprofilpicturefter from "../../assets/homePage/round_profil_picture_after_ 1.png";

import CenterImg2 from "../../assets/homePage/Center-Img2.png";
import CenterImg1 from "../../assets/homePage/Center-Img1.png";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

const index = () => {
  const navigate = useNavigate();
  const [zip, setZip] = useState("");
  const [service, setService] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleZipChange = (event) => {
    setZip(event.target.value); // Update the zip code state
  };

  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 slides visible on desktop
    slidesToScroll: 1,
    centerMode: true, // Ensure the active slide is always centered
    centerPadding: "40px", // Add space on the sides of the centered card
    responsive: [
      {
        breakpoint: 1024, // Tablet view (show 2 slides)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px", // Reduced padding on tablets
        },
      },
      {
        breakpoint: 768, // Mobile view (show 1 slide)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px", // Reduced padding on mobile
        },
      },
    ],
  };

  const sliderSettings = {
    dots: true, // Enable dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds per slide
    responsive: [
      {
        breakpoint: 1024, // For screen width <= 1024px (Tablet)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on smaller screens
          dots: true, // Keep dots enabled
        },
      },
      {
        breakpoint: 768, // For screen width <= 768px (Mobile)
        settings: {
          slidesToShow: 3, // Show 1 slide at a time on mobile
          dots: true, // Keep dots enabled
        },
      },
    ],
  };

  const handleSelectChange = (event) => {
    setSelectedService(event.target.value); // Update the selected service state
  };

  const testimonials = [
    {
      img: Thomas,
      text: "I felt disturbed when a hailstorm took our roof. But eHome Quote came to our rescue.!",
      name: "- Thomas",
      title: "Home Owner",
    },
    {
      img: Albert,
      text: "Searching for home improvement contractors was so stressful. Thanks eHome Quote.",
      name: "- Alice Sandra",
      title: "Home Owner",
    },
    {
      img: roundprofilpicturefter,
      text: "Through eHome Quote, I got many personalized home improvement contractors in my area!",
      name: "- Albert Stover",
      title: "Home Owner",
    },
    {
      img: Thomas,
      text: "I felt disturbed when a hailstorm took our roof. But eHome Quote came to our rescue.!",
      name: "- Thomas",
      title: "Home Owner",
    },
    {
      img: Albert,
      text: "Searching for home improvement contractors was so stressful. Thanks eHome Quote.",
      name: "- Alice Sandra",
      title: "Home Owner",
    },
    {
      img: roundprofilpicturefter,
      text: "Through eHome Quote, I got many personalized home improvement contractors in my area!",
      name: "- Albert Stover",
      title: "Home Owner",
    },
  ];

  const redirectToPage = () => {
    if (selectedService) {
      navigate(`${selectedService}`); // Redirect to the selected service page
    } else {
      alert("Please select a service!");
    }
  };
  return (
    <>
      <section id="nav-main-container">
        <header className="header">
          {/* Logo */}
          <Link className="logo" to="/home">
            <img className="logo-img" src={logo} alt="Ehomequote Logo" />
          </Link>

          {/* Mobile menu toggle */}
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="icon">
            <GiHamburgerMenu className="bx bx-menu" id="menu-icon" size={30} />
            <AiFillCloseCircle className="bx bx-x" id="close-icon" size={30} />

            {/* <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i> */}
          </label>

          {/* Navbar Links */}
          <nav className="navbar">
            <Link to="/" style={{ "--i": 0 }}>
              Home
            </Link>
            {/* <Link to="" style={{ "--i": 2 }}>
              Join Our Network
            </Link> */}
          </nav>
        </header>
      </section>

      {/* hero */}

      <div className="row d-block border border-dar">
        <div className="flex-manager-hero-section">
          <div className="row">
            <h1 className="bg-row-h1">Revitalize Your Space on a Budget</h1>
          </div>
          <div className="row">
            <h4 className="bg-row-h4">
             Connect with Trusted Home Improvement 
              <br /> Contractors in Your Area
            </h4>
          </div>
          <div className="d-flex" id="bg-img-learn-div">
            <div className="bg-3div-class">
              <input
                className="bg-row-input" // Combine the classes into a single string
                type="text"
                id="zipcode"
                placeholder="Enter Zip code"
                name="zip"
                onChange={handleZipChange}
              />
            </div>
            <div className="main-select">
              <select
                className="bg-row-select"
                name="SERVICE REQUIRED"
                id="serviceSelect"
                value={selectedService} // Bind the value to the state
                onChange={handleSelectChange} // Update state on selection
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="/roofing">Roofing</option>
                <option value="/solar">Solar</option>
                <option value="/windows">Windows</option>
                <option value="/bathroom">Bathroom</option>
                <option value="/gutter">Gutter</option>
                <option value="/flooring">Flooring</option>
                <option value="/homewarranty">Home Warranty</option>
              </select>
            </div>
            <div id="bg-3div-btnn">
              <button
                id="bg-row-button"
                onClick={redirectToPage}
                className="btn btn-success"
              >
                Get Quotes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*<!------------------------------------- INFO BOX DIV --------------------------->*/}

      <div
        className="container d-flex w-100 info-inf0"
        id="info-main-container"
      >
        <div
          className="info-div"
          // style={{
          //   background: "var(--ALL-FONTS, #fff)",
          //   boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
          // }}
        >
          <Link to="/roofing">
            <div className="div-img-h2">
              <img className="divv-imagg" src={roofingimg} alt="Roofing" />
            </div>

            <div className="divv-h22">
              <h3 className="all-info-h3">Roofing</h3>
            </div>
            {/* <div className="divv-paraa">
              <p className="show-in-deskstop">
                Expert roofing contractors are near you. Are you ready for
                roofing contractors to transform your home?
              </p>
              <p className="show-in-phone">
                Expert roofing contractors are near you...
              </p>
            </div> */}
            <div className="learn-more-container">
              <Link to="/roofing">
                <div className="learn-more-div">
                  <img src={cursorimg} alt="cursor-img" />
                  <h5>
                    <Link to="/roofing">Learn More</Link>
                  </h5>
                </div>
              </Link>
            </div>
          </Link>
        </div>

        <div
          className="info-div"
          // style={{
          //   background: "var(--Iris-100, #fff)",
          //   boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
          // }}
        >
          <Link to="/solar">
            <div className="div-img-h2">
              <img className="divv-imagg" src={solarimg} alt="Solar" />
            </div>

            <div className="divv-h22">
              <h3 className="all-info-h3">Solar</h3>
            </div>
            {/* <div>
              <p className="show-in-deskstop">
                Save energy and cut costs with our expert solar contractors.
                Ready for a brighter, eco-friendly home?
              </p>
              <p className="show-in-phone">
                Save energy, cut costs with our expert solar contractors...
              </p>
            </div> */}

            <div className="learn-more-container">
              <Link to="/solar">
                <div className="learn-more-div">
                  <img src={cursorimg} alt="cursor-img" />
                  <Link to="/solar">Learn More</Link>
                </div>
              </Link>
            </div>
          </Link>
        </div>

        <div
          className="info-div"
          // style={{
          //   background: "var(--ALL-FONTS, #fff)",
          //   boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
          // }}
        >
          <Link to="/windows">
            <div className="div-img-h2">
              <img className="divv-imagg" src={windowimg} alt="Window" />
            </div>

            <div className="divv-h22">
              <h3 className="all-info-h3">Window</h3>
            </div>
            {/* <div>
              <p className="show-in-deskstop">
                Elevate your home's comfort with expert window solutions nearby.
                Ready for a cosier space and potential energy savings?
              </p>
              <p className="show-in-phone">
                Elevate your home's comfort with expert window solutions
                nearby...
              </p>
            </div> */}

            <div className="learn-more-container">
              <Link to="windows">
                <div className="learn-more-div">
                  <img src={cursorimg} alt="cursor-img" />
                  <Link to="/windows">Learn More</Link>
                </div>
              </Link>
            </div>
          </Link>
        </div>

        <div
          className="info-div"
          // style={{
          //   background: "var(--ALL-FONTS, #fff)",
          //   boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
          // }}
        >
          <Link to="/homeWarranty">
            <div className="div-img-h2">
              <img
                className="divv-imagg"
                src={homeWarrantyHomeImg}
                alt="Window"
              />
            </div>

            <div className="divv-h22">
              <h3 className="all-info-h3">HomeWarranty</h3>
            </div>
            {/* <div>
              <p className="show-in-deskstop">
                Elevate your home's comfort with expert window solutions nearby.
                Ready for a cosier space and potential energy savings?
              </p>
              <p className="show-in-phone">
                Elevate your home's comfort with expert window solutions
                nearby...
              </p>
            </div> */}

            <div className="learn-more-container">
              <Link to="/homeWarranty">
                <div className="learn-more-div">
                  <img src={cursorimg} alt="cursor-img" />
                  <Link to="/homeWarranty">Learn More</Link>
                </div>
              </Link>
            </div>
          </Link>
        </div>
        <div
          className="info-div"
          // style={{
          //   background: "var(--ALL-FONTS, #fff)",
          //   boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
          // }}
        >
          <Link to="/gutter">
            <div className="div-img-h2">
              <img className="divv-imagg" src={gutterHomeImg} alt="Window" />
            </div>

            <div className="divv-h22">
              <h3 className="all-info-h3">Gutter</h3>
            </div>
            {/* <div>
              <p className="show-in-deskstop">
                Elevate your home's comfort with expert window solutions nearby.
                Ready for a cosier space and potential energy savings?
              </p>
              <p className="show-in-phone">
                Elevate your home's comfort with expert window solutions
                nearby...
              </p>
            </div> */}

            <div className="learn-more-container">
              <Link to="/gutter">
                <div className="learn-more-div">
                  <img src={cursorimg} alt="cursor-img" />
                  <Link to="/gutter">Learn More</Link>
                </div>
              </Link>
            </div>
          </Link>
        </div>
        <div
          className="info-div"
          // style={{
          //   background: "var(--ALL-FONTS, #fff)",
          //   boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
          // }}
        >
          <Link to="/bathroom">
            <div className="div-img-h2">
              <img className="divv-imagg" src={bathroomHomeImg} alt="Window" />
            </div>

            <div className="divv-h22">
              <h3 className="all-info-h3">Bathroom</h3>
            </div>
            {/* <div>
              <p className="show-in-deskstop">
                Elevate your home's comfort with expert window solutions nearby.
                Ready for a cosier space and potential energy savings?
              </p>
              <p className="show-in-phone">
                Elevate your home's comfort with expert window solutions
                nearby...
              </p>
            </div> */}

            <div className="learn-more-container">
              <Link to="/bathroom">
                <div className="learn-more-div">
                  <img src={cursorimg} alt="cursor-img" />
                  <Link to="/bathroom">Learn More</Link>
                </div>
              </Link>
            </div>
          </Link>
        </div>
        <div
          className="info-div"
          // style={{
          //   background: "var(--ALL-FONTS, #fff)",
          //   boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
          // }}
        >
          <Link to="/flooring">
            <div className="div-img-h2">
              <img className="divv-imagg" src={FlooringHomeImg} alt="Window" />
            </div>

            <div className="divv-h22">
              <h3 className="all-info-h3">Flooring</h3>
            </div>
            {/* <div>
              <p className="show-in-deskstop">
                Elevate your home's comfort with expert window solutions nearby.
                Ready for a cosier space and potential energy savings?
              </p>
              <p className="show-in-phone">
                Elevate your home's comfort with expert window solutions
                nearby...
              </p>
            </div> */}

            <div className="learn-more-container">
              <Link to="/flooring">
                <div className="learn-more-div">
                  <img src={cursorimg} alt="cursor-img" />
                  <Link to="/flooring">Learn More</Link>
                </div>
              </Link>
            </div>
          </Link>
        </div>
      </div>

      {/* on mobile  */}
      <div className="sliderInfoDiv">
        <Slider {...sliderSettings}>
          {/* Roofing Section */}

          <div
            className="infoslider"
            style={{
              background: "var(--ALL-FONTS, #fff)",
              boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
            }}
          >
            <Link to="/roofing">
              <div className="div-img-h2">
                <img className="divv-imagg" src={roofingimg} alt="Roofing" />
              </div>
              <h3 className="all-info-h3">Roofing</h3>
              <p className="show-in-deskstop">
                Expert roofing contractors are near you. Are you ready for
                roofing contractors to transform your home?
              </p>
              <p className="show-in-phone">
                Expert roofing contractors are near you...
              </p>
              <div className="learn-more-container">
                <Link to="/roofing">
                  <div className="learn-more-div">
                    <img src={cursorimg} alt="cursor-img" />
                    <h5>Learn More</h5>
                  </div>
                </Link>
              </div>
            </Link>
          </div>

          {/* Solar Section */}
          <div
            className=""
            style={{
              background: "var(--Iris-100, #fff)",
              boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
            }}
          >
            <Link to="/solar">
              <div className="div-img-h2">
                <img className="divv-imagg" src={solarimg} alt="Solar" />
              </div>
              <h3 className="all-info-h3">Solar</h3>
              <p className="show-in-deskstop">
                Save energy and cut costs with our expert solar contractors.
                Ready for a brighter, eco-friendly home?
              </p>
              <p className="show-in-phone">
                Save energy, cut costs with our expert solar contractors...
              </p>
              <div className="learn-more-container">
                <Link to="/solar">
                  <div className="learn-more-div">
                    <img src={cursorimg} alt="cursor-img" />
                    <h5>Learn More</h5>
                  </div>
                </Link>
              </div>
            </Link>
          </div>

          {/* Window Section */}
          <div
            className=""
            style={{
              background: "var(--ALL-FONTS, #fff)",
              boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
            }}
          >
            <Link to="/windows">
              <div className="div-img-h2">
                <img className="divv-imagg" src={windowimg} alt="Window" />
              </div>
              <h3 className="all-info-h3">Window</h3>
              <p className="show-in-deskstop">
                Elevate your home's comfort with expert window solutions nearby.
                Ready for a cosier space and potential energy savings?
              </p>
              <p className="show-in-phone">
                Elevate your home's comfort with expert window solutions
                nearby...
              </p>
              <div className="learn-more-container">
                <Link to="/windows">
                  <div className="learn-more-div">
                    <img src={cursorimg} alt="cursor-img" />
                    <h5>Learn More</h5>
                  </div>
                </Link>
              </div>
            </Link>
          </div>

          {/* Home Warranty Section */}
          <div
            className=""
            style={{
              background: "var(--ALL-FONTS, #fff)",
              boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
            }}
          >
            <Link to="/homeWarranty">
              <div className="div-img-h2">
                <img
                  className="divv-imagg"
                  src={homeWarrantyHomeImg}
                  alt="Home Warranty"
                />
              </div>
              <h3 className="all-info-h3">Home Warranty</h3>
              <p className="show-in-deskstop">
                Protect your home with expert home warranty services nearby. Get
                peace of mind and ensure your home’s systems are covered.
              </p>
              <p className="show-in-phone">
                Protect your home with expert warranty services nearby...
              </p>
              <div className="learn-more-container">
                <Link to="/homeWarranty">
                  <div className="learn-more-div">
                    <img src={cursorimg} alt="cursor-img" />
                    <h5>Learn More</h5>
                  </div>
                </Link>
              </div>
            </Link>
          </div>

          {/* Gutter Section */}
          <div
            className=""
            style={{
              background: "var(--ALL-FONTS, #fff)",
              boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
            }}
          >
            <Link to="/gutter">
              <div className="div-img-h2">
                <img className="divv-imagg" src={gutterHomeImg} alt="Gutter" />
              </div>
              <h3 className="all-info-h3">Gutter</h3>
              <p className="show-in-deskstop">
                Ensure your home is protected from water damage with expert
                gutter installation and cleaning services nearby.
              </p>
              <p className="show-in-phone">
                Protect your home with expert gutter solutions...
              </p>
              <div className="learn-more-container">
                <Link to="/gutter">
                  <div className="learn-more-div">
                    <img src={cursorimg} alt="cursor-img" />
                    <h5>Learn More</h5>
                  </div>
                </Link>
              </div>
            </Link>
          </div>

          {/* Bathroom Section */}
          <div
            className=""
            style={{
              background: "var(--ALL-FONTS, #fff)",
              boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
            }}
          >
            <Link to="/bathroom">
              <div className="div-img-h2">
                <img
                  className="divv-imagg"
                  src={bathroomHomeImg}
                  alt="Bathroom"
                />
              </div>
              <h3 className="all-info-h3">Bathroom</h3>
              <p className="show-in-deskstop">
                Transform your bathroom with expert renovation services. Ready
                for a luxurious bathroom makeover?
              </p>
              <p className="show-in-phone">
                Transform your bathroom with expert renovation...
              </p>
              <div className="learn-more-container">
                <Link to="/bathroom">
                  <div className="learn-more-div">
                    <img src={cursorimg} alt="cursor-img" />
                    <h5>Learn More</h5>
                  </div>
                </Link>
              </div>
            </Link>
          </div>

          {/* Flooring Section */}
          <div
            className=""
            style={{
              background: "var(--ALL-FONTS, #fff)",
              boxShadow: "8px 4px 16.6px 0px rgba(0, 0, 0, 0.62)",
            }}
          >
            <Link to="/flooring">
              <div className="div-img-h2">
                <img
                  className="divv-imagg"
                  src={FlooringHomeImg}
                  alt="Flooring"
                />
              </div>
              <h3 className="all-info-h3">Flooring</h3>
              <p className="show-in-deskstop">
                Upgrade your flooring with high-quality materials and expert
                installation. Ready to enhance your home’s look and feel?
              </p>
              <p className="show-in-phone">
                Upgrade your flooring with high-quality materials...
              </p>
              <div className="learn-more-container">
                <Link to="/flooring">
                  <div className="learn-more-div">
                    <img src={cursorimg} alt="cursor-img" />
                    <h5>Learn More</h5>
                  </div>
                </Link>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
      {/* <!-- house-&-blue-section start --> */}

      <div id="house-n-blue">
        <div id="blue-house-img">
          <img src={houseimg} alt="House" />
        </div>
        <div id="text-content">
          <h4>
            Streamline Your Home Renovation:
            <br />
            Certified Contractors Near You, Just a
            <br />
            Click Away with <b>eHome Quote</b>
          </h4>
          <p>
            eHomeQuote is more than a contractor-matching service – we are your
            trusted companion in the journey of home improvement. Access
            certified home remodelling contractors operating within 10 miles of
            you, eliminating the guesswork in selecting the right professional
            for your project. Our commitment extends beyond the match;
            recognizing the challenges of home improvements, we provide valuable
            insights on popular renovation jobs and their associated costs.
            Uncover the full potential of your home with eHomeQuote – your
            reliable and personalized solution to remodeling. Explore our
            contractors in your vicinity and kickstart your
            home improvement today!
          </p>
          <span
            data-toggle="modal"
            data-target="#exampleModalForm"
            style={{ cursor: "pointer" }}
          >
            <button
              className="gradient-button"
              style={{ borderRadius: "20px" }}
            >
              GET A QUOTE
            </button>
          </span>
        </div>
      </div>

      {/* video section */}
      {/*
      <div id="video-section">
        <div className="Main-div">
          <Link to="/roofing">
            <video autoPlay muted loop>
              <source src={Roofing_Video} type="video/mp4" />
            </video>
          </Link>
          <Link to="/roofing">
            <div className="Project-Name-With-Arrow">
              <h4>Roofing</h4>
              <img src={BlackArrow} alt="Arrow" />
            </div>
          </Link>
        </div>
        <div className="Main-div">
          <Link to="/solar">
            <video autoPlay muted loop>
              <source src={Gallary_Ehome} type="video/mp4" />
            </video>
          </Link>
          <Link to="/solar">
            <div className="Project-Name-With-Arrow">
              <h4>Solar</h4>
              <img src={BlackArrow} alt="Arrow" />
            </div>
          </Link>
        </div>
      </div> */}

      {/* step  */}
      <div id="three-step-container">
        <h4 id="three-step-heading">
          Locate Experts in <br />
          <b>3 Easy Steps</b>
        </h4>

        <div id="three-steps-img-container">
          {/* Use the 'src' relative path, or import the image directly */}
          <img src={Threestepsimg} alt="Three Steps" />
        </div>
      </div>
      {/* next logo 's div */}

      <div className="container" id="onemore-bg-img">
        <div className="text-center mb-1" id="onemore-firstdiv">
          <h2 className="Logo-main-h2">
            Our trusted <br />
            <span className="h2-green">partner</span>
          </h2>
        </div>
        <div className="d-flex w-100 partner-manager">
          <img
            className="logo-img-div"
            src={kiddroofingimg}
            alt="Kidd Roofing"
          />
          <img
            className="logo-img-div"
            src={cornettroofindsystemsimg}
            alt="Cornett Roofing Systems"
          />
          <img
            className="logo-img-div"
            src={environmentalroofingimg}
            alt="Environmental Roofing"
          />
          <img
            className="logo-img-div"
            src={citadelroofingandsolarimg}
            alt="Citadel Roofing and Solar"
          />
        </div>
      </div>
      <div id="house-n-blue" className="second-house-n-blue">
        <div id="blue-house-img">
          <img src={happyOwnerImg} alt="Happy Home Owner" />
        </div>
        <div id="text-content">
          <h4>
            A lot of Happy
            <br />
            Home Owners
            <br />
          </h4>
          <p>
            Why is eHome Quote different? In simple words, eHome Quote is more
            than a contractor matching service. We surveyed more than 20
            neighbourhood areas to understand the difficulties homeowners face
            while looking for a home improvement expert. We understand that your
            home is special and should only be taken care of by a professional.
            Our Contractor matching service transforms your house into a
            beautiful home for your loved ones. See what our homeowners have to
            say about eHome Quote.
          </p>
        </div>
      </div>

      {/*start slider */}

      <div className="mt-5">
        <div className="text-center m-0">
          <h2
            style={{
              fontFamily: "Poppins",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "41px",
              letterSpacing: "0em",
            }}
          >
            What our customers say about us?
          </h2>
        </div>
        <Slider {...settings}>
          {testimonials?.map((item, index) => (
            <div className="testimonial" key={index}>
              <div className="testimonial-card">
                <div className="card-image">
                  <img src={item.img} alt={`Testimonial ${index}`} />
                </div>
                <div className="card-text-content">
                  <p className="card-text">{item.text}</p>
                  <p className="giver-name">{item.name}</p>
                  <p className="sub-title-name">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* end */}
      <div className="gradient-div">
        <h2 className="gradient-h2">
          Looking for verified contractors
          <br />
          in your area?
        </h2>
        <div id="btn-container-verified-cta">
          <div>
            <span
              data-toggle="modal"
              data-target="#exampleModalForm"
              style={{ cursor: "pointer" }} // Inline style in React
            >
              <button
                type="submit"
                id="bg-row-button"
                className="btn btn-success"
              >
                Explore Best Contractors
              </button>
            </span>
          </div>
        </div>
      </div>
      {/*  Home-Improvment-contact-servic */}
      <div className="Improvment-contact-service">
        {/* Improvement Header */}
        <div className="Improvment-h2">
          <h2 className="impro-head2">Update Your Home with</h2>
          <h2 className="impro-head2">
            <span className="h2-green">
              Home Improvement Contractors Services
            </span>
          </h2>
        </div>

        {/* First section: Roofing Experts */}
        <div className="house-n-content">
          <div className="img-left-container">
            <img src={Lefthouseimprovementimg} alt="Left house improvement" />
          </div>
          <div className="right-side-text">
            <h4 className="main-heading-improvement">Locate Roofing Experts</h4>
            <p className="sub-heading-improvement">
              Is your roof not showing any signs of leak or damage? Wondering
              what to do in a situation like this? In a situation like this, it
              is ideal to get your roof checked every 3-6 months. While your
              roof may be looking perfectly fine, there could be damage beneath
              it. <br />
              Now, it becomes easy to waste time looking for expert roofing
              contractors via phonebooks and contacts. With eHome Quote, you can
              easily find multiple contractors and compare quotes quickly. Click
              on Know More, fill the form with your correct details, and our
              experts will send you verified contractors in less than a minute.
            </p>
            <div>
              <Link to="/roofing">
                <Link to="/roofing">
                  <button id="bg-row-button" className="btn know-more-btn">
                    KNOW MORE{" "}
                    <img src={knowmorenearicon} alt="Know More Icon" />
                  </button>
                </Link>
              </Link>
            </div>
          </div>
        </div>

        {/* Second section: Solar Experts */}
        <div className="house-n-content-right">
          <div className="left-side-text">
            <h4 className="main-heading-improvement left-text">
              Locate Solar Experts
            </h4>
            <p className="sub-heading-improvement">
              eHome Quote is a lifesaver for homeowners seeking trustworthy
              contractors in their local area. With us, there's no need to
              dedicate endless hours to declutter your schedule in a quest to
              find the best solar companies nearby or endure lengthy waits for
              custom quotes. We revolutionize the contractor hiring process by
              removing the most time-consuming and tedious tasks from your
              plate. <br />
              <br />
              Once you experience the efficiency of the eHome Quote platform,
              you'll be drawn back. Click on Know More, fill the form with your
              correct details, and our experts will send you verified
              contractors in less than a minute.
            </p>
            <div className="left-button">
              <Link to="/solar">
                <button id="bg-row-button" className="btn know-more-btn">
                  KNOW MORE <img src={knowmorenearicon} alt="Know More Icon" />
                </button>
              </Link>
            </div>
          </div>
          <div className="img-right-container">
            <img
              src={rightimprovementbuilding}
              alt="Right improvement building"
            />
          </div>
        </div>

        {/* Third section: Window Experts */}
        <div className="house-n-content">
          <div className="img-left-container">
            <img src={windowleftimprovementimg} alt="Window left improvement" />
          </div>
          <div className="right-side-text">
            <h4 className="main-heading-improvement">Locate Window Experts</h4>
            <p className="sub-heading-improvement">
              In search of the ideal window contractor to elevate your home?
              Explore our carefully screened local contractors for window
              repairs, ensuring that you receive optimal value for your
              investment. Gain entry to the industry's leading experts, solicit
              their quotes, and compare quotes. <br />
              Delegate the tedious work to enhance your home's windows to the
              foremost local professional, considering their expertise and
              customer reviews. Finalize all the necessary details and formalize
              the agreement confidently.
            </p>
            <div>
              <Link to="/windows">
                <Link to="/windows">
                  <button id="bg-row-button" className="btn know-more-btn">
                    KNOW MORE{" "}
                    <img src={knowmorenearicon} alt="Know More Icon" />
                  </button>
                </Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- benefit --> */}
      <div id="benefit-container">
        <div id="left-text-benefit">
          <h4 id="heading-benefit">
            How will you benefit from using{" "}
            <span className="h2-green"> eHome Quote</span>? Here’s why!
          </h4>
          <p id="sub-heading-benefit">
            From transforming windows, to the best solar contractors near you,
            eHome Quote takes care of all your needs. Our mission is to identify
            your existing home improvement requirements, identifying the right
            contractors for you, and making sure we match you with the right
            contractor services for you as well.
          </p>
          <div>
            <button id="bg-row-button" className="btn know-more-btn">
              Read More <img src={knowmorenearicon} alt="Know More Icon" />
            </button>
          </div>
        </div>
        <div id="quality-grid">
          <div className="grid-item-benefit">
            <img src={qualityimg1} alt="Effortless Local Contractor Search" />
            <p>
              Effortless Local
              <br />
              Contractor Search
            </p>
          </div>
          <div className="grid-item-benefit">
            <img src={qualityimg2} alt="Rigorous Contractor Vetting Process" />
            <p>
              Rigorous Contractor
              <br />
              Vetting Process
            </p>
          </div>
          <div className="grid-item-benefit">
            <img src={qualityimg3} alt="Tailored Contractor Lists" />
            <p>
              Tailored <br />
              Contractor Lists
            </p>
          </div>
          <div className="grid-item-benefit">
            <img src={qualityimg4} alt="On-time Assistance" />
            <p>
              On-time
              <br />
              Assistance
            </p>
          </div>
        </div>
      </div>
      {/* <!-- benefit end --> */}

      {/* blog data */}

      <div id="blogs">
        <h2>
          Our <span className="h2-green"> blogs</span>
        </h2>

        <div className="blog-container">
          <div className="blog-block">
            <div className="img-container-block">
              <img src={blogimg1} alt="Blog 1" />
            </div>
            <div className="text-container-blog">
              <h5 className="blog-heading">Lorem ipsum dolor sit amet, con</h5>
              <p className="blog-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullam corper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis
              </p>
              <div>
                <button
                  id="bg-row-button"
                  className="btn know-more-btn blog-btn"
                >
                  Read More <img src={knowmorenearicon} alt="Read More Icon" />
                </button>
              </div>
            </div>
          </div>

          <div className="blog-block-left">
            <div className="img-container-block">
              <img src={blogimg1} alt="Blog 2" />
            </div>
            <div className="text-container-blog-left">
              <h5 className="blog-heading">Lorem ipsum dolor sit amet, con</h5>
              <p className="blog-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullam corper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis
              </p>
              <div>
                <button
                  id="bg-row-button"
                  className="btn know-more-btn blog-btn"
                >
                  Read More <img src={knowmorenearicon} alt="Read More Icon" />
                </button>
              </div>
            </div>
          </div>

          <div className="blog-block">
            <div className="img-container-block">
              <img src={blogimg1} alt="Blog 3" />
            </div>
            <div className="text-container-blog">
              <h5 className="blog-heading">Lorem ipsum dolor sit amet, con</h5>
              <p className="blog-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullam corper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis
              </p>
              <div>
                <button
                  id="bg-row-button"
                  className="btn know-more-btn blog-btn"
                >
                  Read More <img src={knowmorenearicon} alt="Read More Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  inspiration*/}
      <div id="inspiration">
        <div className="img-Container">
          <img src={LeftImg} alt="Left Inspiration Image" />
        </div>
        <div id="Center-inspiration-part">
          <div id="Center-Text">
            <h2>
              Want Inspiration? <br />
              <b>
                {" "}
                <span className="h2-green"> Check out our work! </span>
              </b>
            </h2>
          </div>
          <div id="Center-img-Container">
            <div className="Small-center-img">
              <img src={CenterImg1} alt="Center Inspiration Image 1" />
            </div>
            <div className="Small-center-img">
              <img src={CenterImg2} alt="Center Inspiration Image 2" />
            </div>
          </div>
        </div>
        <div className="img-Container">
          <img src={RightImg} alt="Right Inspiration Image" />
        </div>
      </div>

      <div id="related-services">
        <h2>Related Services Near You</h2>
        <div id="services-manager">
          <div className="services-columns">
            <div className="services">
              <h6>Solar installations near me</h6>
              <h6>Solar companies near me</h6>
              <h6>Solar repair near me</h6>
              <h6>Repair existing solar near me</h6>
            </div>
          </div>

          <div className="services-columns">
            <div className="services">
              <h6>Roofing contractor</h6>
              <h6>Roofing companies</h6>
              <h6>Roofing contractors near me</h6>
              <h6>Local roofing companies</h6>
            </div>
          </div>

          <div className="services-columns">
            <div className="services">
              <h6>Windows contractors</h6>
              <h6>Window companies near me</h6>
              <h6>Window replacement companies near me</h6>
              <h6>Window installation companies near me</h6>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "45%",
          border: "0.1px solid #4c4e3d",
          margin: "50px auto 20px auto",
        }}
      ></div>
      <p
        style={{
          padding: "0 5%",
          textAlign: "center",
          color: "#4c4e3d",
          fontSize: "small",
        }}
      >
        eHomeQuote is a free service to assist homeowners in connecting with
        local service providers. All contractors/providers are independent and
        eHomeQuote does not warrant or guarantee any work performed. It is the
        responsibility of the homeowner to verify that the hired contractor
        furnishes the necessary license and insurance required for the work
        performed. All persons depicted in a photo or video are actors or models
        and not contractors listed on eHomeQuote.
      </p>

      <Footer />
    </>
  );
};

export default index;
