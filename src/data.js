import ship1_1 from "./images/ships/star-destroyer.jpg";
import ship1_2 from "./images/ships/star-destroyer-2.jpg";
import ship2_1 from "./images/ships/trade-federation-cruiser.jpg";
import ship4_1 from "./images/ships/t-70.jpg";
// import ship4_2 from "./images/ships/t-70-2.jpg";
// import ship5_1 from "./images/ships/rebel-transport.jpg";
// import ship5_2 from "./images/ships/rebel-transport-2.jpg";
// import ship6_1 from "./images/ships/droid-control-ship.jpg";
// import ship6_2 from "./images/ships/droid-control-ship2.jpg";
// import ship7_1 from "./images/ships/republic-assault-ship.jpg";
// import ship7_2 from "./images/ships/republic-assault-ship-2.jpg";
// import ship9_1 from "./images/ships/republic-attack-cruiser.jpg";
// import ship9_2 from "./images/ships/republic-attack-cruiser-2.jpg";
// import ship10_1 from "./images/ships/executor.jpg";
// import ship10_2 from "./images/ships/executor-2.jpg";
// import ship12_1 from "./images/ships/death-star.jpg";
// import ship12_2 from "./images/ships/death-star-2.jpg";
// import ship13_1 from "./images/ships/millennium-falcon.jpg";
// import ship13_2 from "./images/ships/millennium-falcon-2.jpg";
// import ship14_1 from "./images/ships/y-wing.jpg";
// import ship14_2 from "./images/ships/y-wing-2.jpg";
// import ship15_1 from "./images/ships/x-wing.jpg";
// import ship15_2 from "./images/ships/x-wing-2.jpg";
// import ship16_1 from "./images/ships/tie.jpg";
// import ship16_2 from "./images/ships/tie-2.jpg";
// import ship18_1 from "./images/ships/imperial-shuttle.jpg";
// import ship18_2 from "./images/ships/imperial-shuttle-2.jpg";
// import ship19_1 from "./images/ships/ef76-frigate.jpg";
// import ship19_2 from "./images/ships/ef76-frigate-2.jpg";
// import ship22_1 from "./images/ships/arc-170.jpg";
// import ship22_2 from "./images/ships/arc-170-2.jpg";
// import ship24_1 from "./images/ships/v-wing.jpg";
// import ship24_2 from "./images/ships/v-wing-2.jpg";
// import ship25_1 from "./images/ships/cr90-corvette.jpg";
// import ship25_2 from "./images/ships/cr90-corvette-2.jpg";
// import ship26_1 from "./images/ships/banking-frigate.jpg";
// import ship26_2 from "./images/ships/banking-frigate-2.jpg";
// import ship27_1 from "./images/ships/calamari-cruiser.jpg";
// import ship27_2 from "./images/ships/calamari-cruiser-2.jpg";
// import ship29_1 from "./images/ships/b-wing.jpg";
// import ship29_2 from "./images/ships/b-wing-2.jpg";
// import ship31_1 from "./images/ships/naboo-fighter.jpg";
// import ship31_2 from "./images/ships/naboo-fighter-2.jpg";
// import ship33_1 from "./images/ships/scimitar.jpg";
// import ship33_2 from "./images/ships/scimitar-2.jpg";
// import ship34_1 from "./images/ships/j-type-diplomatic-barge.jpg";
// import ship34_2 from "./images/ships/j-type-diplomatic-barge-2.jpg";
// import ship35_1 from "./images/ships/aa9-coruscant-freighter.jpg";
// import ship35_2 from "./images/ships/aa9-coruscant-freighter-2.jpg";
// import ship36_1 from "./images/ships/jedi-starfighter.jpg";
// import ship36_2 from "./images/ships/jedi-starfighter2.jpg";








