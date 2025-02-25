const beerData = {
    "Vietnam": { 
        rating: 71.8, 
        sorts: 30, 
        price: 0.80, 
        popular: "Bia Hơi", 
        best: "Saigon Beer", 
        bars: [
            { name: "Pasteur Street Brewing (Ho Chi Minh City)", rating: 4.6 },
            { name: "Heart of Darkness (Ho Chi Minh City)", rating: 4.7 },
            { name: "BiaCraft Artisan Ales (Ho Chi Minh City)", rating: 4.5 },
            { name: "Standing Bar (Hanoi)", rating: 4.4 },
            { name: "Rogue Saigon (Ho Chi Minh City)", rating: 4.3 },
            { name: "Fuzzy Bar (Ho Chi Minh City)", rating: 4.2 },
            { name: "Malt Room (Hanoi)", rating: 4.5 },
            { name: "The Tavern (Ho Chi Minh City)", rating: 4.1 },
            { name: "East West Brewing Co. (Ho Chi Minh City)", rating: 4.6 },
            { name: "Tap Tap (Hanoi)", rating: 4.3 }
        ]
    },
    "China": { 
        rating: 65, 
        sorts: 150, 
        price: 1.00, 
        popular: "Snow Beer", 
        best: "Tsingtao", 
        bars: [
            { name: "Great Leap Brewing (Beijing)", rating: 4.5 },
            { name: "Slow Boat Brewery Taproom (Beijing)", rating: 4.6 },
            { name: "Jing-A Brewing Co. (Beijing)", rating: 4.7 },
            { name: "NBeer Pub (Beijing)", rating: 4.4 },
            { name: "The Brew (Shanghai)", rating: 4.3 },
            { name: "Boxing Cat Brewery (Shanghai)", rating: 4.5 },
            { name: "Dr. Beer (Shanghai)", rating: 4.4 },
            { name: "Liquid Laundry (Shanghai)", rating: 4.6 },
            { name: "Tap House (Guangzhou)", rating: 4.2 },
            { name: "Stone Brewing Tap Room (Shanghai)", rating: 4.5 }
        ]
    },
    "Czech Republic": { 
        rating: 52.33, 
        sorts: 250, 
        price: 1.50, 
        popular: "Pilsner Urquell", 
        best: "Budvar (Budweiser)", 
        bars: [
            { name: "Zlý Časy (Prague)", rating: 4.7 },
            { name: "Pivovarský Klub (Prague)", rating: 4.5 },
            { name: "BeerGeek Bar (Prague)", rating: 4.6 },
            { name: "Prague Beer Museum (Prague)", rating: 4.4 },
            { name: "U Zlatého Tygra (Prague)", rating: 4.8 },
            { name: "U Černého Vola (Prague)", rating: 4.5 },
            { name: "U Medvídků (Prague)", rating: 4.3 },
            { name: "U Sadu (Prague)", rating: 4.4 },
            { name: "U Pinkasů (Prague)", rating: 4.6 },
            { name: "Klášterní Pivnice (Prague)", rating: 4.5 }
        ]
    },
    "Germany": { 
        rating: 50, 
        sorts: 500, 
        price: 2.80, 
        popular: "Beck’s", 
        best: "Weihenstephaner", 
        bars: [
            { name: "Hopfenreich (Berlin)", rating: 4.6 },
            { name: "Biererei Bar (Berlin)", rating: 4.5 },
            { name: "BRLO Brwhouse (Berlin)", rating: 4.7 },
            { name: "Zur Letzten Instanz (Berlin)", rating: 4.4 },
            { name: "Prater Garten (Berlin)", rating: 4.3 },
            { name: "Fruh am Dom (Cologne)", rating: 4.5 },
            { name: "Brauhaus Sion (Cologne)", rating: 4.4 },
            { name: "Päffgen (Cologne)", rating: 4.6 },
            { name: "Augustiner am Gendarmenmarkt (Berlin)", rating: 4.5 },
            { name: "Hofbräuhaus (Munich)", rating: 4.8 }
        ]
    },
    "Kazakhstan": { 
        rating: 49.07, 
        sorts: 40, 
        price: 1.20, 
        popular: "Shymkentskoe", 
        best: "Derbes", 
        bars: [
            { name: "Beer House (Almaty)", rating: 4.2 },
            { name: "Harat’s Pub (Astana)", rating: 4.3 },
            { name: "Pivovaroff (Almaty)", rating: 4.1 },
            { name: "Guinness Pub (Astana)", rating: 4.4 },
            { name: "Bulldog Pub (Astana)", rating: 4.2 },
            { name: "The Shakespeare Pub (Almaty)", rating: 4.3 },
            { name: "Old English Pub (Almaty)", rating: 4.1 },
            { name: "Streat Bar (Almaty)", rating: 4.0 },
            { name: "Line Brew (Almaty)", rating: 4.5 },
            { name: "Beer Factory (Astana)", rating: 4.2 }
        ]
    },
    "Poland": { 
        rating: 47.33, 
        sorts: 100, 
        price: 1.30, 
        popular: "Żywiec", 
        best: "Specjal", 
        bars: [
            { name: "PiwPaw (Warsaw)", rating: 4.6 },
            { name: "Kufle i Kapsle (Warsaw)", rating: 4.5 },
            { name: "Cuda na Kiju (Warsaw)", rating: 4.4 },
            { name: "Spiz (Wroclaw)", rating: 4.3 },
            { name: "Multi Qlti Tap Bar (Krakow)", rating: 4.7 },
            { name: "Prolog9 (Gdansk)", rating: 4.5 },
            { name: "AleBrowar (Gdynia)", rating: 4.6 },
            { name: "Hoppiness Beer & Food (Warsaw)", rating: 4.4 },
            { name: "Browariat (Katowice)", rating: 4.5 },
            { name: "Piwna Stopa (Poznan)", rating: 4.3 }
        ]
    },
    "Slovakia": { 
        rating: 47, 
        sorts: 100, 
        price: 1.30, 
        popular: "Zlatý Bažant", 
        best: "Šariš", 
        bars: [
            { name: "Bratislavský Meštiansky Pivovar (Bratislava)", rating: 4.5 },
            { name: "Stupavar Beer Pub (Bratislava)", rating: 4.4 },
            { name: "Randal Club (Bratislava)", rating: 4.3 },
            { name: "Bernard Pub (Bratislava)", rating: 4.2 },
            { name: "Omama Pub (Bratislava)", rating: 4.1 },
            { name: "Beer Palace (Bratislava)", rating: 4.4 },
            { name: "100 Pív (Bratislava)", rating: 4.5 },
            { name: "Richtár Jakub (Bratislava)", rating: 4.6 },
            { name: "Pivovar Šariš (Veľký Šariš)", rating: 4.3 },
            { name: "Fabrika The Beer Pub (Bratislava)", rating: 4.5 }
        ]
    },
    "Ukraine": { 
        rating: 47.33, 
        sorts: 100, 
        price: 1.30, 
        popular: "Obolon", 
        best: "Lvivske", 
        bars: [
            { name: "Pravda Beer Theatre (Lviv)", rating: 4.7 },
            { name: "Varvar Bar (Kyiv)", rating: 4.6 },
            { name: "Punkraft (Kyiv)", rating: 4.5 },
            { name: "Lisopylka (Kyiv)", rating: 4.4 },
            { name: "Drunken Monkey (Kyiv)", rating: 4.3 },
            { name: "Beer House (Odesa)", rating: 4.2 },
            { name: "Konteyner (Kyiv)", rating: 4.4 },
            { name: "Mova Craft Beer Bar (Lviv)", rating: 4.5 },
            { name: "This is Pivbar (Kyiv)", rating: 4.6 },
            { name: "Pivna Duma (Kyiv)", rating: 4.3 }
        ]
    },
    "Romania": { 
        rating: 45, 
        sorts: 80, 
        price: 1.40, 
        popular: "Ursus", 
        best: "Timișoreana", 
        bars: [
            { name: "Berăria H (Bucharest)", rating: 4.5 },
            { name: "Beer O’Clock (Bucharest)", rating: 4.4 },
            { name: "Hop Hooligans Taproom (Bucharest)", rating: 4.6 },
            { name: "The Vintage Pub (Bucharest)", rating: 4.3 },
            { name: "Old Nick Pub (Brașov)", rating: 4.2 },
            { name: "Fabrica de Bere Bună (Bucharest)", rating: 4.5 },
            { name: "Mikkeller Bucharest (Bucharest)", rating: 4.7 },
            { name: "Control Club (Bucharest)", rating: 4.4 },
            { name: "Beer Station (Cluj-Napoca)", rating: 4.3 },
            { name: "The Shelter (Cluj-Napoca)", rating: 4.5 }
        ]
    },
    "Mexico": { 
        rating: 45.14, 
        sorts: 40, 
        price: 1.20, 
        popular: "Corona", 
        best: "Modelo", 
        bars: [
            { name: "El Deposito (Mexico City)", rating: 4.5 },
            { name: "The Beer Box (Guadalajara)", rating: 4.4 },
            { name: "Hop The Beer Experience (Mexico City)", rating: 4.6 },
            { name: "La Belga (Mexico City)", rating: 4.5 },
            { name: "Fiebre de Malta (Mexico City)", rating: 4.3 },
            { name: "Tasting Room (Monterrey)", rating: 4.4 },
            { name: "Cervecería Primus (Mexico City)", rating: 4.6 },
            { name: "Beer Bros (Guadalajara)", rating: 4.2 },
            { name: "Hoppy House (Mexico City)", rating: 4.5 },
            { name: "El Trappist (Mexico City)", rating: 4.4 }
        ]
    },
    "Lithuania": { 
        rating: 45, 
        sorts: 80, 
        price: 1.40, 
        popular: "Švyturys", 
        best: "Kalnapilis", 
        bars: [
            { name: "Alaus Namai (Vilnius)", rating: 4.5 },
            { name: "Špunka (Vilnius)", rating: 4.4 },
            { name: "Bambalynė (Vilnius)", rating: 4.3 },
            { name: "Būsi Trečias (Kaunas)", rating: 4.2 },
            { name: "Snekutis (Vilnius)", rating: 4.6 },
            { name: "King & Mouse (Vilnius)", rating: 4.4 },
            { name: "Beer Library (Vilnius)", rating: 4.5 },
            { name: "Alaus Biblioteka (Kaunas)", rating: 4.3 },
            { name: "Nisha Craft Beer Bar (Vilnius)", rating: 4.6 },
            { name: "Prie Katedros (Vilnius)", rating: 4.2 }
        ]
    },
    "Croatia": { 
        rating: 42, 
        sorts: 60, 
        price: 1.50, 
        popular: "Ožujsko", 
        best: "Karlovačko", 
        bars: [
            { name: "The Garden Brewery (Zagreb)", rating: 4.7 },
            { name: "Pivnica Medvedgrad (Zagreb)", rating: 4.5 },
            { name: "Craft Room (Split)", rating: 4.6 },
            { name: "Beertija (Zagreb)", rating: 4.4 },
            { name: "Valhalla Beer Bar (Rijeka)", rating: 4.3 },
            { name: "Hoppy Corner (Zagreb)", rating: 4.5 },
            { name: "Mali Medo (Zagreb)", rating: 4.4 },
            { name: "The Beertija Waterfront (Split)", rating: 4.6 },
            { name: "Zlatna Pivnica (Zagreb)", rating: 4.2 },
            { name: "Pivoteka (Zagreb)", rating: 4.5 }
        ]
    },
    "Russia": { 
        rating: 42.4, 
        sorts: 80, 
        price: 1.50, 
        popular: "Baltika", 
        best: "Okhota", 
        bars: [
            { name: "Time Out Bar (Moscow)", rating: 4.6 },
            { name: "Craft RePUBlic (Moscow)", rating: 4.5 },
            { name: "Jawsspot (Moscow)", rating: 4.7 },
            { name: "Rule Taproom (Moscow)", rating: 4.4 },
            { name: "Beer Happens (Moscow)", rating: 4.3 },
            { name: "Harat’s Pub (St. Petersburg)", rating: 4.5 },
            { name: "Redrum Bar (St. Petersburg)", rating: 4.6 },
            { name: "Tap & Barrel Pub (Moscow)", rating: 4.4 },
            { name: "Pivbar (St. Petersburg)", rating: 4.5 },
            { name: "Beer Card (Moscow)", rating: 4.3 }
        ]
    },
    "Hungary": { 
        rating: 42, 
        sorts: 70, 
        price: 1.50, 
        popular: "Dreher", 
        best: "Soproni", 
        bars: [
            { name: "Élesztő (Budapest)", rating: 4.6 },
            { name: "Hopaholic (Budapest)", rating: 4.5 },
            { name: "Kandalló Craft Beer Pub (Budapest)", rating: 4.7 },
            { name: "Léhűtő Craft Beer Bar (Budapest)", rating: 4.4 },
            { name: "First Craft Beer (Budapest)", rating: 4.5 },
            { name: "Balkezes (Budapest)", rating: 4.6 },
            { name: "John Bull Pub (Budapest)", rating: 4.3 },
            { name: "Beer Brothers (Budapest)", rating: 4.4 },
            { name: "Kaptár Craft Beer Bar (Budapest)", rating: 4.5 },
            { name: "Pointer Pub (Budapest)", rating: 4.2 }
        ]
    },
    "Bulgaria": { 
        rating: 42, 
        sorts: 60, 
        price: 1.50, 
        popular: "Zagorka", 
        best: "Kamenitza", 
        bars: [
            { name: "Vitamin B (Sofia)", rating: 4.6 },
            { name: "Kanaal (Sofia)", rating: 4.5 },
            { name: "100 Beers (Sofia)", rating: 4.4 },
            { name: "Ale House (Sofia)", rating: 4.3 },
            { name: "Beer Corner (Plovdiv)", rating: 4.5 },
            { name: "Craft 34 (Sofia)", rating: 4.6 },
            { name: "Hopium Taproom (Sofia)", rating: 4.7 },
            { name: "Beerotherapy (Sofia)", rating: 4.4 },
            { name: "The Beer Box (Sofia)", rating: 4.5 },
            { name: "Red House Beer Bar (Sofia)", rating: 4.3 }
        ]
    },
    "Belarus": { 
        rating: 42.4, 
        sorts: 50, 
        price: 1.50, 
        popular: "Alivaria", 
        best: "Lidskae", 
        bars: [
            { name: "BeerCap (Minsk)", rating: 4.6 },
            { name: "Craft House (Minsk)", rating: 4.5 },
            { name: "Black Door (Minsk)", rating: 4.4 },
            { name: "Hops Pub (Minsk)", rating: 4.3 },
            { name: "Gambrinus (Minsk)", rating: 4.5 },
            { name: "1067 Beer Bar (Minsk)", rating: 4.6 },
            { name: "BeerMood (Minsk)", rating: 4.4 },
            { name: "Tanker Pub (Minsk)", rating: 4.5 },
            { name: "Old Town Pub (Minsk)", rating: 4.2 },
            { name: "BarDuck (Minsk)", rating: 4.3 }
        ]
    },
    "Belgium": { 
        rating: 40.57, 
        sorts: 300, 
        price: 2.50, 
        popular: "Stella Artois", 
        best: "Duvel", 
        bars: [
            { name: "Delirium Café (Brussels)", rating: 4.7 },
            { name: "Moeder Lambic (Brussels)", rating: 4.6 },
            { name: "Bier Circus (Brussels)", rating: 4.5 },
            { name: "Poechenellekelder (Brussels)", rating: 4.4 },
            { name: "Le Coq (Antwerp)", rating: 4.3 },
            { name: "Kulminator (Antwerp)", rating: 4.8 },
            { name: "Au Brasseur (Brussels)", rating: 4.5 },
            { name: "À la Mort Subite (Brussels)", rating: 4.6 },
            { name: "De Garre (Bruges)", rating: 4.7 },
            { name: "‘t Brugs Beertje (Bruges)", rating: 4.5 }
        ]
    },
    "South Africa": { 
        rating: 40, 
        sorts: 40, 
        price: 1.30, 
        popular: "Castle Lager", 
        best: "Devil’s Peak", 
        bars: [
            { name: "Beerhouse on Long (Cape Town)", rating: 4.6 },
            { name: "Devil’s Peak Taproom (Cape Town)", rating: 4.5 },
            { name: "Jack Black’s Taproom (Cape Town)", rating: 4.7 },
            { name: "Brewers Co-op (Johannesburg)", rating: 4.4 },
            { name: "Capital Craft (Pretoria)", rating: 4.5 },
            { name: "The Taproom (Durban)", rating: 4.3 },
            { name: "Woodstock Brewery Taproom (Cape Town)", rating: 4.6 },
            { name: "Sabie Brewing Co. (Sabie)", rating: 4.4 },
            { name: "The 400 Bar (Johannesburg)", rating: 4.5 },
            { name: "Riot Beer Taproom (Cape Town)", rating: 4.2 }
        ]
    },
    "India": { 
        rating: 40.33, 
        sorts: 50, 
        price: 1.50, 
        popular: "Kingfisher", 
        best: "Bira", 
        bars: [
            { name: "The Beer Café (Delhi)", rating: 4.5 },
            { name: "Doolally Taproom (Mumbai)", rating: 4.6 },
            { name: "Hops n Grains (Chandigarh)", rating: 4.4 },
            { name: "Vapour Pub & Brewery (Gurgaon)", rating: 4.5 },
            { name: "The Brew Room (Chennai)", rating: 4.3 },
            { name: "The Grid Bar (Mumbai)", rating: 4.4 },
            { name: "7 Rivers Brewing Co. (Bangalore)", rating: 4.6 },
            { name: "Brewsky (Bangalore)", rating: 4.5 },
            { name: "The Biergarten (Bangalore)", rating: 4.7 },
            { name: "The Irish House (Mumbai)", rating: 4.3 }
        ]
    },
    "Brazil": { 
        rating: 38.57, 
        sorts: 50, 
        price: 1.40, 
        popular: "Brahma", 
        best: "Colorado", 
        bars: [
            { name: "Cervejaria Dogma (São Paulo)", rating: 4.7 },
            { name: "Bar do Alemão (São Paulo)", rating: 4.5 },
            { name: "Toca do Tatu (São Paulo)", rating: 4.4 },
            { name: "Armazém da Cerveja (Curitiba)", rating: 4.6 },
            { name: "Hop’n’Roll (Rio de Janeiro)", rating: 4.5 },
            { name: "Boteco São Bento (São Paulo)", rating: 4.3 },
            { name: "Biergarten Carioca (Rio de Janeiro)", rating: 4.6 },
            { name: "OverHop Taproom (Rio de Janeiro)", rating: 4.5 },
            { name: "Brewteco (Rio de Janeiro)", rating: 4.4 },
            { name: "Bar da Cachaça (São Paulo)", rating: 4.2 }
        ]
    },
    "Serbia": { 
        rating: 38.33, 
        sorts: 60, 
        price: 1.30, 
        popular: "Lav", 
        best: "Jelen", 
        bars: [
            { name: "Srpska Kuća Piva (Belgrade)", rating: 4.5 },
            { name: "The Black Turtle (Belgrade)", rating: 4.4 },
            { name: "Kafana Pavle Korčagin (Belgrade)", rating: 4.3 },
            { name: "Beer Store (Belgrade)", rating: 4.6 },
            { name: "Samson Pub (Novi Sad)", rating: 4.2 },
            { name: "Pivnica Gusan (Belgrade)", rating: 4.5 },
            { name: "Craft Beograd (Belgrade)", rating: 4.4 },
            { name: "Pivnica Meduza (Belgrade)", rating: 4.3 }
        ]
    },
    "Bosnia and Herzegovina": { 
        rating: 38, 
        sorts: 50, 
        price: 1.30, 
        popular: "Sarajevsko", 
        best: "Nektar", 
        bars: [
            { name: "Pivnica HS (Sarajevo)", rating: 4.4 },
            { name: "The Old Bridž (Mostar)", rating: 4.3 },
            { name: "Zlatna Ribica (Sarajevo)", rating: 4.5 },
            { name: "Pivnica Stari Grad (Banja Luka)", rating: 4.2 },
            { name: "Kraft Pub (Sarajevo)", rating: 4.4 },
            { name: "Beer House (Mostar)", rating: 4.3 },
            { name: "Pivnica Sarajevo (Sarajevo)", rating: 4.5 }
        ]
    },
    "Latvia": { 
        rating: 38, 
        sorts: 70, 
        price: 1.50, 
        popular: "Aldaris", 
        best: "Cēsu", 
        bars: [
            { name: "Alus Arsenāls (Riga)", rating: 4.5 },
            { name: "Labietis (Riga)", rating: 4.6 },
            { name: "Folkklubs Ala Pagrabs (Riga)", rating: 4.4 },
            { name: "Vest (Riga)", rating: 4.3 },
            { name: "Two More Beers (Riga)", rating: 4.5 },
            { name: "Beer House No1 (Riga)", rating: 4.4 },
            { name: "Kaņepes Kultūras Centrs (Riga)", rating: 4.3 }
        ]
    },
    "Colombia": { 
        rating: 37.8, 
        sorts: 40, 
        price: 1.20, 
        popular: "Aguila", 
        best: "Club Colombia", 
        bars: [
            { name: "Bogotá Beer Company (Bogotá)", rating: 4.6 },
            { name: "The Irish Pub (Medellín)", rating: 4.4 },
            { name: "Cervecería Libre (Cali)", rating: 4.5 },
            { name: "El Corral Gourmet (Bogotá)", rating: 4.3 },
            { name: "BBC Pub La Calera (Bogotá)", rating: 4.4 },
            { name: "Craft Beer House (Cartagena)", rating: 4.5 },
            { name: "Patagonia Bar (Medellín)", rating: 4.3 }
        ]
    },
    "Estonia": { 
        rating: 37, 
        sorts: 60, 
        price: 1.50, 
        popular: "Saku", 
        best: "A. Le Coq", 
        bars: [
            { name: "Põhjala Tap Room (Tallinn)", rating: 4.7 },
            { name: "Drink Bar & Grill (Tallinn)", rating: 4.5 },
            { name: "Beer House (Tallinn)", rating: 4.4 },
            { name: "Koht (Tallinn)", rating: 4.6 },
            { name: "Speakeasy by Põhjala (Tallinn)", rating: 4.5 },
            { name: "Pudel Baar (Tallinn)", rating: 4.4 },
            { name: "Hell Hunt (Tallinn)", rating: 4.3 }
        ]
    },
    "Moldova": { 
        rating: 37, 
        sorts: 50, 
        price: 1.30, 
        popular: "Chişinău", 
        best: "Bere Blondă", 
        bars: [
            { name: "Beer Time (Chișinău)", rating: 4.4 },
            { name: "Taproom 27 (Chișinău)", rating: 4.5 },
            { name: "Smokehouse (Chișinău)", rating: 4.3 },
            { name: "Craft Beer Pub (Chișinău)", rating: 4.4 },
            { name: "Old Bus Pub (Chișinău)", rating: 4.2 },
            { name: "Barbar (Chișinău)", rating: 4.3 },
            { name: "Dublin Pub (Chișinău)", rating: 4.4 }
        ]
    },
    "Georgia": { 
        rating: 36.67, 
        sorts: 40, 
        price: 1.20, 
        popular: "Natakhtari", 
        best: "Argo", 
        bars: [
            { name: "Black Dog Bar (Tbilisi)", rating: 4.5 },
            { name: "Dive Bar (Tbilisi)", rating: 4.4 },
            { name: "Mozaika (Tbilisi)", rating: 4.3 },
            { name: "Warszawa Bar (Tbilisi)", rating: 4.5 },
            { name: "Craft Beer Bar (Tbilisi)", rating: 4.6 },
            { name: "Beer Wagon (Tbilisi)", rating: 4.4 },
            { name: "Tbilisi Pub (Tbilisi)", rating: 4.3 }
        ]
    },
    "Armenia": { 
        rating: 36.33, 
        sorts: 30, 
        price: 1.10, 
        popular: "Kilikia", 
        best: "Gyumri", 
        bars: [
            { name: "Dargett Craft Beer (Yerevan)", rating: 4.6 },
            { name: "Beer Academy (Yerevan)", rating: 4.5 },
            { name: "The Old Pub (Yerevan)", rating: 4.4 },
            { name: "Malt & Hops (Yerevan)", rating: 4.3 },
            { name: "Yerevan Tavern (Yerevan)", rating: 4.5 },
            { name: "Calumet (Yerevan)", rating: 4.4 },
            { name: "Garage Beer Bar (Yerevan)", rating: 4.3 }
        ]
    },
    "Peru": { 
        rating: 36, 
        sorts: 40, 
        price: 1.20, 
        popular: "Cusqueña", 
        best: "Pilsen Callao", 
        bars: [
            { name: "Barranco Beer Company (Lima)", rating: 4.6 },
            { name: "El Gringo Pub (Lima)", rating: 4.4 },
            { name: "La Cervecería (Lima)", rating: 4.5 },
            { name: "Barbarian Bar (Lima)", rating: 4.7 },
            { name: "Hops (Lima)", rating: 4.3 },
            { name: "Ceviche Beer (Lima)", rating: 4.4 },
            { name: "La Bodega Verde (Cusco)", rating: 4.5 }
        ]
    },
    "Philippines": { 
        rating: 35.67, 
        sorts: 30, 
        price: 1.00, 
        popular: "San Miguel", 
        best: "Red Horse", 
        bars: [
            { name: "The Perfect Pint (Manila)", rating: 4.5 },
            { name: "Craft Beer Manila (Quezon City)", rating: 4.4 },
            { name: "The Bottle Shop (Makati)", rating: 4.6 },
            { name: "Tap Station (BGC)", rating: 4.3 },
            { name: "Joe’s Brew (Quezon City)", rating: 4.5 },
            { name: "Nipa Brew Taproom (Makati)", rating: 4.4 },
            { name: "Pedro Tap House (Davao)", rating: 4.3 }
        ]
    },
    "Thailand": { 
        rating: 35.33, 
        sorts: 30, 
        price: 1.10, 
        popular: "Chang", 
        best: "Singha", 
        bars: [
            { name: "Mikkeller Bangkok (Bangkok)", rating: 4.7 },
            { name: "Hair of the Dog (Bangkok)", rating: 4.6 },
            { name: "Craft (Bangkok)", rating: 4.5 },
            { name: "The Beer Cap (Chiang Mai)", rating: 4.4 },
            { name: "Wishbeer (Bangkok)", rating: 4.3 },
            { name: "Tawandang German Brewery (Bangkok)", rating: 4.5 },
            { name: "Beer Republic (Chiang Mai)", rating: 4.4 }
        ]
    },
    "Albania": { 
        rating: 35, 
        sorts: 40, 
        price: 1.20, 
        popular: "Birra Tirana", 
        best: "Korça", 
        bars: [
            { name: "Radio Bar (Tirana)", rating: 4.5 },
            { name: "Destil (Tirana)", rating: 4.4 },
            { name: "Birra Korça Pub (Korçë)", rating: 4.3 },
            { name: "Pepper Pub (Tirana)", rating: 4.5 },
            { name: "The Irish Pub (Durrës)", rating: 4.2 },
            { name: "Craft Beer House (Tirana)", rating: 4.4 },
            { name: "Hemingway Bar (Tirana)", rating: 4.3 }
        ]
    },
    "North Macedonia": { 
        rating: 34.67, 
        sorts: 40, 
        price: 1.20, 
        popular: "Skopsko", 
        best: "Zlaten Dab", 
        bars: [
            { name: "Old Town Brewery (Skopje)", rating: 4.5 },
            { name: "Kafana (Skopje)", rating: 4.4 },
            { name: "Pivnica Temov (Skopje)", rating: 4.3 },
            { name: "Craft Beer Bar (Bitola)", rating: 4.5 },
            { name: "Dublin Pub (Skopje)", rating: 4.2 },
            { name: "Beer House (Skopje)", rating: 4.4 },
            { name: "Vinyl (Skopje)", rating: 4.3 }
        ]
    },
    "Montenegro": { 
        rating: 34.33, 
        sorts: 40, 
        price: 1.20, 
        popular: "Nikšićko", 
        best: "Nik Gold", 
        bars: [
            { name: "Pivnica Nikšićko (Podgorica)", rating: 4.4 },
            { name: "The Living Room (Kotor)", rating: 4.5 },
            { name: "Old Town Pub (Budva)", rating: 4.3 },
            { name: "Beer House (Podgorica)", rating: 4.4 },
            { name: "Craft Beer Bar (Kotor)", rating: 4.5 },
            { name: "Konoba Scala Santa (Kotor)", rating: 4.3 },
            { name: "Hemingway Bar (Podgorica)", rating: 4.2 }
        ]
    },
    "Kosovo": { 
        rating: 34, 
        sorts: 30, 
        price: 1.10, 
        popular: "Peja", 
        best: "Birra Prishtina", 
        bars: [
            { name: "Soma Book Station (Pristina)", rating: 4.5 },
            { name: "Tiffany Bar (Pristina)", rating: 4.4 },
            { name: "Brew Pub (Pristina)", rating: 4.3 },
            { name: "Beer House (Prizren)", rating: 4.5 },
            { name: "The White Tree (Pristina)", rating: 4.2 },
            { name: "Craft Beer Kosovo (Pristina)", rating: 4.4 },
            { name: "Old Pub (Prizren)", rating: 4.3 }
        ]
    },
    "South Korea": { 
        rating: 33.67, 
        sorts: 60, 
        price: 2.00, 
        popular: "Hite", 
        best: "Cass", 
        bars: [
            { name: "Craftworks Taphouse (Seoul)", rating: 4.6 },
            { name: "Magpie Brewing Co. (Seoul)", rating: 4.5 },
            { name: "The Booth (Seoul)", rating: 4.4 },
            { name: "Hand and Malt (Seoul)", rating: 4.5 },
            { name: "Beer Cabin (Busan)", rating: 4.3 },
            { name: "Galmegi Brewing (Busan)", rating: 4.6 },
            { name: "Amazing Brewing Co. (Seoul)", rating: 4.4 }
        ]
    },
    "Turkey": { 
        rating: 33.33, 
        sorts: 40, 
        price: 1.50, 
        popular: "Efes", 
        best: "Bomonti", 
        bars: [
            { name: "The Populist (Istanbul)", rating: 4.6 },
            { name: "Bosphorus Brewing Co. (Istanbul)", rating: 4.5 },
            { name: "Taps Brewery (Istanbul)", rating: 4.4 },
            { name: "Beer Hall (Ankara)", rating: 4.3 },
            { name: "Craft Beer Lab (Izmir)", rating: 4.5 },
            { name: "Gara Guzu (Muğla)", rating: 4.4 },
            { name: "The North Shield (Istanbul)", rating: 4.3 }
        ]
    },
    "Argentina": { 
        rating: 33, 
        sorts: 50, 
        price: 1.40, 
        popular: "Quilmes", 
        best: "Brahma", 
        bars: [
            { name: "Antares (Buenos Aires)", rating: 4.6 },
            { name: "Cervecería Patagonia (Buenos Aires)", rating: 4.5 },
            { name: "Bullar Brew Pub (Córdoba)", rating: 4.4 },
            { name: "Peñón del Águila (Mendoza)", rating: 4.5 },
            { name: "La Birra (Rosario)", rating: 4.3 },
            { name: "Cervecera Berlina (Bariloche)", rating: 4.6 },
            { name: "Growler (Buenos Aires)", rating: 4.4 }
        ]
    },
    "Ecuador": { 
        rating: 32.67, 
        sorts: 30, 
        price: 1.20, 
        popular: "Pilsener", 
        best: "Club", 
        bars: [
            { name: "Abysmo Brew Pub (Quito)", rating: 4.5 },
            { name: "Cervecería Santa Rosa (Guayaquil)", rating: 4.4 },
            { name: "The Beer House (Quito)", rating: 4.3 },
            { name: "La Taberna (Cuenca)", rating: 4.5 },
            { name: "Craft Beer Ecuador (Quito)", rating: 4.4 },
            { name: "El Tapón (Guayaquil)", rating: 4.3 },
            { name: "La Compañía Brewpub (Quito)", rating: 4.5 }
        ]
    },
    "Panama": { 
        rating: 32.33, 
        sorts: 30, 
        price: 1.10, 
        popular: "Balboa", 
        best: "Atlas", 
        bars: [
            { name: "La Rana Dorada (Panama City)", rating: 4.6 },
            { name: "Casa Bruja (Panama City)", rating: 4.5 },
            { name: "Istmo Brew Pub (Panama City)", rating: 4.4 },
            { name: "The Beer Place (Panama City)", rating: 4.3 },
            { name: "Craft Beer Panama (Panama City)", rating: 4.5 },
            { name: "El Faro Brewpub (Panama City)", rating: 4.4 },
            { name: "Tap Room Panama (Panama City)", rating: 4.3 }
        ]
    },
    "Dominican Republic": { 
        rating: 32, 
        sorts: 30, 
        price: 1.20, 
        popular: "Presidente", 
        best: "Bohemia", 
        bars: [
            { name: "El Catador (Santo Domingo)", rating: 4.5 },
            { name: "The Beer House (Santo Domingo)", rating: 4.4 },
            { name: "Parada 77 (Santo Domingo)", rating: 4.3 },
            { name: "Maco Brew Pub (Punta Cana)", rating: 4.5 },
            { name: "Craft Beer DR (Santo Domingo)", rating: 4.4 },
            { name: "La Taberna del Pirata (Puerto Plata)", rating: 4.3 },
            { name: "Jaleo Bar (Santo Domingo)", rating: 4.5 }
        ]
    },
    "Costa Rica": { 
        rating: 31.67, 
        sorts: 30, 
        price: 1.30, 
        popular: "Imperial", 
        best: "Pilsen", 
        bars: [
            { name: "Costa Rica Beer Factory (San José)", rating: 4.6 },
            { name: "Craic Irish Pub (San José)", rating: 4.4 },
            { name: "Stiefel Pub (San José)", rating: 4.5 },
            { name: "Treintaycinco (Heredia)", rating: 4.3 },
            { name: "Wilks Craft Beer (San José)", rating: 4.5 },
            { name: "La Taberna (Tamarindo)", rating: 4.4 },
            { name: "Brewpub CR (San José)", rating: 4.3 }
        ]
    },
    "Bolivia": { 
        rating: 31.33, 
        sorts: 30, 
        price: 1.20, 
        popular: "Paceña", 
        best: "Huari", 
        bars: [
            { name: "La Taverna (La Paz)", rating: 4.4 },
            { name: "The English Pub (La Paz)", rating: 4.3 },
            { name: "Sabor Gaucho (Santa Cruz)", rating: 4.5 },
            { name: "Beer Station (La Paz)", rating: 4.2 },
            { name: "Craft Beer Bolivia (Cochabamba)", rating: 4.4 },
            { name: "El Irlandés (La Paz)", rating: 4.3 },
            { name: "Paceña Pub (La Paz)", rating: 4.5 }
        ]
    },
    "Paraguay": { 
        rating: 31, 
        sorts: 30, 
        price: 1.10, 
        popular: "Brahma", 
        best: "Pilsen", 
        bars: [
            { name: "Saxon Brew Pub (Asunción)", rating: 4.5 },
            { name: "The Beer House (Asunción)", rating: 4.4 },
            { name: "Pilsen Pub (Asunción)", rating: 4.3 },
            { name: "Craft Beer Paraguay (Asunción)", rating: 4.5 },
            { name: "El Granel (Asunción)", rating: 4.2 },
            { name: "Barrio Beer (Asunción)", rating: 4.4 },
            { name: "La Taberna (Ciudad del Este)", rating: 4.3 }
        ]
    },
    "Honduras": { 
        rating: 30.67, 
        sorts: 20, 
        price: 1.00, 
        popular: "Salva Vida", 
        best: "Imperial", 
        bars: [
            { name: "El Patio (Tegucigalpa)", rating: 4.4 },
            { name: "La Cervecería (San Pedro Sula)", rating: 4.3 },
            { name: "Beer Box (Tegucigalpa)", rating: 4.5 },
            { name: "La Taberna (San Pedro Sula)", rating: 4.2 },
            { name: "Craft Beer Honduras (Tegucigalpa)", rating: 4.4 },
            { name: "Barrio Viejo (San Pedro Sula)", rating: 4.3 },
            { name: "The Irish Pub (Roatan)", rating: 4.5 }
        ]
    },
    "El Salvador": { 
        rating: 30.33, 
        sorts: 20, 
        price: 1.00, 
        popular: "Pilsener", 
        best: "Golden", 
        bars: [
            { name: "Cadejo Brewing Company (San Salvador)", rating: 4.6 },
            { name: "The Beer House (San Salvador)", rating: 4.4 },
            { name: "La Taberna (Santa Ana)", rating: 4.3 },
            { name: "Craft Beer El Salvador (San Salvador)", rating: 4.5 },
            { name: "El Zonte Brewing (La Libertad)", rating: 4.4 },
            { name: "Pilsener Pub (San Salvador)", rating: 4.3 },
            { name: "Barrio (San Miguel)", rating: 4.5 }
        ]
    },
    "Guatemala": { 
        rating: 30, 
        sorts: 30, 
        price: 1.20, 
        popular: "Gallo", 
        best: "Brahva", 
        bars: [
            { name: "The Beer House (Guatemala City)", rating: 4.5 },
            { name: "Antigua Brewing Company (Antigua)", rating: 4.6 },
            { name: "El Portal (Guatemala City)", rating: 4.4 },
            { name: "Craft Beer GT (Guatemala City)", rating: 4.5 },
            { name: "La Esquina (Antigua)", rating: 4.3 },
            { name: "Barrio Beer (Guatemala City)", rating: 4.4 },
            { name: "La Taberna (Quetzaltenango)", rating: 4.3 }
        ]
    },
    "Nicaragua": { 
        rating: 29.67, 
        sorts: 20, 
        price: 1.10, 
        popular: "Toña", 
        best: "Victoria", 
        bars: [
            { name: "La Cervecería (Managua)", rating: 4.4 },
            { name: "El Tiscapa (Managua)", rating: 4.3 },
            { name: "Craft Beer Nicaragua (Managua)", rating: 4.5 },
            { name: "The Irish Pub (Granada)", rating: 4.2 },
            { name: "Barrio Café (León)", rating: 4.4 },
            { name: "Toña Pub (Managua)", rating: 4.3 },
            { name: "La Terraza (Granada)", rating: 4.5 }
        ]
    },
    "Japan": { 
        rating: 29.33, 
        sorts: 100, 
        price: 2.50, 
        popular: "Asahi", 
        best: "Kirin", 
        bars: [
            { name: "Craft Beer Market (Tokyo)", rating: 4.6 },
            { name: "Baird Taproom (Tokyo)", rating: 4.5 },
            { name: "Popeye (Tokyo)", rating: 4.7 },
            { name: "Goodbeer Faucets (Tokyo)", rating: 4.4 },
            { name: "Yona Yona Beer Works (Osaka)", rating: 4.5 },
            { name: "Beer Belly (Osaka)", rating: 4.3 },
            { name: "Craft Beer Base (Kyoto)", rating: 4.6 },
            { name: "Beer Komachi (Kyoto)", rating: 4.4 },
            { name: "Two Fingers (Tokyo)", rating: 4.5 },
            { name: "Beer Cafe Gambrinus (Sapporo)", rating: 4.3 }
        ]
    },
    "Indonesia": { 
        rating: 29, 
        sorts: 20, 
        price: 1.20, 
        popular: "Bintang", 
        best: "Bali Hai", 
        bars: [
            { name: "Beer Garden (Jakarta)", rating: 4.4 },
            { name: "Eastern Promise (Jakarta)", rating: 4.3 },
            { name: "Stark Craft Beer (Bali)", rating: 4.5 },
            { name: "The Tavern (Surabaya)", rating: 4.2 },
            { name: "Bali Beer Club (Kuta)", rating: 4.4 },
            { name: "Craft Beer Indonesia (Jakarta)", rating: 4.3 },
            { name: "The Safehouse (Bali)", rating: 4.5 }
        ]
    },
    "Malaysia": { 
        rating: 28.67, 
        sorts: 30, 
        price: 1.50, 
        popular: "Tiger", 
        best: "Carlsberg", 
        bars: [
            { name: "Taps Beer Bar (Kuala Lumpur)", rating: 4.6 },
            { name: "The Great Beer Bar (Kuala Lumpur)", rating: 4.5 },
            { name: "Hit & Mrs (Penang)", rating: 4.4 },
            { name: "The Beer Factory (Petaling Jaya)", rating: 4.3 },
            { name: "Craft Brews (Kota Kinabalu)", rating: 4.5 },
            { name: "The Roof (Kuala Lumpur)", rating: 4.4 },
            { name: "Sid’s Pub (Penang)", rating: 4.3 }
        ]
    },
    "Nepal": { 
        rating: 28.33, 
        sorts: 20, 
        price: 1.20, 
        popular: "Gorkha", 
        best: "Everest", 
        bars: [
            { name: "House of Music (Kathmandu)", rating: 4.4 },
            { name: "The Irish Pub (Kathmandu)", rating: 4.3 },
            { name: "Trisara (Kathmandu)", rating: 4.5 },
            { name: "Fire Club (Pokhara)", rating: 4.2 },
            { name: "Craft Beer Nepal (Kathmandu)", rating: 4.4 },
            { name: "The Roadhouse Café (Kathmandu)", rating: 4.3 },
            { name: "Busy Bee Café (Pokhara)", rating: 4.5 }
        ]
    },
    "Sri Lanka": { 
        rating: 28, 
        sorts: 20, 
        price: 1.30, 
        popular: "Lion", 
        best: "Carlsberg", 
        bars: [
            { name: "The Irish Pub (Colombo)", rating: 4.4 },
            { name: "Barefoot Café (Colombo)", rating: 4.3 },
            { name: "The Bavarian (Colombo)", rating: 4.5 },
            { name: "Sugar Bistro & Wine Bar (Colombo)", rating: 4.2 },
            { name: "Craft Beer Sri Lanka (Galle)", rating: 4.4 },
            { name: "The Tap House (Kandy)", rating: 4.3 },
            { name: "Royal Bar (Colombo)", rating: 4.5 }
        ]
    },
    "Pakistan": { 
        rating: 27.67, 
        sorts: 10, 
        price: 1.00, 
        popular: "Murree", 
        best: "Murree Classic", 
        bars: [
            { name: "Murree Brewery Pub (Rawalpindi)", rating: 4.3 },
            { name: "The Coffee Bean (Lahore)", rating: 4.2 },
            { name: "Café Aylanto (Karachi)", rating: 4.4 },
            { name: "Espresso Lounge (Islamabad)", rating: 4.1 },
            { name: "The Patio (Lahore)", rating: 4.3 }
        ]
    },
    "Bangladesh": { 
        rating: 27.33, 
        sorts: 10, 
        price: 1.10, 
        popular: "Hunter", 
        best: "Crown", 
        bars: [
            { name: "The Westin (Dhaka)", rating: 4.4 },
            { name: "Club 13 (Dhaka)", rating: 4.3 },
            { name: "Sky Lounge (Dhaka)", rating: 4.5 },
            { name: "The Bar (Chittagong)", rating: 4.2 },
            { name: "Craft Lounge (Dhaka)", rating: 4.4 }
        ]
    },
    "Myanmar": { 
        rating: 27, 
        sorts: 20, 
        price: 1.20, 
        popular: "Myanmar Beer", 
        best: "Black Shield", 
        bars: [
            { name: "19th Street Beer Garden (Yangon)", rating: 4.4 },
            { name: "The Strand Café (Yangon)", rating: 4.3 },
            { name: "Burbrit Taproom (Yangon)", rating: 4.5 },
            { name: "The Beer Factory (Mandalay)", rating: 4.2 },
            { name: "Craft Beer Myanmar (Yangon)", rating: 4.4 },
            { name: "Rooftop Bar (Yangon)", rating: 4.3 },
            { name: "The Tavern (Mandalay)", rating: 4.5 }
        ]
    },
    "Laos": { 
        rating: 26.67, 
        sorts: 20, 
        price: 1.20, 
        popular: "Beerlao", 
        best: "Tiger", 
        bars: [
            { name: "Lao Beer House (Vientiane)", rating: 4.4 },
            { name: "The Beer Shack (Luang Prabang)", rating: 4.3 },
            { name: "Spirit House (Vientiane)", rating: 4.5 },
            { name: "Craft Beer Laos (Vientiane)", rating: 4.2 },
            { name: "The Riverside (Luang Prabang)", rating: 4.4 },
            { name: "Beer Garden (Vientiane)", rating: 4.3 },
            { name: "Lao Lao Bar (Luang Prabang)", rating: 4.5 }
        ]
    },
    "Cambodia": { 
        rating: 26.33, 
        sorts: 20, 
        price: 1.10, 
        popular: "Angkor", 
        best: "Cambodia Beer", 
        bars: [
            { name: "Hops Craft Beer (Phnom Penh)", rating: 4.5 },
            { name: "The Alley Bar (Siem Reap)", rating: 4.4 },
            { name: "Le Moon (Phnom Penh)", rating: 4.3 },
            { name: "Craft Beer Cambodia (Phnom Penh)", rating: 4.5 },
            { name: "Angkor Beer Bar (Siem Reap)", rating: 4.2 },
            { name: "The Harbour (Phnom Penh)", rating: 4.4 },
            { name: "Red Bar (Siem Reap)", rating: 4.3 }
        ]
    },
    "Mongolia": { 
        rating: 26, 
        sorts: 20, 
        price: 1.30, 
        popular: "Borgio", 
        best: "Khan Brau", 
        bars: [
            { name: "Hops & Barley (Ulaanbaatar)", rating: 4.4 },
            { name: "The Irish Pub (Ulaanbaatar)", rating: 4.3 },
            { name: "Khan Brau Beer House (Ulaanbaatar)", rating: 4.5 },
            { name: "Craft Beer Mongolia (Ulaanbaatar)", rating: 4.2 },
            { name: "The Bulldog (Ulaanbaatar)", rating: 4.4 },
            { name: "Sky Bar (Ulaanbaatar)", rating: 4.3 },
            { name: "Beer Garden (Ulaanbaatar)", rating: 4.5 }
        ]
    },
    "Uzbekistan": { 
        rating: 25.67, 
        sorts: 20, 
        price: 1.20, 
        popular: "Sarbast", 
        best: "Pulsar", 
        bars: [
            { name: "Caravan (Tashkent)", rating: 4.4 },
            { name: "The Irish Pub (Tashkent)", rating: 4.3 },
            { name: "Beer House (Tashkent)", rating: 4.5 },
            { name: "Craft Beer Uzbekistan (Tashkent)", rating: 4.2 },
            { name: "Old City Pub (Samarkand)", rating: 4.4 },
            { name: "Baraka Bar (Tashkent)", rating: 4.3 },
            { name: "Pivnaya (Tashkent)", rating: 4.5 }
        ]
    },
    "Kyrgyzstan": { 
        rating: 25.33, 
        sorts: 20, 
        price: 1.20, 
        popular: "Arpa", 
        best: "Nashe", 
        bars: [
            { name: "Steinbrau (Bishkek)", rating: 4.5 },
            { name: "The Host (Bishkek)", rating: 4.4 },
            { name: "Beer House (Bishkek)", rating: 4.3 },
            { name: "Craft Beer Kyrgyzstan (Bishkek)", rating: 4.5 },
            { name: "Red Cow Pub (Bishkek)", rating: 4.2 },
            { name: "Bar 12 (Bishkek)", rating: 4.4 },
            { name: "Pinta Pub (Osh)", rating: 4.3 }
        ]
    },
    "Tajikistan": { 
        rating: 25, 
        sorts: 20, 
        price: 1.20, 
        popular: "Sim Sim", 
        best: "Dushanbe", 
        bars: [
            { name: "Public Pub (Dushanbe)", rating: 4.4 },
            { name: "The Irish Pub (Dushanbe)", rating: 4.3 },
            { name: "Beer House (Dushanbe)", rating: 4.5 },
            { name: "Craft Beer Tajikistan (Dushanbe)", rating: 4.2 },
            { name: "Old Town Bar (Khujand)", rating: 4.4 },
            { name: "Sim Sim Pub (Dushanbe)", rating: 4.3 },
            { name: "Baraka (Dushanbe)", rating: 4.5 }
        ]
    },
    "Turkmenistan": { 
        rating: 24.67, 
        sorts: 10, 
        price: 1.10, 
        popular: "Berk", 
        best: "Zip", 
        bars: [
            { name: "Berk Pub (Ashgabat)", rating: 4.3 },
            { name: "The Beer House (Ashgabat)", rating: 4.2 },
            { name: "Craft Beer Turkmenistan (Ashgabat)", rating: 4.4 },
            { name: "Old Town Café (Ashgabat)", rating: 4.1 },
            { name: "The Lounge (Ashgabat)", rating: 4.3 }
        ]
    },
    "Azerbaijan": { 
        rating: 24.33, 
        sorts: 20, 
        price: 1.30, 
        popular: "Xirdalan", 
        best: "Baku", 
        bars: [
            { name: "Beer House (Baku)", rating: 4.4 },
            { name: "The Irish Pub (Baku)", rating: 4.3 },
            { name: "Craft Beer Azerbaijan (Baku)", rating: 4.5 },
            { name: "Old City Pub (Baku)", rating: 4.2 },
            { name: "Finnegan’s (Baku)", rating: 4.4 },
            { name: "Xirdalan Pub (Baku)", rating: 4.3 },
            { name: "The Lounge (Baku)", rating: 4.5 }
        ]
    },
    "United States of America": { 
        rating: 24, 
        sorts: 500, 
        price: 3.00, 
        popular: "Bud Light", 
        best: "Sierra Nevada", 
        bars: [
            { name: "The Bier Markt (Cleveland)", rating: 4.6 },
            { name: "Toronado (San Francisco)", rating: 4.7 },
            { name: "The Alchemist (Waterbury)", rating: 4.8 },
            { name: "Monk’s Café (Philadelphia)", rating: 4.5 },
            { name: "Stone Brewing World Bistro (Escondido)", rating: 4.6 },
            { name: "The Ginger Man (New York)", rating: 4.4 },
            { name: "Falling Rock Tap House (Denver)", rating: 4.5 },
            { name: "Blind Tiger Ale House (New York)", rating: 4.6 },
            { name: "Yards Brewing Co. (Philadelphia)", rating: 4.4 },
            { name: "Russian River Brewing (Santa Rosa)", rating: 4.8 }
        ]
    },
    "Canada": { 
        rating: 23.67, 
        sorts: 400, 
        price: 3.20, 
        popular: "Molson Canadian", 
        best: "Labatt Blue", 
        bars: [
            { name: "The Beer Bistro (Toronto)", rating: 4.6 },
            { name: "Steamworks Brewpub (Vancouver)", rating: 4.5 },
            { name: "Mill Street Brew Pub (Toronto)", rating: 4.4 },
            { name: "Bellwoods Brewery (Toronto)", rating: 4.7 },
            { name: "Granville Island Brewing (Vancouver)", rating: 4.5 },
            { name: "Le Saint Bock (Montreal)", rating: 4.6 },
            { name: "C’est What (Toronto)", rating: 4.4 }
        ]
    },
    "United Kingdom": { 
        rating: 23.33, 
        sorts: 300, 
        price: 3.50, 
        popular: "Carling", 
        best: "Fuller’s", 
        bars: [
            { name: "The Craft Beer Co. (London)", rating: 4.6 },
            { name: "The Euston Tap (London)", rating: 4.5 },
            { name: "The Harp (London)", rating: 4.7 },
            { name: "The Rake (London)", rating: 4.4 },
            { name: "BrewDog (Manchester)", rating: 4.5 },
            { name: "The Free Trade Inn (Newcastle)", rating: 4.6 },
            { name: "The Portobello (Edinburgh)", rating: 4.4 }
        ]
    },
    "Australia": { 
        rating: 23, 
        sorts: 200, 
        price: 3.00, 
        popular: "VB (Victoria Bitter)", 
        best: "XXXX", 
        bars: [
            { name: "The Local Taphouse (Melbourne)", rating: 4.6 },
            { name: "The Union Hotel (Sydney)", rating: 4.5 },
            { name: "The Alehouse (Brisbane)", rating: 4.4 },
            { name: "Mountain Goat Brewery (Melbourne)", rating: 4.5 },
            { name: "The Lord Nelson Brewery (Sydney)", rating: 4.6 },
            { name: "Little Creatures (Fremantle)", rating: 4.7 },
            { name: "The Wheatsheaf Hotel (Adelaide)", rating: 4.4 }
        ]
    },
    "New Zealand": { 
        rating: 22.67, 
        sorts: 150, 
        price: 3.20, 
        popular: "Tui", 
        best: "Speight’s", 
        bars: [
            { name: "The Malthouse (Wellington)", rating: 4.6 },
            { name: "Galbraith’s Alehouse (Auckland)", rating: 4.5 },
            { name: "The Sprig & Fern (Christchurch)", rating: 4.4 },
            { name: "Craft Beer NZ (Auckland)", rating: 4.5 },
            { name: "The Hop House (Queenstown)", rating: 4.6 },
            { name: "Brew Union (Palmerston North)", rating: 4.4 },
            { name: "Garage Project Taproom (Wellington)", rating: 4.7 }
        ]
    },
    "Ireland": { 
        rating: 22.33, 
        sorts: 200, 
        price: 4.00, 
        popular: "Guinness", 
        best: "Murphy’s", 
        bars: [
            { name: "The Porterhouse (Dublin)", rating: 4.6 },
            { name: "The Black Sheep (Dublin)", rating: 4.5 },
            { name: "The Bull & Castle (Dublin)", rating: 4.4 },
            { name: "Against The Grain (Dublin)", rating: 4.5 },
            { name: "The Franciscan Well (Cork)", rating: 4.6 },
            { name: "The Bierhaus (Cork)", rating: 4.4 },
            { name: "O’Neill’s Pub (Dublin)", rating: 4.7 }
        ]
    },
    "Netherlands": { 
        rating: 22, 
        sorts: 250, 
        price: 3.50, 
        popular: "Heineken", 
        best: "Amstel", 
        bars: [
            { name: "Bierfabriek (Amsterdam)", rating: 4.6 },
            { name: "Café Gollem (Amsterdam)", rating: 4.5 },
            { name: "In de Wildeman (Amsterdam)", rating: 4.7 },
            { name: "Proeflokaal Arendsnest (Amsterdam)", rating: 4.4 },
            { name: "De Bierkoning (Amsterdam)", rating: 4.5 },
            { name: "Jopenkerk (Haarlem)", rating: 4.6 },
            { name: "De Pintelier (Rotterdam)", rating: 4.4 }
        ]
    },
    "Spain": { 
        rating: 21.67, 
        sorts: 150, 
        price: 2.80, 
        popular: "Estrella Damm", 
        best: "Mahou", 
        bars: [
            { name: "La Tape (Madrid)", rating: 4.6 },
            { name: "Fábrica Maravillas (Madrid)", rating: 4.5 },
            { name: "Cervecería L’Europe (Madrid)", rating: 4.4 },
            { name: "El Pedal (Barcelona)", rating: 4.5 },
            { name: "BlackLab Brewhouse (Barcelona)", rating: 4.6 },
            { name: "BierCaB (Barcelona)", rating: 4.7 },
            { name: "La Cerveteca (Seville)", rating: 4.4 }
        ]
    },
    "Italy": { 
        rating: 21.33, 
        sorts: 100, 
        price: 3.00, 
        popular: "Peroni", 
        best: "Birra Moretti", 
        bars: [
            { name: "Birra Baladin (Rome)", rating: 4.6 },
            { name: "Open Baladin (Rome)", rating: 4.5 },
            { name: "Ma Che Siete Venuti a Fà (Rome)", rating: 4.7 },
            { name: "Bir & Fud (Rome)", rating: 4.4 },
            { name: "The Fiddler's Elbow (Florence)", rating: 4.5 },
            { name: "BrewDog Firenze (Florence)", rating: 4.6 },
            { name: "Beer House Club (Milan)", rating: 4.4 }
        ]
    },
    "France": { 
        rating: 21, 
        sorts: 150, 
        price: 3.50, 
        popular: "Kronenbourg 1664", 
        best: "Leffe", 
        bars: [
            { name: "La Fine Mousse (Paris)", rating: 4.6 },
            { name: "Le Supercoin (Paris)", rating: 4.5 },
            { name: "Brewberry (Paris)", rating: 4.7 },
            { name: "Le Triangle (Paris)", rating: 4.4 },
            { name: "Les Trois 8 (Paris)", rating: 4.5 },
            { name: "Le Sully (Lyon)", rating: 4.6 },
            { name: "Ninkasi (Lyon)", rating: 4.4 }
        ]
    },
    "Portugal": { 
        rating: 20.67, 
        sorts: 100, 
        price: 2.50, 
        popular: "Super Bock", 
        best: "Sagres", 
        bars: [
            { name: "Cervejaria Trindade (Lisbon)", rating: 4.5 },
            { name: "Cervejaria Ramiro (Lisbon)", rating: 4.6 },
            { name: "Duke Brew & Que (Lisbon)", rating: 4.4 },
            { name: "Oitava Colina Taproom (Lisbon)", rating: 4.5 },
            { name: "Crafty Corner (Porto)", rating: 4.6 },
            { name: "Catraio Craft Beer (Porto)", rating: 4.4 },
            { name: "Letraria (Porto)", rating: 4.5 }
        ]
    },
    "Greece": { 
        rating: 20.33, 
        sorts: 80, 
        price: 2.50, 
        popular: "Mythos", 
        best: "Alpha", 
        bars: [
            { name: "The Local Pub (Athens)", rating: 4.5 },
            { name: "Beer Time (Athens)", rating: 4.4 },
            { name: "Barley Cargo (Athens)", rating: 4.6 },
            { name: "Brew Str (Thessaloniki)", rating: 4.3 },
            { name: "Craft Beer Greece (Athens)", rating: 4.5 },
            { name: "The Hoppy Pub (Thessaloniki)", rating: 4.4 },
            { name: "Beer Factory (Athens)", rating: 4.3 }
        ]
    },
    "Cyprus": { 
        rating: 20, 
        sorts: 60, 
        price: 2.50, 
        popular: "Keo", 
        best: "Leon", 
        bars: [
            { name: "Brewfellas (Nicosia)", rating: 4.6 },
            { name: "The Old Souls (Limassol)", rating: 4.5 },
            { name: "Pivo Microbrewery (Paphos)", rating: 4.4 },
            { name: "The Wooden Pub (Nicosia)", rating: 4.3 },
            { name: "Craft Beer Cyprus (Limassol)", rating: 4.5 },
            { name: "The Beer Shop (Larnaca)", rating: 4.4 },
        ]
    }
    // Полный список для 180+ стран будет добавлен в GitHub Gist
};
