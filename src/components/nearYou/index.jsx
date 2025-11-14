import React, { useState } from "react"
import "./nearYou.css"
import { Button } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import { getMyLocation } from "../../service/Location";

export default function NearYou({ data  , heading ,redirectUrl}) {
    const [location, setLocation] = useState({
        city: '',
        state: '',
        country: ''
    });
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };
    
    const handleRedirect = () => {
        scrollToTop(); 
         setTimeout(() => {
          window.location.href = redirectUrl; 
        }, 600); 
      };
    React.useEffect(() => {
        getMyLocation(function (callback) {
            setLocation(callback)
        })
    }, [])
    return (
        <div className="mainContainer" >
            <div className="heading"><div className="windowText"> {heading} Contractors </div>{ location.city.length > 0 ? "In" : null} {location.city} {location.state} { location.city.length > 0 ? null : "Near You"}</div>
            <div className="questions" >
            {data.map((item) => {
    return (
        <div key={item.id || item.name} className="nearyou-container"> {/* Ensure a unique key */}
            <div className="nearyou-logo-container">
                <img src={item.logo} width={100} height={100} style={{ borderRadius: 100 }} />
            </div>
            <div className="title">{item.name}</div>
            <div className="star-rating">
                <div className="rating">5.0</div>
                {[1, 2, 3, 4, 5].map((_, index) => { // Add key for StarIcon elements too
                    return (
                        <div key={index}> {/* Ensure a unique key here as well */}
                            <StarIcon style={{ color: '#FCD010' }} fontSize="10px" />
                        </div>
                    );
                })}
            </div>
            <div className="sub-container">
                <div className="description">
                    {item.description}
                </div>

                <Button
                    onClick={handleRedirect}
                    type="submit"
                    variant="contained"
                    sx={{
                        height: 40,
                        backgroundColor: '#5352C9'
                    }}
                    style={{
                        width: '180px', fontSize: '13px',
                        fontFamily: 'poppins',
                        textTransform: 'capitalize'
                    }}
                    id="main-btn"
                >
                    Request a Quote
                </Button>
            </div>
        </div>
    )
})}
            </div>
        </div>
    )
}