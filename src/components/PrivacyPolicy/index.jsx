import Footer from "../footer";
import "./privacyPolicy.css";

const companies = [
  "ADT",
  "ADT Solar",
  "A-1 Sewer & Drain Plumbing & Heating",
  "Bluebonnet Breeze",
  "Doctor Energy Saver",
  "Eclipse Remodeling",
  "Effortless Renovations",
  "Everlast Bathrooms",
  "Golden Roofing",
  "Insulation Commandos",
  "Landmark Windows and Doors",
  "Metro NY Insulation",
  "Miller Home Renovations",
  "Moss Mechanical",
  "PRQ Exteriors",
  "Prostat Solar",
  "Standard Insulating Company",
  "Three Brothers",
  "USA Insulation",
  "Vesta Foundation Solutions",
  "1 Day Bath",
  "1-800-HANSONS",
  "10 Year Paint",
  "101 Mobility - FL",
  "180 Contractors",
  "2-10 Home Buyers Warranty",
  "2FL Enterprises",
  "2JAP REMODELING LLC",
  "33 Mile Radius",
  "360 Impact",
  "365 Kool",
  "365 Solar Energy",
  "58 Foundations and Waterproofing",
  "800 Roof Pro",
  "911 Restoration Services of Minneapolis",
  "A to Z Bathroom Remodeling",
  "A&A Roofing & Exteriors",
  "A&M Home Services",
  "A&R Renovation Creativity",
  "A.M. Sun Solar",
  "A1 Home Improvement",
  "AA Glass and Windows",
  "ACC Mastercraft Roofing",
  "ACRI",
  "AMCS General Contractor LLC",
  "AMG Doors & Windows",
  "AO Energy",
  "ARS",
  "ATC Plumbing",
  "AZ Bathtubs",
  "Able Roof - Mr Roof",
  "Absolute Comfort",
  "Accolade Exteriors",
  "Acculevel",
  "Accurate America",
  "Ace Pelizon Plumbing",
  "Ace Roofing",
  "Ace Tree Enterprise",
  "Acme Home",
  "Acre Windows and Doors",
  "Adopt A Contractor",
  "Advanced Window Systems",
  "Aeris Heating and Air Conditioning",
  "Aesop's Gables",
  "Aesthetic Windows and Doors",
  "Affinity Solar",
  "Affordable Heating and Air",
  "Affordable Home Remodeling - Wisconsin",
  "Affordable Solar Services",
  "Air Pro Master",
  "AirNow - FL",
  "Airo Marketing",
  "Alanbrooke Roofing",
  "Albert Nahman Plumbing and Heating",
  "Alder Home Security",
  "Alenco",
  "All American Gutter Protection",
  "All American Roofing & Exteriors",
  "All County One Day Bath",
  "All County Roofing",
  "All Dry Services of Mt. Pleasant and Greater Charleston",
  "All Season Solar",
  "All States Home Improvement",
  "All Work Construction",
  "Allbritten Heating Cooling Plumbing and Electrical",
  "Alley Design To Build",
  "Alliance Fire Water Storm Restorations",
  "Allied Brothers Home Corp",
  "Almcoplumbing.com",
  "Aloft Remodeling",
  "Alpha Power Solutions LLC",
  "Alure Home Improvements",
  "Amazing Walk-In Tubs",
  "America Home Crafters Remodeling",
  "American Bath and Shower",
  "American Construction Mgmt LLC",
  "American Custom Contractors",
  "American Home Contractors",
  "American Home Fitters",
  "American Home Improvement",
  "American Home Shield",
  "American Quality Exteriors",
  "American Remodeling Enterprises",
  "American Standard",
  "American Standard Roofing-FC",
  "American Therapy Tubs",
  "American Waterworks",
  "American WeatherTechs",
  "Americas Best Choice",
  "Americas Best Choice Windows",
  "Ameritech Construction Corporation",
  "Amos Exteriors",
  "Angi",
  "Angi Privacy Policy & Terms",
  "Anypoint marketing",
  "Apex Remodeling and Contracting",
  "Aqua Dry Basement Waterproofing",
  "Aquarius Home Services",
  "Arapaho Roofing",
  "Arizona Solar Wave",
  "Armato heating and air",
  "Armored Impact Windows and Doors",
  "Artizmo Builder",
  "Aspen Home Improvement",
  "Aspen Peak Construction",
  "Aspire Remodeling",
  "Atlas Construction Group",
  "Atlas Home Improvement",
  "Attic Crew - HQ",
  "Austin Fire & Flood",
  "Axia Solar Corp",
  "Axia Solar Corp.",
  "Axis Remodeling",
  "BCI Acrylic Inc",
  "BN Covered Exteriors",
  "BOCA Walk-in Tubs",
  "BRIGHT CASTLE ROOFING",
  "Baird Foundation Repair",
  "Baker Electric Home Energy",
  "Bakers Residential Experts",
  "Balor",
  "Bartlett Tree Experts",
  "Basement Waterproofing One",
  "Bath Fitter",
  "Bath Fitter - Inland Northwest",
  "Bath Fitter Inland NW",
  "Bath Fitter O'Gorman Brothers",
  "Bath Fitter Southern AZ",
  "Bath Planet",
  "Bath Planet of St. Louis",
  "Bath Stone",
  "Bath World",
  "BathWraps",
  "Bathroom Buddy Remodeling",
  "Bathrooms By Genie",
  "Bay Home Remodeling",
  "Bay To Bay Building Concepts",
  "Bedrock Tubs and Showers",
  "Beldon Roofing Company",
  "Bell Brothers",
  "Bellwether Homes-FC",
  "Bert Black",
  "BesTex Solutions",
  "Best Choice Roofing",
  "Best Contracting Services",
  "Best Exteriors Construction",
  "Best Home Services",
  "Best Performance Roofing LLC-FC",
  "Better Place Remodeling",
  "Better Together Builders",
  "Big Tex Tree Service",
  "Big Wave Roofing and Solar",
  "Bigham Home Services",
  "Binsky Home Service",
  "Bionic Emergency Services",
  "Black Diamond Home Services",
  "Blackburn Foundation Repair",
  "Blissful Baths-FC",
  "Block Renovation",
  "Blue Fox Remodeling",
  "Blue Raven Solar",
  "BlueSky Windows USA",
  "Bordner Exterior's",
  "Brand Name Walk In Tubs",
  "Bravo Roofing",
  "Brooklyn Remodeling",
  "Brothers Aluminum - Valley Stream NY",
  "Brothers Services Company",
  "Brown's Tree Service",
  "Bud Anderson Home Services",
  "Byers Enterprises",
  "C&L Ward Brothers Inc.",
  "C. Michael Exteriors",
  "CHA Roofing",
  "CPI Service",
  "CR3 American Exteriors",
  "Cabrera Construction",
  "CalBear Construction",
  "Caliber Companies",
  "California Deluxe Windows",
  "Capital Construction",
  "Capital Energy",
  "Care.Life",
  "Carmody Construction",
  "Casa Roofing",
  "Castle Windows",
  "Centurion Roofing",
  "Champion Windows and Home Exteriors",
  "Chimney & Roof Plus",
  "Choice Home Warranty",
  "Choice Roofing Care",
  "Classic Construction LTD Co Florida",
  "Clean Restoration",
  "Clear Choice Home Improvement",
  "Clear Choice Widows",
  "Clearmax Windows & Doors",
  "Clearwater Shower Bath",
  "Climate Zone",
  "Cloud 9 Tubs",
  "Cloud Remodels",
  "Coast to Coast Exteriors",
  "Coast to Coast Heating & Air",
  "Coastal Bath Company",
  "Coastal Bay Construction",
  "Coastal Green Energy Solutions",
  "Coastal Roofing Specialists LLC",
  "Coastal Windows & Exteriors",
  "Cobex Construction Group",
  "Cochran Exteriors",
  "Colorado Living",
  "Columbia Contracting",
  "Comfort Caddies",
  "Comfort Crew Heating And Cooling",
  "Comfort Monster Heating and Air",
  "Comfort Windows & Doors",
  "Complete Care Home Warranty",
  "Complete Exteriors",
  "Complete Flood Restoration",
  "Compozit Home Systems",
  "Concrete Retrofitters",
  "Connecticut Basement Systems",
  "ContractingPRO",
  "Contractor Connect",
  "Conxpros",
  "Coulee Construction and Concrete",
  "Couto Construction",
  "Cove",
  "Covered Exteriors",
  "Cr3 American Exteriors",
  "CraftJack",
  "Craftsman Homebuilders",
  "Craftsmen Contractors - Lexington KY",
  "Cristal Contractors",
  "Cronkhite Home Solutions",
  "Crossover Roofing",
  "Crown Restoration",
  "Culligan Water",
  "Current Electric",
  "Current Home",
  "D&W Windows",
  "D's Homeworks",
  "DBS Residential Solutions",
  "DaBella Exteriors",
  "DeWitt Home Services",
  "Defender Direct",
  "Deluxe Roofing",
  "Desert Skies Remodeling",
  "Design Windows & Doors Inc",
  "Dexaco Windows and Doors",
  "Different Energies",
  "Dimensional Contractors LLC",
  "Dior Construction",
  "Direct Call Construction",
  "Direct Home Services",
  "Direct Remodels",
  "Discount Solar",
  "Dream Painting LLC",
  "DreamHome Remodeling",
  "Dreamstyle Remodeling",
  "DryCore Restorations",
  "E4 Construction",
  "ECC Roofing & Siding",
  "ELO Roofing",
  "ERE Power Florida",
  "EZ Baths",
  "EZ Energy Solutions",
  "Earthlight Technologies",
  "Eco Heating & Cooling",
  "Eco View Windows",
  "EcoShield Roofing Solutions",
  "EcoView Windows",
  "EcoView Windows & Doors",
  "EcoView of the Northwest",
  "Element Plumbing Heating & Air",
  "Elevated Remodeling",
  "Elite Exteriors",
  "Elite Home Warranty",
  "Elite Roofing Group",
  "Elite Roofing and Restoration",
  "Emerald Roofing and Remodeling",
  "Emergency AC",
  "Empire Home Remodeling",
  "Empire Today",
  "Energy Home Pros",
  "Energy View Windows",
  "Entrust Solar",
  "Epic Windows and Doors-FC",
  "Erie Construction Mid-West dba Erie Home",
  "Euro-Tech",
  "EverDry",
  "Everdry",
  "Everdry Waterproofing",
  "Everest Heating Cooling Plumbing and Rooter",
  "Evergold Construction",
  "Everlast Solar",
  "Excel Windows",
  "Expedition Heating and Air",
  "Expo Home Improvement",
  "Express Bath",
  "Express Flooring",
  "Exterior Point",
  "Exterior Pros",
  "Exteriors Today",
  "Family First Builders",
  "Feldco",
  "Fetch-A-Tech",
  "Filter Group USA Inc.",
  "Findlay Roofing and Construction",
  "Fine Restoration",
  "Finished Basements Plus",
  "Fire & Ice HVAC (Childress) - VA-FC",
  "Firefly Contractors & Design",
  "First American Home Warranty",
  "First Choice Windows Inc-FC",
  "First Premier Home Warranty",
  "First and Last Touch LLC",
  "Fitz Roofing-FC",
  "Five One Eight Contracting",
  "Five Star Bath",
  "Five Star Bath Solutions",
  "Five Star Bath Solutions of Cedar Rapids",
  "Five Star Bath Solutions of Charleston",
  "Five Star Bath Solutions of Greater DFW",
  "Five Star Bath Solutions of Huntsville",
  "Five Star Bath Solutions of North Indiana",
  "Five Star Bath Solutions of South Coast",
  "Five Star Bath Solutions of South New Jersey",
  "Fix It Services",
  "Flanco Electric",
  "Fletcher Home",
  "Flood expert",
  "Floor Coverings Int - Exact Customer",
  "Floor Coverings International",
  "Floor Coverings International Surf City",
  "Flooring Direct",
  "Florida Home Improvement Associates",
  "Florida Home360",
  "Florida Window and Door",
  "Fluent Solar",
  "Focal Point Remodeling",
  "Foothill Roofing",
  "For Energy",
  "Force Basement Solutions",
  "Forever Windows",
  "Four Seasons Gutter Filter",
  "Fox Mechanical",
  "Fox Valley Home Services",
  "Freddy and Son Roofing",
  "Freedom Solar",
  "Freedom Solar LLC",
  "Freeman Exteriors",
  "Frigid Air",
  "Frontier Foundation & Crawlspace Repair",
  "G&N Roofing",
  "GF Sprague",
  "GarageCo Holdings",
  "Go Flooring",
  "Goettl",
  "Gold Path Solar",
  "Grapevine Construction",
  "Grapids Home Services",
  "Great American Exteriors Inc IL",
  "Great Lakes Home Remodeling",
  "Greco Roman Construction & Design-FC",
  "Green Eco Solutions",
  "Grellis Construction",
  "Ground Up Home Solutions",
  "Groundworks",
  "Guardian Impact Windows & Roofing",
  "Guardian Protection Services",
  "Gutter Helmet",
  "Gutter Shield",
  "HALO Storm Restoration",
  "HRC Remodeling",
  "HRM Construction",
  "HSR Commercial and Residential",
  "HandyDads LLC",
  "Hann Roofing",
  "Hansons",
  "Harley Exteriors",
  "Havasu Solar",
  "Haynes hvac",
  "Haywire Protection",
  "Heart Heating & Cooling Inc - Denver CO",
  "Hello Project USA",
  "Helm Construction Company",
  "Hero Roofing",
  "High Point Solar",
  "Hillcrest Roofing Inc.",
  "Hoffman Weber Construction",
  "Hollander Electric Company",
  "Home Concepts Custom Remodeling",
  "Home Exteriors Roofing",
  "Home Genius Exteriors",
  "Home Improvement Program",
  "Home Improvements USA",
  "Home One",
  "Home Performance Systems",
  "Home Solar U.S.",
  "HomeFix Custom Remodeling",
  "HomePride",
  "HomePro",
  "HomePro Marketing",
  "HomeSpec",
  "HomeTrust Windows",
  "HomeView Exteriors",
  "Homerun Roofing",
  "Homestar Remodeling",
  "Hometown Contractors",
  "Honest Abe Roofing",
  "Honest View Windows",
  "Hooked on Solar",
  "Horizon Services",
  "Horseshoe Venture Group",
  "Houzz",
  "Hudson Construction",
  "I Need a Shower",
  "IND Construction",
  "ION Solar",
  "IPRO Roofing & construction",
  "Icon Solar Power",
  "Imagine Remodel",
  "Impact Only",
  "Impressive Pro Construction",
  "ImproveIt! Home Remodeling",
  "Improveit! Home Remodeling",
  "In and Out Floors",
  "Inaugural Home Improvement",
  "Independent Home",
  "Independent Home Walk In Tubs",
  "Indiana Home Safety & Mobility",
  "Infinity Energy",
  "Install America",
  "Insulation Commandos",
  "Insulation Commandos of Omaha",
  "Integral Restoration & Harding Drywall",
  "Integrity Roof & Solar",
  "Interbay Construction",
  "J Wales Home Solutions",
  "J-Tech Construction",
  "JC Home Remodeling",
  "JDM PROPERTY RENOVATIONS",
  "JKR Windows",
  "JR Luxury Bath",
  "Jacob Sunroom & Exteriors",
  "Jacuzzi Bath Remodel",
  "Jacuzzi Bath Remodel Chicagoland",
  "Jayghvac",
  "Jersey Experts Construction",
  "Jersey Strong Home Improvement",
  "Jimmy's Roofing",
  "John Duffy Energy Services-FC",
  "John Troy Hands In",
  "John's Waterproofing",
  "Jonathan Robert",
  "Joyce Factory Direct",
  "Jump HVAC",
  "Just Fix It-FC",
  "K-Designers",
  "KAD SMART HOME",
  "Karma Roofing & Restoration",
  "Keating Plumbing Heating and Cooling",
  "Key Exteriors",
  "Kinetico Water Systems",
  "Kingdom Construction IN",
  "Kitchen Magic",
  "Kitchens Today",
  "Klaus Larsen Roofing",
  "Klaus Roofing",
  "Koala Insulation - Corporate",
  "Kohler Walk-In Bath",
  "Kris Konstruction",
  "L.J. Stone Co",
  "LEI Home Enhancements",
  "Lando Builders Corp",
  "Landry Mechanical Inc.",
  "Leaf Home Bath",
  "Leaf Home Safety Solutions, LLC",
  "Leaf Home Water Solutions, LLC",
  "LeafFilter Gutter Protection",
  "LeafFilter North, LLC",
  "LeafGuard",
  "Leak Pros of Georgia",
  "Ledgewood roofing",
  "Left Coast",
  "Legacy Builders",
  "Legacy Exteriors",
  "Legacy Remodeling",
  "Legacy Restoration",
  "Lehigh Valley Baths-FC",
  "Leisure Life Walk In Tubs",
  "Leisure Living",
  "Liberty Home Guard",
  "Liberty Service Partners",
  "Life Filtration",
  "Lifespan Home Improvements",
  "Lifetime Exterior Brands",
  "Lifetime Windows",
  "Lifeway Mobility",
  "Limonta and Watson Holding",
  "Liquid Construction",
  "LockTight Impact Windows & Doors",
  "Logan Services AC & Heat",
  "Lone Wolf Exteriors",
  "Long Fence & Home",
  "Love and Care Heating and Air",
  "Luca Builders",
  "Lunar Air Services",
  "Luxury Bath",
  "Luxury Makeover Kitchen and Bath",
  "M and M Heating Cooling Plumbing and Electrical",
  "M&M Home Remodeling Services",
  "MDH Roofers",
  "Mad City Windows & Baths",
  "Mad City Windows and Bath",
  "Majic Window",
  "Marquis Roofing",
  "Mastercraft Enterprises Inc",
  "Masters Home Solutions",
  "MaxHome",
  "Maxwell Restoration",
  "Medical Guardian",
  "Meraki Solar",
  "Metairie Window Company",
  "Michael's Baths",
  "Mid America Exteriors",
  "Mid State Baths",
  "MidKnight Solar",
  "Midwest Bath Company",
  "Midwest Exteriors",
  "Midwest Window Co",
  "Mighty Dog Roofing of Nashville West",
  "Milestone Builders",
  "Minnesota Rusco",
  "Miracle Windows & Showers",
  "Miracle Windows & Sunrooms",
  "Missoula Remodeling Company",
  "Mister Bath & Spas",
  "MittGroup",
  "MobileHelp",
  "MobilityWorks",
  "ModForce Home Solutions-FC",
  "Mode Renovation",
  "Modern Day Garage",
  "Modern Home Remodeling",
  "Modern Roofing",
  "Modernize",
  "Momentum Solar",
  "Moore Home Services",
  "More Kitchen Less Money",
  "Morgan Bath & Shower",
  "Morgan Exteriors",
  "Mr And Mrs Restore",
  "Mt Pleasant Window & Remodeling-FC",
  "My Energy Masters",
  "My Home Heat and Air",
  "My Roofing Contractor",
  "My Smart House",
  "MyBath Colorado",
  "MyNewFloor.com",
  "NICE Heating & Air",
  "NV Waterproofing & Foundation Repair",
  "NW Bath Specialists",
  "Nathans Tree Service",
  "Nation's Choice Exteriors",
  "Nationwide Tree Service",
  "Neighborhood Windows & Doors",
  "Neil Cestra",
  "Net Energy Solars",
  "Networx Systems, Inc. and its Trusted Partners",
  "New Yorks Premier Group",
  "Newpro",
  "Next Solar",
  "North Coast Builders",
  "Northkit roofing",
  "Northland Heating and Cooling",
  "Nu Look Home Design",
  "Nu-Face",
  "Ocala Baths",
  "Ohio Roofing",
  "Ohio State Waterproofing",
  "Omni Matic",
  "One Day Shower",
  "One Hour Air",
  "One Hour Heating & Air Conditioning",
  "One Hour Heating and Air",
  "One Sun Power",
  "Ontimeheatingandcool",
  "Optimum Home Shield",
  "Optum Home Solutions",
  "Our World Energy",
  "Overhead Solutions",
  "Ox Foundation Solutions",
  "Ozark Kitchens & Baths",
  "PIC Home Pros",
  "PJ Fitzpatrick",
  "Pace Window & Door Corp",
  "Pacific Bath Company",
  "Pacific Exteriors",
  "Painter1 of South Georgia",
  "Palmetto Home Technologies",
  "Palmetto Solar",
  "Panda Exteriors",
  "Panda White Builders",
  "Paradise Home Services",
  "Paragon Partners",
  "Paramount Builders",
  "Parco Home Improvement",
  "Paschal Air Plumbing Electric",
  "Patriots pride windows",
  "Paving Services",
  "Payless Kitchens & Cabinets",
  "Pella Windows & Doors",
  "Peoples Products",
  "Perfect Choice Baths & Kitchens",
  "Perfect Choice Exteriors",
  "Perfect Solar Home",
  "Perfection Home Repairs",
  "Performance Advertising Consultants",
  "Performance Remodeling - MI",
  "Performance Roofing & Siding",
  "Perma-Seal",
  "Peterman Heating & Cooling",
  "Phoenix Associates",
  "Phoenix Exteriors",
  "Phoenix Solar Panel Systems",
  "PinDot Media",
  "Pinnacle Home Improvements",
  "PipeDreams",
  "Pizzo Contracting",
  "Platinum Showers",
  "Pointer Leads",
  "Porch",
  "Portofino Remodeling",
  "PosiGen",
  "PosiGen Developer LLC",
  "Power Home Remodeling Group",
  "Powers Bath Remodel",
  "Precision Door Tri-State",
  "Precision Siding and Construction",
  "Premier Home Pros",
  "Prestige Roofing - MD-FC",
  "Prestige Windows & Doors",
  "Prime Baths and Home Solutions",
  "Prime Craft Bathrooms",
  "Prime Energy",
  "Prime Plumbing and Heating Inc.",
  "Pro Power Exteriors",
  "ProCraft renovations",
  "ProCure Heating & Air",
  "ProEdge Remodeling",
  "ProHomeDirect",
  "ProLift Garage Doors of Alpharetta",
  "ProSkill Services",
  "Proper Contracting",
  "Pure Home",
  "Purelight Power",
  "Quality Craftsmen",
  "Quality Home Services - Solar",
  "QuinStreet",
  "Quintero Solar USA",
  "R & B Roofing",
  "RAA construction group",
  "RELI Solutions",
  "RFMC Construction",
  "RRG Roofing & Gutters",
  "RROC Exteriors",
  "Rainbow Bath and Shower",
  "Ram Jack",
  "Ram Roofing and Remodeling",
  "Rapid Bath Remodel",
  "Rapid Home Improvement",
  "Rare Restoration",
  "Raspberry Building Corporation",
  "Re-Bath",
  "ReNu Solar",
  "Redline Roofing",
  "Redwood Services",
  "Reece Builders",
  "Refloor",
  "Refresh My Roof",
  "Refreshed Heating and Cooling",
  "Regal Restoration LLC",
  "Reliant Plumbing",
  "Reliant Roofing Solar & Hurricane Shutters",
  "Remod AZ",
  "Remodel USA",
  "Remodeling.com",
  "Remote Roofing",
  "Renew Home Innovations",
  "Renewal by Andersen",
  "Renovate Ease",
  "Resnick Roofing & Contracting",
  "RestoPros of Omaha",
  "Restoration 1",
  "Restoration Logistics",
  "Restotech",
  "Revelare Kitchens",
  "Revision Kitchen and Bath",
  "Revival Construction Group",
  "Revive Kitchen And Bath",
  "Ridge Max Roofing",
  "RidgeTop Exteriors",
  "Rising Star Roofing Florida",
  "River Valley Remodelers",
  "Rob's Roofing LLC-FC",
  "Robokon Enterprises",
  "Rock Canyon Industries",
  "Rock Solid Roofers",
  "Rogers Roofing-FC",
  "Rolox Home Service",
  "Roof America",
  "Roof Repair Specialist",
  "Roof Today",
  "RoofTek",
  "Rooftop Designs",
  "Rooftop Power",
  "Rose Remodeling",
  "Roto-Rooter",
  "SE Solaris",
  "SWCORP",
  "Safe Showers",
  "Safebay Roofing and Construction",
  "Safelife",
  "Safely In Tubs",
  "Schoenherr Roofing",
  "Seattle Baths",
  "Seirra Solei Construction",
  "Select Home Warranty",
  "Selig Construction Corp.",
  "Semper Solaris",
  "Service Champions Plumbing Heating & AC",
  "Service First Corp",
  "Service Minds",
  "Service Plus NOW",
  "Service Wizard Heating & Air Conditioning",
  "Servicepros Cleanup & Restoration",
  "Shellaby AC & refrigeration",
  "Shingles Solution Technology",
  "Shinnova Solar",
  "Sho-Pro of Indiana",
  "Shoreline Solar",
  "Showcase Remodels",
  "Shur Fire Solar",
  "Signature Home Pros",
  "Signature Home Services",
  "SimpliSafe Security Systems",
  "Sky Home Builders Inc.",
  "Smart Choice Electric",
  "Smart Wave Solar",
  "Smart Window Company",
  "Solaflect Energy",
  "Solar Energy World",
  "Solar Grids",
  "Solar Is Freedom",
  "Solar Optimum",
  "Solar Power Solutions",
  "Solar SME",
  "Solar Source",
  "Solar USA",
  "Solar Works Energy",
  "Solar.iQ",
  "SolarQuote",
  "SolarTech",
  "Solaria Energy Solutions",
  "Solarshield Metal Roofing",
  "Solaura",
  "Soleil Energy",
  "Solera Energy",
  "Solgen Power",
  "Sound Performance Roofing",
  "South Shore Roofing",
  "SouthCoast Heat and Air",
  "Southeastern Tubs",
  "Southern Home Services",
  "Southern Industries Home Improvements",
  "Southern National Roofing",
  "Southern Solar",
  "Spa City Windows",
  "Sparkd Bath",
  "Spartan Home Services",
  "Spray Foam Genie",
  "Spray Foam Genie of Wichita",
  "Spruce Contracting",
  "Square Oaks Home Improvement",
  "Standard Eco Solar",
  "Statewide Remodeling",
  "Statewide Windows and Doors",
  "Sterling Construction & Roofing",
  "Storm Tight Windows",
  "Storm Troopers Windows & Doors",
  "Storm Works Roofing & Restoration",
  "Stronghold Remodel",
  "Summit Energy Group",
  "Sun City Five Star Bath Solutions",
  "Sun Solar",
  "SunStainable Energy Solutions",
  "Sunbelt Home Solutions",
  "Sunlynk",
  "Sunpro",
  "Sunpro Solar",
  "Sunrise Contracting",
  "Sunrise Remodelers",
  "Sunrun",
  "Sunshine Renewable Energy",
  "Sunshine Solar Sales Group",
  "Superior Roofing",
  "Superior Windows & Roofing",
  "Supreme Garage Door",
  "Surf and Turf Roofing",
  "Swan Electric, Plumbing, Heating and Air",
  "Swan Heating an Air",
  "Swan Plumbing Heating & Air",
  "Sweet Home Construction",
  "Swift Roofing Services",
  "TFS - The Foundation Specialists",
  "TGR General Construction",
  "Tailored Remodeling",
  "Tarrant Windows & Siding",
  "Team Solar",
  "Terra Nova Solar",
  "TerraFirma Foundation Systems",
  "Tex Land Construction",
  "Texas Industrial Air Services",
  "Texas Tree Tops Tree Services",
  "The Bath Authority",
  "The Brothers That Just Do Gutters",
  "The Brothers That Just Do Gutters - Corporate",
  "The Exteriors Company",
  "The Gutter Guard Experts",
  "The Gutter Magician of Northern Kentucky",
  "The Home Doctor",
  "The Men With Tools",
  "The Remodeling Authority",
  "The Right Choice",
  "The Solar Consultants",
  "The Walk-In Tub Guy",
  "Thermo Shield",
  "Thiel's Home Solutions",
  "Thrasher",
  "Tipping Hat Plumbing, Heating & Electric",
  "Titan Builders",
  "Titan Roofing and Construction",
  "Top Home Improvements",
  "Top Rated Home Remodel and Design",
  "Topp Home",
  "Townecraft Wellness Systems",
  "Tranquility Bath Remodel",
  "Tranquility Walk-In Tubs",
  "Treasure Valley Exteriors",
  "Tree Solutions Florida",
  "Tri State Exteriors",
  "TriSmart Solar",
  "Trimark Digital",
  "Trinity Construction and Restorations",
  "True Pro Home Solutions",
  "Trustar Construction",
  "Trusted Home Improvements",
  "Truth Coatings",
  "Tubbs By Grubbs",
  "Tundraland Home Improvements",
  "Turner Contracting",
  "UBrothers Construction",
  "US Energy Windows and Doors",
  "US Restoration",
  "USA Insulation",
  "USA Insulation of Toledo",
  "USA Showers",
  "United Exteriors",
  "United Home Experts",
  "United Home Warranty",
  "United Signature",
  "United Structural Systems - Chattanooga",
  "United Structural Systems - Knoxville",
  "United Structural Systems - Nashville",
  "United Water Restoration Group",
  "Universal Heating and Cooling",
  "Universal Windows Direct",
  "Unrivaled Roofing",
  "Upgrade remodeling",
  "Utahs Best Home Pros",
  "Utopia Roofing & Construction",
  "Valence Solar",
  "Valentine Roofing",
  "Vanguard Innovative Marketing",
  "Venguard Construction",
  "Venture Solar",
  "Vertex Construction",
  "Victors Home Solutions",
  "Victory Home Remodeling",
  "Vinyl Window Broker",
  "Vista Home Improvement",
  "Vivint",
  "Vivint Home Security",
  "Volt Solar Solutions",
  "WB Re-Bath",
  "WDM Contracting",
  "Wagner Roofing",
  "Wallaby Windows",
  "Weather Built Homes",
  "West Shore Home",
  "Western Products",
  "Western Stairlifts",
  "Westfall Roofing",
  "White House Construction",
  "White Pine Renovation",
  "Wighton's Plumbing Heating and Air",
  "Wild Oak Tree Service",
  "Wilson Plumbing & Heating",
  "WinChoice USA",
  "WinTek USA",
  "WinView USA",
  "Wind River Environmental",
  "Window Comfort",
  "Window Concepts",
  "Window Concepts Inc",
  "Window Depot",
  "Window Galaxy USA",
  "Window Nation",
  "Window Select",
  "Windows Direct USA",
  "Windows USA",
  "Windowwall",
  "Wirenutz Roofing",
  "Woodbridge Home Solutions",
  "Worthmann Roofing",
  "Wrights Impact Window and Door",
  "Xando Energy",
  "Yankee Home Improvement",
  "Your Home Improvement Company",
  "Your Home for a Lifetime",
  "Zero Khaos Marketing",
  "iMold",
];
const index = () => {
  return (
    <>
      <div>
        <div className="contain page-contain">
          <br />
          <h2 className="d-flex justify-content-center text-center">
            Privacy Policy
          </h2>
          <br />
          <div className="intro">
            <p>(Last updated: November 18, 2024)</p>
          </div>
          <br />
          <div className="cookies">
            <h4 className="d-flex justify-content-center text-center">
              Your Privacy Rights
            </h4>
            <p>
              ehomequote, the company registered at Indore, Madhya Pradesh
              452010, company number U74999MP2021PTC058438 (the “Company”, “we”,
              or “our”), operates the website ehomequote.co (further
              “ehomequote”). We respect the privacy of our users and provide
              this privacy policy (“Privacy Policy”). This Privacy Policy is
              intended to describe the information we collect, how we may use
              that information, with whom we may share it, and your choices
              about such uses and disclosures. If you do not agree with this
              Privacy Policy, please discontinue your use of the website
              immediately. We encourage you to read this Privacy Policy
              carefully when using our website or services or transacting
              business with us. By using our website, you are accepting this
              Privacy Policy. If you have any questions about this Privacy
              Policy, please refer to the end of this Privacy Policy for
              information on how to contact us.
            </p>
          </div>
          <br />
          <div className="cookies">
            <h4 className="d-flex justify-content-center text-center">
              Information We Collect About You
            </h4>
            <p>
              We may collect personal information that can identify you,
              including but not limited to your name and email address. When you
              provide personal information through our website, the information
              may be sent to servers located in the United States and other
              countries. Personal information that we process are:
            </p>
            <ul>
              <li>
                <strong>Information you provide:</strong> We may collect and
                store any personal information you enter on our website, such as
                your name, address, email address, telephone number, credit card
                information, and other personally identifiable information. It
                is at your discretion and determination whether to provide
                personal information to us. When you join ehomequote by
                requesting a free quote, you are opting in to receive emails
                from us or about ehomequote, other Company’s brands, one of our
                affiliates, or one of our 3rd party marketing partners. Your
                telephone number can be used to initiate and offer you certain
                services and to conclude and execute agreements. If you have
                indicated that you are interested, we, one of our affiliates, or
                one of our 3rd party marketing partners can also use your mobile
                phone number to communicate with you and keep you informed about
                offers. You can opt-out of notifications by replying to emails
                you have received, using the unsubscribe link in the email, or
                contacting us via email at support@ehomequote.co.
                <br />
                <strong>Note:</strong> You cannot opt-out of receiving certain
                administrative or legal notices from us.
              </li>
              <li>
                <strong>Information from other sources:</strong> We may also
                obtain both personal and non-personal information about you from
                business partners, contractors, and other third parties, such as
                updated delivery and address information, purchase history, and
                demographic information.
              </li>
              <li>
                <strong>Cookies:</strong> We use various technologies, such as
                cookies and web beacons, to collect information from your
                computer and about your activities on our site. This information
                includes your IP address, your browser type and language, access
                times, the content of any undeleted cookies that your browser
                previously accepted from us, and the referring website address.
                We may allow third parties, including our authorized service
                providers, advertising companies, and ad networks, to display
                advertisements on our site. These companies may use cookies to
                collect information about users who view or interact with their
                advertisements. Our website does not provide any personal
                information to these third parties. Please read the Cookie
                Policy to know more.
              </li>
            </ul>
            <p>
              BY PROVIDING PERSONAL INFORMATION TO US VIA THE WEBSITE, YOU
              VOLUNTARILY CONSENT TO THE COLLECTION, USE, TRANSFER, AND
              DISCLOSURE OF SUCH PERSONAL DATA AS SPECIFIED IN THIS PRIVACY
              POLICY.
            </p>
          </div>

          <br />
          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Legal Basis For Processing Personal Information{" "}
            </h4>
            <p>
              We will only use your personal information if we have a lawful
              basis to do so in accordance with the rules or principles of the
              applicable data privacy laws such as:
            </p>
            <ul style={{ marginLeft: "26px" }}>
              <li>when it’s our legal duty,</li>
              <li>if we have your consent,</li>
              <li>
                when it’s necessary to perform our contractual obligation and/or
                otherwise within our legitimate right to do so, including
                business or commercial purpose (Relevant Purpose). The Company`s
                Relevant Purposes are: including: enhancing the Company's
                products and services; fraud prevention; analytics; advertising
                enhancement; any other purpose not prohibited by applicable laws
                or privacy regulations, including the CCPA and other data
                protection laws.
              </li>
            </ul>
          </div>
          <br />
          <div className="cookies">
            <h4 className="d-flex justify-content-center text-center">
              How We Use the Information We Collect{" "}
            </h4>
            <h6>We may use information that we collect about you to:</h6>
            <ul>
              <li>Provide products and services that you have requested;</li>
              <li>
                Manage your account and provide you with customer support;
              </li>
              <li>
                Perform research and analysis about your use of, or interest in,
                our products, services, or content;
              </li>
              <li>
                Communicate with you by email, postal mail, telephone and/or
                mobile devices or send newsletters, promotional offers, customer
                feedback surveys, and other relevant legal notifications about
                products or services that may be of interest to you either from
                us, our affiliates, our partners or third parties;
              </li>
              <li>
                Communicate with you via phone or email with regard to partially
                completed service requests;
              </li>
              <li>
                Develop and display content and advertising tailored to your
                interests on our site and other sites;
              </li>
              <li>
                Perform background screening, which may include the use of third
                parties or service professionals;
              </li>
              <li>
                Enforce our terms and conditions as stated in our Terms of Use;
              </li>
              <li>Manage our business;</li>
              <li>
                Perform functions as otherwise described to you at the time of
                collection.
              </li>
            </ul>
          </div>
          <br />
          <div className="cookies">
            <h4 className="d-flex justify-content-center text-center">
              Financial Information for Service Professionals
            </h4>
            <p>
              For service professionals, we may use financial or payment method
              information to process payment for any purchases made on our
              website, rebate, and other programs in which you elect to
              participate, to pre-qualify you for credit card and other offers
              that you might find of interest, to pre-qualify you to participate
              in our contractor network, to protect against or identify possible
              fraudulent transactions, and otherwise as needed to manage our
              business.
            </p>
          </div>
          <br />
          <div className="cookies">
            {/* Section Title */}
            <h4 className="d-flex justify-content-center text-center">
              With Whom We Share Your Information
            </h4>

            {/* Information Paragraph */}
            <p>
              Information we collect may be shared with a variety of parties
              depending upon the purpose for and context in which that
              information was provided. In all cases where we share your
              personal information with third parties, we will use a minimum
              necessary standard to disclose only that information required for
              satisfying the purpose of or performing the service for which the
              information is disclosed. We want you to understand when and with
              whom we may share personal or other information we have collected
              about you or your activities on our website or while using our
              services. We do not share your personal information with others
              except as indicated below or when we inform you and give you an
              opportunity to opt out of having your personal information shared.
              We will share your personal information in accordance with your
              consent for us to do so. We may share personal information with:
            </p>

            {/* List of information sharing */}
            <ul>
              <li>
                <strong>Authorized service providers:</strong> We may share your
                personal information with our authorized service providers that
                perform certain services on our behalf. These services may
                include fulfilling orders, processing credit card payments,
                delivering packages, providing customer service and marketing
                assistance, performing business and sales analysis, supporting
                our website functionality, and supporting contests, surveys, and
                other features offered through ehomequote or performing
                background checks of service professionals. These service
                providers may have access to personal information needed to
                perform their functions but are not permitted to share or use
                such information for any other purposes.
              </li>
              <li>
                <strong>Marketing affiliates:</strong> When you are referred to
                us via a third party marketing affiliate, we may share your
                email address and other information that you provide, to such
                marketing affiliates.
              </li>
              <li>
                <strong>Service professionals:</strong> We match your
                information and service request against our list of service
                professionals. When you submit a service request through our
                website, you consent to our providing your personal information
                and request to the service professionals we match with your
                request. Sharing this information with service professionals
                allows them to contact you using the email address or other
                contact information you provided. In addition, we have other
                approved contractual partners that fulfill service requests or
                that utilize their own service professionals to supplement our
                network, and we share your information with them, subject to
                contractual confidentiality restrictions, in order to attempt to
                provide the services requested. If you use our services pursuant
                to a membership with one of our partners, we may share your
                service request activity information with such partner. We may
                also release information to collection and/or credit agencies
                for past due service professional accounts.
              </li>
              <li>
                <strong>Business partners:</strong> When you make purchases,
                reservations or engage in promotions offered through ehomequote
                or our services, we may share personal information with the
                businesses with which we partner to offer you those products,
                services, promotions, contests. When you elect to engage in a
                particular merchant’s offer or program, you authorize us to
                provide your email address and other contact information to that
                merchant.
              </li>
              <li>
                <strong>Direct mail partners:</strong> From time to time, we may
                share our postal mailing list with selected providers of goods
                and services that may be of interest to you.
              </li>
              <li>
                <strong>Company’s affiliates:</strong> In order to streamline
                certain business operations, develop products and services that
                better meet the interests and needs of you, we may share your
                personal information with any of our current or future
                affiliates, affiliated entities, subsidiaries and parent
                companies. You hereby agree to our sharing some or all of your
                information with the Company’s affiliates.
              </li>
            </ul>

            {/* Other Situations */}
            <p>
              <strong>Other Situations:</strong>
              <br />
              We also may disclose your information:
            </p>
            <ul>
              <li>
                In response to a subpoena or similar investigative demand, a
                court order, or a request for cooperation from a law enforcement
                or other government agency; to establish or exercise our legal
                rights; to defend against legal claims; or as otherwise required
                by law. In such cases, we may raise or waive any legal objection
                or right available to us.
              </li>
              <li>
                When we believe disclosure is appropriate in connection with
                efforts to investigate, prevent, or take other action regarding
                illegal activity, suspected fraud or other wrongdoing; to
                protect and defend the rights, property or safety of our
                company, our users, our employees, or others; to comply with
                applicable law or cooperate with law enforcement; or to enforce
                ehomequote terms and conditions or other agreements or policies.
              </li>
              <li>
                In connection with a substantial corporate transaction, such as
                the sale of our business, a divestiture, merger, consolidation,
                or asset sale, or in the unlikely event of bankruptcy.
              </li>
            </ul>

            <p>
              Please note, in limited circumstances, we may without notice to
              you or your consent, access and disclose your personal information
              or any communications sent or received by you, and any other
              information that we may have about you to the extent we believe
              such disclosure is legally required, to prevent or respond to a
              crime, to investigate violations of our Terms of Use, or in the
              vital interests of us or any person.
            </p>

            <p>
              Our website may contain links to third parties’ websites. Such
              third parties have their own policies that govern their
              collection, use, and disclosure of information. We suggest that
              you read their privacy policies to learn about their practices.
              Thus, we are not responsible for the privacy practices or the
              content of such websites and we have no responsibility or
              liability relating to them.
            </p>
          </div>
          <br />
          <div className="cookies">
            {/* Section Title */}
            <h4 className="d-flex justify-content-center text-center">
              Aggregated and Non-Personal Information
            </h4>

            {/* Information Paragraph */}
            <p>
              We may share aggregated and non-personal information we collect
              under any of the above circumstances. We may also share it with
              third parties and affiliated companies to develop and deliver
              targeted advertising on our websites and on websites of third
              parties. We may combine non-personal information we collect with
              additional non-personal information collected from other sources.
              We also may share aggregated information with third parties,
              including advisors, advertisers, and investors.
            </p>
          </div>
          <div className="cookies">
            {/* Section Title */}
            <h4 className="d-flex justify-content-center text-center">
              Retention
            </h4>

            {/* Information Paragraph */}
            <p>
              We retain personal information only as long as required to fulfill
              the purposes described above, or as required by law as necessary
              to comply with our legal obligations or to resolve disputes. We
              may store any information about your activity on our website or
              any information created, posted, or shared by you on our websites
              for as long as we deem it necessary or until you provide specific
              instructions to delete it.
            </p>
          </div>
          <div className="cookies">
            {/* Section Title */}
            <h4 className="d-flex justify-content-center text-center">
              How You Can Access Your Information
            </h4>

            {/* Information Paragraph */}
            <p>
              If you have an online consumer account with us, you can access and
              review your personal information by logging into your account. You
              can also review and update your personal information by contacting
              us. You can also choose to have your account disabled by
              contacting email support@ehomequote.co. After you deactivate your
              account, you will not be able to sign in to our website or access
              any of your personal information. If you deactivate your account,
              we may still retain certain information associated with your
              account for analytical purposes and recordkeeping integrity, as
              well as to prevent fraud, collect any fees owed, enforce our Terms
              and Conditions, take actions we deem necessary to protect the
              integrity of our website or our users, or take other actions
              otherwise permitted by law.
            </p>
          </div>
          <div className="cookies">
            {/* Section Title */}
            <h4 className="d-flex justify-content-center text-center">
              Your Choices About Collection and Use of Your Information
            </h4>

            {/* Information Paragraph */}
            <p>
              (Opt-Out/Unsubscribe/ Sign Out)
              <br />
              At any time, you can choose to no longer receive commercial
              marketing or promotional emails or newsletters from us by
              accessing your user account and opting out. You also will be given
              the opportunity, in any marketing email that we send to you, to
              opt out of receiving such messages in the future, or by replying
              to any of these emails. Be sure you include your name and email
              address. It may take up to 10 days for us to process an opt-out
              request. We may send you other types of transactional and
              relationship email communications, such as service announcements,
              administrative notices, and surveys, without offering you the
              opportunity to opt out of receiving them. If you prefer not to
              have us share your email address & other information with selected
              providers of goods and services that may be of interest to you,
              you can notify us at any time by emailing us at
              support@ehomequote.co.
            </p>
          </div>
          <div className="cookies">
            {/* Section Title */}
            <h4 className="d-flex justify-content-center text-center">
              How We Protect Your Personal Information
            </h4>

            {/* Information Paragraph */}
            <p>
              We take appropriate security measures (including physical,
              electronic, and procedural measures) to help safeguard your
              personal information from unauthorized access and disclosure. For
              example, only authorized employees are permitted to access
              personal information, and they may do so only for permitted
              business functions. We want you to feel confident using our
              website to transact business. However, no system can be completely
              secure. Therefore, although we take steps to secure your
              information, we do not promise, and you should not expect, that
              your personal information, searches, or other communications will
              always remain secure. Thus, any transmission of data at or through
              the Website, or otherwise via the Internet or wireless networks,
              is done at your own risk. Please refer to the Federal Trade
              Commission’s website at
              <a
                href="https://www.consumer.ftc.gov"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.consumer.ftc.gov
              </a>{" "}
              for information about how to protect yourself against identity
              theft.
            </p>
          </div>
          <div className="cookies">
            {/* Section Title */}
            <h4 className="d-flex justify-content-center text-center">
              Blogs, Bulletin Boards, Chat Rooms and Other Social Media Sites
            </h4>

            {/* Information Paragraph */}
            <p>
              We may provide areas on our websites where you can post
              information about yourself and others and communicate with others,
              as well as post comments (e.g. pictures, videos, audio files,
              etc.). Such postings are governed by our Terms and Conditions. In
              addition, such postings may appear on other social media websites
              or when searches are executed on the subject of your posting.
              Please note that whenever you voluntarily disclose personal
              information on public web pages, that information will be
              available to the public.
            </p>
          </div>
          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Children’s Privacy
            </h4>
            <p>
              We understand the importance of protecting the privacy of
              children, especially in an online environment. In particular, our
              website is a general audience site, and we do not knowingly
              collect personal information from children under the age of 13. If
              you become aware that a child has provided us with personal
              information without parental consent, please contact us at
              support@ehomequote.co and we will take steps to remove such
              information and terminate the children’s account. We encourage
              parents and guardians to spend time online with their children and
              to participate and monitor the interactive activities of their
              children.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Visiting Our Websites from Outside the United States
            </h4>
            <p>
              This Privacy Policy is intended to cover collection of information
              on our website from residents of the United States. If you are
              visiting our website from outside the United States, please be
              aware that your information may be transferred to, stored, and
              processed in the United States where our servers are located and
              our central database is operated.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              No Rights of Third Parties
            </h4>
            <p>
              This Privacy Policy does not create rights enforceable by third
              parties or require disclosure of any personal information relating
              to users of the website.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Changes to this Privacy Policy
            </h4>
            <p>
              We will occasionally update this Privacy Policy to reflect changes
              in our practices and services. When we post changes to this
              Privacy Policy, we will revise the "last updated" date at the top
              of this Privacy Policy. If we make any material changes in the way
              we collect, use, or share your personal information, we will
              notify you by sending an email to the email address you most
              recently provided us in your account, profile or registration
              (unless we do not have such an email address), or by prominently
              posting notice of the changes on our website. We recommend that
              you check our website from time to time to inform yourself of any
              changes in this Privacy Policy or any of our other policies.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              How to Contact Us
            </h4>
            <p>
              If you have any questions about this Privacy Policy or if you
              would like to request information about our disclosure of personal
              information to third parties for their direct marketing purposes,
              please contact us by email or postal mail as follows: Privacy
              Policy Inquiry, ehomequote, the company registered at Indore,
              Madhya Pradesh 452010, company number U74999MP2021PTC058438 (the
              “Company”) or email us at support@ehomequote.co.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Your California Privacy Rights
            </h4>
            <h6>Categories of personal information the Company collects</h6>
            <p>
              The Company has collected the following categories of personal
              information from users within the last twelve (12) months:
              <br />
              A. Identifiers. A name, alias, postal address, unique personal
              identifier, online identifier, Internet Protocol address, email
              address, account name, driver's license number, passport number,
              or other similar identifiers. YES
              <br />
              B. Personal information categories listed in the California
              Customer Records statute (Cal. Civ. Code § 1798.80(e)). A name,
              address, telephone number, passport number, driver's license or
              state identification card number, credit card number, debit card
              number, or any other financial information. Some personal
              information included in this category may overlap with other
              categories. YES
              <br />
              C. Protected classification characteristics under California or
              federal law. Age (40 years or older), race, color, ancestry,
              national origin, citizenship, religion or creed, marital status,
              medical condition, physical or mental disability, sex (including
              gender, gender identity, gender expression, pregnancy or
              childbirth and related medical conditions), sexual orientation,
              veteran or military status, genetic information (including
              familial genetic information). NO
              <br />
              D. Commercial information. Records of personal property, products
              or services purchased, obtained, or considered, or other
              purchasing or consuming histories or tendencies. YES
              <br />
              E. Biometric information. Physiological, behavioral, and
              biological characteristics, or activity patterns used to extract a
              template or other identifier or identifying information, such as,
              fingerprints, faceprints, and voiceprints, iris or retina scans,
              keystroke, gait, or other physical patterns, and sleep, health, or
              exercise data. NO
              <br />
              F. Internet or other similar network activity. Browsing history
              and search history within our website; information on a consumer's
              interaction with a website and advertisement. YES
              <br />
              G. Geolocation data. Physical location or movements. YES
              <br />
              H. Sensory data. Audio, electronic, visual, thermal, olfactory, or
              similar information. NO
              <br />
              I. Professional or employment-related information. Current or past
              job history or performance evaluations. NO
              <br />
              J. Non-public education information (per the Family Educational
              Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part
              99)). Education records directly related to a student maintained
              by an educational institution or party acting on its behalf, such
              as grades, transcripts, class lists, student schedules, student
              identification codes, student financial information, or student
              disciplinary records. NO
              <br />
              K. Sensitive personal information. Race or ethnic origin,
              religion, political affiliations, sexual orientation, criminal
              history. NO
              <br />
              L. Inferences drawn from other personal information. Profile
              reflecting a person's preferences, characteristics, psychological
              trends, predispositions, behavior, attitudes, intelligence,
              abilities, and aptitudes. NO
              <br />
              IN THE PRECEDING TWELVE (12) MONTHS THE COMPANY HAS DISCLOSED AND
              SOLD OBTAINED PERSONAL INFORMATION TO THIRD PARTIES, CONTAINED IN
              THE LIST OF MATCHED SOLAR PARTNERS CONTAINED IN THE END OF THE
              PRIVACY POLICY, FOR BUSINESS AND COMMERCIAL PURPOSES.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Your Rights and Choices: Additional Notice for California,
              Colorado, Nevada, Virginia residents
            </h4>
            <p>
              You have certain rights with respect to the personal information
              collected by businesses.
              <br />
              <strong>Right to Access:</strong> You have the right to receive
              information about the types of personal information that the
              Company collects, uses, discloses, and sells. Specifically, this
              right allows you to ask the Company for the following information:
              <br />
              (a) the categories of personal information that the Company
              collects about you;
              <br />
              (b) the categories of sources from which the Company has obtained
              personal information about you;
              <br />
              (c) the Company's business or commercial purpose for collecting or
              selling your personal information;
              <br />
              (d) the categories of your personal information that the Company
              sells to third parties;
              <br />
              (e) the categories of third parties that the Company sells your
              personal information to; and
              <br />
              (f) the specific pieces of personal information that the Company
              has collected about you. The Company must disclose this
              information to you when you exercise your right to know, subject
              to proper verification of your request.
              <br />
              <strong>Right to Correct Personal Information:</strong> You have
              the right to request the correction of any inaccurate personal
              information that we maintain about you, taking into account the
              nature of the personal information and the purposes of the
              processing of the personal information. We will use commercially
              reasonable efforts to correct the inaccurate personal information
              as you may direct.
              <br />
              <strong>Right to be Forgotten:</strong> You have the right to
              request that the Company delete any personal information it has
              collected or maintains about you, subject to certain exceptions
              for business purposes outlined in the applicable law. Once the
              Company receives and confirms your verifiable consumer request,
              the Company will delete your personal information from its
              records, unless an exception applies.
              <br />
              <strong>Right to Non-Discrimination:</strong> You have the right
              to non-discrimination if you exercise any of your rights under the
              CCPA or similar data protection laws. If you exercise your rights
              under the CCPA or similar data protection laws, the Company,
              pertaining to its goods and services, will not do any of the
              following:
              <br />
              (a) deny you any goods or services;
              <br />
              (b) charge you a different price or rate for goods or services,
              including through the use of benefits or imposing penalties;
              <br />
              (c) provide to you a different level or quality of goods or
              services; or
              <br />
              (d) suggest to you that you will receive a different price or rate
              for goods or services or a different level or quality of goods or
              services.
              <br />
              <strong>Right to Opt-Out:</strong> You have the right to direct
              the Company to not sell your personal information to third parties
              at any time. The Company only shares information as outlined
              herein. If you choose to opt-out of the sharing of your personal
              information, the Company will no longer send your personal
              information to third parties. You can choose, at any time, to opt
              back into the sale of your personal information.
              <br />
              <strong>
                Right to Limit Use or Disclosure of Sensitive Personal
                Information:
              </strong>{" "}
              Sensitive Personal Information is a type of personal information
              that is more highly protected by laws due to its more vulnerable
              nature. Sensitive Personal Information will not be sold or shared
              and will only be used for business purposes. At any time you may
              request that use of your Sensitive Personal Information be limited
              by contacting us. If you are a Virginia or Colorado resident, we
              do not collect your Sensitive Personal Information (as defined in
              those states’ laws) without your consent, but to consent here and
              now to the collection and use of your sensitive information please
              write to us: “Consent to Use My Sensitive Personal Information for
              Virginia and Colorado Residents”.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Exercising your Rights
            </h4>
            <p>
              To exercise your rights to know, access, and be forgotten
              described above, please submit a verifiable consumer request to
              the Company by email at support@ehomequote.co.
              <br />
              To exercise your rights to Opt-Out, alternatively, you may use the
              “Do Not Sell/Share My Personal Information” link in the footer of
              the website.
              <br />
              Only you or a person registered with the California Secretary of
              State that you authorize to act on your behalf, may make a
              verifiable consumer request related to your personal information.
              You may also make a verifiable consumer request on behalf of your
              minor child.
              <br />
              You may only make a verifiable consumer request to know or for
              access twice within a 12-month period. The verifiable consumer
              request must:
              <br />
              (1) Provide sufficient information that allows the Company to
              reasonably verify you are:
              <br />
              (a) the person about whom the Company collected personal
              information or
              <br />
              (b) such person’s authorized representative.
              <br />
              (2) Describe your request with sufficient detail that allows the
              Company to properly understand, evaluate, and respond to it.
              <br />
              We may require additional information to verify your requests to
              exercise your rights or understand the scope of your request,
              although you will not be required to create any account on
              ehomequote to submit a request or have it fulfilled. The Company
              cannot respond to your request or provide you with personal
              information if the Company cannot verify your identity or
              authority to make the request and confirm the personal information
              relates to you.
              <br />
              The Company will only use personal information provided in a
              verifiable consumer request to verify the requestor’s identity or
              authority to make the request. We are permitted to reject your
              request if we reasonably determine that you are not a resident of
              the State of California.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Response Timing and Format
            </h4>
            <p>
              We endeavor to respond to a verifiable consumer request within 45
              days of its receipt. If we require more time (up to 90 days), we
              will inform you of the reason and extension period in writing. If
              you have an account with us, we will deliver our written response
              to that account. If you do not have an account with us, we will
              deliver our written response by mail or electronically, at your
              option.
              <br />
              Any disclosures we provide will only cover the 12-month period
              preceding the verifiable consumer request's receipt. The response
              we provide will also explain the reasons we cannot comply with a
              request, if applicable. For data portability requests, we will
              select a format to provide your personal information that is
              readily usable and should allow you to transmit the information
              from one entity to another entity without hindrance.
              <br />
              We do not charge a fee to process or respond to your verifiable
              consumer request unless it is excessive, repetitive, or manifestly
              unfounded. If we determine that the request warrants a fee, we
              will tell you why we made that decision and provide you with a
              cost estimate before completing your request.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Do Not Call Policy
            </h4>
            <p>
              The Company takes its responsibilities about customer information
              and customer service very seriously. In support of this
              commitment, ehomequote has adopted the following Do Not Call
              Policy.
              <br />
              No employee or agent of the Company shall engage in telemarketing
              practices that violate the terms of the Telephone Consumer
              Protection Act of 1991, the FTC Telephone Sales Rule, or state law
              or regulation.
              <br />
              The Company maintains a record of the name and telephone number
              for consumers who do not wish to be called. If you don’t want to
              receive sales calls from ehomequote, just ask us to place your
              name on our Do Not Call List. We will note your request
              immediately and will remove your information from active lists
              within 30 days.
              <br />
              You can make your request in writing by mailing us at ehomequote,
              the company registered at Indore, Madhya Pradesh 452010, company
              number U74999MP2021PTC058438 (the “Company”).
              <br />
              When you make a request, you must include your name, address, and
              telephone number(s) you want to be included on our list. If your
              information changes, please notify us of the new name, address,
              and telephone number(s) in order to remain on our Do Not Call
              List. If you would like us to remove you from our Do Not Call List
              in order to receive our telephone solicitations, notify us by
              contacting us at the above address or telephone number.
              <br />
              All Company’s personnel involved with telemarketing and/or
              telephone solicitation for ehomequote are trained, informed, and
              directed to comply with the Company Do Not Call Policy.
              <br />
              Upon request, the Company will provide its Do Not Call policy. The
              policy is also available online at the following web address:
              ehomequote.co/privacy.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              COOKIE POLICY
            </h4>
            <p>
              This Website uses cookies with the purpose to serve you more
              efficiently and effectively. This Cookie Policy explains what
              cookies are, when and why cookies are used by us. Please read this
              Cookie Policy.
              <br />
              This Website uses different types of cookies that are described
              below. Some cookies are placed by third-party services that appear
              on our pages.
            </p>
          </div>

          <div className="cookies">
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              What are Cookies?
            </h4>
            <p>
              Cookies are small text files that can be used by websites to make
              a user's experience more efficient. Like most online services, we
              use cookies and similar technologies to provide and personalize
              the Website, analyze use, and prevent fraud. In order to optimize
              your experience, cookies also help with the collection of customer
              tracking data. Please note that we also keep track of Internet
              Protocol (IP) addresses and may disclose your IP address during
              the course and scope of our business strictly in compliance with
              our Privacy Policy and this Cookie Policy. An IP address is a
              number that is used by computers on the network to identify your
              computer every time you log on to the Internet. For all other
              types of cookies we need your permission.
            </p>

            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Managing cookies
            </h4>
            <p>
              There are several options available for managing your cookie
              preferences, depending on the cookie type and your device. Please
              note that no one option is sufficient to manage all cookies on all
              devices. Therefore, you may wish to combine one or more options
              for complete coverage.
              <br />
              You can revoke or change your consent to our use of cookies at any
              time.
              <br />
              <strong>Browser Settings</strong>
              <br />
              If you no longer wish to receive cookies, you can use your web
              browser settings to allow, deny or delete cookies. To do this,
              follow the instructions in your browser (usually found in the
              Help, Tools, or Edit menu).
              <br />
              <strong>Mobile Identifiers</strong>
              <br />
              On your mobile device, your operating system may provide you with
              options to opt-out of interest-based advertising or to otherwise
              reset your mobile identifier. This is a unique identifier that can
              be used to identify a mobile device that works similarly to a
              cookie. For example, you may use the “Limit Ad Tracking” setting
              (on iOS devices) or a setting to “Opt-out of Interest-Based Ads”
              (on Android) which allows you to limit the use of information
              about your use of apps for purposes of serving ads targeted to
              your interests.
            </p>
          </div>

          <div>
            <h4
              className="d-flex justify-content-center text-center"
              style={{}}
            >
              Partner List
            </h4>
            <ul className="justify-content-center text-center">
              {companies.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