export default  [
{  
    core: {
        id: '1',
    },
    descrip: {
        name: "Star Destroyer",
        model: "Imperial I-class Star Destroyer",
        manufacturer: "Kuat Drive Yards",
        cost_in_credits: "150000000",
        length: "1,600",
        max_atmosphering_speed: "975",
        crew: "47060",
        passengers: "0",
        cargo_capacity: "36000000",
        featured: false
    },
    images: [
        {
            image: {
                'url': './images/ships/star-destroyer.jpg',
            }
        },
        {
            image: {
                'url': 'ship1_2',
            }
        }
    ],
    
},
{
    core: {
        id: '2',
    },
    descrip: {    name: "Trade Federation cruiser",
        model: "Providence-class carrier/destroyer",
        manufacturer: "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
        cost_in_credits: "125000000",
        length: "1088",
        max_atmosphering_speed: "1050",
        crew: "600",
        passengers: "48247",
        cargo_capacity: "50000000",
        featured: true,
    },
    images: [
        {
            image: {
                'url': 'ship2_1',
            }
        },
        {
            image: {
                'url': 'ship2_2',
            }
        }
    ]
}
// {
//     id: '3',
//     descrip: {    
//         name: "T-70 X-wing fighter",
//         model: "T-70 X-wing fighter",
//         manufacturer: "Incom",
//         cost_in_credits: "unknown",
//         length: "unknown",
//         max_atmosphering_speed: "unknown",
//         crew: "1",
//         passengers: "unknown",
//         cargo_capacity: "unknown",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     }
// },
// {
//     id: '4',
//     descrip: {    
//         name: "Rebel transport",
//         model: "GR-75 medium transport",
//         manufacturer: "Gallofree Yards, Inc.",
//         cost_in_credits: "unknown",
//         length: "90",
//         max_atmosphering_speed: "650",
//         crew: "6",
//         passengers: "90",
//         cargo_capacity: "19000000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     }
// },
// {
//     id: '5',
//     descrip: {   
//         name: "Droid control ship",
//         model: "Lucrehulk-class Droid Control Ship",
//         manufacturer: "Hoersch-Kessel Drive, Inc.",
//         cost_in_credits: "unknown",
//         length: "3170",
//         max_atmosphering_speed: "n/a",
//         crew: "175",
//         passengers: "139000",
//         cargo_capacity: "4000000000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     }
// },
// {
//     id: '6',
//     descrip: {    
//         name: "Republic Assault ship",
//         model: "Acclamator I-class assault ship",
//         manufacturer: "Rothana Heavy Engineering",
//         cost_in_credits: "unknown",
//         length: "752",
//         max_atmosphering_speed: "unknown",
//         crew: "700",
//         passengers: "16000",
//         cargo_capacity: "11250000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     }
// },
// {
//     id: '7',
//     descrip: {    
//         name: "Republic attack cruiser",
//         model: "Senator-class Star Destroyer",
//         manufacturer: "Kuat Drive Yards, Allanteen Six shipyards",
//         cost_in_credits: "59000000",
//         length: "1137",
//         max_atmosphering_speed: "975",
//         crew: "7400",
//         passengers: "2000",
//         cargo_capacity: "20000000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     }
// },
// {
//     id: '8',
//     descrip: {    
//         name: "Executor",
//         model: "Executor-class star dreadnought",
//         manufacturer: "Kuat Drive Yards, Fondor Shipyards",
//         cost_in_credits: "1143350000",
//         length: "19000",
//         max_atmosphering_speed: "n/a",
//         crew: "279144",
//         passengers: "38000",
//         cargo_capacity: "250000000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     }
// },
// {
//     id: '9',
//     descrip: {    
//         name: "Death Star",
//         model: "DS-1 Orbital Battle Station",
//         manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
//         cost_in_credits: "1000000000000",
//         length: "120000",
//         max_atmosphering_speed: "n/a",
//         crew: "342953",
//         passengers: "843342",
//         cargo_capacity: "1000000000000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     }
// },
// {
//     id: '10',
//     descrip: {
//         name: "Millennium Falcon",
//         model: "YT-1300 light freighter",
//         manufacturer: "Corellian Engineering Corporation",
//         cost_in_credits: "100000",
//         length: "34.37",
//         max_atmosphering_speed: "1050",
//         crew: "4",
//         passengers: "6",
//         cargo_capacity: "100000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '11',
//     descrip: {
//         name: "Y-wing",
//         model: "BTL Y-wing",
//         manufacturer: "Koensayr Manufacturing",
//         cost_in_credits: "134999",
//         length: "14",
//         max_atmosphering_speed: "1000",
//         crew: "2",
//         passengers: "0",
//         cargo_capacity: "110",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '12',
//     descrip: {
//         name: "X-wing",
//         model: "T-65 X-wing",
//         manufacturer: "Incom Corporation",
//         cost_in_credits: "149999",
//         length: "12.5",
//         max_atmosphering_speed: "1050",
//         crew: "1",
//         passengers: "0",
//         cargo_capacity: "110",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '13',
//     descrip: {
//         name: "TIE Advanced x1",
//         model: "Twin Ion Engine Advanced x1",
//         manufacturer: "Sienar Fleet Systems",
//         cost_in_credits: "unknown",
//         length: "9.2",
//         max_atmosphering_speed: "1200",
//         crew: "1",
//         passengers: "0",
//         cargo_capacity: "150",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '14',
//     descrip: {
//         name: "Imperial shuttle",
//         model: "Lambda-class T-4a shuttle",
//         manufacturer: "Sienar Fleet Systems",
//         cost_in_credits: "240000",
//         length: "20",
//         max_atmosphering_speed: "850",
//         crew: "6",
//         passengers: "20",
//         cargo_capacity: "80000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '15',
//     descrip: {
//         name: "EF76 Nebulon-B escort frigate",
//         model: "EF76 Nebulon-B escort frigate",
//         manufacturer: "Kuat Drive Yards",
//         cost_in_credits: "8500000",
//         length: "300",
//         max_atmosphering_speed: "800",
//         crew: "854",
//         passengers: "75",
//         cargo_capacity: "6000000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '16',
//     descrip: {
//         name: "arc-170",
//         model: "Aggressive Reconnaissance-170 starfighte",
//         manufacturer: "Incom Corporation, Subpro Corporation",
//         cost_in_credits: "155000",
//         length: "14.5",
//         max_atmosphering_speed: "1000",
//         crew: "3",
//         passengers: "0",
//         cargo_capacity: "110",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '17',
//     descrip: {
//         name: "V-wing",
//         model: "Alpha-3 Nimbus-class V-wing starfighter",
//         manufacturer: "Kuat Systems Engineering",
//         cost_in_credits: "102500",
//         length: "7.9",
//         max_atmosphering_speed: "1050",
//         crew: "1",
//         passengers: "0",
//         cargo_capacity: "60",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '18',
//     descrip: {
//         name: "CR90 corvette",
//         model: "CR90 corvette",
//         manufacturer: "Corellian Engineering Corporation",
//         cost_in_credits: "3500000",
//         length: "150",
//         max_atmosphering_speed: "950",
//         crew: "165",
//         passengers: "600",
//         cargo_capacity: "3000000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '19',
//     descrip: {
//         name: "Banking clan frigate",
//         model: "Munificent-class star frigate",
//         manufacturer: "Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries",
//         cost_in_credits: "57000000",
//         length: "825",
//         max_atmosphering_speed: "unknown",
//         crew: "200",
//         passengers: "unknown",
//         cargo_capacity: "40000000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '20',
//     descrip: {
//         name: "Calamari Cruiser",
//         model: "MC80 Liberty type Star Cruiser",
//         manufacturer: "Mon Calamari shipyards",
//         cost_in_credits: "104000000",
//         length: "1200",
//         max_atmosphering_speed: "n/a",
//         crew: "5400",
//         passengers: "1200",
//         cargo_capacity: "unknown",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '21',
//     descrip: {
//         name: "B-wing",
//         model: "A/SF-01 B-wing starfighter",
//         manufacturer: "Slayn & Korpil",
//         cost_in_credits: "220000",
//         length: "16.9",
//         max_atmosphering_speed: "950",
//         crew: "1",
//         passengers: "0",
//         cargo_capacity: "45",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '22',
//     descrip: {
//         name: "Naboo fighter",
//         model: "N-1 starfighter",
//         manufacturer: "Theed Palace Space Vessel Engineering Corps",
//         cost_in_credits: "200000",
//         length: "11",
//         max_atmosphering_speed: "1100",
//         crew: "1",
//         passengers: "0",
//         cargo_capacity: "65",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '23',
//     descrip: {
//         name: "Scimitar",
//         model: "Star Courier",
//         manufacturer: "Republic Sienar Systems",
//         cost_in_credits: "55000000",
//         length: "26.5",
//         max_atmosphering_speed: "1180",
//         crew: "1",
//         passengers: "6",
//         cargo_capacity: "2500000",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '24',
//     descrip: {
//         name: "J-type diplomatic barge",
//         model: "J-type diplomatic barge",
//         manufacturer: "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
//         cost_in_credits: "2000000",
//         length: "39",
//         max_atmosphering_speed: "2000",
//         crew: "5",
//         passengers: "10",
//         cargo_capacity: "unknown",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '25',
//     descrip: {
//         name: "AA-9 Coruscant freighter",
//         model: "Botajef AA-9 Freighter-Liner",
//         manufacturer: "Botajef Shipyards",
//         cost_in_credits: "unknown",
//         length: "390",
//         max_atmosphering_speed: "unknown",
//         crew: "unknown",
//         passengers: "30000",
//         cargo_capacity: "unknown",
//         images: {
//             'image1': '',
//             'image2': ''
//         },
//     },
// },
// {
//     id: '26',
//     descrip: {
//         name: "Jedi starfighter",
//         model: "Delta-7 Aethersprite-class interceptor",
//         manufacturer: "Kuat Systems Engineering",
//         cost_in_credits: "180000",
//         length: "8",
//         max_atmosphering_speed: "1150",
//         crew: "1",
//         passengers: "0",
//         cargo_capacity: "60",
//         images: {
//             'image1': '',
//             'image2': ''
//         }
//     }
// }
];
