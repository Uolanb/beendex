const beerData = {
    "Afghanistan": {
        rating: 31.75,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 20,
        popular: "Kabul Beer",
        best: "Afghan Craft Ale",
        description: "Beer culture is limited due to strict regulations, but small craft attempts exist.",
        foodPairing: "Kabuli Palaw (rice with meat)",
        topBrands: ["Kabul Beer", "Afghan Craft Ale", "Pamir Lager", "Herat Brew", "Kandahar Ale"],
        bars: [
            { name: "Kabul Serena Bar", rating: 4.0 },
            { name: "The Tavern (Kabul)", rating: 3.8 },
            { name: "Gandamack Lodge", rating: 3.9 }
        ]
    },
    "Albania": {
        rating: 63.25,
        craftSorts: 25,
        price: 1.20,
        tourismScore: 55,
        popular: "Birra Tirana",
        best: "Brauhaus Tirana IPA",
        description: "A growing beer scene with local lagers and emerging craft options.",
        foodPairing: "Byrek (meat pie)",
        topBrands: ["Birra Tirana", "Brauhaus Tirana", "Korça", "Elbar", "Kaon"],
        bars: [
            { name: "Brauhaus Tirana", rating: 4.4 },
            { name: "Radio Bar (Tirana)", rating: 4.3 },
            { name: "Birra Korça Pub", rating: 4.2 }
        ]
    },
    "Algeria": {
        rating: 42.25,
        craftSorts: 10,
        price: 1.80,
        tourismScore: 25,
        popular: "Tango",
        best: "Algiers Craft Lager",
        description: "Beer is rare due to cultural norms, with limited local production.",
        foodPairing: "Couscous with lamb",
        topBrands: ["Tango", "Algiers Craft", "Beaufort", "33 Export", "Stella"],
        bars: [
            { name: "Hotel El-Djazair Bar", rating: 4.0 },
            { name: "Le Carthage (Algiers)", rating: 3.9 },
            { name: "Sheraton Club", rating: 4.1 }
        ]
    },
    "Andorra": {
        rating: 61.58,
        craftSorts: 15,
        price: 2.50,
        tourismScore: 75,
        popular: "Alpha Beer",
        best: "Andorra Craft Stout",
        description: "Small but vibrant beer culture influenced by tourism.",
        foodPairing: "Trinxat (cabbage and potato dish)",
        topBrands: ["Alpha Beer", "Andorra Craft", "Boris", "Estrella", "Moritz"],
        bars: [
            { name: "El Refugi (Andorra la Vella)", rating: 4.3 },
            { name: "Papanico", rating: 4.2 },
            { name: "La Birreria", rating: 4.1 }
        ]
    },
    "Angola": {
        rating: 56.75,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 45,
        popular: "Cuca",
        best: "Luanda Craft Ale",
        description: "Beer is widely enjoyed, with a mix of local and imported brands.",
        foodPairing: "Muamba de Galinha (chicken stew)",
        topBrands: ["Cuca", "Luanda Craft", "Nocal", "EKA", "Heineken"],
        bars: [
            { name: "Miami Beach (Luanda)", rating: 4.2 },
            { name: "Chill Out Bar", rating: 4.0 },
            { name: "Lookal Ocean Club", rating: 4.3 }
        ]
    },
    "Antigua and Barbuda": {
        rating: 63.33,
        craftSorts: 15,
        price: 2.00,
        tourismScore: 65,
        popular: "Wadadli",
        best: "Antigua Craft IPA",
        description: "A tropical beer scene boosted by tourism.",
        foodPairing: "Fungee and Pepperpot",
        topBrands: ["Wadadli", "Antigua Craft", "Carib", "Red Stripe", "Banks"],
        bars: [
            { name: "Papa Zouk (St. John’s)", rating: 4.4 },
            { name: "BeachLimerz", rating: 4.3 },
            { name: "Ana’s on the Beach", rating: 4.2 }
        ]
    },
    "Argentina": {
        rating: 65.75,
        craftSorts: 50,
        price: 1.80,
        tourismScore: 70,
        popular: "Quilmes",
        best: "Antares IPA",
        description: "A robust beer tradition with a thriving craft beer movement.",
        foodPairing: "Asado (grilled beef)",
        topBrands: ["Quilmes", "Antares", "Brahma", "Patagonia", "Imperial"],
        bars: [
            { name: "Antares (Buenos Aires)", rating: 4.6 },
            { name: "Cervelar (Buenos Aires)", rating: 4.5 },
            { name: "Patagonia (Bariloche)", rating: 4.7 }
        ]
    },
    "Armenia": {
        rating: 61.58,
        craftSorts: 20,
        price: 1.30,
        tourismScore: 50,
        popular: "Kilikia",
        best: "Dargett Craft Ale",
        description: "Beer complements a rich culinary tradition.",
        foodPairing: "Khorovats (barbecue)",
        topBrands: ["Kilikia", "Dargett", "Gyumri", "Erebuni", "Kotayk"],
        bars: [
            { name: "Dargett Craft Beer (Yerevan)", rating: 4.5 },
            { name: "Calumet (Yerevan)", rating: 4.3 },
            { name: "Beer Academy", rating: 4.4 }
        ]
    },
    "Australia": {
        rating: 59.93,
        craftSorts: 75,
        price: 3.50,
        tourismScore: 85,
        popular: "Victoria Bitter",
        best: "Stone & Wood Pacific Ale",
        description: "A world-class beer culture with strong craft influences.",
        foodPairing: "Meat Pie",
        topBrands: ["Victoria Bitter", "Stone & Wood", "Coopers", "Tooheys", "XXXX"],
        bars: [
            { name: "The Local Taphouse (Sydney)", rating: 4.6 },
            { name: "Mountain Goat Brewery (Melbourne)", rating: 4.7 },
            { name: "The Wheatsheaf (Adelaide)", rating: 4.5 }
        ]
    },
    "Austria": {
        rating: 64.33,
        craftSorts: 60,
        price: 2.20,
        tourismScore: 80,
        popular: "Stiegl",
        best: "Trumer Pils",
        description: "Renowned for its lagers and growing craft scene.",
        foodPairing: "Wiener Schnitzel",
        topBrands: ["Stiegl", "Trumer", "Ottakringer", "Gösser", "Puntigamer"],
        bars: [
            { name: "1516 Brewing (Vienna)", rating: 4.6 },
            { name: "Beaver Brewing (Vienna)", rating: 4.5 },
            { name: "Mel’s Craft Beers (Vienna)", rating: 4.7 }
        ]
    },
    "Azerbaijan": {
        rating: 57.08,
        craftSorts: 15,
        price: 1.40,
        tourismScore: 45,
        popular: "Xirdalan",
        best: "Baku Craft Lager",
        description: "Beer is gaining traction alongside traditional drinks.",
        foodPairing: "Plov (rice with meat)",
        topBrands: ["Xirdalan", "Baku Craft", "Azeri Brew", "NZS", "Baltika"],
        bars: [
            { name: "Beer Point (Baku)", rating: 4.3 },
            { name: "Harbour Pub", rating: 4.2 },
            { name: "Old City Pub", rating: 4.1 }
        ]
    },
    "Bahamas": {
        rating: 61.83,
        craftSorts: 15,
        price: 2.50,
        tourismScore: 70,
        popular: "Kalik",
        best: "Pirate Republic IPA",
        description: "A tourist-friendly beer scene with local flair.",
        foodPairing: "Conch Fritters",
        topBrands: ["Kalik", "Pirate Republic", "Sands", "Carib", "Heineken"],
        bars: [
            { name: "Pirate Republic (Nassau)", rating: 4.5 },
            { name: "The Daiquiri Shack", rating: 4.3 },
            { name: "Fish Fry’s", rating: 4.2 }
        ]
    },
    "Bahrain": {
        rating: 48.58,
        craftSorts: 10,
        price: 3.00,
        tourismScore: 40,
        popular: "Heineken",
        best: "Bahrain Craft Ale",
        description: "Beer is available mainly in hotels and expat areas.",
        foodPairing: "Machboos (spiced rice with meat)",
        topBrands: ["Heineken", "Bahrain Craft", "Amstel", "Budweiser", "Carlsberg"],
        bars: [
            { name: "The Warbler (Manama)", rating: 4.4 },
            { name: "JJ’s Irish Pub", rating: 4.3 },
            { name: "Sherlock Holmes Pub", rating: 4.2 }
        ]
    },
    "Bangladesh": {
        rating: 42.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 30,
        popular: "Hunter Beer",
        best: "Dhaka Craft Lager",
        description: "Beer is limited due to cultural restrictions.",
        foodPairing: "Biryani",
        topBrands: ["Hunter Beer", "Dhaka Craft", "Crown", "Heineken", "Tiger"],
        bars: [
            { name: "The Westin Bar (Dhaka)", rating: 4.1 },
            { name: "Sky Lounge", rating: 4.0 },
            { name: "Club 13", rating: 3.9 }
        ]
    },
    "Barbados": {
        rating: 62.33,
        craftSorts: 20,
        price: 2.20,
        tourismScore: 70,
        popular: "Banks",
        best: "10 Saints IPA",
        description: "A vibrant beer culture tied to tourism.",
        foodPairing: "Flying Fish and Cou-Cou",
        topBrands: ["Banks", "10 Saints", "Carib", "Deputy", "Stag"],
        bars: [
            { name: "The Boatyard (Bridgetown)", rating: 4.4 },
            { name: "Harbour Lights", rating: 4.3 },
            { name: "Copacabana Beach Bar", rating: 4.2 }
        ]
    },
    "Belarus": {
        rating: 65.42,
        craftSorts: 30,
        price: 1.20,
        tourismScore: 50,
        popular: "Lidskae",
        best: "Alivaria IPA",
        description: "A solid beer tradition with Soviet influences.",
        foodPairing: "Draniki (potato pancakes)",
        topBrands: ["Lidskae", "Alivaria", "Krynitsa", "Brestskoe", "Olivaria"],
        bars: [
            { name: "BeerCap (Minsk)", rating: 4.5 },
            { name: "Craft House", rating: 4.4 },
            { name: "Hops Pub", rating: 4.3 }
        ]
    },
    "Belgium": {
        rating: 71.58,
        craftSorts: 85,
        price: 2.80,
        tourismScore: 85,
        popular: "Stella Artois",
        best: "Cantillon Gueuze",
        description: "World-famous for its diverse and historic beer styles.",
        foodPairing: "Moules-frites (mussels with fries)",
        topBrands: ["Stella Artois", "Cantillon", "Duvel", "Chimay", "Leffe"],
        bars: [
            { name: "Delirium Café (Brussels)", rating: 4.8 },
            { name: "Moeder Lambic", rating: 4.7 },
            { name: "Kulminator (Antwerp)", rating: 4.6 }
        ]
    },
    "Belize": {
        rating: 58.58,
        craftSorts: 15,
        price: 1.80,
        tourismScore: 55,
        popular: "Belikin",
        best: "Belize Craft Ale",
        description: "A small but lively beer scene for tourists.",
        foodPairing: "Rice and Beans with Stew Chicken",
        topBrands: ["Belikin", "Belize Craft", "Carib", "Heineken", "Lighthouse"],
        bars: [
            { name: "Barefoot Bar (San Pedro)", rating: 4.3 },
            { name: "Palapa Bar", rating: 4.2 },
            { name: "Wahoo’s Lounge", rating: 4.1 }
        ]
    },
    "Benin": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.50,
        tourismScore: 40,
        popular: "La Beninoise",
        best: "Benin Craft Lager",
        description: "Beer is a popular social drink in urban areas.",
        foodPairing: "Pounded Yam with Egusi Soup",
        topBrands: ["La Beninoise", "Benin Craft", "Flag", "Castel", "Guinness"],
        bars: [
            { name: "Le Bénin Bar (Cotonou)", rating: 4.0 },
            { name: "La Plage", rating: 3.9 },
            { name: "Chez Honore", rating: 4.1 }
        ]
    },
    "Bhutan": {
        rating: 48.83,
        craftSorts: 10,
        price: 2.00,
        tourismScore: 45,
        popular: "Druk 11000",
        best: "Bhutan Craft Ale",
        description: "Beer is emerging alongside traditional drinks.",
        foodPairing: "Ema Datshi (chili cheese stew)",
        topBrands: ["Druk 11000", "Bhutan Craft", "Red Panda", "Heineken", "Tiger"],
        bars: [
            { name: "Mojo Bar (Thimphu)", rating: 4.2 },
            { name: "The Zone", rating: 4.1 },
            { name: "Bhutan Brewery Tap", rating: 4.0 }
        ]
    },
    "Bolivia": {
        rating: 60.08,
        craftSorts: 25,
        price: 1.60,
        tourismScore: 45,
        popular: "Paceña",
        best: "Saya IPA",
        description: "A growing beer culture with local and craft options.",
        foodPairing: "Salteñas (meat pastries)",
        topBrands: ["Paceña", "Saya", "Huari", "Taquiña", "Bock"],
        bars: [
            { name: "La Paz Craft Beer", rating: 4.3 },
            { name: "Saya Beer Pub", rating: 4.2 },
            { name: "El Loro Verde", rating: 4.1 }
        ]
    },
    "Bosnia and Herzegovina": {
        rating: 63.83,
        craftSorts: 30,
        price: 1.40,
        tourismScore: 60,
        popular: "Sarajevsko",
        best: "Mostar Craft Ale",
        description: "Beer complements a rich Balkan culinary tradition.",
        foodPairing: "Ćevapi (grilled minced meat)",
        topBrands: ["Sarajevsko", "Mostar Craft", "Nektar", "Preminger", "Banjalučko"],
        bars: [
            { name: "Zlatna Ribica (Sarajevo)", rating: 4.4 },
            { name: "Pivnica HS", rating: 4.3 },
            { name: "The Brew (Mostar)", rating: 4.2 }
        ]
    },
    "Botswana": {
        rating: 56.33,
        craftSorts: 15,
        price: 1.70,
        tourismScore: 45,
        popular: "St Louis",
        best: "Gaborone Craft Lager",
        description: "Beer is a staple in social settings.",
        foodPairing: "Seswaa (pounded meat)",
        topBrands: ["St Louis", "Gaborone Craft", "Carling", "Castle", "Hansa"],
        bars: [
            { name: "Bull & Bush (Gaborone)", rating: 4.2 },
            { name: "The Hogshead", rating: 4.1 },
            { name: "Lizard Lounge", rating: 4.0 }
        ]
    },
    "Brazil": {
        rating: 62.3,
        craftSorts: 60,
        price: 1.90,
        tourismScore: 75,
        popular: "Brahma",
        best: "Colorado Indica",
        description: "A massive beer market with a booming craft scene.",
        foodPairing: "Feijoada (black bean stew)",
        topBrands: ["Brahma", "Colorado", "Skol", "Antarctica", "Itaipava"],
        bars: [
            { name: "Empório Alto dos Pinheiros (São Paulo)", rating: 4.8 },
            { name: "Cervejaria Nacional (São Paulo)", rating: 4.6 },
            { name: "Brewteco (Rio de Janeiro)", rating: 4.5 }
        ]
    },
    "Brunei": {
        rating: 40.83,
        craftSorts: 5,
        price: 3.00,
        tourismScore: 35,
        popular: "Heineken",
        best: "Brunei Craft Ale",
        description: "Beer is limited due to strict alcohol laws.",
        foodPairing: "Ambuyat (sago starch)",
        topBrands: ["Heineken", "Brunei Craft", "Tiger", "Carlsberg", "Asahi"],
        bars: [
            { name: "The Empire Bar (Bandar Seri Begawan)", rating: 4.0 },
            { name: "Royal Brunei Yacht Club", rating: 3.9 },
            { name: "Excapade Lounge", rating: 3.8 }
        ]
    },
    "Bulgaria": {
        rating: 66.75,
        craftSorts: 35,
        price: 1.30,
        tourismScore: 65,
        popular: "Zagorka",
        best: "Ah! IPA",
        description: "A solid beer tradition with emerging craft options.",
        foodPairing: "Banitsa (cheese pastry)",
        topBrands: ["Zagorka", "Ah!", "Kamenitza", "Shumensko", "Bolyarka"],
        bars: [
            { name: "Vitamin B (Sofia)", rating: 4.5 },
            { name: "Kanaal (Sofia)", rating: 4.4 },
            { name: "Crafter (Plovdiv)", rating: 4.3 }
        ]
    },
    "Burkina Faso": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.60,
        tourismScore: 40,
        popular: "Brakina",
        best: "Ouaga Craft Lager",
        description: "Beer is popular in urban social settings.",
        foodPairing: "Tô with peanut sauce",
        topBrands: ["Brakina", "Ouaga Craft", "Flag", "Castel", "Guinness"],
        bars: [
            { name: "Le Verdoyant (Ouagadougou)", rating: 4.1 },
            { name: "Bar K", rating: 4.0 },
            { name: "Jardin de l’Amitié", rating: 3.9 }
        ]
    },
    "Burundi": {
        rating: 52.08,
        craftSorts: 10,
        price: 1.70,
        tourismScore: 40,
        popular: "Primus",
        best: "Gitega Craft Ale",
        description: "Beer is a common drink in social gatherings.",
        foodPairing: "Beans and Plantains",
        topBrands: ["Primus", "Gitega Craft", "Amstel", "Heineken", "Skol"],
        bars: [
            { name: "Le Crystal (Gitega)", rating: 4.0 },
            { name: "Safari Bar", rating: 3.9 },
            { name: "Le Relax", rating: 3.8 }
        ]
    },
    "Cabo Verde": {
        rating: 57.33,
        craftSorts: 15,
        price: 1.80,
        tourismScore: 50,
        popular: "Ceris",
        best: "Praia Craft Lager",
        description: "A small but growing beer culture.",
        foodPairing: "Cachupa (corn stew)",
        topBrands: ["Ceris", "Praia Craft", "Strela", "Super Bock", "Sagres"],
        bars: [
            { name: "ZeroHour (Praia)", rating: 4.2 },
            { name: "Kaza di Kreola", rating: 4.1 },
            { name: "Ocean Café", rating: 4.0 }
        ]
    },
    "Cambodia": {
        rating: 70.83,
        craftSorts: 25,
        price: 1.00,
        tourismScore: 60,
        popular: "Angkor",
        best: "Khmer Craft IPA",
        description: "Beer is widely enjoyed, especially by tourists.",
        foodPairing: "Fish Amok",
        topBrands: ["Angkor", "Khmer Craft", "Ganzberg", "Cambodia Beer", "Tiger"],
        bars: [
            { name: "Hops Craft Beer (Phnom Penh)", rating: 4.4 },
            { name: "Le Moon", rating: 4.3 },
            { name: "Riverside Bistro", rating: 4.2 }
        ]
    },
    "Cameroon": {
        rating: 56.75,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 45,
        popular: "33 Export",
        best: "Douala Craft Ale",
        description: "Beer is a social staple with local and imported options.",
        foodPairing: "Ndolé (stew with nuts)",
        topBrands: ["33 Export", "Douala Craft", "Castel", "Mutzig", "Guinness"],
        bars: [
            { name: "Le Bô Bar (Douala)", rating: 4.2 },
            { name: "La Terrasse", rating: 4.1 },
            { name: "Le Safari", rating: 4.0 }
        ]
    },
    "Canada": {
        rating: 62.58,
        craftSorts: 70,
        price: 3.00,
        tourismScore: 85,
        popular: "Molson Canadian",
        best: "Driftwood Fat Tug IPA",
        description: "A diverse beer culture with a strong craft presence.",
        foodPairing: "Poutine",
        topBrands: ["Molson Canadian", "Driftwood", "Labatt", "Moosehead", "Unibroue"],
        bars: [
            { name: "The Alibi Room (Vancouver)", rating: 4.7 },
            { name: "Bellwoods Brewery (Toronto)", rating: 4.6 },
            { name: "Dieu du Ciel! (Montreal)", rating: 4.8 }
        ]
    },
    "Central African Republic": {
        rating: 50.08,
        craftSorts: 10,
        price: 1.80,
        tourismScore: 35,
        popular: "Mocaf",
        best: "Bangui Craft Lager",
        description: "Beer is popular despite limited local production.",
        foodPairing: "Kanda (meatballs)",
        topBrands: ["Mocaf", "Bangui Craft", "Gala", "Castel", "33 Export"],
        bars: [
            { name: "Le Grand Café (Bangui)", rating: 4.0 },
            { name: "Bar de la Paix", rating: 3.9 },
            { name: "Chez Marie", rating: 3.8 }
        ]
    },
    "Chad": {
        rating: 48.42,
        craftSorts: 5,
        price: 1.90,
        tourismScore: 35,
        popular: "Gala",
        best: "Ndjamena Craft Ale",
        description: "Beer is consumed mainly in urban areas.",
        foodPairing: "Daraba (vegetable stew)",
        topBrands: ["Gala", "Ndjamena Craft", "Chari", "Castel", "Heineken"],
        bars: [
            { name: "Le Carnivore (N’Djamena)", rating: 4.0 },
            { name: "Bar Le Central", rating: 3.9 },
            { name: "La Palmeraie", rating: 3.8 }
        ]
    },
    "Chile": {
        rating: 62.75,
        craftSorts: 40,
        price: 2.00,
        tourismScore: 70,
        popular: "Cristal",
        best: "Kross 5 IPA",
        description: "A growing craft beer scene complements traditional lagers.",
        foodPairing: "Empanadas",
        topBrands: ["Cristal", "Kross", "Escudo", "Austral", "Kunstmann"],
        bars: [
            { name: "Kross Bar (Santiago)", rating: 4.6 },
            { name: "Jardin Mallinkrodt", rating: 4.5 },
            { name: "Cervecería HBH", rating: 4.4 }
        ]
    },
    "China": {
        rating: 65.83,
        craftSorts: 50,
        price: 1.00,
        tourismScore: 65,
        popular: "Snow Beer",
        best: "Great Leap Honey Ma Gold",
        description: "Massive beer market with a rising craft movement.",
        foodPairing: "Peking Duck",
        topBrands: ["Snow Beer", "Great Leap", "Tsingtao", "Yanjing", "Harbin"],
        bars: [
            { name: "Great Leap Brewing (Beijing)", rating: 4.5 },
            { name: "Jing-A Brewing Co. (Beijing)", rating: 4.7 },
            { name: "Boxing Cat Brewery (Shanghai)", rating: 4.6 }
        ]
    },
    "Colombia": {
        rating: 63.25,
        craftSorts: 40,
        price: 1.70,
        tourismScore: 70,
        popular: "Aguila",
        best: "Bogotá Beer Company IPA",
        description: "A lively beer culture with growing craft options.",
        foodPairing: "Bandeja Paisa",
        topBrands: ["Aguila", "Bogotá Beer", "Club Colombia", "Poker", "Costeña"],
        bars: [
            { name: "BBC Pub (Bogotá)", rating: 4.6 },
            { name: "Cervecería Gigante", rating: 4.5 },
            { name: "El Mono Bandido", rating: 4.4 }
        ]
    },
    "Comoros": {
        rating: 48.83,
        craftSorts: 5,
        price: 2.20,
        tourismScore: 40,
        popular: "Heineken",
        best: "Moroni Craft Lager",
        description: "Beer is limited but available in tourist areas.",
        foodPairing: "Langouste à la Vanille (lobster)",
        topBrands: ["Heineken", "Moroni Craft", "Skol", "Castel", "Amstel"],
        bars: [
            { name: "Le Laka Lodge Bar", rating: 4.0 },
            { name: "Itsandra Beach Bar", rating: 3.9 },
            { name: "Moroni Hotel Lounge", rating: 3.8 }
        ]
    },
    "Congo": {
        rating: 54.75,
        craftSorts: 15,
        price: 1.60,
        tourismScore: 45,
        popular: "Primus",
        best: "Brazza Craft Ale",
        description: "Beer is a popular social drink.",
        foodPairing: "Saka-Saka (cassava leaves)",
        topBrands: ["Primus", "Brazza Craft", "Ngok", "Skol", "Guinness"],
        bars: [
            { name: "Le Palmier (Brazzaville)", rating: 4.1 },
            { name: "Chez N’Golo", rating: 4.0 },
            { name: "La Terrasse", rating: 3.9 }
        ]
    },
    "Costa Rica": {
        rating: 62.75,
        craftSorts: 30,
        price: 2.10,
        tourismScore: 70,
        popular: "Imperial",
        best: "Costa Rica Craft IPA",
        description: "A tourist-driven beer scene with craft growth.",
        foodPairing: "Gallo Pinto",
        topBrands: ["Imperial", "Costa Rica Craft", "Pilsen", "Bavaria", "Heineken"],
        bars: [
            { name: "Costa Rica Beer Factory (San José)", rating: 4.5 },
            { name: "Stiefel Pub", rating: 4.4 },
            { name: "El Lobo Estepario", rating: 4.3 }
        ]
    },
    "Croatia": {
        rating: 65.75,
        craftSorts: 45,
        price: 1.80,
        tourismScore: 75,
        popular: "Ožujsko",
        best: "Zmajska IPA",
        description: "A rich beer tradition with a growing craft scene.",
        foodPairing: "Peka (meat under the bell)",
        topBrands: ["Ožujsko", "Zmajska", "Karlovačko", "Pan", "Tomislav"],
        bars: [
            { name: "The Garden Brewery (Zagreb)", rating: 4.7 },
            { name: "Craft Room (Split)", rating: 4.6 },
            { name: "Mali Medo (Zagreb)", rating: 4.5 }
        ]
    },
    "Cuba": {
        rating: 60.08,
        craftSorts: 25,
        price: 1.50,
        tourismScore: 60,
        popular: "Cristal",
        best: "Havana Craft Ale",
        description: "Beer is a staple in social life, with craft emerging.",
        foodPairing: "Ropa Vieja (shredded beef)",
        topBrands: ["Cristal", "Havana Craft", "Bucanero", "Cacique", "Mayabe"],
        bars: [
            { name: "La Bodeguita del Medio (Havana)", rating: 4.4 },
            { name: "El Floridita", rating: 4.3 },
            { name: "Fábrica de Arte Cubano", rating: 4.5 }
        ]
    },
    "Cyprus": {
        rating: 62.75,
        craftSorts: 30,
        price: 2.00,
        tourismScore: 65,
        popular: "Keo",
        best: "Paphos Craft IPA",
        description: "Beer thrives in a tourist-friendly environment.",
        foodPairing: "Souvlaki",
        topBrands: ["Keo", "Paphos Craft", "Leon", "Carlsberg", "Heineken"],
        bars: [
            { name: "Brewfellas (Nicosia)", rating: 4.5 },
            { name: "Pivo Microbrewery", rating: 4.4 },
            { name: "The Old Souls (Limassol)", rating: 4.3 }
        ]
    },
    "Czech Republic": {
        rating: 72.17,
        craftSorts: 70,
        price: 1.50,
        tourismScore: 80,
        popular: "Pilsner Urquell",
        best: "Svijany Rytíř",
        description: "Birthplace of Pilsner with a world-class beer culture.",
        foodPairing: "Svíčková (marinated beef)",
        topBrands: ["Pilsner Urquell", "Svijany", "Budvar", "Gambrinus", "Kozel"],
        bars: [
            { name: "Zlý Časy (Prague)", rating: 4.7 },
            { name: "Pivovarský Klub (Prague)", rating: 4.5 },
            { name: "BeerGeek Bar (Prague)", rating: 4.6 }
        ]
    },
    "Democratic Republic of the Congo": {
        rating: 54.75,
        craftSorts: 15,
        price: 1.60,
        tourismScore: 45,
        popular: "Primus",
        best: "Kinshasa Craft Lager",
        description: "Beer is widely consumed in social settings.",
        foodPairing: "Moambe Chicken",
        topBrands: ["Primus", "Kinshasa Craft", "Skol", "Turbo King", "Simba"],
        bars: [
            { name: "Chez Ntemba (Kinshasa)", rating: 4.1 },
            { name: "Le Roi du Zaire", rating: 4.0 },
            { name: "La Crèche", rating: 3.9 }
        ]
    },
    "Denmark": {
        rating: 65.08,
        craftSorts: 70,
        price: 3.00,
        tourismScore: 80,
        popular: "Carlsberg",
        best: "Mikkeller IPA",
        description: "A global beer leader with a strong craft movement.",
        foodPairing: "Smørrebrød (open sandwich)",
        topBrands: ["Carlsberg", "Mikkeller", "Tuborg", "Albani", "To Øl"],
        bars: [
            { name: "Mikkeller Bar (Copenhagen)", rating: 4.7 },
            { name: "Warpigs Brewpub", rating: 4.6 },
            { name: "Taphouse", rating: 4.8 }
        ]
    },
    "Djibouti": {
        rating: 50.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 40,
        popular: "Heineken",
        best: "Djibouti Craft Ale",
        description: "Beer is available mainly for expats and tourists.",
        foodPairing: "Skoudehkaris (lamb stew)",
        topBrands: ["Heineken", "Djibouti Craft", "Amstel", "Castel", "Tiger"],
        bars: [
            { name: "Kempinski Bar (Djibouti City)", rating: 4.1 },
            { name: "Sheraton Lounge", rating: 4.0 },
            { name: "Le Palmier en Zinc", rating: 3.9 }
        ]
    },
    "Dominica": {
        rating: 58.58,
        craftSorts: 10,
        price: 2.00,
        tourismScore: 60,
        popular: "Kubuli",
        best: "Dominica Craft Lager",
        description: "A small beer scene boosted by tourism.",
        foodPairing: "Mountain Chicken (frog legs)",
        topBrands: ["Kubuli", "Dominica Craft", "Carib", "Heineken", "Banks"],
        bars: [
            { name: "Pagua Bay Bar", rating: 4.2 },
            { name: "Riverside Café", rating: 4.1 },
            { name: "Fort Young Bar", rating: 4.0 }
        ]
    },
    "Dominican Republic": {
        rating: 62.75,
        craftSorts: 30,
        price: 2.00,
        tourismScore: 70,
        popular: "Presidente",
        best: "Cerveza Quisqueya IPA",
        description: "A vibrant beer culture tied to tourism.",
        foodPairing: "Sancocho (meat stew)",
        topBrands: ["Presidente", "Quisqueya", "Bohemia", "Brahma", "Corona"],
        bars: [
            { name: "Parada 77 (Santo Domingo)", rating: 4.4 },
            { name: "El Conuco", rating: 4.3 },
            { name: "Coco Bongo (Punta Cana)", rating: 4.5 }
        ]
    },
    "Ecuador": {
        rating: 61.58,
        craftSorts: 30,
        price: 1.80,
        tourismScore: 60,
        popular: "Pilsener",
        best: "Club Verde IPA",
        description: "A growing craft beer scene alongside traditional lagers.",
        foodPairing: "Ceviche",
        topBrands: ["Pilsener", "Club Verde", "Club", "Biela", "Conquer"],
        bars: [
            { name: "Cherusker (Quito)", rating: 4.5 },
            { name: "La Taberna (Guayaquil)", rating: 4.4 },
            { name: "El Gringo y La Gorda", rating: 4.3 }
        ]
    },
    "Egypt": {
        rating: 54.75,
        craftSorts: 15,
        price: 2.00,
        tourismScore: 45,
        popular: "Stella",
        best: "Cairo Craft Ale",
        description: "Beer has a long history but is limited by cultural norms.",
        foodPairing: "Koshari",
        topBrands: ["Stella", "Cairo Craft", "Sakara", "Luxor", "Heineken"],
        bars: [
            { name: "The Tap (Cairo)", rating: 4.4 },
            { name: "Odeon Palace Bar", rating: 4.3 },
            { name: "Cairo Jazz Club", rating: 4.2 }
        ]
    },
    "El Salvador": {
        rating: 61.58,
        craftSorts: 25,
        price: 1.60,
        tourismScore: 55,
        popular: "Pilsener",
        best: "Cadejo IPA",
        description: "A steady beer culture with craft emerging.",
        foodPairing: "Pupusas",
        topBrands: ["Pilsener", "Cadejo", "Suprema", "Golden", "Brahma"],
        bars: [
            { name: "Cadejo Brewing (San Salvador)", rating: 4.5 },
            { name: "Republik Bar", rating: 4.4 },
            { name: "La Taberna", rating: 4.3 }
        ]
    },
    "Equatorial Guinea": {
        rating: 52.08,
        craftSorts: 10,
        price: 1.90,
        tourismScore: 40,
        popular: "Castel",
        best: "Malabo Craft Lager",
        description: "Beer is popular in urban areas.",
        foodPairing: "Succotash",
        topBrands: ["Castel", "Malabo Craft", "33 Export", "Guinness", "Heineken"],
        bars: [
            { name: "La Luna (Malabo)", rating: 4.0 },
            { name: "Bahía Bar", rating: 3.9 },
            { name: "Le Cléopâtre", rating: 3.8 }
        ]
    },
    "Eritrea": {
        rating: 48.83,
        craftSorts: 5,
        price: 2.10,
        tourismScore: 40,
        popular: "Asmara Beer",
        best: "Eritrea Craft Ale",
        description: "Beer is a niche drink in a small market.",
        foodPairing: "Zigni (spicy stew)",
        topBrands: ["Asmara Beer", "Eritrea Craft", "Heineken", "Castel", "Amstel"],
        bars: [
            { name: "Asmara Palace Bar", rating: 4.0 },
            { name: "Casa Degli Italiani", rating: 3.9 },
            { name: "Africa Bar", rating: 3.8 }
        ]
    },
    "Estonia": {
        rating: 65.75,
        craftSorts: 45,
        price: 2.00,
        tourismScore: 70,
        popular: "Saku",
        best: "Põhjala Must Kuld",
        description: "A strong Baltic beer tradition with craft growth.",
        foodPairing: "Mulgipuder (barley porridge)",
        topBrands: ["Saku", "Põhjala", "A. Le Coq", "Viru", "Puls"],
        bars: [
            { name: "Põhjala Tap Room (Tallinn)", rating: 4.6 },
            { name: "Pudel (Tallinn)", rating: 4.5 },
            { name: "Speakeasy", rating: 4.4 }
        ]
    },
    "Eswatini": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.70,
        tourismScore: 45,
        popular: "Sibebe",
        best: "Mbabane Craft Lager",
        description: "Beer is a social drink in a small market.",
        foodPairing: "Sishwala (pumpkin stew)",
        topBrands: ["Sibebe", "Mbabane Craft", "Castle", "Hansa", "Carling"],
        bars: [
            { name: "House on Fire (Malkerns)", rating: 4.2 },
            { name: "The Pub (Mbabane)", rating: 4.1 },
            { name: "Swazi Sun Bar", rating: 4.0 }
        ]
    },
    "Ethiopia": {
        rating: 59.75,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 50,
        popular: "St. George",
        best: "Addis Craft Ale",
        description: "Beer complements traditional drinks like tej.",
        foodPairing: "Injera with Doro Wat",
        topBrands: ["St. George", "Addis Craft", "Dashen", "Habesha", "Meta"],
        bars: [
            { name: "Black Rose (Addis Ababa)", rating: 4.3 },
            { name: "Beer Garden", rating: 4.2 },
            { name: "The Office", rating: 4.1 }
        ]
    },
    "Fiji": {
        rating: 58.58,
        craftSorts: 15,
        price: 2.20,
        tourismScore: 60,
        popular: "Fiji Bitter",
        best: "Vonui Craft IPA",
        description: "A tourist-driven beer culture.",
        foodPairing: "Kokoda (raw fish in coconut)",
        topBrands: ["Fiji Bitter", "Vonui Craft", "Fiji Gold", "Lion", "Heineken"],
        bars: [
            { name: "Cloud 9 (Nadi)", rating: 4.4 },
            { name: "The Rhum-Ba", rating: 4.3 },
            { name: "Traps Bar", rating: 4.2 }
        ]
    },
    "Finland": {
        rating: 62.75,
        craftSorts: 60,
        price: 3.00,
        tourismScore: 75,
        popular: "Karhu",
        best: "Stallhagen IPA",
        description: "A strong Nordic beer tradition with craft innovation.",
        foodPairing: "Reindeer Stew",
        topBrands: ["Karhu", "Stallhagen", "Koff", "Lapin Kulta", "Olvi"],
        bars: [
            { name: "Bryggeri (Helsinki)", rating: 4.6 },
            { name: "Panimoravintola Koulu (Turku)", rating: 4.5 },
            { name: "Teerenpeli (Helsinki)", rating: 4.4 }
        ]
    },
    "France": {
        rating: 64.33,
        craftSorts: 65,
        price: 2.50,
        tourismScore: 85,
        popular: "Kronenbourg",
        best: "La Chouffe",
        description: "Known for wine, but with a rich beer heritage.",
        foodPairing: "Moules-frites",
        topBrands: ["Kronenbourg", "La Chouffe", "1664", "Pelforth", "Jenlain"],
        bars: [
            { name: "Le Supercoin (Paris)", rating: 4.6 },
            { name: "La Fine Mousse", rating: 4.7 },
            { name: "Les Berthom (Lyon)", rating: 4.5 }
        ]
    },
    "Gabon": {
        rating: 54.75,
        craftSorts: 15,
        price: 1.80,
        tourismScore: 45,
        popular: "Régab",
        best: "Libreville Craft Lager",
        description: "Beer is a popular urban drink.",
        foodPairing: "Nyembwe Chicken",
        topBrands: ["Régab", "Libreville Craft", "Castel", "33 Export", "Beaufort"],
        bars: [
            { name: "L’Odika (Libreville)", rating: 4.1 },
            { name: "Le Phare", rating: 4.0 },
            { name: "Blue Bay", rating: 3.9 }
        ]
    },
    "Gambia": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.60,
        tourismScore: 45,
        popular: "JulBrew",
        best: "Banjul Craft Ale",
        description: "Beer is a social staple in tourist areas.",
        foodPairing: "Domoda (peanut stew)",
        topBrands: ["JulBrew", "Banjul Craft", "Guinness", "Heineken", "Castel"],
        bars: [
            { name: "Leo’s Beach Bar (Banjul)", rating: 4.2 },
            { name: "Paradise Beach", rating: 4.1 },
            { name: "Poco Loco", rating: 4.0 }
        ]
    },
    "Georgia": {
        rating: 63.25,
        craftSorts: 30,
        price: 1.50,
        tourismScore: 60,
        popular: "Natakhtari",
        best: "Black Lion IPA",
        description: "Beer complements a rich wine tradition.",
        foodPairing: "Khachapuri (cheese bread)",
        topBrands: ["Natakhtari", "Black Lion", "Zedazeni", "Kazbegi", "Argo"],
        bars: [
            { name: "Black Lion Pub (Tbilisi)", rating: 4.5 },
            { name: "Dive Bar", rating: 4.4 },
            { name: "Tsangala’s", rating: 4.3 }
        ]
    },
    "Germany": {
        rating: 67.93,
        craftSorts: 80,
        price: 2.20,
        tourismScore: 85,
        popular: "Beck’s",
        best: "Stone Berlin IPA",
        description: "A global beer powerhouse with a rich brewing history.",
        foodPairing: "Bratwurst with Sauerkraut",
        topBrands: ["Beck’s", "Stone Berlin", "Paulaner", "Warsteiner", "Bitburger"],
        bars: [
            { name: "Hofbräuhaus (Munich)", rating: 4.7 },
            { name: "Stone Brewing (Berlin)", rating: 4.8 },
            { name: "Augustiner-Keller (Munich)", rating: 4.6 }
        ]
    },
    "Ghana": {
        rating: 59.75,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 50,
        popular: "Club",
        best: "Accra Craft Ale",
        description: "Beer is widely enjoyed in social settings.",
        foodPairing: "Jollof Rice",
        topBrands: ["Club", "Accra Craft", "Star", "Stone", "Guinness"],
        bars: [
            { name: "Republic Bar (Accra)", rating: 4.4 },
            { name: "The Drink Shop", rating: 4.3 },
            { name: "Plot Seven", rating: 4.2 }
        ]
    },
    "Greece": {
        rating: 64.33,
        craftSorts: 45,
        price: 2.00,
        tourismScore: 75,
        popular: "Mythos",
        best: "Septem 8th Day IPA",
        description: "A Mediterranean beer culture with craft growth.",
        foodPairing: "Moussaka",
        topBrands: ["Mythos", "Septem", "Fix", "Alpha", "Vergina"],
        bars: [
            { name: "The Local Pub (Athens)", rating: 4.6 },
            { name: "Beer Time", rating: 4.5 },
            { name: "Barley Cargo", rating: 4.4 }
        ]
    },
    "Grenada": {
        rating: 58.58,
        craftSorts: 10,
        price: 2.10,
        tourismScore: 60,
        popular: "Carib",
        best: "Grenada Craft Lager",
        description: "A tourist-friendly beer scene.",
        foodPairing: "Oil Down (stew)",
        topBrands: ["Carib", "Grenada Craft", "Stag", "Heineken", "Banks"],
        bars: [
            { name: "Umbrellas Beach Bar", rating: 4.3 },
            { name: "Dodgy Dock", rating: 4.2 },
            { name: "The Aquarium", rating: 4.1 }
        ]
    },
    "Guatemala": {
        rating: 61.58,
        craftSorts: 25,
        price: 1.70,
        tourismScore: 60,
        popular: "Gallo",
        best: "Cervecería Centro Americana IPA",
        description: "A steady beer culture with craft emerging.",
        foodPairing: "Pepián (spicy stew)",
        topBrands: ["Gallo", "Centro Americana", "Brahma", "Dorada", "Cabro"],
        bars: [
            { name: "El Portal (Antigua)", rating: 4.4 },
            { name: "La Esquina", rating: 4.3 },
            { name: "Red’s Bar", rating: 4.2 }
        ]
    },
    "Guinea": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.80,
        tourismScore: 45,
        popular: "Skol",
        best: "Conakry Craft Ale",
        description: "Beer is popular in urban areas.",
        foodPairing: "Jollof Rice",
        topBrands: ["Skol", "Conakry Craft", "Guiluxe", "Heineken", "Castel"],
        bars: [
            { name: "Le Damier (Conakry)", rating: 4.1 },
            { name: "Bar Le Soleil", rating: 4.0 },
            { name: "La Paillote", rating: 3.9 }
        ]
    },
    "Guinea-Bissau": {
        rating: 52.08,
        craftSorts: 5,
        price: 1.90,
        tourismScore: 40,
        popular: "Castel",
        best: "Bissau Craft Lager",
        description: "Beer is a common social drink.",
        foodPairing: "Caldo de Mancarra (peanut stew)",
        topBrands: ["Castel", "Bissau Craft", "Skol", "Heineken", "Primus"],
        bars: [
            { name: "Kalliste Bar (Bissau)", rating: 4.0 },
            { name: "Le Bateau", rating: 3.9 },
            { name: "Chez Pedro", rating: 3.8 }
        ]
    },
    "Guyana": {
        rating: 57.33,
        craftSorts: 15,
        price: 1.80,
        tourismScore: 55,
        popular: "Banks",
        best: "Georgetown Craft IPA",
        description: "A Caribbean beer culture with local flavors.",
        foodPairing: "Pepperpot",
        topBrands: ["Banks", "Georgetown Craft", "Carib", "Skol", "Heineken"],
        bars: [
            { name: "704 Sports Bar (Georgetown)", rating: 4.2 },
            { name: "The Vintage", rating: 4.1 },
            { name: "Palm Court", rating: 4.0 }
        ]
    },
    "Haiti": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.90,
        tourismScore: 45,
        popular: "Prestige",
        best: "Port-au-Prince Craft Ale",
        description: "Beer is a staple in social life.",
        foodPairing: "Griot (fried pork)",
        topBrands: ["Prestige", "Port-au-Prince Craft", "Heineken", "Carib", "Presidente"],
        bars: [
            { name: "Le Perroquet (Port-au-Prince)", rating: 4.1 },
            { name: "Press Café", rating: 4.0 },
            { name: "Lakay Bar", rating: 3.9 }
        ]
    },
    "Honduras": {
        rating: 61.58,
        craftSorts: 20,
        price: 1.60,
        tourismScore: 55,
        popular: "Salva Vida",
        best: "D&D Craft IPA",
        description: "A growing beer culture with craft options.",
        foodPairing: "Baleadas",
        topBrands: ["Salva Vida", "D&D Craft", "Imperial", "Port Royal", "Barena"],
        bars: [
            { name: "Roatan Brew Co.", rating: 4.4 },
            { name: "El Jaguar (Tegucigalpa)", rating: 4.3 },
            { name: "La Cueva", rating: 4.2 }
        ]
    },
    "Hungary": {
        rating: 64.33,
        craftSorts: 45,
        price: 1.70,
        tourismScore: 70,
        popular: "Dreher",
        best: "MONYO IPA",
        description: "A strong beer tradition with a craft revival.",
        foodPairing: "Goulash",
        topBrands: ["Dreher", "MONYO", "Soproni", "Borsodi", "Arany Ászok"],
        bars: [
            { name: "Élesztő (Budapest)", rating: 4.6 },
            { name: "Krak’n’Town", rating: 4.5 },
            { name: "LehűtŐ", rating: 4.4 }
        ]
    },
    "Iceland": {
        rating: 62.75,
        craftSorts: 50,
        price: 3.50,
        tourismScore: 75,
        popular: "Viking",
        best: "Einstök White Ale",
        description: "A small but innovative beer scene.",
        foodPairing: "Hákarl (fermented shark)",
        topBrands: ["Viking", "Einstök", "Gull", "Thule", "Kaldi"],
        bars: [
            { name: "Micro Bar (Reykjavik)", rating: 4.6 },
            { name: "Skúli Craft Bar", rating: 4.5 },
            { name: "Bryggjan Brugghús", rating: 4.4 }
        ]
    },
    "India": {
        rating: 60.83,
        craftSorts: 40,
        price: 1.80,
        tourismScore: 60,
        popular: "Kingfisher",
        best: "Bira White",
        description: "A massive beer market with growing craft options.",
        foodPairing: "Butter Chicken",
        topBrands: ["Kingfisher", "Bira", "Haywards", "Royal Challenge", "Godfather"],
        bars: [
            { name: "Toit (Bangalore)", rating: 4.7 },
            { name: "The Bier Library (Pune)", rating: 4.6 },
            { name: "Woodside Inn (Mumbai)", rating: 4.5 }
        ]
    },
    "Indonesia": {
        rating: 61.58,
        craftSorts: 30,
        price: 2.00,
        tourismScore: 60,
        popular: "Bintang",
        best: "Bali Hai Craft IPA",
        description: "Beer thrives in tourist areas despite restrictions.",
        foodPairing: "Nasi Goreng (fried rice)",
        topBrands: ["Bintang", "Bali Hai", "Anker", "Heineken", "San Miguel"],
        bars: [
            { name: "Stark Craft Beer (Bali)", rating: 4.5 },
            { name: "Beer Brother (Jakarta)", rating: 4.4 },
            { name: "Eastern Promise", rating: 4.3 }
        ]
    },
    "Iran": {
        rating: 34.33,
        craftSorts: 0,
        price: 3.00,
        tourismScore: 20,
        popular: "Delster (non-alcoholic)",
        best: "Tehran Craft (non-alcoholic)",
        description: "Beer is non-alcoholic due to strict laws.",
        foodPairing: "Chelo Kebab",
        topBrands: ["Delster", "Tehran Craft", "Istak", "Behnosh", "Shams"],
        bars: [
            { name: "No bars due to alcohol ban", rating: "N/A" },
            { name: "Café Naderi (Tehran, non-alcoholic)", rating: 4.0 },
            { name: "Shirin Café", rating: 3.9 }
        ]
    },
    "Iraq": {
        rating: 42.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 30,
        popular: "Farida",
        best: "Baghdad Craft Ale",
        description: "Beer is limited but available in some areas.",
        foodPairing: "Masgouf (grilled fish)",
        topBrands: ["Farida", "Baghdad Craft", "Heineken", "Efes", "Amstel"],
        bars: [
            { name: "Baghdad International Bar", rating: 4.0 },
            { name: "Green Zone Café", rating: 3.9 },
            { name: "Al-Rashid Hotel Bar", rating: 3.8 }
        ]
    },
    "Ireland": {
        rating: 65.08,
        craftSorts: 65,
        price: 3.00,
        tourismScore: 80,
        popular: "Guinness",
        best: "Galway Bay IPA",
        description: "A legendary beer culture with craft innovation.",
        foodPairing: "Irish Stew",
        topBrands: ["Guinness", "Galway Bay", "Harp", "Smithwick’s", "Murphy’s"],
        bars: [
            { name: "The Porterhouse (Dublin)", rating: 4.7 },
            { name: "Against the Grain", rating: 4.6 },
            { name: "The Black Sheep", rating: 4.5 }
        ]
    },
    "Israel": {
        rating: 61.83,
        craftSorts: 40,
        price: 2.50,
        tourismScore: 65,
        popular: "Goldstar",
        best: "Jem’s IPA",
        description: "A growing craft beer scene in a wine-rich region.",
        foodPairing: "Falafel",
        topBrands: ["Goldstar", "Jem’s", "Maccabee", "Heineken", "Tuborg"],
        bars: [
            { name: "Beer Bazaar (Tel Aviv)", rating: 4.6 },
            { name: "The Dancing Camel", rating: 4.5 },
            { name: "Porter & Sons", rating: 4.4 }
        ]
    },
    "Italy": {
        rating: 64.33,
        craftSorts: 65,
        price: 2.30,
        tourismScore: 85,
        popular: "Peroni",
        best: "Baladin Isaac",
        description: "Known for wine, but with a strong craft beer movement.",
        foodPairing: "Pizza Margherita",
        topBrands: ["Peroni", "Baladin", "Birra Moretti", "Ichnusa", "Menabrea"],
        bars: [
            { name: "Ma Che Siete Venuti a Fà (Rome)", rating: 4.7 },
            { name: "Birra Baladin (Milan)", rating: 4.6 },
            { name: "Lambrate (Milan)", rating: 4.5 }
        ]
    },
    "Ivory Coast": {
        rating: 56.75,
        craftSorts: 15,
        price: 1.60,
        tourismScore: 45,
        popular: "Flag",
        best: "Abidjan Craft Lager",
        description: "Beer is a social staple in urban areas.",
        foodPairing: "Alloco (fried plantain)",
        topBrands: ["Flag", "Abidjan Craft", "Castel", "Bock", "Guinness"],
        bars: [
            { name: "Le Parker Place (Abidjan)", rating: 4.3 },
            { name: "Bushman Café", rating: 4.2 },
            { name: "Le Groove", rating: 4.1 }
        ]
    },
    "Jamaica": {
        rating: 62.75,
        craftSorts: 30,
        price: 2.00,
        tourismScore: 70,
        popular: "Red Stripe",
        best: "JAHmaica Craft IPA",
        description: "A vibrant beer culture tied to tourism.",
        foodPairing: "Jerk Chicken",
        topBrands: ["Red Stripe", "JAHmaica Craft", "Dragon Stout", "Heineken", "Guinness"],
        bars: [
            { name: "Rick’s Café (Negril)", rating: 4.5 },
            { name: "Usain Bolt’s Tracks & Records (Kingston)", rating: 4.4 },
            { name: "The Pelican Grill", rating: 4.3 }
        ]
    },
    "Japan": {
        rating: 59.79,
        craftSorts: 70,
        price: 2.80,
        tourismScore: 80,
        popular: "Asahi",
        best: "Hitachino Nest White Ale",
        description: "A sophisticated beer market with craft excellence.",
        foodPairing: "Sushi",
        topBrands: ["Asahi", "Hitachino Nest", "Sapporo", "Kirin", "Suntory"],
        bars: [
            { name: "Popeye (Tokyo)", rating: 4.7 },
            { name: "Craft Beer Market (Tokyo)", rating: 4.6 },
            { name: "Baird Taproom (Tokyo)", rating: 4.5 }
        ]
    },
    "Jordan": {
        rating: 54.75,
        craftSorts: 15,
        price: 2.50,
        tourismScore: 45,
        popular: "Amstel",
        best: "Amman Craft Ale",
        description: "Beer is available mainly for tourists and expats.",
        foodPairing: "Mansaf (lamb with yogurt)",
        topBrands: ["Amstel", "Amman Craft", "Petra", "Heineken", "Carakale"],
        bars: [
            { name: "Carakale Brewery (Amman)", rating: 4.4 },
            { name: "Chestnut’s Pub", rating: 4.3 },
            { name: "Trader Vic’s", rating: 4.2 }
        ]
    },
    "Kazakhstan": {
        rating: 63.25,
        craftSorts: 30,
        price: 1.20,
        tourismScore: 60,
        popular: "Shymkentskoe",
        popularRu: "Шымкентское",
        best: "Almaty Craft IPA",
        bestRu: "Алматы Крафт IPA",
        description: "Kazakhstan's beer scene blends Soviet influences with local tastes.",
        descriptionRu: "Пивная культура Казахстана сочетает советские влияния с местными вкусами.",
        foodPairing: "Beshbarmak (boiled meat with noodles)",
        foodPairingRu: "Бешбармак (мясо с лапшой)",
        topBrands: ["Shymkentskoe", "Almaty Craft", "Efes", "Karagandinskoe", "Pavlodarskoe"],
        topBrandsRu: ["Шымкентское", "Алматы Крафт", "Эфес", "Карагандинское", "Павлодарское"],
        bars: [
            { name: "Beer House (Almaty)", rating: 4.2 },
            { name: "Harat’s Pub (Astana)", rating: 4.3 },
            { name: "Pivovaroff (Almaty)", rating: 4.1 }
        ]
    },
    "Kenya": {
        rating: 61.58,
        craftSorts: 25,
        price: 1.80,
        tourismScore: 60,
        popular: "Tusker",
        best: "Sikia Craft Ale",
        description: "A vibrant beer culture with local pride.",
        foodPairing: "Nyama Choma (grilled meat)",
        topBrands: ["Tusker", "Sikia Craft", "White Cap", "Balozi", "Guinness"],
        bars: [
            { name: "Brew Bistro (Nairobi)", rating: 4.5 },
            { name: "The Alchemist", rating: 4.4 },
            { name: "Geco Bar", rating: 4.3 }
        ]
    },
    "Kiribati": {
        rating: 50.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 45,
        popular: "Heineken",
        best: "Tarawa Craft Lager",
        description: "Beer is limited but enjoyed in social settings.",
        foodPairing: "Palusami (taro leaves with coconut)",
        topBrands: ["Heineken", "Tarawa Craft", "VB", "Fiji Bitter", "San Miguel"],
        bars: [
            { name: "Captain’s Bar (Tarawa)", rating: 4.0 },
            { name: "Otintaai Hotel Bar", rating: 3.9 },
            { name: "Betio Sports Bar", rating: 3.8 }
        ]
    },
    "Kuwait": {
        rating: 40.83,
        craftSorts: 0,
        price: 3.50,
        tourismScore: 30,
        popular: "Barbican (non-alcoholic)",
        best: "Kuwait Craft (non-alcoholic)",
        description: "Non-alcoholic beer dominates due to strict laws.",
        foodPairing: "Machboos (spiced rice with meat)",
        topBrands: ["Barbican", "Kuwait Craft", "Moussy", "Fayrouz", "Holsten"],
        bars: [
            { name: "No bars due to alcohol ban", rating: "N/A" },
            { name: "Café Bazza (Kuwait City, non-alcoholic)", rating: 4.0 },
            { name: "The Chocolate Bar", rating: 3.9 }
        ]
    },
    "Kyrgyzstan": {
        rating: 63.25,
        craftSorts: 25,
        price: 1.30,
        tourismScore: 50,
        popular: "Arpa",
        best: "Bishkek Craft Ale",
        description: "A growing beer culture in Central Asia.",
        foodPairing: "Beshbarmak",
        topBrands: ["Arpa", "Bishkek Craft", "Nash", "Steinbrau", "Zhivoe"],
        bars: [
            { name: "Save The Ales (Bishkek)", rating: 4.4 },
            { name: "Steinbräu", rating: 4.3 },
            { name: "Bar 12", rating: 4.2 }
        ]
    },
    "Laos": {
        rating: 71.58,
        craftSorts: 20,
        price: 1.20,
        tourismScore: 60,
        popular: "Beerlao",
        best: "Vientiane Craft IPA",
        description: "Beerlao dominates a tourist-friendly beer scene.",
        foodPairing: "Laap (minced meat salad)",
        topBrands: ["Beerlao", "Vientiane Craft", "Tiger", "Heineken", "Singha"],
        bars: [
            { name: "Lao Craft Beer (Vientiane)", rating: 4.4 },
            { name: "The Spirit House", rating: 4.3 },
            { name: "Bor Pennyang", rating: 4.2 }
        ]
    },
    "Latvia": {
        rating: 65.75,
        craftSorts: 40,
        price: 1.80,
        tourismScore: 70,
        popular: "Aldaris",
        best: "Labietis IPA",
        description: "A Baltic beer tradition with craft growth.",
        foodPairing: "Rupjmaize (rye bread)",
        topBrands: ["Aldaris", "Labietis", "Cēsu", "Užavas", "Piebalgas"],
        bars: [
            { name: "Labietis (Riga)", rating: 4.6 },
            { name: "Alus Celle", rating: 4.5 },
            { name: "Folkklubs Ala Pagrabs", rating: 4.4 }
        ]
    },
    "Lebanon": {
        rating: 61.58,
        craftSorts: 30,
        price: 2.20,
        tourismScore: 60,
        popular: "Almaza",
        best: "961 Beer IPA",
        description: "A lively beer culture in a wine-rich region.",
        foodPairing: "Shawarma",
        topBrands: ["Almaza", "961 Beer", "Heineken", "Laziza", "Amstel"],
        bars: [
            { name: "Colonel Beer (Beirut)", rating: 4.5 },
            { name: "The Angry Monkey", rating: 4.4 },
            { name: "Kurban", rating: 4.3 }
        ]
    },
    "Lesotho": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.70,
        tourismScore: 45,
        popular: "Maluti",
        best: "Maseru Craft Lager",
        description: "Beer is popular in social settings.",
        foodPairing: "Papa le Lijo (porridge with stew)",
        topBrands: ["Maluti", "Maseru Craft", "Castle", "Hansa", "Carling"],
        bars: [
            { name: "Maluti Mountain Brewery (Maseru)", rating: 4.2 },
            { name: "Lancers Inn", rating: 4.1 },
            { name: "The Roof", rating: 4.0 }
        ]
    },
    "Liberia": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.80,
        tourismScore: 45,
        popular: "Club Beer",
        best: "Monrovia Craft Ale",
        description: "Beer is a common social drink.",
        foodPairing: "Palm Butter Soup",
        topBrands: ["Club Beer", "Monrovia Craft", "Heineken", "Guinness", "Star"],
        bars: [
            { name: "Sajj House (Monrovia)", rating: 4.2 },
            { name: "Living Room Bar", rating: 4.1 },
            { name: "The Royal Grand", rating: 4.0 }
        ]
    },
    "Libya": {
        rating: 38.58,
        craftSorts: 0,
        price: 3.00,
        tourismScore: 25,
        popular: "Non-alcoholic Beer",
        best: "Tripoli Craft (non-alcoholic)",
        description: "Non-alcoholic beer due to strict laws.",
        foodPairing: "Bazin (barley dough)",
        topBrands: ["Barbican", "Tripoli Craft", "Moussy", "Fayrouz", "Holsten"],
        bars: [
            { name: "No bars due to alcohol ban", rating: "N/A" },
            { name: "Café Casa (Tripoli, non-alcoholic)", rating: 4.0 },
            { name: "Al-Athar Café", rating: 3.9 }
        ]
    },
    "Liechtenstein": {
        rating: 61.83,
        craftSorts: 20,
        price: 3.00,
        tourismScore: 70,
        popular: "Liechtensteiner Brauhaus",
        best: "Vaduz Craft IPA",
        description: "A small but quality-focused beer scene.",
        foodPairing: "Käsknöpfle (cheese dumplings)",
        topBrands: ["Liechtensteiner Brauhaus", "Vaduz Craft", "Stiegl", "Gösser", "Mohren"],
        bars: [
            { name: "Brauhaus Vaduz", rating: 4.4 },
            { name: "Old Castle Inn", rating: 4.3 },
            { name: "Gasthof Löwen", rating: 4.2 }
        ]
    },
    "Lithuania": {
        rating: 65.75,
        craftSorts: 40,
        price: 1.80,
        tourismScore: 70,
        popular: "Švyturys",
        best: "Genys Baltic Porter",
        description: "A Baltic beer tradition with a thriving craft scene.",
        foodPairing: "Cepelinai (potato dumplings)",
        topBrands: ["Švyturys", "Genys", "Kalnapilis", "Utenos", "Volfas Engelman"],
        bars: [
            { name: "Špunka (Vilnius)", rating: 4.6 },
            { name: "Būsi Trečias", rating: 4.5 },
            { name: "Alaus Biblioteka", rating: 4.4 }
        ]
    },
    "Luxembourg": {
        rating: 62.75,
        craftSorts: 30,
        price: 2.50,
        tourismScore: 75,
        popular: "Bofferding",
        best: "Simon Craft IPA",
        description: "A small but sophisticated beer culture.",
        foodPairing: "Judd mat Gaardebounen (smoked pork with beans)",
        topBrands: ["Bofferding", "Simon", "Diekirch", "Battin", "Clausen"],
        bars: [
            { name: "Konrad Café & Bar (Luxembourg City)", rating: 4.5 },
            { name: "Liquid", rating: 4.4 },
            { name: "Urban Bar", rating: 4.3 }
        ]
    },
    "Madagascar": {
        rating: 57.33,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 50,
        popular: "Three Horses Beer (THB)",
        best: "Antananarivo Craft Ale",
        description: "Beer is a popular drink with growing local options.",
        foodPairing: "Romazava (meat stew)",
        topBrands: ["THB", "Antananarivo Craft", "Skol", "Castel", "Heineken"],
        bars: [
            { name: "Le Glacier (Antananarivo)", rating: 4.2 },
            { name: "Kudéta", rating: 4.1 },
            { name: "La Varangue", rating: 4.0 }
        ]
    },
    "Malawi": {
        rating: 56.75,
        craftSorts: 10,
        price: 1.60,
        tourismScore: 45,
        popular: "Carlsberg Green",
        best: "Lilongwe Craft Lager",
        description: "Beer is a social staple, especially in tourist areas.",
        foodPairing: "Nsima with Chambo (fish)",
        topBrands: ["Carlsberg Green", "Lilongwe Craft", "Kuchel", "Heineken", "Castle"],
        bars: [
            { name: "Harry’s Bar (Lilongwe)", rating: 4.2 },
            { name: "The Shack", rating: 4.1 },
            { name: "Kumbali Lodge Bar", rating: 4.0 }
        ]
    },
    "Malaysia": {
        rating: 57.33,
        craftSorts: 25,
        price: 2.50,
        tourismScore: 60,
        popular: "Tiger",
        best: "The Great Beer Experiment IPA",
        description: "Beer thrives in urban and tourist areas despite restrictions.",
        foodPairing: "Nasi Lemak",
        topBrands: ["Tiger", "The Great Beer Experiment", "Heineken", "Carlsberg", "Anchor"],
        bars: [
            { name: "Taps Beer Bar (Kuala Lumpur)", rating: 4.5 },
            { name: "The Great Beer Bar", rating: 4.4 },
            { name: "Hit & Mrs", rating: 4.3 }
        ]
    },
    "Maldives": {
        rating: 54.75,
        craftSorts: 10,
        price: 3.50,
        tourismScore: 70,
        popular: "Heineken",
        best: "Malé Craft Lager",
        description: "Beer is available mainly in resorts for tourists.",
        foodPairing: "Mas Huni (tuna with coconut)",
        topBrands: ["Heineken", "Malé Craft", "Tiger", "Carlsberg", "Lion"],
        bars: [
            { name: "Sunset Bar (Malé)", rating: 4.4 },
            { name: "The SeaHouse", rating: 4.3 },
            { name: "Kurumba Beach Bar", rating: 4.2 }
        ]
    },
    "Mali": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.60,
        tourismScore: 45,
        popular: "Castel",
        best: "Bamako Craft Ale",
        description: "Beer is popular in urban social settings.",
        foodPairing: "Tiguadéguéna (peanut stew)",
        topBrands: ["Castel", "Bamako Craft", "Flag", "Heineken", "Guinness"],
        bars: [
            { name: "Le Byblos (Bamako)", rating: 4.2 },
            { name: "Le Bla Bla", rating: 4.1 },
            { name: "Le Campagnard", rating: 4.0 }
        ]
    },
    "Malta": {
        rating: 63.25,
        craftSorts: 25,
        price: 2.00,
        tourismScore: 75,
        popular: "Cisk",
        best: "Lord Chambray IPA",
        description: "A Mediterranean beer culture boosted by tourism.",
        foodPairing: "Pastizzi (pea pastries)",
        topBrands: ["Cisk", "Lord Chambray", "Farsons Blue", "Heineken", "Hopleaf"],
        bars: [
            { name: "The Brew (Sliema)", rating: 4.5 },
            { name: "67 Kapitali", rating: 4.4 },
            { name: "The Thirsty Lawyer", rating: 4.3 }
        ]
    },
    "Marshall Islands": {
        rating: 50.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 45,
        popular: "Heineken",
        best: "Majuro Craft Lager",
        description: "Beer is limited but enjoyed in social settings.",
        foodPairing: "Coconut Crab",
        topBrands: ["Heineken", "Majuro Craft", "Budweiser", "Coors", "San Miguel"],
        bars: [
            { name: "Tide Table (Majuro)", rating: 4.1 },
            { name: "Marshall Islands Resort Bar", rating: 4.0 },
            { name: "RRE Bar", rating: 3.9 }
        ]
    },
    "Mauritania": {
        rating: 46.58,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 35,
        popular: "Flag",
        best: "Nouakchott Craft Ale",
        description: "Beer is rare due to cultural norms, available in expat areas.",
        foodPairing: "Thieboudienne (fish and rice)",
        topBrands: ["Flag", "Nouakchott Craft", "Heineken", "Castel", "Amstel"],
        bars: [
            { name: "Sahara Café (Nouakchott)", rating: 4.0 },
            { name: "Le Prince", rating: 3.9 },
            { name: "Hotel Tfeila Bar", rating: 3.8 }
        ]
    },
    "Mauritius": {
        rating: 61.58,
        craftSorts: 20,
        price: 2.00,
        tourismScore: 70,
        popular: "Phoenix",
        best: "Flying Dodo IPA",
        description: "A tourist-friendly beer scene with local craft.",
        foodPairing: "Dholl Puri",
        topBrands: ["Phoenix", "Flying Dodo", "Blue Marlin", "Heineken", "Tiger"],
        bars: [
            { name: "Flying Dodo Brewing (Port Louis)", rating: 4.5 },
            { name: "Lambic", rating: 4.4 },
            { name: "The Beach House", rating: 4.3 }
        ]
    },
    "Mexico": {
        rating: 62.28,
        craftSorts: 50,
        price: 1.70,
        tourismScore: 75,
        popular: "Corona",
        best: "Minerva IPA",
        description: "A vibrant beer culture with a growing craft scene.",
        foodPairing: "Tacos al Pastor",
        topBrands: ["Corona", "Minerva", "Modelo", "Victoria", "Tecate"],
        bars: [
            { name: "El Deposito (Mexico City)", rating: 4.6 },
            { name: "Cervecería de la Paz (Guadalajara)", rating: 4.5 },
            { name: "Fiebre de Malta (Mexico City)", rating: 4.4 }
        ]
    },
    "Micronesia": {
        rating: 50.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 45,
        popular: "Budweiser",
        best: "Pohnpei Craft Lager",
        description: "Beer is limited but enjoyed by tourists and locals.",
        foodPairing: "Pounded Yam",
        topBrands: ["Budweiser", "Pohnpei Craft", "Heineken", "Coors", "San Miguel"],
        bars: [
            { name: "Mangrove Bay (Pohnpei)", rating: 4.1 },
            { name: "The Village Hotel Bar", rating: 4.0 },
            { name: "Ocean View Bar", rating: 3.9 }
        ]
    },
    "Moldova": {
        rating: 63.25,
        craftSorts: 25,
        price: 1.20,
        tourismScore: 55,
        popular: "Chişinău",
        best: "Litra Craft Ale",
        description: "A growing beer scene alongside a strong wine tradition.",
        foodPairing: "Mămăligă (cornmeal porridge)",
        topBrands: ["Chişinău", "Litra", "Bere Buna", "Vită", "Kozel"],
        bars: [
            { name: "Taproom 27 (Chișinău)", rating: 4.5 },
            { name: "Smokehouse", rating: 4.4 },
            { name: "Beer Pub 513", rating: 4.3 }
        ]
    },
    "Monaco": {
        rating: 59.75,
        craftSorts: 20,
        price: 3.50,
        tourismScore: 80,
        popular: "Heineken",
        best: "Monaco Craft Lager",
        description: "A small but luxurious beer scene for tourists.",
        foodPairing: "Barbajuan (fried pastry)",
        topBrands: ["Heineken", "Monaco Craft", "Carlsberg", "Kronenbourg", "1664"],
        bars: [
            { name: "Brasserie de Monaco", rating: 4.6 },
            { name: "Stars’N’Bars", rating: 4.5 },
            { name: "La Rascasse", rating: 4.4 }
        ]
    },
    "Mongolia": {
        rating: 61.58,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 50,
        popular: "Chinggis",
        best: "Ulaanbaatar Craft Ale",
        description: "Beer complements a nomadic culinary tradition.",
        foodPairing: "Buuz (steamed dumplings)",
        topBrands: ["Chinggis", "Ulaanbaatar Craft", "Khanbrau", "Sengur", "Borgio"],
        bars: [
            { name: "MB Beer Plus (Ulaanbaatar)", rating: 4.4 },
            { name: "The Bulldog", rating: 4.3 },
            { name: "Hops & Barley", rating: 4.2 }
        ]
    },
    "Montenegro": {
        rating: 65.75,
        craftSorts: 30,
        price: 1.50,
        tourismScore: 70,
        popular: "Nikšićko",
        best: "MAMMUT Craft IPA",
        description: "A growing beer culture in a tourist-friendly region.",
        foodPairing: "Njeguški pršut (smoked ham)",
        topBrands: ["Nikšićko", "MAMMUT", "Jelen", "Apatinsko", "Lav"],
        bars: [
            { name: "The Pub (Kotor)", rating: 4.5 },
            { name: "Buddha-Bar (Budva)", rating: 4.4 },
            { name: "Old Town Pub (Podgorica)", rating: 4.3 }
        ]
    },
    "Morocco": {
        rating: 57.33,
        craftSorts: 15,
        price: 2.00,
        tourismScore: 60,
        popular: "Casablanca",
        best: "Marrakech Craft Ale",
        description: "Beer is available mainly in tourist areas.",
        foodPairing: "Tagine",
        topBrands: ["Casablanca", "Marrakech Craft", "Flag", "Heineken", "Stork"],
        bars: [
            { name: "Le Cabestan (Casablanca)", rating: 4.4 },
            { name: "Sky 28 (Marrakech)", rating: 4.3 },
            { name: "Rick’s Café", rating: 4.2 }
        ]
    },
    "Mozambique": {
        rating: 56.75,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 45,
        popular: "2M",
        best: "Maputo Craft Lager",
        description: "Beer is a popular social drink in urban areas.",
        foodPairing: "Peri-Peri Chicken",
        topBrands: ["2M", "Maputo Craft", "Laurentina", "Manica", "Heineken"],
        bars: [
            { name: "Café Sol (Maputo)", rating: 4.3 },
            { name: "Coconuts Live", rating: 4.2 },
            { name: "Dhow Bar", rating: 4.1 }
        ]
    },
    "Myanmar": {
        rating: 63.25,
        craftSorts: 20,
        price: 1.20,
        tourismScore: 55,
        popular: "Myanmar Beer",
        best: "Yangon Craft IPA",
        description: "Beer is widely enjoyed, especially by tourists.",
        foodPairing: "Mohinga (fish noodle soup)",
        topBrands: ["Myanmar Beer", "Yangon Craft", "Andaman Gold", "Tiger", "Heineken"],
        bars: [
            { name: "Burbrit Taproom (Yangon)", rating: 4.4 },
            { name: "The Blind Tiger", rating: 4.3 },
            { name: "50th Street Bar", rating: 4.2 }
        ]
    },
    "Namibia": {
        rating: 59.75,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 55,
        popular: "Windhoek Lager",
        best: "Namibia Craft Ale",
        description: "A strong beer tradition with German influences.",
        foodPairing: "Kapana (grilled meat)",
        topBrands: ["Windhoek Lager", "Namibia Craft", "Hansa", "Tafel", "Camelthorn"],
        bars: [
            { name: "Joe’s Beerhouse (Windhoek)", rating: 4.5 },
            { name: "The Stellenbosch", rating: 4.4 },
            { name: "Nice Bar", rating: 4.3 }
        ]
    },
    "Nauru": {
        rating: 48.58,
        craftSorts: 5,
        price: 3.00,
        tourismScore: 40,
        popular: "VB",
        best: "Nauru Craft Lager",
        description: "Beer is limited but enjoyed by locals and visitors.",
        foodPairing: "Coconut Fish",
        topBrands: ["VB", "Nauru Craft", "Heineken", "Fiji Bitter", "San Miguel"],
        bars: [
            { name: "Jules on the Deck", rating: 4.1 },
            { name: "Menas Bar", rating: 4.0 },
            { name: "Od-N-Aiwo Hotel Bar", rating: 3.9 }
        ]
    },
    "Nepal": {
        rating: 63.25,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 55,
        popular: "Everest",
        best: "Kathmandu Craft Ale",
        description: "Beer complements a rich trekking culture.",
        foodPairing: "Dal Bhat",
        topBrands: ["Everest", "Kathmandu Craft", "Gorkha", "Nepal Ice", "Tuborg"],
        bars: [
            { name: "The Factory (Kathmandu)", rating: 4.4 },
            { name: "Trisara", rating: 4.3 },
            { name: "Himalayan Java", rating: 4.2 }
        ]
    },
    "Netherlands": {
        rating: 65.08,
        craftSorts: 70,
        price: 2.50,
        tourismScore: 85,
        popular: "Heineken",
        best: "Brouwerij ’t IJ IPA",
        description: "A global beer leader with a strong craft movement.",
        foodPairing: "Bitterballen",
        topBrands: ["Heineken", "Brouwerij ’t IJ", "Amstel", "Grolsch", "Hertog Jan"],
        bars: [
            { name: "Brouwerij ’t IJ (Amsterdam)", rating: 4.7 },
            { name: "In de Wildeman", rating: 4.6 },
            { name: "BeerTemple", rating: 4.5 }
        ]
    },
    "New Zealand": {
        rating: 62.75,
        craftSorts: 60,
        price: 3.00,
        tourismScore: 85,
        popular: "Steinlager",
        best: "Garage Project White Mischief",
        description: "A vibrant craft beer culture in a scenic country.",
        foodPairing: "Hangi (earth oven meal)",
        topBrands: ["Steinlager", "Garage Project", "Tui", "Speight’s", "Emerson’s"],
        bars: [
            { name: "Garage Project (Wellington)", rating: 4.7 },
            { name: "The Malthouse", rating: 4.6 },
            { name: "Hashigo Zake", rating: 4.5 }
        ]
    },
    "Nicaragua": {
        rating: 61.58,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 55,
        popular: "Toña",
        best: "Compañía Cervecera IPA",
        description: "A growing beer culture with local and craft options.",
        foodPairing: "Gallo Pinto",
        topBrands: ["Toña", "Compañía Cervecera", "Victoria", "Brahma", "Heineken"],
        bars: [
            { name: "La Finca (Managua)", rating: 4.4 },
            { name: "El Tiscapa", rating: 4.3 },
            { name: "Puerto Bar", rating: 4.2 }
        ]
    },
    "Niger": {
        rating: 50.08,
        craftSorts: 5,
        price: 1.80,
        tourismScore: 35,
        popular: "Flag",
        best: "Niamey Craft Lager",
        description: "Beer is consumed mainly in urban areas.",
        foodPairing: "Djerma Stew",
        topBrands: ["Flag", "Niamey Craft", "Heineken", "Castel", "Gulder"],
        bars: [
            { name: "Le Toulousain (Niamey)", rating: 4.0 },
            { name: "Bar Le Nomade", rating: 3.9 },
            { name: "Hôtel Ténéré", rating: 3.8 }
        ]
    },
    "Nigeria": {
        rating: 59.75,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 50,
        popular: "Star",
        best: "Lagos Craft Ale",
        description: "A vibrant beer culture in a bustling market.",
        foodPairing: "Jollof Rice",
        topBrands: ["Star", "Lagos Craft", "Guinness", "Heineken", "Legend"],
        bars: [
            { name: "Nitro Lagos", rating: 4.4 },
            { name: "The House Lagos", rating: 4.3 },
            { name: "Eko Hotels Bar", rating: 4.2 }
        ]
    },
    "North Korea": {
        rating: 40.83,
        craftSorts: 5,
        price: 2.00,
        tourismScore: 15,
        popular: "Taedonggang",
        best: "Pyongyang Craft Lager",
        description: "Beer is state-controlled with limited variety.",
        foodPairing: "Kimchi",
        topBrands: ["Taedonggang", "Pyongyang Craft", "Ryongsong", "Rakwon", "Ponghak"],
        bars: [
            { name: "Yanggakdo Hotel Bar (Pyongyang)", rating: 3.9 },
            { name: "Koryo Hotel Bar", rating: 3.8 },
            { name: "Diplomatic Club", rating: 3.7 }
        ]
    },
    "North Macedonia": {
        rating: 63.25,
        craftSorts: 25,
        price: 1.50,
        tourismScore: 60,
        popular: "Skopsko",
        best: "Temov Craft IPA",
        description: "A Balkan beer tradition with emerging craft.",
        foodPairing: "Tavče Gravče (baked beans)",
        topBrands: ["Skopsko", "Temov", "Zlaten Dab", "Bitolsko", "Heineken"],
        bars: [
            { name: "Old Town Brewery (Skopje)", rating: 4.5 },
            { name: "Pivnica Temov", rating: 4.4 },
            { name: "Irish Pub", rating: 4.3 }
        ]
    },
    "Norway": {
        rating: 61.58,
        craftSorts: 60,
        price: 4.00,
        tourismScore: 80,
        popular: "Ringnes",
        best: "Nøgne Ø IPA",
        description: "A strong Nordic beer culture with craft innovation.",
        foodPairing: "Rakfisk (fermented fish)",
        topBrands: ["Ringnes", "Nøgne Ø", "Hansa", "Aass", "Mack"],
        bars: [
            { name: "Schouskjelleren (Oslo)", rating: 4.7 },
            { name: "Crowbar", rating: 4.6 },
            { name: "Ølbaren (Bergen)", rating: 4.5 }
        ]
    },
    "Oman": {
        rating: 50.08,
        craftSorts: 10,
        price: 3.00,
        tourismScore: 45,
        popular: "Heineken",
        best: "Muscat Craft Ale",
        description: "Beer is available mainly in hotels and expat areas.",
        foodPairing: "Shuwa (slow-cooked lamb)",
        topBrands: ["Heineken", "Muscat Craft", "Amstel", "Carlsberg", "Tiger"],
        bars: [
            { name: "Trader Vic’s (Muscat)", rating: 4.4 },
            { name: "Rock Bottom Café", rating: 4.3 },
            { name: "The Cave", rating: 4.2 }
        ]
    },
    "Pakistan": {
        rating: 42.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 30,
        popular: "Murree Beer",
        best: "Karachi Craft Lager",
        description: "Beer is limited to non-Muslim communities and tourists.",
        foodPairing: "Biryani",
        topBrands: ["Murree Beer", "Karachi Craft", "Lion", "Heineken", "Tiger"],
        bars: [
            { name: "Murree Brewery Bar (Rawalpindi)", rating: 4.1 },
            { name: "PC Hotel Lounge (Karachi)", rating: 4.0 },
            { name: "Serena Hotel Bar (Islamabad)", rating: 3.9 }
        ]
    },
    "Palau": {
        rating: 54.75,
        craftSorts: 10,
        price: 2.50,
        tourismScore: 55,
        popular: "Red Rooster",
        best: "Koror Craft Ale",
        description: "A small beer scene boosted by tourism.",
        foodPairing: "Palauan Fruit Bat Soup",
        topBrands: ["Red Rooster", "Koror Craft", "Budweiser", "Heineken", "San Miguel"],
        bars: [
            { name: "Kramer’s Café (Koror)", rating: 4.2 },
            { name: "Drop Off Bar", rating: 4.1 },
            { name: "Palm Bay Bistro", rating: 4.0 }
        ]
    },
    "Panama": {
        rating: 63.25,
        craftSorts: 30,
        price: 1.50,
        tourismScore: 65,
        popular: "Balboa",
        best: "Casa Bruja IPA",
        description: "A lively beer culture with growing craft options.",
        foodPairing: "Sancocho (chicken stew)",
        topBrands: ["Balboa", "Casa Bruja", "Atlas", "Panama", "Soberana"],
        bars: [
            { name: "La Rana Dorada (Panama City)", rating: 4.6 },
            { name: "Casa Bruja", rating: 4.5 },
            { name: "Relic Bar", rating: 4.4 }
        ]
    },
    "Papua New Guinea": {
        rating: 54.75,
        craftSorts: 10,
        price: 2.00,
        tourismScore: 45,
        popular: "SP Lager",
        best: "Port Moresby Craft Ale",
        description: "Beer is a popular social drink.",
        foodPairing: "Mumu (earth oven dish)",
        topBrands: ["SP Lager", "Port Moresby Craft", "Niugini Ice", "Heineken", "VB"],
        bars: [
            { name: "Aviat Club (Port Moresby)", rating: 4.2 },
            { name: "The Shady Rest", rating: 4.1 },
            { name: "Gold Club", rating: 4.0 }
        ]
    },
    "Paraguay": {
        rating: 61.58,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 55,
        popular: "Brahma",
        best: "Sajonia Craft IPA",
        description: "A growing beer culture with local and craft options.",
        foodPairing: "Sopa Paraguaya (cornbread)",
        topBrands: ["Brahma", "Sajonia", "Pilsen", "Munich", "Heineken"],
        bars: [
            { name: "Sacramento Brewing (Asunción)", rating: 4.4 },
            { name: "La Taberna", rating: 4.3 },
            { name: "Biergarten", rating: 4.2 }
        ]
    },
    "Peru": {
        rating: 63.25,
        craftSorts: 35,
        price: 1.80,
        tourismScore: 70,
        popular: "Cusqueña",
        best: "Barbarian IPA",
        description: "A rich beer culture with a growing craft scene.",
        foodPairing: "Ceviche",
        topBrands: ["Cusqueña", "Barbarian", "Pilsen Callao", "Cristal", "Arequipeña"],
        bars: [
            { name: "Barbarian (Lima)", rating: 4.6 },
            { name: "La Nacional", rating: 4.5 },
            { name: "El Barranco Beer Company", rating: 4.4 }
        ]
    },
    "Philippines": {
        rating: 61.58,
        craftSorts: 30,
        price: 1.50,
        tourismScore: 60,
        popular: "San Miguel",
        best: "Monkey Eagle IPA",
        description: "A vibrant beer culture with growing craft options.",
        foodPairing: "Adobo",
        topBrands: ["San Miguel", "Monkey Eagle", "Red Horse", "Heineken", "Tiger"],
        bars: [
            { name: "The Perfect Pint (Manila)", rating: 4.5 },
            { name: "Craft Shack", rating: 4.4 },
            { name: "Pedro Tap House", rating: 4.3 }
        ]
    },
    "Poland": {
        rating: 65.75,
        craftSorts: 50,
        price: 1.50,
        tourismScore: 75,
        popular: "Żywiec",
        best: "Pinta Atak Chmielu",
        description: "A strong beer tradition with a thriving craft scene.",
        foodPairing: "Pierogi",
        topBrands: ["Żywiec", "Pinta", "Tyskie", "Okocim", "Specjal"],
        bars: [
            { name: "PiwPaw (Warsaw)", rating: 4.6 },
            { name: "Browar Miedzianka", rating: 4.5 },
            { name: "Jabeerwocky", rating: 4.4 }
        ]
    },
    "Portugal": {
        rating: 63.25,
        craftSorts: 45,
        price: 2.00,
        tourismScore: 80,
        popular: "Super Bock",
        best: "Sovina IPA",
        description: "A growing craft beer scene alongside traditional lagers.",
        foodPairing: "Bacalhau (codfish)",
        topBrands: ["Super Bock", "Sovina", "Sagres", "Coral", "Heineken"],
        bars: [
            { name: "Cerveja Letra (Lisbon)", rating: 4.6 },
            { name: "Cerveteca Lisboa", rating: 4.5 },
            { name: "Duke Brew & Que", rating: 4.4 }
        ]
    },
    "Qatar": {
        rating: 50.08,
        craftSorts: 10,
        price: 4.00,
        tourismScore: 55,
        popular: "Heineken",
        best: "Doha Craft Ale",
        description: "Beer is available in hotels and expat areas.",
        foodPairing: "Machboos",
        topBrands: ["Heineken", "Doha Craft", "Carlsberg", "Budweiser", "Amstel"],
        bars: [
            { name: "IDAM Lounge (Doha)", rating: 4.5 },
            { name: "W Doha Sky Bar", rating: 4.4 },
            { name: "Irish Harp", rating: 4.3 }
        ]
    },
    "Romania": {
        rating: 65.75,
        craftSorts: 40,
        price: 1.50,
        tourismScore: 70,
        popular: "Ursus",
        best: "Zăganu IPA",
        description: "A solid beer tradition with a growing craft scene.",
        foodPairing: "Sarmale (cabbage rolls)",
        topBrands: ["Ursus", "Zăganu", "Timișoreana", "Ciuc", "Bergenbier"],
        bars: [
            { name: "Berăria H (Bucharest)", rating: 4.6 },
            { name: "Ground Zero", rating: 4.5 },
            { name: "The Beer Institute", rating: 4.4 }
        ]
    },
    "Russia": {
        rating: 61.22,
        craftSorts: 50,
        price: 1.50,
        tourismScore: 63,
        popular: "Baltika",
        popularRu: "Балтика",
        best: "Vasileostrovskoe",
        bestRu: "Василеостровское",
        description: "Russia has a strong beer tradition with a growing craft beer scene in major cities.",
        descriptionRu: "В России сильная пивная традиция с растущей крафтовой сценой в крупных городах.",
        foodPairing: "Pelmeni (dumplings with meat)",
        foodPairingRu: "Пельмени с мясом",
        topBrands: ["Baltika", "Zhigulevskoe", "Vasileostrovskoe", "Bakunin", "Khamovniki"],
        topBrandsRu: ["Балтика", "Жигулёвское", "Василеостровское", "Бакунин", "Хамовники"],
        bars: [
            { name: "Rule Taproom (Moscow)", rating: 4.7 },
            { name: "Jawsspot (Moscow)", rating: 4.6 },
            { name: "Redrum Bar (St. Petersburg)", rating: 4.8 }
        ]
    },
    "Rwanda": {
        rating: 57.33,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 50,
        popular: "Primus",
        best: "Kigali Craft Ale",
        description: "Beer is a popular social drink with emerging craft.",
        foodPairing: "Ugali with Goat Stew",
        topBrands: ["Primus", "Kigali Craft", "Skol", "Mutzig", "Heineken"],
        bars: [
            { name: "Pili Pili (Kigali)", rating: 4.3 },
            { name: "Repub Lounge", rating: 4.2 },
            { name: "The Hut", rating: 4.1 }
        ]
    },
    "Saint Kitts and Nevis": {
        rating: 61.58,
        craftSorts: 15,
        price: 2.00,
        tourismScore: 65,
        popular: "Carib",
        best: "St. Kitts Craft IPA",
        description: "A tourist-driven beer culture.",
        foodPairing: "Goat Water (stew)",
        topBrands: ["Carib", "St. Kitts Craft", "Skol", "Heineken", "Banks"],
        bars: [
            { name: "Shipwreck Beach Bar", rating: 4.4 },
            { name: "Salt Plage", rating: 4.3 },
            { name: "Reggae Beach Bar", rating: 4.2 }
        ]
    },
    "Saint Lucia": {
        rating: 61.58,
        craftSorts: 15,
        price: 2.00,
        tourismScore: 65,
        popular: "Piton",
        best: "St. Lucia Craft Lager",
        description: "A vibrant beer scene tied to tourism.",
        foodPairing: "Green Fig and Saltfish",
        topBrands: ["Piton", "St. Lucia Craft", "Carib", "Heineken", "Banks"],
        bars: [
            { name: "The Pink Plantation", rating: 4.4 },
            { name: "Buzz Seafood & Grill", rating: 4.3 },
            { name: "Spinnakers", rating: 4.2 }
        ]
    },
    "Saint Vincent and the Grenadines": {
        rating: 61.58,
        craftSorts: 15,
        price: 2.00,
        tourismScore: 65,
        popular: "Hairoun",
        best: "Vincent Craft Ale",
        description: "A tourist-friendly beer culture.",
        foodPairing: "Roasted Breadfruit",
        topBrands: ["Hairoun", "Vincent Craft", "Carib", "Heineken", "Stag"],
        bars: [
            { name: "Flow Wine Bar (Kingstown)", rating: 4.3 },
            { name: "Basil’s Bar", rating: 4.2 },
            { name: "Jack’s Bar", rating: 4.1 }
        ]
    },
    "Samoa": {
        rating: 56.75,
        craftSorts: 10,
        price: 2.00,
        tourismScore: 55,
        popular: "Vailima",
        best: "Apia Craft Lager",
        description: "Beer is popular among locals and tourists.",
        foodPairing: "Oka (raw fish)",
        topBrands: ["Vailima", "Apia Craft", "Heineken", "Steinlager", "Tiger"],
        bars: [
            { name: "Taumeasina Island Resort Bar", rating: 4.3 },
            { name: "Paddles", rating: 4.2 },
            { name: "The Edge", rating: 4.1 }
        ]
    },
    "San Marino": {
        rating: 61.58,
        craftSorts: 15,
        price: 2.50,
        tourismScore: 70,
        popular: "Birra Amarcord",
        best: "San Marino Craft IPA",
        description: "A small but tourist-friendly beer scene.",
        foodPairing: "Torta Tre Monti (layered cake)",
        topBrands: ["Birra Amarcord", "San Marino Craft", "Peroni", "Moretti", "Heineken"],
        bars: [
            { name: "La Taverna (San Marino)", rating: 4.3 },
            { name: "Ritrovo dei Lavoratori", rating: 4.2 },
            { name: "Bar Guaita", rating: 4.1 }
        ]
    },
    "Sao Tome and Principe": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.80,
        tourismScore: 45,
        popular: "Rosema",
        best: "São Tomé Craft Ale",
        description: "Beer is a social drink with limited craft.",
        foodPairing: "Calulu (fish stew)",
        topBrands: ["Rosema", "São Tomé Craft", "Heineken", "Skol", "Primus"],
        bars: [
            { name: "Pestana Bar (São Tomé)", rating: 4.2 },
            { name: "Café e Companhia", rating: 4.1 },
            { name: "O Bigodes", rating: 4.0 }
        ]
    },
    "Saudi Arabia": {
        rating: 38.58,
        craftSorts: 0,
        price: 4.00,
        tourismScore: 35,
        popular: "Barbican (non-alcoholic)",
        best: "Riyadh Craft (non-alcoholic)",
        description: "Non-alcoholic beer due to strict laws.",
        foodPairing: "Kabsa (spiced rice with meat)",
        topBrands: ["Barbican", "Riyadh Craft", "Moussy", "Fayrouz", "Holsten"],
        bars: [
            { name: "No bars due to alcohol ban", rating: "N/A" },
            { name: "Café Bateel (Riyadh, non-alcoholic)", rating: 4.1 },
            { name: "The Globe (Jeddah)", rating: 4.0 }
        ]
    },
    "Senegal": {
        rating: 59.75,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 50,
        popular: "Flag",
        best: "Dakar Craft Lager",
        description: "Beer is a popular social drink.",
        foodPairing: "Thieboudienne (fish and rice)",
        topBrands: ["Flag", "Dakar Craft", "Gazelle", "Heineken", "Castel"],
        bars: [
            { name: "Le Patio (Dakar)", rating: 4.3 },
            { name: "Bayékou", rating: 4.2 },
            { name: "Le Viking", rating: 4.1 }
        ]
    },
    "Serbia": {
        rating: 65.75,
        craftSorts: 40,
        price: 1.50,
        tourismScore: 70,
        popular: "Jelen",
        best: "Kabinet IPA",
        description: "A Balkan beer tradition with a growing craft scene.",
        foodPairing: "Ćevapi",
        topBrands: ["Jelen", "Kabinet", "Lav", "Zaječarsko", "Nikšićko"],
        bars: [
            { name: "Kabinet Brewery (Belgrade)", rating: 4.6 },
            { name: "Zlatna Krigla", rating: 4.5 },
            { name: "The Black Turtle", rating: 4.4 }
        ]
    },
    "Seychelles": {
        rating: 61.58,
        craftSorts: 15,
        price: 2.50,
        tourismScore: 70,
        popular: "Seybrew",
        best: "Mahé Craft Ale",
        description: "A tourist-driven beer culture.",
        foodPairing: "Octopus Curry",
        topBrands: ["Seybrew", "Mahé Craft", "Heineken", "Tiger", "Carlsberg"],
        bars: [
            { name: "The Boardwalk (Mahé)", rating: 4.4 },
            { name: "Bravo Bar", rating: 4.3 },
            { name: "Beach Shak", rating: 4.2 }
        ]
    },
    "Sierra Leone": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.80,
        tourismScore: 45,
        popular: "Star",
        best: "Freetown Craft Lager",
        description: "Beer is a social staple.",
        foodPairing: "Groundnut Stew",
        topBrands: ["Star", "Freetown Craft", "Heineken", "Guinness", "Skol"],
        bars: [
            { name: "Country Lodge Bar (Freetown)", rating: 4.2 },
            { name: "Ace’s", rating: 4.1 },
            { name: "The Atlantic", rating: 4.0 }
        ]
    },
    "Singapore": {
        rating: 61.58,
        craftSorts: 50,
        price: 3.50,
        tourismScore: 85,
        popular: "Tiger",
        best: "Brewlander Hope IPA",
        description: "A sophisticated beer market with strong craft growth.",
        foodPairing: "Hainanese Chicken Rice",
        topBrands: ["Tiger", "Brewlander", "Heineken", " Carlsberg", "Anchor"],
        bars: [
            { name: "Level33", rating: 4.6 },
            { name: "Good Luck Beerhouse", rating: 4.5 },
            { name: "Smith Street Taps", rating: 4.4 }
        ]
    },
    "Slovakia": {
        rating: 65.75,
        craftSorts: 40,
        price: 1.50,
        tourismScore: 70,
        popular: "Zlatý Bažant",
        best: "Buntavar IPA",
        description: "A strong beer tradition with a growing craft scene.",
        foodPairing: "Bryndzové Halušky (dumplings with cheese)",
        topBrands: ["Zlatý Bažant", "Buntavar", "Šariš", "Corgoň", "Kozel"],
        bars: [
            { name: "Bratislavský Meštiansky Pivovar", rating: 4.6 },
            { name: "100 Pív", rating: 4.5 },
            { name: "Stupavar", rating: 4.4 }
        ]
    },
    "Slovenia": {
        rating: 65.75,
        craftSorts: 40,
        price: 1.80,
        tourismScore: 75,
        popular: "Laško",
        best: "Pelicon IPA",
        description: "A growing craft beer scene in a scenic country.",
        foodPairing: "Štruklji (dumplings)",
        topBrands: ["Laško", "Pelicon", "Union", "Heineken", "Pivovarna Zajc"],
        bars: [
            { name: "Sir William’s Pub (Ljubljana)", rating: 4.6 },
            { name: "Kavarna Rog", rating: 4.5 },
            { name: "Patrick’s Irish Pub", rating: 4.4 }
        ]
    },
    "Solomon Islands": {
        rating: 54.75,
        craftSorts: 10,
        price: 2.00,
        tourismScore: 45,
        popular: "SolBrew",
        best: "Honiara Craft Lager",
        description: "Beer is popular among locals and tourists.",
        foodPairing: "Pota (root vegetable stew)",
        topBrands: ["SolBrew", "Honiara Craft", "Heineken", "VB", "San Miguel"],
        bars: [
            { name: "Breakwater Café (Honiara)", rating: 4.2 },
            { name: "The Bamboo Bar", rating: 4.1 },
            { name: "Heritage Park Hotel Bar", rating: 4.0 }
        ]
    },
    "Somalia": {
        rating: 38.58,
        craftSorts: 0,
        price: 3.00,
        tourismScore: 20,
        popular: "Heineken",
        best: "Mogadishu Craft (non-alcoholic)",
        description: "Beer is limited and mostly non-alcoholic due to restrictions.",
        foodPairing: "Bariis Iskukaris (spiced rice)",
        topBrands: ["Heineken", "Mogadishu Craft", "Barbican", "Moussy", "Fayrouz"],
        bars: [
            { name: "No bars due to instability", rating: "N/A" },
            { name: "Peace Hotel Café (non-alcoholic)", rating: 3.9 },
            { name: "Jazeera Palace Bar", rating: 3.8 }
        ]
    },
    "South Africa": {
        rating: 56.22,
        craftSorts: 45,
        price: 1.80,
        tourismScore: 65,
        popular: "Castle Lager",
        best: "Devil’s Peak IPA",
        description: "A robust beer culture with craft innovation.",
        foodPairing: "Biltong",
        topBrands: ["Castle Lager", "Devil’s Peak", "Carling Black Label", "Hansa", "Windhoek"],
        bars: [
            { name: "Beerhouse (Cape Town)", rating: 4.6 },
            { name: "Capital Craft (Pretoria)", rating: 4.5 },
            { name: "The Brewmistress (Johannesburg)", rating: 4.4 }
        ]
    },
    "South Korea": {
        rating: 59.75,
        craftSorts: 50,
        price: 2.50,
        tourismScore: 80,
        popular: "Hite",
        best: "Magpie Brewing IPA",
        description: "A growing craft beer scene alongside traditional drinks.",
        foodPairing: "Kimchi Jjigae",
        topBrands: ["Hite", "Magpie", "Cass", "OB", "Kloud"],
        bars: [
            { name: "Magpie Brewing (Seoul)", rating: 4.6 },
            { name: "Craftworks Taphouse", rating: 4.5 },
            { name: "The Booth", rating: 4.4 }
        ]
    },
    "South Sudan": {
        rating: 50.08,
        craftSorts: 5,
        price: 2.00,
        tourismScore: 35,
        popular: "White Bull",
        best: "Juba Craft Lager",
        description: "Beer is limited but enjoyed in urban areas.",
        foodPairing: "Ful Medames (fava beans)",
        topBrands: ["White Bull", "Juba Craft", "Heineken", "Tusker", "Nile"],
        bars: [
            { name: "Da Vinci (Juba)", rating: 4.1 },
            { name: "Notos Lounge", rating: 4.0 },
            { name: "Logali House", rating: 3.9 }
        ]
    },
    "Spain": {
        rating: 63.25,
        craftSorts: 60,
        price: 2.00,
        tourismScore: 90,
        popular: "Estrella Damm",
        best: "La Pirata Black Block",
        description: "A vibrant beer culture with a strong craft movement.",
        foodPairing: "Paella",
        topBrands: ["Estrella Damm", "La Pirata", "Mahou", "San Miguel", "Cruzcampo"],
        bars: [
            { name: "La Cervecita (Madrid)", rating: 4.6 },
            { name: "BierCaB (Barcelona)", rating: 4.7 },
            { name: "Fábrica Maravillas", rating: 4.5 }
        ]
    },
    "Sri Lanka": {
        rating: 61.58,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 60,
        popular: "Lion Lager",
        best: "Colombo Craft Ale",
        description: "Beer complements a rich culinary tradition.",
        foodPairing: "Kottu Roti",
        topBrands: ["Lion Lager", "Colombo Craft", "Carlsberg", "Heineken", "Anchor"],
        bars: [
            { name: "The Beer House (Colombo)", rating: 4.4 },
            { name: "Barefoot Garden Café", rating: 4.3 },
            { name: "Taphouse by RNR", rating: 4.2 }
        ]
    },
    "Sudan": {
        rating: 42.08,
        craftSorts: 0,
        price: 3.00,
        tourismScore: 25,
        popular: "Non-alcoholic Beer",
        best: "Khartoum Craft (non-alcoholic)",
        description: "Non-alcoholic beer due to strict laws.",
        foodPairing: "Ful Medames",
        topBrands: ["Barbican", "Khartoum Craft", "Moussy", "Fayrouz", "Holsten"],
        bars: [
            { name: "No bars due to alcohol ban", rating: "N/A" },
            { name: "Corinthia Hotel Café (Khartoum)", rating: 4.0 },
            { name: "Ozone Café", rating: 3.9 }
        ]
    },
    "Suriname": {
        rating: 57.33,
        craftSorts: 15,
        price: 1.80,
        tourismScore: 50,
        popular: "Parbo",
        best: "Paramaribo Craft Ale",
        description: "A Caribbean beer culture with local flavors.",
        foodPairing: "Pom (chicken dish)",
        topBrands: ["Parbo", "Paramaribo Craft", "Heineken", "Brahma", "Skol"],
        bars: [
            { name: "’t Vat (Paramaribo)", rating: 4.3 },
            { name: "Zin Resort Bar", rating: 4.2 },
            { name: "P&G Restaurant", rating: 4.1 }
        ]
    },
    "Sweden": {
        rating: 62.75,
        craftSorts: 65,
        price: 3.50,
        tourismScore: 80,
        popular: "Falcon",
        best: "Omnipollo Noa",
        description: "A strong Nordic beer culture with craft innovation.",
        foodPairing: "Surströmming (fermented herring)",
        topBrands: ["Falcon", "Omnipollo", "Pripps", "Carlsberg", "Norrlands Guld"],
        bars: [
            { name: "Akkurat (Stockholm)", rating: 4.7 },
            { name: "BrewDog Bar", rating: 4.6 },
            { name: "Omnipollos Hatt", rating: 4.5 }
        ]
    },
    "Switzerland": {
        rating: 61.58,
        craftSorts: 50,
        price: 3.50,
        tourismScore: 85,
        popular: "Feldschlösschen",
        best: "Bière du Lac IPA",
        description: "A quality-focused beer culture with craft growth.",
        foodPairing: "Fondue",
        topBrands: ["Feldschlösschen", "Bière du Lac", "Appenzeller", "Cardinal", "Calanda"],
        bars: [
            { name: "Bierhübeli (Bern)", rating: 4.6 },
            { name: "Mr. Pickwick Pub (Zurich)", rating: 4.5 },
            { name: "Dr. Gabs", rating: 4.4 }
        ]
    },
    "Syria": {
        rating: 42.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 30,
        popular: "Al-Shark",
        best: "Damascus Craft Ale",
        description: "Beer is limited due to ongoing conflict.",
        foodPairing: "Kibbeh",
        topBrands: ["Al-Shark", "Damascus Craft", "Heineken", "Amstel", "Efes"],
        bars: [
            { name: "Four Seasons Bar (Damascus)", rating: 4.0 },
            { name: "Le Meridien Lounge", rating: 3.9 },
            { name: "Al-Kindi Bar", rating: 3.8 }
        ]
    },
    "Taiwan": {
        rating: 61.58,
        craftSorts: 40,
        price: 2.00,
        tourismScore: 75,
        popular: "Taiwan Beer",
        best: "Taipei Craft IPA",
        description: "A growing craft beer scene in a vibrant market.",
        foodPairing: "Beef Noodle Soup",
        topBrands: ["Taiwan Beer", "Taipei Craft", "Gold Medal", "Heineken", "Tsingtao"],
        bars: [
            { name: "Taipei Tap Room", rating: 4.6 },
            { name: "The 58 Bar", rating: 4.5 },
            { name: "Zhangmen Brewing", rating: 4.4 }
        ]
    },
    "Tajikistan": {
        rating: 59.75,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 45,
        popular: "Sim Sim",
        best: "Dushanbe Craft Ale",
        description: "Beer is a growing social drink.",
        foodPairing: "Osh (pilaf)",
        topBrands: ["Sim Sim", "Dushanbe Craft", "Baltika", "Heineken", "Efes"],
        bars: [
            { name: "Public Pub (Dushanbe)", rating: 4.3 },
            { name: "Segafredo", rating: 4.2 },
            { name: "The Irish", rating: 4.1 }
        ]
    },
    "Tanzania": {
        rating: 59.75,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 55,
        popular: "Kilimanjaro",
        best: "Dar es Salaam Craft Ale",
        description: "Beer is popular among locals and tourists.",
        foodPairing: "Ugali with Nyama Choma",
        topBrands: ["Kilimanjaro", "Dar es Salaam Craft", "Serengeti", "Safari", "Tusker"],
        bars: [
            { name: "Waterfront (Dar es Salaam)", rating: 4.4 },
            { name: "High Spirit Lounge", rating: 4.3 },
            { name: "Kili Villa", rating: 4.2 }
        ]
    },
    "Thailand": {
        rating: 65.75,
        craftSorts: 35,
        price: 1.50,
        tourismScore: 75,
        popular: "Singha",
        best: "Chitbeer IPA",
        description: "A vibrant beer culture with growing craft options.",
        foodPairing: "Pad Thai",
        topBrands: ["Singha", "Chitbeer", "Chang", "Leo", "Heineken"],
        bars: [
            { name: "Mikkeller Bangkok", rating: 4.6 },
            { name: "Hair of the Dog", rating: 4.5 },
            { name: "Craft Bangkok", rating: 4.4 }
        ]
    },
    "Timor-Leste": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.80,
        tourismScore: 45,
        popular: "Heineken",
        best: "Dili Craft Lager",
        description: "Beer is a social drink with limited local production.",
        foodPairing: "Ikan Pepes (grilled fish)",
        topBrands: ["Heineken", "Dili Craft", "Bintang", "Tiger", "San Miguel"],
        bars: [
            { name: "Castaway Bar (Dili)", rating: 4.2 },
            { name: "Letefoho Café", rating: 4.1 },
            { name: "Blue Bar", rating: 4.0 }
        ]
    },
    "Togo": {
        rating: 56.75,
        craftSorts: 10,
        price: 1.50,
        tourismScore: 45,
        popular: "Flag",
        best: "Lomé Craft Ale",
        description: "Beer is a popular social drink.",
        foodPairing: "Fufu with Peanut Soup",
        topBrands: ["Flag", "Lomé Craft", "Castel", "Heineken", "Guinness"],
        bars: [
            { name: "Le Galion (Lomé)", rating: 4.2 },
            { name: "Bar Le Réveil", rating: 4.1 },
            { name: "Chez Fefe", rating: 4.0 }
        ]
    },
    "Tonga": {
        rating: 54.75,
        craftSorts: 10,
        price: 2.00,
        tourismScore: 50,
        popular: "Royal Beer",
        best: "Nuku’alofa Craft Lager",
        description: "Beer is enjoyed by locals and tourists.",
        foodPairing: "Lu Pulu (corned beef with taro)",
        topBrands: ["Royal Beer", "Nuku’alofa Craft", "Heineken", "Steinlager", "VB"],
        bars: [
            { name: "Billfish Bar (Nuku’alofa)", rating: 4.2 },
            { name: "The Waterfront", rating: 4.1 },
            { name: "Friends Café", rating: 4.0 }
        ]
    },
    "Trinidad and Tobago": {
        rating: 61.58,
        craftSorts: 20,
        price: 1.80,
        tourismScore: 65,
        popular: "Carib",
        best: "Port of Spain Craft IPA",
        description: "A vibrant beer culture tied to Carnival.",
        foodPairing: "Doubles (chickpea flatbread)",
        topBrands: ["Carib", "Port of Spain Craft", "Stag", "Heineken", "Banks"],
        bars: [
            { name: "The Avenue (Port of Spain)", rating: 4.4 },
            { name: "Buzo Osteria", rating: 4.3 },
            { name: "Shakers", rating: 4.2 }
        ]
    },
    "Tunisia": {
        rating: 57.33,
        craftSorts: 15,
        price: 1.80,
        tourismScore: 55,
        popular: "Celtia",
        best: "Tunis Craft Ale",
        description: "Beer is popular among tourists and in urban areas.",
        foodPairing: "Couscous with Lamb",
        topBrands: ["Celtia", "Tunis Craft", "Heineken", "Stella", "33 Export"],
        bars: [
            { name: "Le Boeuf sur le Toit (Tunis)", rating: 4.3 },
            { name: "Bar Jamaica", rating: 4.2 },
            { name: "El Ali", rating: 4.1 }
        ]
    },
    "Turkey": {
        rating: 61.58,
        craftSorts: 35,
        price: 2.00,
        tourismScore: 70,
        popular: "Efes",
        best: "Gara Guzu IPA",
        description: "A growing craft beer scene alongside traditional drinks.",
        foodPairing: "Kebab",
        topBrands: ["Efes", "Gara Guzu", "Bomonti", "Tuborg", "Carlsberg"],
        bars: [
            { name: "The Populist (Istanbul)", rating: 4.6 },
            { name: "Taps Brewery", rating: 4.5 },
            { name: "Bosphorus Brewing", rating: 4.4 }
        ]
    },
    "Turkmenistan": {
        rating: 54.75,
        craftSorts: 10,
        price: 1.50,
        tourismScore: 40,
        popular: "Berk",
        best: "Ashgabat Craft Ale",
        description: "Beer is a niche drink in a controlled market.",
        foodPairing: "Plov",
        topBrands: ["Berk", "Ashgabat Craft", "Zip", "Heineken", "Baltika"],
        bars: [
            { name: "Yyldyz Hotel Bar (Ashgabat)", rating: 4.1 },
            { name: "British Pub", rating: 4.0 },
            { name: "Berkarar Bar", rating: 3.9 }
        ]
    },
    "Tuvalu": {
        rating: 50.08,
        craftSorts: 5,
        price: 2.50,
        tourismScore: 45,
        popular: "Heineken",
        best: "Funafuti Craft Lager",
        description: "Beer is limited but enjoyed by locals and visitors.",
        foodPairing: "Pulaka (taro root)",
        topBrands: ["Heineken", "Funafuti Craft", "VB", "Fiji Bitter", "San Miguel"],
        bars: [
            { name: "Vaiaku Lagi Hotel Bar (Funafuti)", rating: 4.0 },
            { name: "Filamona Bar", rating: 3.9 },
            { name: "The Seaside", rating: 3.8 }
        ]
    },
    "Uganda": {
        rating: 59.75,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 50,
        popular: "Nile Special",
        best: "Kampala Craft Ale",
        description: "Beer is a popular social drink.",
        foodPairing: "Matoke (plantain stew)",
        topBrands: ["Nile Special", "Kampala Craft", "Bell Lager", "Club", "Tusker"],
        bars: [
            { name: "Bubbles O’Learys (Kampala)", rating: 4.3 },
            { name: "The Lawns", rating: 4.2 },
            { name: "Cayenne", rating: 4.1 }
        ]
    },
    "Ukraine": {
        rating: 65.75,
        craftSorts: 40,
        price: 1.20,
        tourismScore: 65,
        popular: "Obolon",
        best: "Pravda IPA",
        description: "A strong beer tradition with a growing craft scene.",
        foodPairing: "Borscht",
        topBrands: ["Obolon", "Pravda", "Chernigivske", "Lvivske", "Radomyshl"],
        bars: [
            { name: "Pravda Beer Theatre (Lviv)", rating: 4.6 },
            { name: "Varvar Bar (Kyiv)", rating: 4.5 },
            { name: "Beer Point (Odessa)", rating: 4.4 }
        ]
    },
    "United Arab Emirates": {
        rating: 57.33,
        craftSorts: 25,
        price: 4.00,
        tourismScore: 85,
        popular: "Heineken",
        best: "Dubai Craft IPA",
        description: "Beer is available in hotels and licensed venues.",
        foodPairing: "Shawarma",
        topBrands: ["Heineken", "Dubai Craft", "Carlsberg", "Budweiser", "Amstel"],
        bars: [
            { name: "Belgian Beer Café (Dubai)", rating: 4.6 },
            { name: "Lock, Stock & Barrel", rating: 4.5 },
            { name: "The Irish Village", rating: 4.4 }
        ]
    },
    "United Kingdom": {
        rating: 65.08,
        craftSorts: 75,
        price: 3.00,
        tourismScore: 90,
        popular: "Carling",
        best: "BrewDog Punk IPA",
        description: "A historic beer culture with a world-class craft scene.",
        foodPairing: "Fish and Chips",
        topBrands: ["Carling", "BrewDog", "Guinness", "Fuller’s", "Stella Artois"],
        bars: [
            { name: "The Craft Beer Co. (London)", rating: 4.7 },
            { name: "The Rake", rating: 4.6 },
            { name: "BrewDog Camden", rating: 4.5 }
        ]
    },
    "United States of America": {
        rating: 67.33,
        craftSorts: 90,
        price: 3.00,
        tourismScore: 90,
        popular: "Bud Light",
        best: "Sierra Nevada Pale Ale",
        description: "A global leader in craft beer with endless variety.",
        foodPairing: "Burger and Fries",
        topBrands: ["Bud Light", "Sierra Nevada", "Coors", "Miller", "Samuel Adams"],
        bars: [
            { name: "Toronado (San Francisco)", rating: 4.8 },
            { name: "The Bier Markt (Denver)", rating: 4.7 },
            { name: "Mikkeller Bar (Los Angeles)", rating: 4.6 }
        ]
    },
    "Uruguay": {
        rating: 63.25,
        craftSorts: 30,
        price: 1.80,
        tourismScore: 70,
        popular: "Patricia",
        best: "Mastra IPA",
        description: "A growing craft beer scene alongside traditional lagers.",
        foodPairing: "Asado",
        topBrands: ["Patricia", "Mastra", "Norteña", "Pilsen", "Zillertal"],
        bars: [
            { name: "Mastra Cervecería (Montevideo)", rating: 4.6 },
            { name: "Bar Santa Catalina", rating: 4.5 },
            { name: "El Lobizón", rating: 4.4 }
        ]
    },
    "Uzbekistan": {
        rating: 61.58,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 55,
        popular: "Sarbast",
        best: "Tashkent Craft Ale",
        description: "Beer is a growing social drink in a Silk Road country.",
        foodPairing: "Plov",
        topBrands: ["Sarbast", "Tashkent Craft", "Pulsar", "Baltika", "Heineken"],
        bars: [
            { name: "Caravan (Tashkent)", rating: 4.4 },
            { name: "Chelsea Pub", rating: 4.3 },
            { name: "The Irish Pub", rating: 4.2 }
        ]
    },
    "Vanuatu": {
        rating: 56.75,
        craftSorts: 10,
        price: 2.00,
        tourismScore: 55,
        popular: "Tusker",
        best: "Port Vila Craft Lager",
        description: "Beer is popular among locals and tourists.",
        foodPairing: "Laplap (root vegetable dish)",
        topBrands: ["Tusker", "Port Vila Craft", "Heineken", "VB", "San Miguel"],
        bars: [
            { name: "Waterfront Bar (Port Vila)", rating: 4.3 },
            { name: "The Beach Bar", rating: 4.2 },
            { name: "Nambawan Café", rating: 4.1 }
        ]
    },
    "Venezuela": {
        rating: 57.33,
        craftSorts: 20,
        price: 1.50,
        tourismScore: 45,
        popular: "Polar",
        best: "Caracas Craft IPA",
        description: "Beer remains popular despite economic challenges.",
        foodPairing: "Arepa",
        topBrands: ["Polar", "Caracas Craft", "Regional", "Zulia", "Brahma"],
        bars: [
            { name: "El León (Caracas)", rating: 4.3 },
            { name: "La Esquina", rating: 4.2 },
            { name: "360 Roof Bar", rating: 4.1 }
        ]
    },
    "Vietnam": {
        rating: 79.5,
        craftSorts: 20,
        price: 0.80,
        tourismScore: 70,
        popular: "Bia Hơi",
        best: "Pasteur Street Jasmine IPA",
        description: "Bia Hơi — cheap fresh beer, popular on the streets of Hanoi and Ho Chi Minh City.",
        foodPairing: "Pho (noodle soup with beef)",
        topBrands: ["Bia Hơi", "Saigon Beer", "Hanoi Beer", "333", "Larue"],
        bars: [
            { name: "Pasteur Street Brewing (Ho Chi Minh City)", rating: 4.6 },
            { name: "Heart of Darkness (Ho Chi Minh City)", rating: 4.7 },
            { name: "BiaCraft Artisan Ales (Ho Chi Minh City)", rating: 4.5 }
        ]
    },
    "Yemen": {
        rating: 38.58,
        craftSorts: 0,
        price: 3.00,
        tourismScore: 20,
        popular: "Non-alcoholic Beer",
        best: "Sana’a Craft (non-alcoholic)",
        description: "Non-alcoholic beer due to strict laws and instability.",
        foodPairing: "Saltah (stew)",
        topBrands: ["Barbican", "Sana’a Craft", "Moussy", "Fayrouz", "Holsten"],
        bars: [
            { name: "No bars due to alcohol ban", rating: "N/A" },
            { name: "Mövenpick Hotel Café (Sana’a, non-alcoholic)", rating: 4.0 },
            { name: "Al-Hamra Café", rating: 3.9 }
        ]
    },
    "Zambia": {
        rating: 56.75,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 45,
        popular: "Mosi",
        best: "Lusaka Craft Ale",
        description: "Beer is a popular social drink with emerging craft.",
        foodPairing: "Nshima with Chicken",
        topBrands: ["Mosi", "Lusaka Craft", "Castle", "Heineken", "Carling"],
        bars: [
            { name: "The Horse Shoe (Lusaka)", rating: 4.3 },
            { name: "O’Hagan’s", rating: 4.2 },
            { name: "Sky Bar", rating: 4.1 }
        ]
    },
    "Zimbabwe": {
        rating: 56.75,
        craftSorts: 15,
        price: 1.50,
        tourismScore: 45,
        popular: "Zambezi",
        best: "Harare Craft Lager",
        description: "Beer is a staple in social settings.",
        foodPairing: "Sadza with Beef Stew",
        topBrands: ["Zambezi", "Harare Craft", "Castle", "Bohlinger’s", "Heineken"],
        bars: [
            { name: "The Bistro (Harare)", rating: 4.3 },
            { name: "Pariah State", rating: 4.2 },
            { name: "Victoria 22", rating: 4.1 }
        ]
    }
};