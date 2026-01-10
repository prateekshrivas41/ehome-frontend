
import Remodeling from "../../assets/bathroomLogo/sink.png"
import Shower from "../../assets/bathroomLogo/shower.png"
import Bath from "../../assets/bathroomLogo/bath.png"
import FixturesUpgrade from "../../assets/bathroomLogo/fixture.png"

const step1data = [
    {
        id: 1,
        image: Shower,
        text: 'Shower Remodel',
        projectType : "SHOWER_REMODEL"
    },
    {
        id: 2,
        image: Bath,
        text: 'Tub to Shower Conversion',
        projectType : "TUB_TO_SHOWER_CONVERSION"
        
    },
    {
        id: 3,
        image: Remodeling,
        text: 'Bathtub Remodel',
        projectType : "BATHTUB_REMODEL"
    },
    {
        id: 4,
        image: FixturesUpgrade,
        text: 'Remodel Surrounding Walls',
        projectType : "REMODEL_SURROUNDING_WALLS"
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
export const step2data = [
    { id: 1, text: 'Main Bathroom with Tub or Shower', value: 'MAIN_BATHROOM' },
    { id: 2, text: 'Other bathroom with tub and or shower', value: 'OTHER_BATHROOM' },
    { id: 3, text: 'Bathroom with toilet and sink only', value: 'TOILET_SINK_ONLY' },
    { id: 4, text: 'More than one bathroom', value: 'MULTIPLE_BATHROOMS' },
];

export const step4data = [
    { id: 1, text: 'Nothing/not sure', value: 'NONE' },
    { id: 2, text: 'Sink and faucet(s)', value: 'SINK_FAUCET' },
    { id: 3, text: 'Toilet', value: 'TOILET' },
    { id: 4, text: 'Vanity cabinet/countertop', value: 'VANITY' },
    { id: 5, text: 'Lights', value: 'LIGHTS' },
    { id: 6, text: 'Floors', value: 'FLOORS' },
    { id: 7, text: 'Paint the walls', value: 'PAINT' },
    { id: 8, text: 'Tile the walls', value: 'TILE' },
];
