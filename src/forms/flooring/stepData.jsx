import Refinish from "../../assets/flooringLogo/refinish.jpg"
import Repair from "../../assets/flooringLogo/repair.jpg"
import Replace from "../../assets/flooringLogo/replace.png"
import Hardwood from "../../assets/flooringLogo/Hardwood.jpg"
import Laminate from "../../assets/flooringLogo/Laminate.jpg"
import vinylplank from "../../assets/flooringLogo/vinylplank.jpg"
import Wood from "../../assets/flooringLogo/Wood.jpg"
import Tile from "../../assets/flooringLogo/Tile.jpg"
import Carpet from "../../assets/flooringLogo/Carpet.jpg"


  
const step1data = [
    { id: 1, img : Replace ,value: "REPLACE" , text : "Replace" }, // Replace icon path
    { id: 2, img: Repair, value: "REPAIR", text: "Repair" },   // Repair icon path
    { id: 3, img : Refinish,  value: "REFINISH" , text :"Refinish" },   // Repair icon path
  ];

const step2data = [
    {
        id: 1,
        text: 'Labor',
        value : 'LABOR'
    },
    {
        id: 2,
        text: 'Labor & Material',
        value : 'LABOR_AND_MATERIAL'
    },
    
   
   
]

const step3Data = [
    {
        id: 1,
        img : vinylplank,
        text: 'Vinyl Plank',
        value : "VinylPlank"
    },
    {
        id: 2,
        img :Laminate,
        text: 'Laminate',
        value : "LAMINATE"
    },
    {
        id: 3,
        img :Carpet,
        text: 'Carpet',
        value : "CARPET"


    },
    {
        id: 4,
        img :Tile,
        text: 'Tile',
        value : "TILE"
    }, 
    {
        id: 5,
        img :Hardwood,
        text: 'Hardwood',
        value : "HARDWOOD"
    },
    {
        id: 6,
        img :Wood,
        text: 'Wood',
        value : "WOOD"
    },
]

const step4Data = [
    {
        id: 1,
        text: '500 or less',
    },
    {
        id: 2,
        text: '501 - 1000',
    },
    {
        id: 3,
        text: '1001+',      
    },
    // {
    //     id: 4,
    //     text: 'Poor < 560',
    //     credits : "POOR"
    // },
]


export { step1data, step2data, step3Data ,step4Data }