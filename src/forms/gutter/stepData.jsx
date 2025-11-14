import WindowReplacement from "../../assets/windowLogo/windowReplacement.png"
import WindowRepair from "../../assets/windowLogo/windowRepair.png"
// import WindowInstallation from "../../assets/windowLogo/windowInstallation.png"
// import WindowInstallation from "../../assets/gutt/windowInstallation.png"
import gutterGurd from "../../assets/gutterLogo/gutterGurd.png";
import installation from "../../assets/gutterLogo/installation.jpg";
import construction from  "../../assets/gutterLogo/construction.png";

const step1data = [
    {
        id: 1,
        image: installation,
        text: 'Gutter Installation',
        projectType : "INSTALLATION"
        
    },
    {
        id: 2,
        image: construction,
        text: 'Gutter Repair',
        projectType : "REPAIR"
    },
    {
        id: 3,
        image: gutterGurd,
        text: 'Gutter Guard',
        projectType : "GUARD"
    },
]

const step2data = [
    {
        id: 1,
        text: 'Excellent 640 - 700+',
        credits : "EXCELLENT"
    },
    {
        id: 2,
        text: 'Good 640 - 640',
        credits : "GOOD"
    },
    {
        id: 3,
        text: 'Fair 560 - 600',
        credits : "FAIR"
    },
    {
        id: 4,
        text: 'Poor < 560',
        credits : "POOR"
    },
]

const step3Data = [

    {
        id: 1,
        text: '$125,000+',
        count : '$125,000+'
    },
    {
        id: 2,
        text: '$100,000 to $124,999',
        count: '$100,000 to $124,999'
    },
    {
        id: 3,
        text: '$75,000 to $99,999',
        count : '$75,000 to $99,999'
    },
    {
        id: 4,
        text: '$50,000 to $74,999',
        count : '$50,000 to $74,999'
    },
   
]


export { step1data, step2data, step3Data }