const beerData = {
    "Vietnam": { rating: 71.8, sorts: 30, price: 0.80, popular: "Bia Hơi", best: "Saigon Beer", bars: ["Pasteur Street Brewing (Ho Chi Minh City)", "Heart of Darkness (Ho Chi Minh City)", "BiaCraft Artisan Ales (Ho Chi Minh City)", "Standing Bar (Hanoi)", "Rogue Saigon (Ho Chi Minh City)", "Fuzzy Bar (Ho Chi Minh City)", "Malt Room (Hanoi)", "The Tavern (Ho Chi Minh City)", "East West Brewing Co. (Ho Chi Minh City)", "Tap Tap (Hanoi)"] },
    "China": { rating: 65, sorts: 150, price: 1.00, popular: "Snow Beer", best: "Tsingtao", bars: ["Great Leap Brewing (Beijing)", "Slow Boat Brewery Taproom (Beijing)", "Jing-A Brewing Co. (Beijing)", "NBeer Pub (Beijing)", "The Brew (Shanghai)", "Boxing Cat Brewery (Shanghai)", "Dr. Beer (Shanghai)", "Liquid Laundry (Shanghai)", "Tap House (Guangzhou)", "Stone Brewing Tap Room (Shanghai)"] },
    "Czech Republic": { rating: 52.33, sorts: 250, price: 1.50, popular: "Pilsner Urquell", best: "Budvar (Budweiser)", bars: ["Zlý Časy (Prague)", "Pivovarský Klub (Prague)", "BeerGeek Bar (Prague)", "Prague Beer Museum (Prague)", "U Zlatého Tygra (Prague)", "U Černého Vola (Prague)", "U Medvídků (Prague)", "U Sadu (Prague)", "U Pinkasů (Prague)", "Klášterní Pivnice (Prague)"] },
    "Germany": { rating: 50, sorts: 500, price: 2.80, popular: "Beck’s", best: "Weihenstephaner", bars: ["Hopfenreich (Berlin)", "Biererei Bar (Berlin)", "BRLO Brwhouse (Berlin)", "Zur Letzten Instanz (Berlin)", "Prater Garten (Berlin)", "Fruh am Dom (Cologne)", "Brauhaus Sion (Cologne)", "Päffgen (Cologne)", "Augustiner am Gendarmenmarkt (Berlin)", "Hofbräuhaus (Munich)"] },
    "Kazakhstan": { rating: 49.07, sorts: 40, price: 1.20, popular: "Shymkentskoe", best: "Derbes", bars: ["Beer House (Almaty)", "Harat’s Pub (Astana)", "Pivovaroff (Almaty)", "Guinness Pub (Astana)", "Bulldog Pub (Astana)", "The Shakespeare Pub (Almaty)", "Old English Pub (Almaty)", "Streat Bar (Almaty)", "Line Brew (Almaty)", "Beer Factory (Astana)"] },
    "Poland": { rating: 47.33, sorts: 100, price: 1.30, popular: "Żywiec", best: "Specjal", bars: ["PiwPaw (Warsaw)", "Kufle i Kapsle (Warsaw)", "Cuda na Kiju (Warsaw)", "Spiz (Wroclaw)", "Multi Qlti Tap Bar (Krakow)", "Prolog9 (Gdansk)", "AleBrowar (Gdynia)", "Hoppiness Beer & Food (Warsaw)", "Browariat (Katowice)", "Piwna Stopa (Poznan)"] },
    "Slovakia": { rating: 47, sorts: 100, price: 1.30, popular: "Zlatý Bažant", best: "Šariš", bars: ["Bratislavský Meštiansky Pivovar (Bratislava)", "Stupavar Beer Pub (Bratislava)", "Randal Club (Bratislava)", "Bernard Pub (Bratislava)", "Omama Pub (Bratislava)", "Beer Palace (Bratislava)", "100 Pív (Bratislava)", "Richtár Jakub (Bratislava)", "Pivovar Šariš (Veľký Šariš)", "Fabrika The Beer Pub (Bratislava)"] },
    "Ukraine": { rating: 47.33, sorts: 100, price: 1.30, popular: "Obolon", best: "Lvivske", bars: ["Pravda Beer Theatre (Lviv)", "Varvar Bar (Kyiv)", "Punkraft (Kyiv)", "Lisopylka (Kyiv)", "Drunken Monkey (Kyiv)", "Beer House (Odesa)", "Konteyner (Kyiv)", "Mova Craft Beer Bar (Lviv)", "This is Pivbar (Kyiv)", "Pivna Duma (Kyiv)"] },
    "Romania": { rating: 45, sorts: 80, price: 1.40, popular: "Ursus", best: "Timișoreana", bars: ["Berăria H (Bucharest)", "Beer O’Clock (Bucharest)", "Hop Hooligans Taproom (Bucharest)", "The Vintage Pub (Bucharest)", "Old Nick Pub (Brașov)", "Fabrica de Bere Bună (Bucharest)", "Mikkeller Bucharest (Bucharest)", "Control Club (Bucharest)", "Beer Station (Cluj-Napoca)", "The Shelter (Cluj-Napoca)"] },
    "Mexico": { rating: 45.14, sorts: 40, price: 1.20, popular: "Corona", best: "Modelo", bars: ["El Deposito (Mexico City)", "The Beer Box (Guadalajara)", "Hop The Beer Experience (Mexico City)", "La Belga (Mexico City)", "Fiebre de Malta (Mexico City)", "Tasting Room (Monterrey)", "Cervecería Primus (Mexico City)", "Beer Bros (Guadalajara)", "Hoppy House (Mexico City)", "El Trappist (Mexico City)"] },
    "Lithuania": { rating: 45, sorts: 80, price: 1.40, popular: "Švyturys", best: "Kalnapilis", bars: [] },
    "Croatia": { rating: 42, sorts: 60, price: 1.50, popular: "Ožujsko", best: "Karlovačko", bars: [] },
    "Russia": { rating: 42.4, sorts: 80, price: 1.50, popular: "Baltika", best: "Okhota", bars: [] },
    // Остальные страны можно добавить сюда
};