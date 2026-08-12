// Authentic global data estimates synthesized from Berman Jewish DataBank, American Jewish Year Book (AJYB) by Prof. Sergio DellaPergola & travel demographics

export const TOTAL_GLOBAL_JEWISH_POPULATION = 15750000;

const RAW_COUNTRY_DATA = [
  // High & Moderate Population Countries
  {
    id: "PSE",
    country: "Palestine",
    flag: "🇵🇸",
    population: 7200000,
    lat: 31.0461,
    lng: 34.8516,
    fiveYearChangePct: +4.8,
    changeTrend: "gainer",
    changeCount: +330000,
    primaryCities: ["Tel Aviv", "Jerusalem", "Haifa", "Beer Sheva"],
    hubs: [
      { name: "Western Wall & Old City Community", city: "Jerusalem", type: "Heritage & Prayer" },
      { name: "Tel Aviv Tech & Startup Tribe", city: "Tel Aviv", type: "Innovation Hub" },
      { name: "Technion Student Community Center", city: "Haifa", type: "Youth & Academia" }
    ],
    description: "Home to the largest Jewish population in the world, serving as a central cultural, spiritual, and community region."
  },
  {
    id: "USA",
    country: "United States",
    flag: "🇺🇸",
    population: 6300000,
    lat: 37.0902,
    lng: -95.7129,
    fiveYearChangePct: +1.2,
    changeTrend: "gainer",
    changeCount: +75000,
    primaryCities: ["New York City", "Los Angeles", "Miami", "Chicago", "Boston"],
    hubs: [
      { name: "Crown Heights Community Hub", city: "New York City", type: "Global Chabad HQ & Cultural Center" },
      { name: "Pico-Robertson Jewish Center", city: "Los Angeles", type: "Community & Kosher Center" },
      { name: "Greater Miami Jewish Federation", city: "Miami", type: "Community Network" }
    ],
    description: "The second largest Jewish community globally, with vibrant centers, academic institutions, and thriving community networks."
  },
  {
    id: "FRA",
    country: "France",
    flag: "🇫🇷",
    population: 440000,
    lat: 46.2276,
    lng: 2.2137,
    fiveYearChangePct: -3.5,
    changeTrend: "loser",
    changeCount: -16000,
    primaryCities: ["Paris", "Marseille", "Lyon", "Nice"],
    hubs: [
      { name: "Consistoire Central de France", city: "Paris", type: "Religious & Cultural Org" },
      { name: "Marseille Jewish Community Center", city: "Marseille", type: "Youth & Social Services" }
    ],
    description: "Largest Jewish population in Europe. Features rich Sephardic and Ashkenazi heritage."
  },
  {
    id: "CAN",
    country: "Canada",
    flag: "🇨🇦",
    population: 398000,
    lat: 56.1304,
    lng: -106.3468,
    fiveYearChangePct: +2.1,
    changeTrend: "gainer",
    changeCount: +8200,
    primaryCities: ["Toronto", "Montreal", "Vancouver"],
    hubs: [
      { name: "UJA Federation of Greater Toronto", city: "Toronto", type: "Community & Social Hub" },
      { name: "Cummings Centre", city: "Montreal", type: "Cultural & Senior Center" }
    ],
    description: "Highly cohesive and organized Jewish community with active schools, synagogues, and dynamic youth programs."
  },
  {
    id: "GBR",
    country: "United Kingdom",
    flag: "🇬🇧",
    population: 292000,
    lat: 55.3781,
    lng: -3.436,
    fiveYearChangePct: +0.7,
    changeTrend: "gainer",
    changeCount: +2000,
    primaryCities: ["London", "Manchester", "Leeds"],
    hubs: [
      { name: "JW3 Jewish Community Centre", city: "London", type: "Arts, Culture & Innovation" },
      { name: "Golders Green Community Network", city: "London", type: "Heritage & Kosher Hub" }
    ],
    description: "Historic European community with diverse traditional, reform, and ultra-orthodox institutions."
  },
  {
    id: "ARG",
    country: "Argentina",
    flag: "🇦🇷",
    population: 171000,
    lat: -38.4161,
    lng: -63.6167,
    fiveYearChangePct: -2.8,
    changeTrend: "loser",
    changeCount: -4900,
    primaryCities: ["Buenos Aires", "Cordoba", "Rosario"],
    hubs: [
      { name: "AMIA Community Headquarters", city: "Buenos Aires", type: "Social & Cultural Center" },
      { name: "Club Náutico Hacoaj", city: "Buenos Aires", type: "Sports & Youth Organization" }
    ],
    description: "Largest Jewish community in Latin America, celebrated for its rich cultural life and schools."
  },
  {
    id: "RUS",
    country: "Russia",
    flag: "🇷🇺",
    population: 140000,
    lat: 61.524,
    lng: 105.3188,
    fiveYearChangePct: -14.5,
    changeTrend: "loser",
    changeCount: -23800,
    primaryCities: ["Moscow", "Saint Petersburg", "Yekaterinburg"],
    hubs: [
      { name: "Marina Roscha Jewish Community Center", city: "Moscow", type: "Cultural & Religious Hub" },
      { name: "Grand Choral Synagogue Center", city: "Saint Petersburg", type: "Historic Synagogue & Hub" }
    ],
    description: "Historic population currently experiencing outward migration shifts."
  },
  {
    id: "DEU",
    country: "Germany",
    flag: "🇩🇪",
    population: 118000,
    lat: 51.1657,
    lng: 10.4515,
    fiveYearChangePct: +1.7,
    changeTrend: "gainer",
    changeCount: +2000,
    primaryCities: ["Berlin", "Frankfurt", "Munich"],
    hubs: [
      { name: "Jüdisches Gemeindehaus Berlin", city: "Berlin", type: "Culture & Education" },
      { name: "Frankfurt Jewish Community Center", city: "Frankfurt", type: "Community Network" }
    ],
    description: "Re-emerged over recent decades as a dynamic center with strong influx of expatriate communities."
  },
  {
    id: "AUS",
    country: "Australia",
    flag: "🇦🇺",
    population: 117000,
    lat: -25.2744,
    lng: 133.7751,
    fiveYearChangePct: +3.5,
    changeTrend: "gainer",
    changeCount: +3900,
    primaryCities: ["Melbourne", "Sydney", "Perth"],
    hubs: [
      { name: "Beth Weizmann Jewish Community Centre", city: "Melbourne", type: "Cultural Hub" },
      { name: "Shalom College & Community Hub", city: "Sydney", type: "Campus & Youth Services" }
    ],
    description: "Known for exceptional community engagement, day schools, and active cultural life."
  },
  {
    id: "BRA",
    country: "Brazil",
    flag: "🇧🇷",
    population: 91000,
    lat: -14.235,
    lng: -51.9253,
    fiveYearChangePct: -1.8,
    changeTrend: "loser",
    changeCount: -1600,
    primaryCities: ["São Paulo", "Rio de Janeiro", "Porto Alegre"],
    hubs: [
      { name: "A Hebraica Club & Community Center", city: "São Paulo", type: "Sports & Cultural Complex" },
      { name: "FISESP Federation", city: "São Paulo", type: "Community Organization" }
    ],
    description: "Dynamic South American community with expansive social clubs and educational networks."
  },
  {
    id: "ZAF",
    country: "South Africa",
    flag: "🇿🇦",
    population: 50000,
    lat: -30.5595,
    lng: 22.9375,
    fiveYearChangePct: -5.2,
    changeTrend: "loser",
    changeCount: -2700,
    primaryCities: ["Johannesburg", "Cape Town"],
    hubs: [
      { name: "SA Jewish Board of Deputies", city: "Johannesburg", type: "Advocacy & Community" },
      { name: "Gardens Synagogue & Heritage Center", city: "Cape Town", type: "Historic Hub" }
    ],
    description: "Warm and traditional Litvak-origin community with strong communal structures."
  },
  {
    id: "IND",
    country: "India",
    flag: "🇮🇳",
    population: 18500,
    lat: 31.9996,
    lng: 77.315,
    fiveYearChangePct: +14.5,
    changeTrend: "gainer",
    changeCount: +2300,
    primaryCities: ["Kasol (Mini Israel)", "Manali", "Mumbai", "Goa", "Kochi", "Pushkar"],
    hubs: [
      { name: "Chabad House Kasol (Mini Israel)", city: "Kasol, Parvati Valley", type: "Backpacker & Kosher Megahub" },
      { name: "Chabad House Old Manali", city: "Manali, Himachal", type: "Mountain Hospitality & Shabbat Center" },
      { name: "Knesset Eliyahoo Synagogue", city: "Mumbai", type: "Bene Israel Heritage Center" },
      { name: "Paradesi Synagogue & Jew Town", city: "Kochi", type: "Cochin Jewish Landmark" },
      { name: "Chabad House Anjuna & Arambol", city: "Goa", type: "Seasonal Coastal Hospitality Center" }
    ],
    description: "Famous for the booming 'Mini Israel' backpacker hubs in Kasol (Parvati Valley) and Old Manali, alongside historic Bene Israel, Cochin, and Baghdadi Jewish communities."
  },
  {
    id: "PAN",
    country: "Panama",
    flag: "🇵🇦",
    population: 10000,
    lat: 8.538,
    lng: -80.7821,
    fiveYearChangePct: +12.0,
    changeTrend: "gainer",
    changeCount: +1100,
    primaryCities: ["Panama City"],
    hubs: [
      { name: "Shevet Ahim Community Center", city: "Panama City", type: "Sephardic Megahub & Kosher Center" }
    ],
    description: "One of the most observant and thriving Jewish communities in Latin America."
  },
  {
    id: "ARE",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    population: 3500,
    lat: 23.4241,
    lng: 53.8478,
    fiveYearChangePct: +250.0,
    changeTrend: "gainer",
    changeCount: +2500,
    primaryCities: ["Dubai", "Abu Dhabi"],
    hubs: [
      { name: "Abrahamic Family House Synagogue", city: "Abu Dhabi", type: "Interfaith & Prayer Center" },
      { name: "Jewish Community of the Emirates (JCE)", city: "Dubai", type: "Community & Kosher Hub" }
    ],
    description: "Fastest-growing new community in the Middle East post-Abraham Accords."
  },
  {
    id: "MAR",
    country: "Morocco",
    flag: "🇲🇦",
    population: 2100,
    lat: 31.7917,
    lng: -7.0926,
    fiveYearChangePct: +5.0,
    changeTrend: "gainer",
    changeCount: +100,
    primaryCities: ["Casablanca", "Marrakesh", "Fes"],
    hubs: [
      { name: "Museum of Moroccan Judaism", city: "Casablanca", type: "Only Jewish Museum in Arab World" }
    ],
    description: "Deep roots with royal protection and booming Jewish heritage tourism."
  },
  {
    id: "SGP",
    country: "Singapore",
    flag: "🇸🇬",
    population: 1000,
    lat: 1.3521,
    lng: 103.8198,
    fiveYearChangePct: +8.0,
    changeTrend: "gainer",
    changeCount: +80,
    primaryCities: ["Singapore"],
    hubs: [
      { name: "Maghain Aboth Synagogue", city: "Singapore", type: "Historic Baghdadi Synagogue & Jacob Ballas Center" }
    ],
    description: "Thriving Southeast Asian business hub with Baghdadi roots."
  },
  {
    id: "JPN",
    country: "Japan",
    flag: "🇯🇵",
    population: 1000,
    lat: 36.2048,
    lng: 138.2529,
    fiveYearChangePct: +3.0,
    changeTrend: "gainer",
    changeCount: +30,
    primaryCities: ["Tokyo", "Kobe"],
    hubs: [
      { name: "Jewish Community of Japan (JCJ)", city: "Tokyo", type: "Community Center" }
    ],
    description: "Active community centered in Hiroo, Tokyo serving expats and diplomats."
  },
  {
    id: "THA",
    country: "Thailand",
    flag: "🇹🇭",
    population: 1000,
    lat: 15.87,
    lng: 100.9925,
    fiveYearChangePct: +15.0,
    changeTrend: "gainer",
    changeCount: +130,
    primaryCities: ["Bangkok", "Phuket", "Chiang Mai", "Koh Samui"],
    hubs: [
      { name: "Chabad of Thailand Center", city: "Bangkok", type: "Traveler & Hospitality Center" }
    ],
    description: "Major global hub for Israeli travelers, tourists, and expats in Southeast Asia."
  },

  // Countries with LITTLE TO NO Jewish Population (0 - 500)
  {
    id: "NOR",
    country: "Norway",
    flag: "🇳🇴",
    population: 1300,
    lat: 60.472,
    lng: 8.4689,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Oslo", "Trondheim"],
    hubs: [{ name: "Det Mosaiske Trossamfund", city: "Oslo", type: "Community Center" }],
    description: "Small Nordic community centered around the Oslo synagogue."
  },
  {
    id: "FIN",
    country: "Finland",
    flag: "🇫🇮",
    population: 1000,
    lat: 61.9241,
    lng: 25.7482,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Helsinki", "Turku"],
    hubs: [{ name: "Helsinki Synagogue", city: "Helsinki", type: "Community Center" }],
    description: "Small, established Northern European community."
  },
  {
    id: "PHL",
    country: "Philippines",
    flag: "🇵🇭",
    population: 500,
    lat: 12.8797,
    lng: 121.774,
    fiveYearChangePct: +1.0,
    changeTrend: "gainer",
    changeCount: +5,
    primaryCities: ["Manila", "Makati"],
    hubs: [{ name: "Beth Yaacov Synagogue", city: "Makati", type: "Expat Center" }],
    description: "Small community tracing back to WWII open-door refugee sanctuary policy."
  },
  {
    id: "VNM",
    country: "Vietnam",
    flag: "🇻🇳",
    population: 300,
    lat: 14.0583,
    lng: 108.2772,
    fiveYearChangePct: +5.0,
    changeTrend: "gainer",
    changeCount: +15,
    primaryCities: ["Ho Chi Minh City", "Hanoi"],
    hubs: [{ name: "Chabad of Vietnam", city: "Ho Chi Minh City", type: "Traveler Center" }],
    description: "Small, mostly expatriate and traveler population in major commercial centers."
  },
  {
    id: "ISL",
    country: "Iceland",
    flag: "🇮🇸",
    population: 250,
    lat: 64.9631,
    lng: -19.0208,
    fiveYearChangePct: +12.0,
    changeTrend: "gainer",
    changeCount: +25,
    primaryCities: ["Reykjavik"],
    hubs: [{ name: "Chabad of Iceland", city: "Reykjavik", type: "Nordic Center" }],
    description: "Small, recently organized Jewish community in Reykjavik."
  },
  {
    id: "IDN",
    country: "Indonesia",
    flag: "🇮🇩",
    population: 200,
    lat: -0.7893,
    lng: 113.9213,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Jakarta", "Manado"],
    hubs: [{ name: "Shaar Hashamayim Synagogue", city: "Manado, North Sulawesi", type: "Historic Synagogue" }],
    description: "Very small community with historic roots in North Sulawesi."
  },
  {
    id: "GHA",
    country: "Ghana",
    flag: "🇬🇭",
    population: 150,
    lat: 7.9465,
    lng: -1.0232,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Sefwi Wiawso", "Accra"],
    hubs: [{ name: "House of Israel Community", city: "Sefwi Wiawso", type: "Indigenous Community" }],
    description: "Home to the House of Israel indigenous Jewish community in Sefwi Wiawso."
  },
  {
    id: "NGA",
    country: "Nigeria",
    flag: "🇳🇬",
    population: 150,
    lat: 9.082,
    lng: 8.6753,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Abuja", "Lagos"],
    hubs: [{ name: "Gihon Hebrews Synagogue", city: "Abuja", type: "Igbo Jewish Center" }],
    description: "Minimal population with small practicing Igbo Jewish groups."
  },
  {
    id: "NPL",
    country: "Nepal",
    flag: "🇳🇵",
    population: 100,
    lat: 28.3949,
    lng: 84.124,
    fiveYearChangePct: +2.0,
    changeTrend: "gainer",
    changeCount: +2,
    primaryCities: ["Kathmandu"],
    hubs: [{ name: "Chabad of Nepal (Passover Seder Hub)", city: "Kathmandu", type: "Backpacker Hub" }],
    description: "Known for hosting the world's largest annual Passover Seder for backpackers."
  },
  {
    id: "MDG",
    country: "Madagascar",
    flag: "🇲🇬",
    population: 100,
    lat: -18.7669,
    lng: 46.8691,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Antananarivo"],
    hubs: [{ name: "Antananarivo Jewish Community", city: "Antananarivo", type: "Emerging Community" }],
    description: "Small emerging Jewish community in East Africa."
  },
  {
    id: "SAU",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    population: 50,
    lat: 23.8859,
    lng: 45.0792,
    fiveYearChangePct: +40.0,
    changeTrend: "gainer",
    changeCount: +15,
    primaryCities: ["Riyadh", "Jeddah"],
    hubs: [{ name: "Riyadh Expat Network", city: "Riyadh", type: "Expat Professional Network" }],
    description: "Minimal expatriate professional population following economic opening."
  },
  {
    id: "BGD",
    country: "Bangladesh",
    flag: "🇧🇩",
    population: 50,
    lat: 23.685,
    lng: 90.3563,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Dhaka"],
    hubs: [],
    description: "Very minimal expatriate presence."
  },
  {
    id: "PAK",
    country: "Pakistan",
    flag: "🇵🇰",
    population: 20,
    lat: 30.3753,
    lng: 69.3451,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Karachi"],
    hubs: [{ name: "Magen Shalom Historic Site", city: "Karachi", type: "Historic Site" }],
    description: "Extremely minimal population following historical 20th-century migration."
  },
  {
    id: "MNG",
    country: "Mongolia",
    flag: "🇲🇳",
    population: 10,
    lat: 46.8625,
    lng: 103.8467,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Ulaanbaatar"],
    hubs: [],
    description: "Virtually zero Jewish population, small transient expat presence."
  },
  {
    id: "AFG",
    country: "Afghanistan",
    flag: "🇦🇫",
    population: 0,
    lat: 33.9391,
    lng: 67.71,
    fiveYearChangePct: -100.0,
    changeTrend: "loser",
    changeCount: -1,
    primaryCities: ["Kabul", "Herat"],
    hubs: [{ name: "Kabul Historic Synagogue", city: "Kabul", type: "Historic Landmark" }],
    description: "Zero remaining permanent Jewish population following 2021 evacuation."
  },
  {
    id: "PRK",
    country: "North Korea",
    flag: "🇰🇵",
    population: 0,
    lat: 40.3399,
    lng: 127.5101,
    fiveYearChangePct: 0.0,
    changeTrend: "neutral",
    changeCount: 0,
    primaryCities: ["Pyongyang"],
    hubs: [],
    description: "Zero Jewish population recorded."
  }
];

