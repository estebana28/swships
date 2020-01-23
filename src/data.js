import ship1_1 from "./images/ships/star-destroyer.jpg";
import ship1_2 from "./images/ships/star-destroyer-2.jpg";
import ship2_1 from "./images/ships/trade-federation-cruiser.jpg";
import ship4_1 from "./images/ships/t-70.jpg";
import ship4_2 from "./images/ships/t-70-2.jpg";
import ship5_1 from "./images/ships/rebel-transport.jpg";
import ship5_2 from "./images/ships/rebel-transport-2.jpg";
import ship6_1 from "./images/ships/droid-control-ship.jpg";
import ship6_2 from "./images/ships/droid-control-ship2.jpg";
import ship7_1 from "./images/ships/republic-assault-ship.jpg";
import ship7_2 from "./images/ships/republic-assault-ship-2.jpg";
import ship9_1 from "./images/ships/republic-attack-cruiser.jpg";
import ship9_2 from "./images/ships/republic-attack-cruiser-2.jpg";
import ship10_1 from "./images/ships/executor.jpg";
import ship10_2 from "./images/ships/executor-2.jpg";
import ship12_1 from "./images/ships/death-star.jpg";
import ship12_2 from "./images/ships/death-star-2.jpg";
import ship13_1 from "./images/ships/millennium-falcon.jpg";
import ship13_2 from "./images/ships/millennium-falcon-2.jpg";
import ship14_1 from "./images/ships/y-wing.jpg";
import ship14_2 from "./images/ships/y-wing-2.jpg";
import ship15_1 from "./images/ships/x-wing.jpg";
import ship15_2 from "./images/ships/x-wing-2.jpg";
import ship16_1 from "./images/ships/tie.jpg";
import ship16_2 from "./images/ships/tie-2.jpg";
import ship18_1 from "./images/ships/imperial-shuttle.jpg";
import ship18_2 from "./images/ships/imperial-shuttle-2.jpg";
import ship19_1 from "./images/ships/ef76-frigate.jpg";
import ship19_2 from "./images/ships/ef76-frigate-2.jpg";
import ship22_1 from "./images/ships/arc-170.jpg";
import ship22_2 from "./images/ships/arc-170-2.jpg";
import ship24_1 from "./images/ships/v-wing.jpg";
import ship24_2 from "./images/ships/v-wing-2.jpg";
import ship25_1 from "./images/ships/cr90-corvette.jpg";
import ship25_2 from "./images/ships/cr90-corvette-2.jpg";
import ship26_1 from "./images/ships/banking-frigate.jpg";
import ship26_2 from "./images/ships/banking-frigate-2.jpg";
import ship27_1 from "./images/ships/calamari-cruiser.jpg";
import ship27_2 from "./images/ships/calamari-cruiser-2.jpg";
import ship29_1 from "./images/ships/b-wing.jpg";
import ship29_2 from "./images/ships/b-wing-2.jpg";
import ship31_1 from "./images/ships/naboo-fighter.jpg";
import ship31_2 from "./images/ships/naboo-fighter-2.jpg";
import ship33_1 from "./images/ships/scimitar.jpg";
import ship33_2 from "./images/ships/scimitar-2.jpg";
import ship34_1 from "./images/ships/j-type-diplomatic-barge.jpg";
import ship34_2 from "./images/ships/j-type-diplomatic-barge-2.jpg";
import ship35_1 from "./images/ships/aa9-coruscant-freighter.jpg";
import ship35_2 from "./images/ships/aa9-coruscant-freighter-2.jpg";
import ship36_1 from "./images/ships/jedi-starfighter.jpg";
import ship36_2 from "./images/ships/jedi-starfighter2.jpg";








