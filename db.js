// db.js - CONFIGURAÇÕES, FILTROS E MAPAS COMPLETOS

// 1. Regiões e Filtros (LISTA COMPLETA RESTAURADA)
const REGIONS_DB = [
    // Regiões Principais (Por Geração)
    { id: 'kanto_rb', name: 'Kanto (FR/LG)', start: 1, end: 151 },
    { id: 'johto_gs', name: 'Johto (HG/SS)', start: 152, end: 251 },
    { id: 'hoenn_rs', name: 'Hoenn (Emerald)', start: 252, end: 386 },
    { id: 'sinnoh', name: 'Sinnoh (Platinum)', start: 387, end: 493 },
    { id: 'unova', name: 'Unova (BW2)', start: 494, end: 649 },
    { id: 'kalos', name: 'Kalos (XY)', start: 650, end: 721 },
    { id: 'alola', name: 'Alola (SM)', start: 722, end: 809 },
    { id: 'galar', name: 'Galar (SwSh)', start: 810, end: 898 },
    { id: 'paldea', name: 'Paldea (SV)', start: 899, end: 1025 },
    
    // Filtros Acumulativos (National Dex) - TODOS RESTAURADOS
    { id: 'nat_gen1', name: 'National Dex (Gen 1)', start: 1, end: 151 },
    { id: 'nat_gen2', name: 'National Dex (Gen 2)', start: 1, end: 251 },
    { id: 'nat_gen3', name: 'National Dex (Gen 3)', start: 1, end: 386 },
    { id: 'nat_gen4', name: 'National Dex (Gen 4)', start: 1, end: 493 },
    { id: 'nat_gen5', name: 'National Dex (Gen 5)', start: 1, end: 649 },
    { id: 'nat_gen6', name: 'National Dex (Gen 6)', start: 1, end: 721 },
    { id: 'nat_gen7', name: 'National Dex (Gen 7)', start: 1, end: 809 },
    { id: 'nat_gen8', name: 'National Dex (Gen 8)', start: 1, end: 898 },
    { id: 'nat_gen9', name: 'National Dex (Full)', start: 1, end: 1025 }
];

// 2. Cores dos Tipos
const TYPE_COLORS = { 
    normal:'#A8A77A', fire:'#EE8130', water:'#6390F0', electric:'#F7D02C', grass:'#7AC74C', ice:'#96D9D6', 
    fighting:'#C22E28', poison:'#A33EA1', ground:'#E2BF65', flying:'#A98FF3', psychic:'#F95587', bug:'#A6B91A', 
    rock:'#B6A136', ghost:'#735797', dragon:'#6F35FC', dark:'#705746', steel:'#B7B7CE', fairy:'#D685AD' 
};

// 3. Mapas (Links do GitHub Raw)
const MAP_BASE = 'https://raw.githubusercontent.com/kelseyyoung/FRLGIronmonMap/main/public/images/maps/';
const HG_BASE = 'https://raw.githubusercontent.com/kelseyyoung/HGSSIronmonMap/main/public/images/maps/';
const EM_BASE = 'https://raw.githubusercontent.com/kelseyyoung/EmeraldIronmonMap/main/public/images/maps/';