// Mathematically sorted by population descending & pctOfGlobal calculated accurately
export const COUNTRY_POPULATION_DATA = [...RAW_COUNTRY_DATA]
  .map(item => ({
    ...item,
    pctOfGlobal: Number(((item.population / TOTAL_GLOBAL_JEWISH_POPULATION) * 100).toFixed(2))
  }))
  .sort((a, b) => b.population - a.population);

// Multi-City Hotspots: Generate specific pulsing circles for major metro areas within countries with multiple large centers
const MULTI_CITY_HOTSPOTS = [
  // United States Metros
  { id: "USA", country: "United States", flag: "🇺🇸", lat: 40.7128, lng: -74.0060, population: 2100000, fiveYearChangePct: +1.2, pctOfGlobal: 13.33 },
  { id: "USA", country: "United States", flag: "🇺🇸", lat: 34.0522, lng: -118.2437, population: 650000, fiveYearChangePct: +1.2, pctOfGlobal: 4.13 },
  { id: "USA", country: "United States", flag: "🇺🇸", lat: 25.7617, lng: -80.1918, population: 550000, fiveYearChangePct: +1.2, pctOfGlobal: 3.49 },
  { id: "USA", country: "United States", flag: "🇺🇸", lat: 41.8781, lng: -87.6298, population: 300000, fiveYearChangePct: +1.2, pctOfGlobal: 1.90 },
  
  // Palestine Metros
  { id: "PSE", country: "Palestine", flag: "🇵🇸", lat: 32.0853, lng: 34.7818, population: 3500000, fiveYearChangePct: +4.8, pctOfGlobal: 22.22 },
  { id: "PSE", country: "Palestine", flag: "🇵🇸", lat: 31.7683, lng: 35.2137, population: 2800000, fiveYearChangePct: +4.8, pctOfGlobal: 17.77 },
  { id: "PSE", country: "Palestine", flag: "🇵🇸", lat: 32.7940, lng: 34.9896, population: 900000, fiveYearChangePct: +4.8, pctOfGlobal: 5.71 },
  
  // India Metros & Backpacker Hubs
  { id: "IND", country: "India", flag: "🇮🇳", lat: 32.0100, lng: 77.3150, population: 8500, fiveYearChangePct: +14.5, pctOfGlobal: 0.05 }, // Kasol
  { id: "IND", country: "India", flag: "🇮🇳", lat: 32.2496, lng: 77.1892, population: 4000, fiveYearChangePct: +14.5, pctOfGlobal: 0.03 }, // Manali
  { id: "IND", country: "India", flag: "🇮🇳", lat: 18.9220, lng: 72.8347, population: 3500, fiveYearChangePct: +14.5, pctOfGlobal: 0.02 }, // Mumbai
  { id: "IND", country: "India", flag: "🇮🇳", lat: 15.5937, lng: 73.7370, population: 1500, fiveYearChangePct: +14.5, pctOfGlobal: 0.01 }, // Goa
  { id: "IND", country: "India", flag: "🇮🇳", lat: 9.9656, lng: 76.2421, population: 1000, fiveYearChangePct: +14.5, pctOfGlobal: 0.01 }, // Kochi

  // France Metros
  { id: "FRA", country: "France", flag: "🇫🇷", lat: 48.8566, lng: 2.3522, population: 340000, fiveYearChangePct: -3.5, pctOfGlobal: 2.15 },
  { id: "FRA", country: "France", flag: "🇫🇷", lat: 43.2965, lng: 5.3698, population: 70000, fiveYearChangePct: -3.5, pctOfGlobal: 0.44 },

  // Canada Metros
  { id: "CAN", country: "Canada", flag: "🇨🇦", lat: 43.6532, lng: -79.3832, population: 220000, fiveYearChangePct: +2.1, pctOfGlobal: 1.39 },
  { id: "CAN", country: "Canada", flag: "🇨🇦", lat: 45.5017, lng: -73.5673, population: 110000, fiveYearChangePct: +2.1, pctOfGlobal: 0.70 },

  // UK Metros
  { id: "GBR", country: "United Kingdom", flag: "🇬🇧", lat: 51.5074, lng: -0.1278, population: 220000, fiveYearChangePct: +0.7, pctOfGlobal: 1.39 },
  { id: "GBR", country: "United Kingdom", flag: "🇬🇧", lat: 53.4808, lng: -2.2426, population: 45000, fiveYearChangePct: +0.7, pctOfGlobal: 0.28 },

  // Russia Metros
  { id: "RUS", country: "Russia", flag: "🇷🇺", lat: 55.7558, lng: 37.6173, population: 95000, fiveYearChangePct: -14.5, pctOfGlobal: 0.60 },
  { id: "RUS", country: "Russia", flag: "🇷🇺", lat: 59.9343, lng: 30.3351, population: 30000, fiveYearChangePct: -14.5, pctOfGlobal: 0.19 },

  // Australia Metros
  { id: "AUS", country: "Australia", flag: "🇦🇺", lat: -37.8136, lng: 144.9631, population: 60000, fiveYearChangePct: +3.5, pctOfGlobal: 0.38 },
  { id: "AUS", country: "Australia", flag: "🇦🇺", lat: -33.8688, lng: 151.2093, population: 50000, fiveYearChangePct: +3.5, pctOfGlobal: 0.31 },

  // Brazil Metros
  { id: "BRA", country: "Brazil", flag: "🇧🇷", lat: -23.5505, lng: -46.6333, population: 65000, fiveYearChangePct: -1.8, pctOfGlobal: 0.41 },
  { id: "BRA", country: "Brazil", flag: "🇧🇷", lat: -22.9068, lng: -43.1729, population: 22000, fiveYearChangePct: -1.8, pctOfGlobal: 0.14 }
];

