import React from 'react';
import PropTypes from 'prop-types';
import './FormTabs.css';


const FormTabs = ({ steps, activeStep, onTabClick, orientation = 'vertical', isTabEnabled }) => {
  const containerClass = orientation === 'horizontal' ? 'form-tabs-horizontal' : 'form-tabs-vertical';
  return (
    <div className={containerClass}>
      <button
        className={`form-tab`}
        id='home-btn'
        onClick={() => onTabClick(0)}
        disabled={isTabEnabled ? !isTabEnabled(0) : false}
        type="button"
        title='Home'
      >
        Home
        {/* &lt; */}
      </button>
      {steps.map((step, idx) => {
        const enabled = isTabEnabled ? isTabEnabled(idx + 1) : true;
        return (
          <button
            key={step.label || idx}
            className={`form-tab${activeStep === idx + 1 ? ' active' : ''}`}
            onClick={() => onTabClick(idx + 1)}
            disabled={!enabled}
            type="button"
          >
            {step.icon && <span className="tab-icon">{step.icon}</span>}
            {step.label}
          </button>
        );
      })}
    </div>
  );
};


FormTabs.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  activeStep: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  isTabEnabled: PropTypes.func,
};

export default FormTabs;