const MAPS_DB = {
    // --- KANTO (FireRed / LeafGreen) ---
    'kanto_rb': {
        '00. Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Kanto_place_names.png',
        'Pallet Town': MAP_BASE+'Pallet%20Town.png', 
        'Viridian City': MAP_BASE+'Viridian%20City.png',
        'Pewter City': MAP_BASE+'Pewter%20City.png',
        'Cerulean City': MAP_BASE+'Cerulean%20City.png',
        'Vermilion City': MAP_BASE+'Vermilion%20City.png',
        'Lavender Town': MAP_BASE+'Lavender%20Town.png',
        'Celadon City': MAP_BASE+'Celadon%20City.png',
        'Fuchsia City': MAP_BASE+'Fuchsia%20City.png',
        'Saffron City': MAP_BASE+'Saffron%20City.png',
        'Cinnabar Island': MAP_BASE+'Cinnabar%20Island.png',
        'Indigo Plateau': MAP_BASE+'Indigo%20Plateau%20Exterior.png',
        'Rota 1': MAP_BASE+'Route%201.png', 'Rota 2': MAP_BASE+'Route%202.png', 'Rota 3': MAP_BASE+'Route%203.png', 'Rota 4': MAP_BASE+'Route%204.png',
        'Rota 5': MAP_BASE+'Route%205.png', 'Rota 6': MAP_BASE+'Route%206.png', 'Rota 7': MAP_BASE+'Route%207.png', 'Rota 8': MAP_BASE+'Route%208.png',
        'Rota 9': MAP_BASE+'Route%209.png', 'Rota 10': MAP_BASE+'Route%2010.png', 'Rota 11': MAP_BASE+'Route%2011.png', 'Rota 12': MAP_BASE+'Route%2012.png',
        'Rota 13': MAP_BASE+'Route%2013.png', 'Rota 14': MAP_BASE+'Route%2014.png', 'Rota 15': MAP_BASE+'Route%2015.png', 'Rota 16': MAP_BASE+'Route%2016.png',
        'Rota 17': MAP_BASE+'Route%2017.png', 'Rota 18': MAP_BASE+'Route%2018.png', 'Rota 19': MAP_BASE+'Route%2019.png', 'Rota 20': MAP_BASE+'Route%2020.png',
        'Rota 21': MAP_BASE+'Route%2021.png', 'Rota 22': MAP_BASE+'Route%2022.png', 'Rota 23': MAP_BASE+'Route%2023.png', 'Rota 24': MAP_BASE+'Route%2024.png', 'Rota 25': MAP_BASE+'Route%2025.png',
        'Viridian Forest': MAP_BASE+'Viridian%20Forest.png',
        'Mt Moon 1F': MAP_BASE+'Mt%20Moon%201F.png', 'Mt Moon B1F': MAP_BASE+'Mt%20Moon%20B1F.png', 'Mt Moon B2F': MAP_BASE+'Mt%20Moon%20B2F.png',
        'Rock Tunnel 1F': MAP_BASE+'Rock%20Tunnel%201F.png', 'Rock Tunnel B1F': MAP_BASE+'Rock%20Tunnel%20B1F.png',
        'Power Plant': MAP_BASE+'Power%20Plant.png',
        'Pokemon Tower 3F': MAP_BASE+'Pokemon%20Tower%203F.png', 'Pokemon Tower 4F': MAP_BASE+'Pokemon%20Tower%204F.png', 'Pokemon Tower 5F': MAP_BASE+'Pokemon%20Tower%205F.png', 'Pokemon Tower 6F': MAP_BASE+'Pokemon%20Tower%206F.png', 'Pokemon Tower 7F': MAP_BASE+'Pokemon%20Tower%207F.png',
        'Safari Center': MAP_BASE+'Safari%20Zone%20Center.png', 'Safari East': MAP_BASE+'Safari%20Zone%20Area%201.png', 'Safari North': MAP_BASE+'Safari%20Zone%20Area%202.png', 'Safari West': MAP_BASE+'Safari%20Zone%20Area%203.png',
        'Seafoam B1F': MAP_BASE+'Seafoam%20Islands%20B1F.png', 'Seafoam B2F': MAP_BASE+'Seafoam%20Islands%20B2F.png', 'Seafoam B3F': MAP_BASE+'Seafoam%20Islands%20B3F.png', 'Seafoam B4F': MAP_BASE+'Seafoam%20Islands%20B4F.png',
        'Mansion 1F': MAP_BASE+'Pokemon%20Mansion%201F.png', 'Mansion 2F': MAP_BASE+'Pokemon%20Mansion%202F.png', 'Mansion 3F': MAP_BASE+'Pokemon%20Mansion%203F.png', 'Mansion B1F': MAP_BASE+'Pokemon%20Mansion%20B1F.png',
        'Victory Road 1F': MAP_BASE+'Victory%20Road%201F.png', 'Victory Road 2F': MAP_BASE+'Victory%20Road%202F.png', 'Victory Road 3F': MAP_BASE+'Victory%20Road%203F.png',
        'Cerulean Cave 1F': MAP_BASE+'Cerulean%20Cave%201F.png', 'Cerulean Cave 2F': MAP_BASE+'Cerulean%20Cave%202F.png', 'Cerulean Cave B1F': MAP_BASE+'Cerulean%20Cave%20B1F.png',
        'Silph Co 1F': MAP_BASE+'Silph%20Co%201F.png', 'Silph Co 2F': MAP_BASE+'Silph%20Co%202F.png', 'Silph Co 3F': MAP_BASE+'Silph%20Co%203F.png', 'Silph Co 4F': MAP_BASE+'Silph%20Co%204F.png', 'Silph Co 5F': MAP_BASE+'Silph%20Co%205F.png', 'Silph Co 6F': MAP_BASE+'Silph%20Co%206F.png', 'Silph Co 7F': MAP_BASE+'Silph%20Co%207F.png', 'Silph Co 8F': MAP_BASE+'Silph%20Co%208F.png', 'Silph Co 9F': MAP_BASE+'Silph%20Co%209F.png', 'Silph Co 10F': MAP_BASE+'Silph%20Co%2010F.png', 'Silph Co 11F': MAP_BASE+'Silph%20Co%2011F.png',
        'Rocket Hideout B1F': MAP_BASE+'Rocket%20Hideout%20B1F.png', 'Rocket Hideout B2F': MAP_BASE+'Rocket%20Hideout%20B2F.png', 'Rocket Hideout B3F': MAP_BASE+'Rocket%20Hideout%20B3F.png', 'Rocket Hideout B4F': MAP_BASE+'Rocket%20Hideout%20B4F.png'
    },

    // --- JOHTO (HeartGold / SoulSilver) ---
    'johto_gs': {
        '00. Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/JohtoMap.png/800px-JohtoMap.png',
        'New Bark Town': HG_BASE + 'New%20Bark%20Town.png', 'Cherrygrove City': HG_BASE + 'Cherrygrove%20City.png', 'Violet City': HG_BASE + 'Violet%20City.png', 'Azalea Town': HG_BASE + 'Azalea%20Town.png', 'Goldenrod City': HG_BASE + 'Goldenrod%20City.png', 'Ecruteak City': HG_BASE + 'Ecruteak%20City.png', 'Olivine City': HG_BASE + 'Olivine%20City.png', 'Cianwood City': HG_BASE + 'Cianwood%20City.png', 'Mahogany Town': HG_BASE + 'Mahogany%20Town.png', 'Blackthorn City': HG_BASE + 'Blackthorn%20City.png',
        'Rota 29': HG_BASE + 'Route%2029.png', 'Rota 30': HG_BASE + 'Route%2030.png', 'Rota 31': HG_BASE + 'Route%2031.png', 'Rota 32': HG_BASE + 'Route%2032.png', 'Rota 33': HG_BASE + 'Route%2033.png', 'Rota 34': HG_BASE + 'Route%2034.png', 'Rota 35': HG_BASE + 'Route%2035.png', 'Rota 36': HG_BASE + 'Route%2036.png', 'Rota 37': HG_BASE + 'Route%2037.png', 'Rota 38': HG_BASE + 'Route%2038.png', 'Rota 39': HG_BASE + 'Route%2039.png', 'Rota 40': HG_BASE + 'Route%2040.png', 'Rota 41': HG_BASE + 'Route%2041.png', 'Rota 42': HG_BASE + 'Route%2042.png', 'Rota 43': HG_BASE + 'Route%2043.png', 'Rota 44': HG_BASE + 'Route%2044.png', 'Rota 45': HG_BASE + 'Route%2045.png', 'Rota 46': HG_BASE + 'Route%2046.png',
        'Union Cave 1F': HG_BASE + 'Union%20Cave%201F.png', 'Ruins of Alph': HG_BASE + 'Ruins%20of%20Alph%20Interior.png', 'Slowpoke Well': HG_BASE + 'Slowpoke%20Well%20B1F.png', 'Ilex Forest': HG_BASE + 'Ilex%20Forest.png', 'National Park': HG_BASE + 'National%20Park.png',
        'Burned Tower 1F': HG_BASE + 'Burned%20Tower%201F.png', 'Sprout Tower 1F': HG_BASE + 'Sprout%20Tower%201F.png', 'Tin Tower 1F': HG_BASE + 'Bell%20Tower%201F.png',
        'Whirl Islands B1F': HG_BASE + 'Whirl%20Islands%20B1F.png', 'Mt Mortar 1F': HG_BASE + 'Mt%20Mortar%201F%20Entrance.png', 'Lake of Rage': HG_BASE + 'Lake%20of%20Rage.png', 'Ice Path 1F': HG_BASE + 'Ice%20Path%201F.png', 'Dragons Den': HG_BASE + 'Dragons%20Den.png', 'Mt Silver': HG_BASE + 'Mt%20Silver.png'
    },

    // --- HOENN (Emerald) ---
    'hoenn_rs': { 
        '00. Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Hoenn_place_names.png',
        'Littleroot Town': EM_BASE + 'Littleroot%20Town.png', 'Oldale Town': EM_BASE + 'Oldale%20Town.png', 'Petalburg City': EM_BASE + 'Petalburg%20City.png', 'Rustboro City': EM_BASE + 'Rustboro%20City.png', 'Dewford Town': EM_BASE + 'Dewford%20Town.png', 'Slateport City': EM_BASE + 'Slateport%20City.png', 'Mauville City': EM_BASE + 'Mauville%20City.png', 'Verdanturf Town': EM_BASE + 'Verdanturf%20Town.png', 'Fallarbor Town': EM_BASE + 'Fallarbor%20Town.png', 'Lavaridge Town': EM_BASE + 'Lavaridge%20Town.png', 'Fortree City': EM_BASE + 'Fortree%20City.png', 'Lilycove City': EM_BASE + 'Lilycove%20City.png', 'Mossdeep City': EM_BASE + 'Mossdeep%20City.png', 'Sootopolis City': EM_BASE + 'Sootopolis%20City.png', 'Pacifidlog Town': EM_BASE + 'Pacifidlog%20Town.png', 'Ever Grande City': EM_BASE + 'Ever%20Grande%20City.png',
        'Rota 101': EM_BASE + 'Route%20101.png', 'Rota 102': EM_BASE + 'Route%20102.png', 'Rota 103': EM_BASE + 'Route%20103.png', 'Rota 104': EM_BASE + 'Route%20104.png', 'Rota 110': EM_BASE + 'Route%20110.png', 'Rota 111': EM_BASE + 'Route%20111.png', 'Rota 114': EM_BASE + 'Route%20114.png', 'Rota 117': EM_BASE + 'Route%20117.png', 'Rota 119': EM_BASE + 'Route%20119.png', 'Rota 120': EM_BASE + 'Route%20120.png',
        'Petalburg Woods': EM_BASE + 'Petalburg%20Woods.png', 'Granite Cave 1F': EM_BASE + 'Granite%20Cave%201F.png', 'Meteor Falls': EM_BASE + 'Meteor%20Falls%201F%201R.png', 'Mt Chimney': EM_BASE + 'Mt%20Chimney.png', 'Jagged Pass': EM_BASE + 'Jagged%20Pass.png', 'Safari Zone South': EM_BASE + 'Safari%20Zone%20South.png', 'Mt Pyre 1F': EM_BASE + 'Mt%20Pyre%201F.png', 'Seafloor Cavern': EM_BASE + 'Seafloor%20Cavern%20Room%201.png', 'Cave of Origin': EM_BASE + 'Cave%20of%20Origin%201F.png', 'Sky Pillar 5F': EM_BASE + 'Sky%20Pillar%205F.png', 'Victory Road 1F': EM_BASE + 'Victory%20Road%201F.png'
    },

    // --- OUTRAS REGIÕES (Mapas Gerais) ---
    'sinnoh': { 'Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sinnoh_place_names.png/800px-Sinnoh_place_names.png' },
    'unova': { 'Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Unova_place_names.png/800px-Unova_place_names.png' },
    'kalos': { 'Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kalos_place_names.png/800px-Kalos_place_names.png' },
    'alola': { 'Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Alola_USUM_Map.png/800px-Alola_USUM_Map.png' },
    'galar': { 'Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Galar_Map.png' },
    'paldea': { 'Mapa Geral': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Paldea_Map.png' }
};