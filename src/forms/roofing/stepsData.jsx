import WindowReplacement from "../../assets/windowLogo/windowReplacement.png"
import WindowRepair from "../../assets/windowLogo/windowRepair.png"
import WindowInstallation from "../../assets/windowLogo/windowInstallation.png"
import Roofing1 from "../../assets/roofing/asphaltshingleroof1.png"
import Roofing2 from "../../assets/roofing/cedarshakeroof2.png"
import Roofing3 from "../../assets/roofing/naturalslate3.png"
import Roofing4 from "../../assets/roofing/tartorchroof4.png"
import Roofing5 from "../../assets/roofing/aluminiumroof5.png"
import Roofing6 from "../../assets/roofing/Tile_roof6.jpg"
import Repair from "../../assets/roofing/material.png"
import Replace from "../../assets/roofing/replace.png"

// const step1data = [
//     {
//         id: 1,
//         image: WindowInstallation,
//         text: 'New window installation'
//     },
//     {
//         id: 2,
//         image: WindowRepair,
//         text: 'Window repair'
//     },
//     {
//         id: 3,
//         image: WindowReplacement,
//         text: 'Window replacement'
//     },
// ]
  
const step1data = [
    { id: 1, img : Replace ,value: "REPLACEMENT" , text : "Replace" }, // Replace icon path
    { id: 2, img : Repair,  value: "REPAIR" , text :"Repair" },   // Repair icon path
  ];

const step2data = [
    {
        id: 1,
        text: 'Yes',
        value : 'OWNER'
    },
    {
        id: 2,
        text: 'No',
        value : 'AUTHORIZED_TO_MAKE_CHANGES'
    },
    
   
   
]

const step3Data = [
    {
        id: 1,
        img : Roofing1,
        text: 'Aspalt Shingle',
        value : "ASPHALT"
    },
    {
        id: 2,
        img :Roofing2,
        text: 'Cedar Shake',
        value : "WOODSHAKE"
    },
    {
        id: 3,
        img :Roofing3,
        text: 'Natural Slate',
        value : "NATURAL_SLATE"


    },
    {
        id: 4,
        img :Roofing4,
        text: 'Tar Torch Down',
        value : "COMPOSITE"
    }, 
    {
        id: 5,
        img :Roofing5,
        text: 'Aluminium',
        value : "METAL"
    },
    {
        id: 6,
        img :Roofing6,
        text: 'Tile',
        value : "TILE"
    },
]


export { step1data, step2data, step3Data }