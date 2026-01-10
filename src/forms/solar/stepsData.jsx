import WindowReplacement from "../../assets/windowLogo/windowReplacement.png";
import WindowRepair from "../../assets/windowLogo/windowRepair.png";
import WindowInstallation from "../../assets/windowLogo/windowInstallation.png";

const step1data = [
  {
    id: 1,
    image: WindowInstallation,
    text: "$101-150",
    projectType: "$101-150",
  },
  {
    id: 2,
    image: WindowRepair,
    text: "$151-200",
    projectType: "$151-200",
  },
  {
    id: 3,
    image: WindowReplacement,
    text: "$201-300",
    projectType: "$301-400",
  }, {
    id: 4,
    image: WindowReplacement,
    text: "$301-400",
    projectType: "$301-400",
  },
  {
    id: 5,
    image: WindowReplacement,
    text: "$400+",
    projectType: "$400+",
  },
];

const step3data = [
  {
    id: 1,
    text: "Full Sunlight",
    count: "Full Sunlight",
  },
  {
    id: 2,
    text: "Partial Shade",
    count: "Partial Shade",
  },
  {
    id: 3,
    text: "Heavy Shade",
    count: "Heavy Shade",
  },
  {
    id: 4,
    text: "Uncertain",
    count: "Uncertain",
  },
];

const step2Data = [
  {
    id: 1,
    text: "Excellent",
    credits: "EXCELLENT",
  },
  {
    id: 2,
    text: "Good",
    credits: "GOOD",
  },
  {
    id: 3,
    text: "Fair",
    credits: "FAIR",
  },
  {
    id: 4,
    text: "Poor",
    credits: "POOR",
  },
];

const step4Data = [
  {
    id: 1,
    text: "YES",
  },
  {
    id: 2,
    text: "NO",
  },
];

const step5Data = [
  {
    id: 1,
    text: "Immediately",
  },
  {
    id: 2,
    text: "Within a month",
  },
  {
    id: 3,
    text: "1-3 month",
  },
  {
    id: 5,
    text: "3+ month",
  },
  {
    id: 6,
    text: "Flexible",
  },
];

const step6Data = [
  {
    id: 1,
    text: "Pacific gas and electric",
  },
  {
    id: 2,
    text: "Southern california edison",
  },
  {
    id: 3,
    text: "Florida Power and light",
  },
  {
    id: 5,
    text: "Consolidated Edison",
  },
  {
    id: 6,
    text: "Other",
  },
];

function solarDataAdjust(data) {
  let newData;
  if (data === "Full Sunlight") {
    newData = "NO_SHADE";
  } else if (data === "Partial Shade") {
    newData = "A_LITTLE_SHADE";
  } else if (data === "Heavy Shade") {
    newData = "A_LOT_OF_SHADE";
  } else if (data === "Uncertain") {
    newData = "UNCERTAIN";
  }
  return newData;
}

function solarDataAdjust1(data) {
  let newData;
  if (data === "Immediately") {
    newData = "IMMEDIATELY";
  } else if (data === "Within a month") {
    newData = "WITHIN_A_MONTH";
  } else if (data === "1-3 months") {
    newData = "ONE_TO_THREE_MONTHS";
  } else if (data === "3+ months") {
    newData = "THREE_OR_MORE_MONTHS";
  } else if (data === "Flexible") {
    newData = "FLEXIBLE";
  }
  return newData;
}

function solarDataAdjust2(data) {
  let newData;
  if (data === "$101-150") {
    newData = 150;
  } else if (data === "$151-200") {
    newData = 200;
  } else if (data === "$201-300") {
    newData = 300;
  } else if (data === "$301-400") {
    newData = 400;
  } else if (data === "$401+") {
    newData = 1000;
  }
  return newData;
} 

function solarDataAdjust3(data) {
  let newData;
  if (data === "Pacific gas and electric") {
    newData = "PACIFIC_GAS_AND_ELECTRIC";
  } else if (data === "Southern california edison") {
    newData = "SOUTHERN_CALIFORNIA_EDISON";
  } else if (data === "Florida Power and light") {
    newData = "FLORIDA_POWER_AND_LIGHT";
  } else if (data === "Consolidated Edison") {
    newData = "CONSOLIDATION_EDISON";
  } else if (data === "Other") {
    newData = "OTHER";
  }
  return newData;
}

export {
  step1data,
  step2Data,
  step3data,
  step4Data,
  step5Data,
  step6Data,
  solarDataAdjust,
  solarDataAdjust1,
  solarDataAdjust2,
  solarDataAdjust3,
};
