import { Button } from "@mui/material"
import React from "react"
import PropTypes from "prop-types"
import "./prevNext.css"
import { colors } from "../../constants/Colors"

const PrevNextButtom = React.forwardRef(
  function PrevNextButtom({ nextClick, prevClick, nextText, backDisable, nextDisable }, ref) {
    return (
      <div className="sticky-form-nav form-next-prev-buttons" ref={ref}>
        <Button
          type="button"
          onClick={prevClick}
          disabled={backDisable}
          variant="contained"
          sx={{
            height: 40,
            backgroundColor: 'transparent'
          }}
          style={{
            width: '130px', fontSize: '13px',
            fontFamily: 'poppins',
            textTransform: 'capitalize',
            color: '#000000'
          }}
          id="main-btn1"
        >
          Back
        </Button>
        <Button
          type="button"
          disabled={nextDisable}
          onClick={nextClick}
          variant="contained"
          sx={{
            height: 40,
            backgroundColor: colors.primaryGreen
          }}
          style={{
            width: '130px', fontSize: '13px',
            fontFamily: 'poppins',
            textTransform: 'capitalize'
          }}
          id="main-btn1"
        >
          {nextText}
        </Button>
      </div>
    );
  }
);

PrevNextButtom.displayName = "PrevNextButtom";

PrevNextButtom.propTypes = {
  nextClick: PropTypes.func.isRequired,
  prevClick: PropTypes.func.isRequired,
  nextText: PropTypes.string.isRequired,
  backDisable: PropTypes.bool,
  nextDisable: PropTypes.bool,
};

export default PrevNextButtom;