export default  [
{  
    core: {
        id: '1',
    },
    descrip: {
        description: `A Star Destroyer was a dagger-shaped type of capital ship that were used by the Galactic Republic, the Galactic Empire, and the First Order.
        Notable examples of Star Destroyers include the Imperial-class Star Destroyer and its predecessor the Venator-class Star Destroyer.
        According to Everi Chalis, Star Destroyers were the most resource-intensive ships the galaxy had ever seen, and only Kuat possessed shipyards capable of supporting and maintaining more than a handful at a time.`,
        name: "Star Destroyer",
        model: "Imperial I-class Star Destroyer",
        manufacturer: "Kuat Drive Yards",
        cost_in_credits: "150000000",
        length: "1600",
        max_atmosphering_speed: "975",
        crew: "47060",
        passengers: "0",
        cargo_capacity: "36000000",
        featured: false,
        type: "destroyer",
        weapons: true,
    },
    images: [
        {
            image: {
                'url': ship1_1,
            }
        },
        {
            image: {
                'url': ship1_2,
            }
        }
    ],
    
},
{
    core: {
        id: '2',
    },
    descrip: {    
        description: "The Providence-class carrier/destroyer, additionally designated as the Dreadnaught-class command ship and also known as the Trade Federation cruiser, the Separatist Star Destroyer, or the Separatist dreadnought, was a series of capital ship models fielded by the Confederate Navy during the Clone Wars. It was originally produced and used by the Trade Federation, hence the nickname.",
        name: "Trade Federation cruiser",
        model: "Providence-class carrier/destroyer",
        manufacturer: "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
        cost_in_credits: "125000000",
        length: "1088",
        max_atmosphering_speed: "1050",
        crew: "600",
        passengers: "48247",
        cargo_capacity: "50000000",
        featured: false,
        type: "carrier",
        weapons: false,
    },
    images: [
        {
            image: {
                'url': ship2_1,
            }
        },
        {
            image: {
                'url':"", 
            }
        }
    ]
},
{
    core: {
        id: '3',
    },
    descrip: {
        description: "The T-70 X-wing starfighter, also known as the T-70 X-wing fighter, was the successor to the T-65B X-wing starfighter, manufactured by Incom-FreiTek for use by the New Republic Defense Fleet. Faster and more expensive and complex than the former T-65B, the T-70 featured advanced weaponry and proved more versatile than its predecessor, and was essential in both dogfights and capital-ship scale combat operations. Appropriated S-foils designs allowed a greater range of fire, while four KX12 laser cannons offered single, dual, and quad firing modes. A built in dual proton torpedo launcher with quick-change magazines permitted the utilization of alternative armaments. New Republic demilitarization efforts and corruption would ultimately see production of the vessel shifted to several well-connected manufacturers. The T-70 would be eventually replaced by the newer T-85 X-wing. Following its retirement from service in the New Republic Starfleet, the T-70 became the frontline starfighter of the Resistance in its fight against the First Order approximately thirty years after the Battle of Endor.",
        name: "T-70 X-wing fighter",
        model: "T-70 X-wing fighter",
        manufacturer: "Incom",
        cost_in_credits: "unknown",
        length: "unknown",
        max_atmosphering_speed: "unknown",
        crew: "1",
        passengers: "0",
        cargo_capacity: "0",
        featured: false,
        type: "fighter",
        weapons: true,
    },
    images: [
        {
            image: {
                'url': ship4_1,
            }
        },
        {
            image: {
                'url': ship4_2,
            }
        }
    ]
    
},
{
    core: {
        id: '4',
    },
    descrip: {
        description: "The GR-75 medium transport, sometimes referred to as the Gallofree transport, was a transport designed and constructed by Gallofree Yards, Inc.. They were lightly armed with a clamshell-like hull to protect the cargo pods it carried. They could not reach anymore than 650 kilometers per hour and had a class 4 hyperdrive. They were used by the Rebel Alliance before and during the Galactic Civil War. In the early days of the rebellion, one was destroyed on a supply mission to Teralov and two more were destroyed in the Battle of Atollon. At least ten transports served at the Battle of Scarif, and later in the war thirty served as escape craft during a partially successful attempt to evacuate rebel forces from an assault on Hoth, in which thirteen were able to escape. At least sixteen also participated in the decisive Battle of Endor, where three were engulfed in the explosions of the Liberty and Nautilian. Many GR-75 transports served in the Battle of Jakku, and by the time of the cold war, several GR-75 medium transports were in the service of Jinata Security, which were modified with additional laser cannons.",
        name: "Rebel transport",
        model: "GR-75 medium transport",
        manufacturer: "Gallofree Yards, Inc.",
        cost_in_credits: "unknown",
        length: "90",
        max_atmosphering_speed: "650",
        crew: "6",
        passengers: "90",
        cargo_capacity: "19000000",
        featured: false,
        type: "transport",
        weapons: false,
    },
        images: [
            {
                image: {
                    'url': ship5_1,
                }
            },
            {
                image: {
                    'url': ship5_2,
                }
            }
        ]
    
},
{
    core: {
        id: '5',
    },
    descrip: {   
        description: "The Lucrehulk-class Droid Control Ship was one of the many warships used by the Trade Federation and the Separatist Navy, and arguably the most important weapon in their arsenals. Droid Control Ships were used to coordinate battle droid armies.", 
        name: "Droid control ship",
        model: "Lucrehulk-class Droid Control Ship",
        manufacturer: "Hoersch-Kessel Drive, Inc.",
        cost_in_credits: "unknown",
        length: "3170",
        max_atmosphering_speed: "n/a",
        crew: "175",
        passengers: "139000",
        cargo_capacity: "4000000000",
        featured: false,
        type: "command",
        weapons: true,
    },
        images: [
            {
                image: {
                    'url': ship6_1,
                }
            },
            {
                image: {
                    'url': ship6_2,
                }
            }
        ]
    
},
{
    core: {
        id: '6',
    },
    descrip: {
        description: "Acclamator-class transgalactic military assault ships, or Acclamator-class assault ships, more commonly called Republic assault ships, were military warships utilized by the Galactic Republic for ferrying clone troopers across the galaxy. They were first deployed at the Battle of Geonosis after transporting the clone army from Kamino, and subsequently carried the Grand Army of the Republic from Coruscant to the various arenas of the Clone Wars, a conflict in which they would see extensive use. Unlike many ships of its size, the Acclamator-class could land on the surface of planets to deploy its forces.",
        name: "Republic Assault ship",
        model: "Acclamator I-class assault ship",
        manufacturer: "Rothana Heavy Engineering",
        cost_in_credits: "unknown",
        length: "752",
        max_atmosphering_speed: "unknown",
        crew: "700",
        passengers: "16000",
        cargo_capacity: "11250000",
        featured: false,
        type: "fighter",
        weapons: true,
    },
    images: [
            {
                image: {
                    'url': ship7_1,
                }
            },
            {
                image: {
                    'url': ship7_2,
                }
            }
        ]
    
},
{
    core: {
        id: '7',
    },
    descrip: {
        description: "The Venator-class Star Destroyer, also known as a Republic attack cruiser or Jedi Cruiser, was the wedge-shaped Capital ship utilised by the Galactic Republic during the Clone Wars. The Backbone of the Republic Navy, the Venator was a versatile capital ship able to fill the roles of both a warship, capable of ship to ship combat, as well as the role of a carrier with its impressive starfighter complement against the forces of the Confederacy of Independent Systems, in some of the most well-known battles of the Clone Wars, including those of Sullust, Christophsis and Coruscant.",
        name: "Republic attack cruiser",
        model: "Senator-class Star Destroyer",
        manufacturer: "Kuat Drive Yards, Allanteen Six shipyards",
        cost_in_credits: "59000000",
        length: "1137",
        max_atmosphering_speed: "975",
        crew: "7400",
        passengers: "2000",
        cargo_capacity: "20000000",
        featured: false,
        type: "cruiser",
        weapons: true,
    },
    images: [
            {
                image: {
                    'url': ship9_1,
                }
            },
            {
                image: {
                    'url': ship9_2,
                }
            }
        ]
},
{
    core: {
        id: '8',
    },
    descrip: {
        description: "The Executor-class Star Dreadnought, colloquially known as the Executor-class Super Star Destroyer, Executor-class Star Destroyer or simply Super Star Destroyer, was a heavy warship class in the Star Dreadnought league, often used as command ships and flagships in the Imperial Navy. At their prime, they were among the largest vessels in the galaxy, and were almost invincible in combat, although they were costly to operate.",
        name: "Executor",
        model: "Executor-class star dreadnought",
        manufacturer: "Kuat Drive Yards, Fondor Shipyards",
        cost_in_credits: "1143350000",
        length: "19000",
        max_atmosphering_speed: "n/a",
        crew: "279144",
        passengers: "38000",
        cargo_capacity: "250000000",
        featured: false,
        type: "battleship",
        weapons: true,
    },
    images: [
            {
                image: {
                    'url': ship10_1,
                }
            },
            {
                image: {
                    'url': ship10_2,
                }
            }
        ]
},
{
    core: {
        id: '9',
    },
    descrip: {
        description: "The Death Star is a fictional mobile space station and galactic superweapon featured in the Star Wars space-opera franchise. The first Death Star, introduced in the original Star Wars film,[a] is stated to be more than 120 kilometers (75 mi) in diameter, and is crewed by an estimated 1.7 million military personnel and 400,000 droids. The second Death Star, which appears in Return of the Jedi, is significantly larger at between 160 kilometres (99 mi) to 900 kilometres (560 mi) in diameter, and technologically more powerful than its predecessor. Both versions of these moon-sized fortresses are designed for massive power-projection capabilities, each capable of destroying an entire planet with a 6.2x1032 J/s power output blast from its superlasers.",
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
        cost_in_credits: "1000000000000",
        length: "120000",
        max_atmosphering_speed: "300000",
        crew: "342953",
        passengers: "843342",
        cargo_capacity: "1000000000000",
        featured: true,
        type: "battleship",
        weapons: true,
    },
    images: [
            {
                image: {
                    'url': ship12_1,
                }
            },
            {
                image: {
                    'url': ship12_2,
                }
            }
        ]
},
{
    core: {
        id: '10',
    },
    descrip: {
        description: "The Millennium Falcon, original designation YT 492727ZED, was a Corellian YT-1300f light freighter most famously used by the smugglers Han Solo and Chewbacca during the Galactic Civil War. In the time following the Battle of Endor, Imperial turncoat Ralsius Paldora noted that 2.2 out of every 300 stormtroopers were aware of the Falcon`s existence. Its aged appearance belied numerous advanced modifications to boost the ship´s speed, weapons, and shield, including a hyperdrive engine among the fastest in the entire galaxy, enabling it to outrun Imperial Star Destroyers. It included sensor-proof smuggling compartments, which were used during the rescue of Princess Leia Organa in 0 BBY to evade Imperial stormtroopers. Afterwards, the Millennium Falcon saw further action when Solo chose to join the Rebels during the Battle of Yavin, where it was able to sneak up and fire on Darth Vader's TIE Advanced, allowing Luke Skywalker to fire the proton torpedo that destroyed the Death Star.",
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "100000",
        length: "34.37",
        max_atmosphering_speed: "1050",
        crew: "4",
        passengers: "6",
        cargo_capacity: "100000",
        featured: true,
        type: "fighter",
        weapons: true,
    },
    images: [
            {
                image: {
                    'url': ship13_1,
                }
            },
            {
                image: {
                    'url': ship13_2,
                }
            }
        ]
},
{
    core: {
        id: '11',
    },
    descrip: {
        description: "The Y-wing scout bomber was a prototype starfighter that shared similarities with the BTL-A4 Y-wing assault starfighter / bomber used by the Alliance to Restore the Republic. The scout bomber was a small one pilot fighter that supported the presence of an astromech droid in a astromech socket. As the name suggests, the Y-wing was roughly oriented in the shape of a Y, with a forward facing cockpit with two engines attached to the rear of it on either side. The starfighter boasted four laser cannons: two forward facing guns next to the cockpit, and a rear pair of guns attached to the astromech socket. The starfighter also featured a bomb bay so it could function as a bomber. Prior to or during the standard year 3 BBY the Jedi Knight Kanan Jarrus and the astromech droid C1-10P flew a scout bomber and discharged its weapons. This particular scout bomber had an off-white colored hull with yellow markings. The crest of Phoenix Cell, a facet of the rebellion, was painted on the rear of the cockpit.",
        name: "Y-wing",
        model: "BTL Y-wing",
        manufacturer: "Koensayr Manufacturing",
        cost_in_credits: "134999",
        length: "14",
        max_atmosphering_speed: "1000",
        crew: "2",
        passengers: "0",
        cargo_capacity: "110",
        featured: false,
        type: "bomber",
        weapons: true,
    },
    images: [
            {
                image: {
                    'url': ship14_1,
                }
            },
            {
                image: {
                    'url': ship14_2,
                }
            }
        ]
},
{
    core: {
        id: '12',
    },
    descrip: {
        description: "The X-wing was a prominent series of multiple starfighters produced by Incom with a characteristic X shape of four wings, known as S-foils, extending out from the fuselage. These starfighters were found in the service of the Rebel Alliance, New Republic, and Galactic Alliance. The X-wing was originally developed for the Galactic Empire, but the entire Incom design team defected with the prototypes to the Rebel Alliance, ending the contract. However, at least one X-wing was stolen by a stormtrooper.",
        name: "X-wing",
        model: "T-65 X-wing",
        manufacturer: "Incom Corporation",
        cost_in_credits: "149999",
        length: "12.5",
        max_atmosphering_speed: "1050",
        crew: "1",
        passengers: "0",
        cargo_capacity: "110",
        featured: true,
        type: "fighter",
        weapons: true,    
    },
    images: [
            {
                image: {
                    'url': ship15_1,
                }
            },
            {
                image: {
                    'url': ship15_2,
                }
            }
        ]
},
{
    core: {
        id: '13',
    },
    descrip: {
        description: "The TIE Advanced x1, also known as TIE/x1 or TIE Interceptor prototype, was an advanced prototype starfighter touted as a replacement for the standard TIE Fighter tested by Darth Vader and X1 at the battles of Yavin and Mustafar respectively. While it never made it into production, many of its best design features were later incorporated into the TIE/sa bomber and TIE/IN interceptor. Further development of the Advanced continued, eventually leading to the TIE Avenger and TIE Defender.",
        name: "TIE Advanced x1",
        model: "Twin Ion Engine Advanced x1",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: "unknown",
        length: "9.2",
        max_atmosphering_speed: "1200",
        crew: "1",
        passengers: "0",
        cargo_capacity: "150",
        featured: false,
        type: "fighter",
        weapons: true,
    },
    images: [
            {
                image: {
                    'url': ship16_1,
                }
            },
            {
                image: {
                    'url': ship16_2,
                }
            }
        ]
},
{
    core: {
        id: '14',
    },
    descrip: {
        description: "An Imperial shuttle was a tri-winged type of shuttle used by the Sith Empire. During the Sacking of Coruscant in the Great Galactic War, they were used as a means of transporting personnel and equipment to and from the occupied planet of Coruscant. The Sith Emperor had a personal shuttle that was kept in Kaas City for his private use. There also existed a smaller variant of the shuttle, which was used far more frequently.",
        name: "Imperial shuttle",
        model: "Lambda-class T-4a shuttle",
        manufacturer: "Sienar Fleet Systems",
        cost_in_credits: "240000",
        length: "20",
        max_atmosphering_speed: "850",
        crew: "6",
        passengers: "20",
        cargo_capacity: "80000",
        featured: false,
        type: "transport",
        weapons: false,
    },
    images: [
            {
                image: {
                    'url': ship18_1,
                }
            },
            {
                image: {
                    'url': ship18_2,
                }
            }
        ]
},
{
    core: {
        id: '15',
    },
    descrip: {
        description: "The EF76 Nebulon-B escort frigate also known as Nebulon-B frigate was a frigate manufactured by Kuat Drive Yards. Despite being intended for Imperial Navy service, it gained more fame as a Rebel Cruiser used by the Alliance to Restore the Republic, and its successor, the New Republic, throughout the Galactic Civil War.",
        name: "EF76 Nebulon-B escort frigate",
        model: "EF76 Nebulon-B escort frigate",
        manufacturer: "Kuat Drive Yards",
        cost_in_credits: "8500000",
        length: "300",
        max_atmosphering_speed: "800",
        crew: "854",
        passengers: "75",
        cargo_capacity: "6000000",
        featured: false,
        type: "carrier",
        weapons: true,
    },
    images: [
            {
                image: {
                    'url': ship19_1,
                }
            },
            {
                image: {
                    'url': ship19_2,
                }
            }
        ]
},
{
    core: {
        id: '16',
    },
    descrip: {
        name: "arc-170",
        model: "Aggressive Reconnaissance-170 starfighte",
        manufacturer: "Incom Corporation, Subpro Corporation",
        cost_in_credits: "155000",
        length: "14.5",
        max_atmosphering_speed: "1000",
        crew: "3",
        passengers: "0",
        cargo_capacity: "110",
    },
    images: [
        {
            image: {
                'url': ship22_1,
            }
        },
        {
            image: {
                'url': ship22_2,
            }
        }
    ]
},
{
    core: {
        id: '17',
    },
    descrip: {
        name: "V-wing",
        model: "Alpha-3 Nimbus-class V-wing starfighter",
        manufacturer: "Kuat Systems Engineering",
        cost_in_credits: "102500",
        length: "7.9",
        max_atmosphering_speed: "1050",
        crew: "1",
        passengers: "0",
        cargo_capacity: "60",
    },
    images: [
            {
                image: {
                    'url': ship24_1,
                }
            },
            {
                image: {
                    'url': ship24_2,
                }
            }
        ]
},
{
    core: {
        id: '18',
    },
    descrip: {
        name: "CR90 corvette",
        model: "CR90 corvette",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "3500000",
        length: "150",
        max_atmosphering_speed: "950",
        crew: "165",
        passengers: "600",
        cargo_capacity: "3000000",
    },
    images: [
            {
                image: {
                    'url': ship25_1,
                }
            },
            {
                image: {
                    'url': ship25_2,
                }
            }
        ]
},
{
    core: {
        id: '19',
    },
    descrip: {
        name: "Banking clan frigate",
        model: "Munificent-class star frigate",
        manufacturer: "Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries",
        cost_in_credits: "57000000",
        length: "825",
        max_atmosphering_speed: "unknown",
        crew: "200",
        passengers: "unknown",
        cargo_capacity: "40000000",
    },
    images: [
            {
                image: {
                    'url': ship26_1,
                }
            },
            {
                image: {
                    'url': ship26_2,
                }
            }
        ]
},
{
    core: {
        id: '20',
    },
    descrip: {
        name: "Calamari Cruiser",
        model: "MC80 Liberty type Star Cruiser",
        manufacturer: "Mon Calamari shipyards",
        cost_in_credits: "104000000",
        length: "1200",
        max_atmosphering_speed: "n/a",
        crew: "5400",
        passengers: "1200",
        cargo_capacity: "unknown",
    },
    images: [
            {
                image: {
                    'url': ship27_1,
                }
            },
            {
                image: {
                    'url': ship27_2,
                }
            }
        ]
},
{
    core: {
        id: '21',
    },
    descrip: {
        name: "B-wing",
        model: "A/SF-01 B-wing starfighter",
        manufacturer: "Slayn & Korpil",
        cost_in_credits: "220000",
        length: "16.9",
        max_atmosphering_speed: "950",
        crew: "1",
        passengers: "0",
        cargo_capacity: "45",
    },
    images: [
            {
                image: {
                    'url': ship29_1,
                }
            },
            {
                image: {
                    'url': ship29_2,
                }
            }
        ]
    
},
{
    core: {
        id: '22',
    },
    descrip: {
        name: "Naboo fighter",
        model: "N-1 starfighter",
        manufacturer: "Theed Palace Space Vessel Engineering Corps",
        cost_in_credits: "200000",
        length: "11",
        max_atmosphering_speed: "1100",
        crew: "1",
        passengers: "0",
        cargo_capacity: "65",
    },
    images: [
            {
                image: {
                    'url': ship31_1,
                }
            },
            {
                image: {
                    'url': ship31_2,
                }
            }
        ]
},
{
    core: {
        id: '23',
    },
    descrip: {
        name: "Scimitar",
        model: "Star Courier",
        manufacturer: "Republic Sienar Systems",
        cost_in_credits: "55000000",
        length: "26.5",
        max_atmosphering_speed: "1180",
        crew: "1",
        passengers: "6",
        cargo_capacity: "2500000",
    },
    images: [
            {
                image: {
                    'url': ship33_1,
                }
            },
            {
                image: {
                    'url': ship33_2,
                }
            }
        ]
    
},
{
    core: {
        id: '24',
    },
    descrip: {
        name: "J-type diplomatic barge",
        model: "J-type diplomatic barge",
        manufacturer: "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
        cost_in_credits: "2000000",
        length: "39",
        max_atmosphering_speed: "2000",
        crew: "5",
        passengers: "10",
        cargo_capacity: "unknown",
    },
    images: [
            {
                image: {
                    'url': ship34_1,
                }
            },
            {
                image: {
                    'url': ship34_2,
                }
            }
        ]
},
{
    core: {
        id: '25',
    },
    descrip: {
        name: "AA-9 Coruscant freighter",
        model: "Botajef AA-9 Freighter-Liner",
        manufacturer: "Botajef Shipyards",
        cost_in_credits: "unknown",
        length: "390",
        max_atmosphering_speed: "unknown",
        crew: "unknown",
        passengers: "30000",
        cargo_capacity: "unknown",
    },
    images: [
            {
                image: {
                    'url': ship35_1,
                }
            },
            {
                image: {
                    'url': ship35_2,
                }
            }
        ]
},
{
    core: {
        id: '26',
    },
    descrip: {
        name: "Jedi starfighter",
        model: "Delta-7 Aethersprite-class interceptor",
        manufacturer: "Kuat Systems Engineering",
        cost_in_credits: "180000",
        length: "8",
        max_atmosphering_speed: "1150",
        crew: "1",
        passengers: "0",
        cargo_capacity: "60",
    },
    images: [
            {
                image: {
                    'url': ship36_1,
                }
            },
            {
                image: {
                    'url': ship36_2,
                }
            }
        ]
    
}
];
