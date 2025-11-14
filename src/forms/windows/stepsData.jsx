import WindowReplacement from "../../assets/windowLogo/windowReplacement.png"
import WindowRepair from "../../assets/windowLogo/windowRepair.png"
import WindowInstallation from "../../assets/windowLogo/windowInstallation.png"

const step1data = [
    {
        id: 1,
        image: WindowInstallation,
        text: 'New window installation',
        projectType : "INSTALL"
        
    },
    {
        id: 2,
        image: WindowRepair,
        text: 'Window repair',
        projectType : "REPAIR"
    },
    {
        id: 3,
        image: WindowReplacement,
        text: 'Window replacement',
        projectType : "REPLACE"
    },
]

const step2data = [
    {
        id: 1,
        text: '10+ windows',
        count : 'TEN_OR_MORE'
    },
    {
        id: 2,
        text: '1-2 windows',
        count: 'ONE_TO_TWO'
    },
    {
        id: 3,
        text: '3-5 windows',
        count : 'THREE_TO_FIVE'
    },
    {
        id: 4,
        text: '6-9 windows',
        count : 'SIX_TO_NINE'
    },
]

const step3Data = [
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


export { step1data, step2data, step3Data }