
import Remodeling from "../../assets/bathroomLogo/sink.png"
import Shower from "../../assets/bathroomLogo/shower.png"
import Bath from "../../assets/bathroomLogo/bath.png"
import FixturesUpgrade from "../../assets/bathroomLogo/FixturesUpgrade.png"

const step1data = [
    {
        id: 1,
        image: Bath,
        text: 'Tub to Shower Conversion',
        projectType : "TUB_TO_SHOWER_CONVERSION"
        
    },
    {
        id: 2,
        image: Shower,
        text: 'Shower Installation',
        projectType : "SHOWER_INSTALLATION"
    },
    {
        id: 3,
        image: Remodeling,
        text: 'Bathroom Remodeling',
        projectType : "BATHROOM_REMODELING"
    },
    {
        id: 4,
        image: FixturesUpgrade,
        text: 'Fixtures Upgrade',
        projectType : "FIXTURES_UPGRADE"
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


export { step1data, step3Data }