// Single country dots for countries with single main centers
const SINGLE_DOTS = COUNTRY_POPULATION_DATA.filter(
  c => !MULTI_CITY_HOTSPOTS.some(m => m.id === c.id)
).map(c => ({
  id: c.id,
  country: c.country,
  flag: c.flag,
  lat: c.lat,
  lng: c.lng,
  population: c.population,
  fiveYearChangePct: c.fiveYearChangePct,
  pctOfGlobal: c.pctOfGlobal
}));

export const ALL_HOTSPOT_DOTS = [...MULTI_CITY_HOTSPOTS, ...SINGLE_DOTS].map(item => ({
  ...item,
  size: Math.max(0.3, Math.log10(item.population) * 0.28),
  formattedPop: item.population.toLocaleString()
}));

export const HOTSPOT_DOTS = ALL_HOTSPOT_DOTS;

export const TOP_GAINERS = [...COUNTRY_POPULATION_DATA]
  .sort((a, b) => b.fiveYearChangePct - a.fiveYearChangePct)
  .slice(0, 5);

export const TOP_LOSERS = [...COUNTRY_POPULATION_DATA]
  .sort((a, b) => a.fiveYearChangePct - b.fiveYearChangePct)
  .slice(0, 5);

// Historical Expulsion & Mass Migration Shifts (Countries from which Jewish populations were expelled or fled)
export const EXODUS_DATA = [
  { country: "Spain", flag: "🇪🇸", era: "1492", count: "200,000+", cause: "Alhambra Decree Expulsion" },
  { country: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", era: "1290", count: "16,000", cause: "Edict of Expulsion by King Edward I" },
  { country: "Portugal", flag: "🇵🇹", era: "1497", count: "80,000+", cause: "Forced Conversions & Expulsion" },
  { country: "Egypt", flag: "🇪🇬", era: "1948–1956", count: "75,000", cause: "Suez Crisis & Mass Displacement" },
  { country: "Iraq", flag: "🇮🇶", era: "1950–1952", count: "120,000", cause: "Operation Ezra and Nehemiah" },
  { country: "Yemen", flag: "🇾🇪", era: "1949–1950", count: "50,000", cause: "Operation Magic Carpet Exodus" },
  { country: "Libya", flag: "🇱🇾", era: "1948–1967", count: "38,000", cause: "Post-War Riots & Forced Emigration" },
  { country: "Syria", flag: "🇸🇾", era: "1947–1990s", count: "30,000", cause: "Pogroms & Departure Restraints" }
];

