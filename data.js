// GENERÁLT FÁJL — ne szerkeszd kézzel. Forrás: src/, build: npm run build
"use strict";
var BF = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/bridge.ts
  var bridge_exports = {};
  __export(bridge_exports, {
    DM: () => MENUS,
    M: () => M,
    SHAKE: () => SHAKE,
    SUPPS: () => SUPPS,
    W14: () => MENU_PATTERN_14,
    W58: () => MENU_PATTERN_58,
    WEEKS: () => WEEKS,
    buildShopList: () => buildShoppingList,
    dayTotals: () => dayTotals,
    fmtKg: () => fmtKg,
    formatAmount: () => formatAmount,
    menuTotals: () => menuTotals,
    trainDay: () => trainDay
  });

  // src/content/meals.ts
  var MEALS = {
    B1: {
      label: "REGGELI",
      time: "07:00",
      name: "Protein zabpehely",
      kcal: 640,
      p: 44,
      c: 78,
      f: 12,
      ingredients: [
        { food: "zabpehely", amount: 80 },
        { food: "felzsirtosTej", amount: 250 },
        { food: "protein", amount: 30 },
        { food: "banan", amount: 1 },
        { food: "fahej", amount: 1 }
      ],
      recipe: "1. Zabot tejjel felf\u0151zz\xFCk, 3 percig keverj\xFCk.\n2. Levessz\xFCk a t\u0171zr\u0151l, protein port belekeverj\xFCk.\n3. Ban\xE1nszeleteket r\xE1tesz\xFCk, fah\xE9jjal megsz\xF3rjuk."
    },
    B2: {
      label: "REGGELI",
      time: "07:00",
      name: "Toj\xE1sos reggeli szendvics",
      kcal: 580,
      p: 36,
      c: 52,
      f: 20,
      ingredients: [
        { food: "tojas", amount: 3 },
        { food: "teljesKiorlesuKenyer", amount: 2 },
        { food: "paradicsom", amount: 1 },
        { food: "olivaolaj", amount: 10 }
      ],
      recipe: "1. Toj\xE1sokat felverj\xFCk, s\xF3zzuk, borsozzuk.\n2. Olajon k\xF6zepes l\xE1ngon l\xE1gyra s\xFCtj\xFCk.\n3. Keny\xE9r mellette pir\xF3s\xEDtva, friss paradicsom."
    },
    B3: {
      label: "REGGELI",
      time: "07:00",
      name: "T\xFAr\xF3s zabpalacsinta",
      kcal: 610,
      p: 42,
      c: 62,
      f: 16,
      ingredients: [
        { food: "turo", amount: 200 },
        { food: "tojas", amount: 2 },
        { food: "zabpehely", amount: 60 },
        { food: "tejfol", amount: 30 }
      ],
      recipe: "1. \xD6sszes hozz\xE1val\xF3t botmixerrel sim\xE1ra keverj\xFCk.\n2. Teflonserpeny\u0151ben olajtalan kis palacsint\xE1kat s\xFCt\xFCnk.\n3. G\xF6r\xF6g joghurttal t\xE1lalunk."
    },
    B4: {
      label: "REGGELI",
      time: "07:00",
      name: "Joghurtt\xE1l + m\xFCzli",
      kcal: 540,
      p: 30,
      c: 70,
      f: 10,
      ingredients: [
        { food: "gorogJoghurt", amount: 300 },
        { food: "muzli", amount: 80 },
        { food: "afonya", amount: 100 },
        { food: "mez", amount: 15 }
      ],
      recipe: "1. Joghurtot t\xE1lba \xF6ntj\xFCk.\n2. M\xFCzlit \xE9s \xE1fony\xE1t r\xE1tessz\xFCk.\n3. M\xE9zzel megcseppegtj\xFCk."
    },
    B5: {
      label: "REGGELI",
      time: "07:00",
      name: "Protein smoothie t\xE1l",
      kcal: 590,
      p: 40,
      c: 72,
      f: 12,
      ingredients: [
        { food: "kefir", amount: 250 },
        { food: "protein", amount: 25 },
        { food: "banan", amount: 1 },
        { food: "zabpehely", amount: 50 },
        { food: "fagyasztottEper", amount: 100 }
      ],
      recipe: "1. Kefirt, protein port \xE9s epret turmixolunk.\n2. Smoothie t\xE1lba \xF6ntj\xFCk.\n3. Zabot \xE9s ban\xE1nszeleteket r\xE1tessz\xFCk."
    },
    B6: {
      label: "REGGELI",
      time: "07:00",
      name: "Avok\xE1d\xF3s toj\xE1s keny\xE9rrel",
      kcal: 620,
      p: 28,
      c: 44,
      f: 30,
      ingredients: [
        { food: "tojas", amount: 2 },
        { food: "avokado", amount: 0.5 },
        { food: "teljesKiorlesuKenyer", amount: 2 },
        { food: "citromle", amount: 5 }
      ],
      recipe: "1. Toj\xE1sokat kem\xE9nyre f\u0151zz\xFCk (8 perc).\n2. Avok\xE1d\xF3t vill\xE1val \xF6sszez\xFAzzuk citroml\xE9vel, s\xF3val.\n3. Keny\xE9rre kenj\xFCk, toj\xE1sszeleteket r\xE1tessz\xFCk."
    },
    B7: {
      label: "REGGELI",
      time: "07:00",
      name: "Zabk\xE1sa gy\xFCm\xF6lccsel",
      kcal: 570,
      p: 36,
      c: 74,
      f: 12,
      ingredients: [
        { food: "zabpehely", amount: 90 },
        { food: "tej", amount: 200 },
        { food: "gorogJoghurt", amount: 150 },
        { food: "eper", amount: 150 },
        { food: "chiaMag", amount: 10 }
      ],
      recipe: "1. Zabot tejjel 4 percig f\u0151zz\xFCk.\n2. T\xE1lba \xF6ntj\xFCk, r\xE1tessz\xFCk a joghurtot.\n3. Epret felv\xE1gjuk, chia magot sz\xF3runk r\xE1."
    },
    L1: {
      label: "EB\xC9D",
      time: "12:30",
      name: "Csirkemell rizs + brokkoli",
      kcal: 690,
      p: 55,
      c: 78,
      f: 14,
      ingredients: [
        { food: "csirkemell", amount: 180 },
        { food: "rizs", amount: 120, label: "Rizs (sz\xE1raz)" },
        { food: "brokkoli", amount: 250 },
        { food: "olivaolaj", amount: 10 },
        { food: "fokhagyma", amount: 2 }
      ],
      recipe: "1. Csirkemellet bef\u0171szerezz\xFCk, serpeny\u0151ben 12 perc alatt megs\xFCtj\xFCk.\n2. Rizst k\xE9tszeres s\xF3zott v\xEDzben 18 percig f\u0151zz\xFCk.\n3. Brokkolit 5 percig p\xE1roljuk olajban, fokhagym\xE1val."
    },
    L2: {
      label: "EB\xC9D",
      time: "12:30",
      name: "Bolognese t\xE9szta",
      kcal: 700,
      p: 48,
      c: 85,
      f: 16,
      ingredients: [
        { food: "daraltPulyka", amount: 180 },
        { food: "teszta", amount: 130 },
        { food: "paradicsomszosz", amount: 200 },
        { food: "hagyma", amount: 1 },
        { food: "fokhagyma", amount: 2 }
      ],
      recipe: "1. Hagym\xE1n, fokhagym\xE1n \xFCvegesre pir\xEDtjuk.\n2. Dar\xE1lt pulyk\xE1t hozz\xE1adjuk, 8 percig s\xFCtj\xFCk.\n3. Paradicsomsz\xF3sszal 10 percig rotyogtatjuk.\n4. F\u0151tt t\xE9szt\xE1val \xF6sszeforgatjuk."
    },
    L3: {
      label: "EB\xC9D",
      time: "12:30",
      name: "Csirke wrap sal\xE1ta",
      kcal: 660,
      p: 50,
      c: 65,
      f: 18,
      ingredients: [
        { food: "csirkemell", amount: 160 },
        { food: "teljesKiorlesuTortilla", amount: 2 },
        { food: "fejesSalata", amount: 100 },
        { food: "paradicsom", amount: 1 },
        { food: "joghurtosOntet", amount: 50 }
      ],
      recipe: "1. Csirkemellet cs\xEDkokra v\xE1gjuk, serpeny\u0151ben megs\xFCtj\xFCk.\n2. Tortill\xE1t mikroban 30 mp-ig meleg\xEDtj\xFCk.\n3. Sal\xE1ta, paradicsom, csirke, \xF6ntet \u2014 g\xF6ngy\xF6lj\xFCk be."
    },
    L4: {
      label: "EB\xC9D",
      time: "12:30",
      name: "V\xF6r\xF6slencsef\u0151zel\xE9k",
      kcal: 650,
      p: 36,
      c: 90,
      f: 8,
      ingredients: [
        { food: "voroslencse", amount: 150 },
        { food: "sargarepa", amount: 2 },
        { food: "hagyma", amount: 1 },
        { food: "fokhagyma", amount: 2 },
        { food: "kenyer", amount: 2 }
      ],
      recipe: "1. Hagym\xE1n, fokhagym\xE1n olajban dinsztel\xFCnk.\n2. S\xE1rgar\xE9pa, lencse hozz\xE1ad, alapl\xE9vel fel\xF6ntj\xFCk.\n3. 20 percig f\u0151zz\xFCk, botmixerrel turmixoljuk.\n4. Keny\xE9rrel t\xE1lalunk."
    },
    L5: {
      label: "EB\xC9D",
      time: "12:30",
      name: "Tonh\xE1lsal\xE1ta + quinoa",
      kcal: 640,
      p: 52,
      c: 68,
      f: 14,
      ingredients: [
        { food: "tonhalKonzerv", amount: 280 },
        { food: "quinoa", amount: 100 },
        { food: "uborka", amount: 1 },
        { food: "paradicsom", amount: 1 },
        { food: "citromle", amount: 10 },
        { food: "olivaolaj", amount: 10 }
      ],
      recipe: "1. Quino\xE1t dupla s\xF3zott v\xEDzben 15 percig f\u0151zz\xFCk.\n2. Z\xF6lds\xE9geket felkock\xE1zzuk.\n3. Mindent \xF6sszekever\xFCnk, citroml\xE9vel \xE9s olajjal locsoljuk."
    },
    L6: {
      label: "EB\xC9D",
      time: "12:30",
      name: "Pulyka + barna rizs sal\xE1ta",
      kcal: 700,
      p: 56,
      c: 80,
      f: 14,
      ingredients: [
        { food: "pulykaszelet", amount: 200 },
        { food: "barnaRizs", amount: 120 },
        { food: "fejesSalata", amount: 150 },
        { food: "paradicsom", amount: 1 },
        { food: "ontet", amount: 40 }
      ],
      recipe: "1. Pulykaszeletet bes\xF3zzuk, serpeny\u0151ben 2x5 perc alatt megs\xFCtj\xFCk.\n2. Barna rizst 40 perc alatt f\u0151zz\xFCk.\n3. Sal\xE1ta + paradicsom + rizs + pulyka + \xF6ntet."
    },
    L7: {
      label: "EB\xC9D",
      time: "12:30",
      name: "Feh\xE9rbab leves + pulyka",
      kcal: 720,
      p: 56,
      c: 82,
      f: 14,
      ingredients: [
        { food: "feherbabKonzerv", amount: 400 },
        { food: "pulykaszelet", amount: 150 },
        { food: "hagyma", amount: 1 },
        { food: "sargarepa", amount: 2 },
        { food: "zoldsegAlaple", amount: 500 }
      ],
      recipe: "1. Z\xF6lds\xE9geket kock\xE1zzuk, olajban dinsztel\xFCnk.\n2. Alapl\xE9vel fel\xF6ntj\xFCk, babbal 15 percig f\u0151zz\xFCk.\n3. Pulykaszeletet k\xFCl\xF6n megs\xFCtj\xFCk, leves mell\xE9 t\xE1lalunk."
    },
    S1: {
      label: "UZSONNA",
      time: "15:30",
      name: "T\xFAr\xF3 + alma + di\xF3",
      kcal: 320,
      p: 28,
      c: 28,
      f: 12,
      ingredients: [
        { food: "turo", amount: 200 },
        { food: "alma", amount: 1 },
        { food: "dio", amount: 30 }
      ],
      recipe: "1. T\xFAr\xF3t t\xE1lba tessz\xFCk.\n2. Alm\xE1t felkock\xE1zzuk, di\xF3val r\xE1tessz\xFCk."
    },
    S2: {
      label: "UZSONNA",
      time: "15:30",
      name: "G\xF6r\xF6g joghurt + m\xE9z + di\xF3",
      kcal: 290,
      p: 22,
      c: 30,
      f: 12,
      ingredients: [
        { food: "gorogJoghurt", amount: 250 },
        { food: "mez", amount: 15 },
        { food: "dio", amount: 25 }
      ],
      recipe: "1. Joghurtot t\xE1lba \xF6ntj\xFCk.\n2. M\xE9zzel megcseppegtj\xFCk, di\xF3val megsz\xF3rjuk."
    },
    S3: {
      label: "UZSONNA",
      time: "15:30",
      name: "Mogyor\xF3vaj + ban\xE1n",
      kcal: 340,
      p: 14,
      c: 42,
      f: 14,
      ingredients: [
        { food: "mogyorovaj", amount: 40 },
        { food: "banan", amount: 1 },
        { food: "rizsGaletta", amount: 2 }
      ],
      recipe: "1. Rizs galett\xE1ra kenj\xFCk a mogyor\xF3vajat.\n2. Ban\xE1nszeleteket r\xE1tessz\xFCk."
    },
    S4: {
      label: "UZSONNA",
      time: "15:30",
      name: "F\u0151tt toj\xE1s + z\xF6lds\xE9grudak",
      kcal: 250,
      p: 22,
      c: 8,
      f: 14,
      ingredients: [
        { food: "tojas", amount: 2 },
        { food: "uborka", amount: 1 },
        { food: "sargarepa", amount: 2 }
      ],
      recipe: "1. Toj\xE1sokat kem\xE9nyre f\u0151zz\xFCk (8 perc), leh\u0171tj\xFCk, megh\xE1mozzuk.\n2. Z\xF6lds\xE9geket rudakra v\xE1gjuk."
    },
    D1: {
      label: "VACSORA",
      time: "19:00",
      name: "Pulykamell + p\xE1rolt burgonya",
      kcal: 650,
      p: 52,
      c: 65,
      f: 16,
      ingredients: [
        { food: "pulykamell", amount: 200 },
        { food: "burgonya", amount: 250 },
        { food: "paprika", amount: 1 },
        { food: "paradicsom", amount: 1 },
        { food: "olivaolaj", amount: 10 }
      ],
      recipe: "1. Burgony\xE1t megh\xE1mozzuk, kock\xE1zzuk, 20 percig f\u0151zz\xFCk.\n2. Pulyk\xE1t bef\u0171szerezz\xFCk, serpeny\u0151ben megs\xFCtj\xFCk (2x6 perc).\n3. Z\xF6lds\xE9geket frissen t\xE1lalunk mell\xE9."
    },
    D2: {
      label: "VACSORA",
      time: "19:00",
      name: "Lazac + \xE9desburgonya",
      kcal: 700,
      p: 48,
      c: 62,
      f: 26,
      ingredients: [
        { food: "lazacfile", amount: 180 },
        { food: "edesburgonya", amount: 300 },
        { food: "citromle", amount: 15 },
        { food: "brokkoli", amount: 150 },
        { food: "olivaolaj", amount: 10 }
      ],
      recipe: "1. \xC9desburgony\xE1t s\xFCt\u0151ben 200C-on 30 percig s\xFCtj\xFCk.\n2. Lazacot citroml\xE9vel meglocsoljuk, 180C-on 12 perc.\n3. Brokkolit p\xE1roljuk, mindet egy\xFCtt t\xE1lalunk."
    },
    D3: {
      label: "VACSORA",
      time: "19:00",
      name: "Csirkecomb + bulgur",
      kcal: 660,
      p: 52,
      c: 64,
      f: 18,
      ingredients: [
        { food: "csirkecomb", amount: 200 },
        { food: "bulgur", amount: 120 },
        { food: "brokkoli", amount: 200 },
        { food: "fokhagyma", amount: 3 }
      ],
      recipe: "1. Csirkecombokat fokhagym\xE1s-rozmarinos olajba forgatjuk.\n2. 200C s\xFCt\u0151ben 30 percig s\xFCtj\xFCk.\n3. Bulgurt k\xE9tszeres v\xEDzben 15 percig f\u0151zz\xFCk, brokkolit p\xE1roljuk mell\xE9."
    },
    D4: {
      label: "VACSORA",
      time: "19:00",
      name: "Rakott pulyk\xE1s z\xF6lds\xE9g",
      kcal: 620,
      p: 50,
      c: 52,
      f: 18,
      ingredients: [
        { food: "daraltPulyka", amount: 200 },
        { food: "cukkini", amount: 200 },
        { food: "paradicsom", amount: 2 },
        { food: "hagyma", amount: 1 },
        { food: "tejfol", amount: 80 }
      ],
      recipe: "1. Hagym\xE1n olajban pir\xEDtjuk, pulyk\xE1t hozz\xE1ad, 8 percig s\xFCtj\xFCk.\n2. Cukkinit \xE9s paradicsomot felszeletelj\xFCk, r\xE9tegezz\xFCk.\n3. Tejf\xF6lt kanalazzuk r\xE1, 180C-on 20 percig s\xFCtj\xFCk."
    },
    D5: {
      label: "VACSORA",
      time: "19:00",
      name: "Paradicsomos csirke + rizs",
      kcal: 680,
      p: 55,
      c: 76,
      f: 14,
      ingredients: [
        { food: "csirkemell", amount: 200 },
        { food: "rizs", amount: 120 },
        { food: "paradicsomszosz", amount: 200 },
        { food: "hagyma", amount: 1 },
        { food: "fokhagyma", amount: 2 }
      ],
      recipe: "1. Csirkemellet felkock\xE1zzuk, serpeny\u0151ben megs\xFCtj\xFCk.\n2. Hagym\xE1t, fokhagym\xE1t hozz\xE1adunk, paradicsomsz\xF3sszal fel\xF6ntj\xFCk.\n3. 10 percig f\u0151zz\xFCk, rizzsel t\xE1lalunk."
    },
    D6: {
      label: "VACSORA",
      time: "19:00",
      name: "Z\xF6lds\xE9ges omlett + keny\xE9r",
      kcal: 550,
      p: 38,
      c: 44,
      f: 22,
      ingredients: [
        { food: "tojas", amount: 4 },
        { food: "cukkini", amount: 150 },
        { food: "paprika", amount: 1 },
        { food: "reszeltSajt", amount: 40 },
        { food: "kenyer", amount: 2 }
      ],
      recipe: "1. Z\xF6lds\xE9geket felkock\xE1zzuk, olajban 4 percig pir\xEDtjuk.\n2. Felvert toj\xE1st r\xE1\xF6ntj\xFCk, fed\u0151 alatt 5 percig s\xFCtj\xFCk.\n3. Sajtot resz\xE9l\xFCnk, keny\xE9rrel t\xE1lalunk."
    },
    D7: {
      label: "VACSORA",
      time: "19:00",
      name: "S\xFClt lazac + z\xF6lds\xE9g + burgonya",
      kcal: 690,
      p: 50,
      c: 60,
      f: 26,
      ingredients: [
        { food: "lazacfile", amount: 180 },
        { food: "burgonya", amount: 200 },
        { food: "zoldbab", amount: 150 },
        { food: "citromle", amount: 10 },
        { food: "kapribogyo", amount: 1 }
      ],
      recipe: "1. Burgony\xE1t f\u0151zz\xFCk 20 percig.\n2. Lazacot citroml\xE9vel, kapribogy\xF3val 180C-on 15 percig s\xFCtj\xFCk.\n3. Z\xF6ldbabot p\xE1roljuk, mindent egy\xFCtt t\xE1lalunk."
    }
  };
  function getMeal(id) {
    const meal = MEALS[id];
    if (!meal) throw new Error(`Ismeretlen \xE9tel a men\xFCben: "${id}"`);
    return meal;
  }
  var MEAL_IDS = Object.keys(MEALS);

  // src/content/menus.ts
  var MENUS = {
    1: { meals: ["B1", "L1", "S1", "D1"] },
    2: { meals: ["B2", "L2", "S2", "D2"] },
    3: { meals: ["B3", "L3", "S3", "D3"] },
    4: { meals: ["B4", "L4", "S4", "D4"] },
    5: { meals: ["B5", "L5", "S3", "D5"] },
    6: { meals: ["B6", "L6", "S2", "D6"] },
    7: { meals: ["B7", "L7", "S1", "D7"] }
  };
  function getMenu(id) {
    const menu = MENUS[id];
    if (!menu) throw new Error(`Ismeretlen napi men\xFC: "${id}"`);
    return menu;
  }
  var SHAKE = { kcal: 120, p: 24 };

  // src/content/supplements.ts
  var SUPPS = [
    {
      icon: "fa-jar",
      color: "var(--gold)",
      name: "Scitec Whey Protein",
      when: "Edz\xE9s ut\xE1n 30 percen bel\xFCl",
      desc: "30g feh\xE9rjepor 250ml v\xEDzzel vagy tejjel. Edz\xE9smentes napokon is fogyaszthat\xF3 reggel vagy uzsonnak\xE9nt. A leucin-tartalom optim\xE1lisan stimul\xE1lja az izomn\xF6veked\xE9st."
    },
    {
      icon: "fa-tablets",
      color: "var(--cyan)",
      name: "Magn\xE9zium (Mg) 375mg",
      when: "Lefekv\xE9s el\u0151tt 30\u201360 perccel",
      desc: "Magn\xE9zium-biszglicin\xE1t forma a legjobb felsz\xEDv\xF3d\xE1shoz. Seg\xEDti az izomrelax\xE1ci\xF3t, cs\xF6kkenti az esti g\xF6rcs\xF6ket, jav\xEDtja az alv\xE1smin\u0151s\xE9get."
    },
    {
      icon: "fa-capsules",
      color: "var(--gold2)",
      name: "Kalcium (Ca) 500mg",
      when: "Reggel \xE9tkez\xE9s k\xF6zben",
      desc: "\xC9tkez\xE9ssel egy\xFCtt szedend\u0151. NEM szedend\u0151 magn\xE9ziummal egy id\u0151ben \u2014 egym\xE1s felsz\xEDv\xF3d\xE1s\xE1t zavarj\xE1k."
    },
    {
      icon: "fa-fire",
      color: "var(--green)",
      name: "Kreatin (opcion\xE1lis)",
      when: "B\xE1rmikor, naponta 5g",
      desc: "Kreatin-monohidr\xE1t 5g/nap, minden nap. T\xF6lt\xE9si f\xE1zis nem sz\xFCks\xE9ges. 3\u20134 h\xE9t ut\xE1n teljes hat\xE1s: er\u0151n\xF6veked\xE9s, r\xF6videbb regener\xE1ci\xF3."
    }
  ];

  // src/content/plan.ts
  var START = new Date(2026, 5, 9);
  var MONTHS = [
    "jan.",
    "febr.",
    "m\xE1rc.",
    "\xE1pr.",
    "m\xE1j.",
    "j\xFAn.",
    "j\xFAl.",
    "aug.",
    "szept.",
    "okt.",
    "nov.",
    "dec."
  ];
  var DAY_NAMES_HU = [
    "H\xE9tf\u0151",
    "Kedd",
    "Szerda",
    "Cs\xFCt\xF6rt\xF6k",
    "P\xE9ntek",
    "Szombat",
    "Vas\xE1rnap"
  ];
  var DAY_KEYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var DAY_TYPES = ["train", "train", "rest", "train", "train", "rest", "rest"];
  var MENU_PATTERN_14 = [1, 1, 2, 2, 3, 3, 4];
  var MENU_PATTERN_58 = [5, 5, 6, 6, 7, 7, 4];
  var WEEK_COUNT = 8;

  // src/content/foods.ts
  var FOODS = {
    // --- reggeli ---
    zabpehely: { name: "Zabpehely", category: "Gabona", unit: "g" },
    felzsirtosTej: { name: "F\xE9lzs\xEDros tej", category: "Tejterm\xE9k", unit: "ml" },
    tej: { name: "Tej", category: "Tejterm\xE9k", unit: "ml" },
    protein: { name: "Protein por", category: "Feh\xE9rje", unit: "g" },
    banan: { name: "Ban\xE1n", category: "Gy\xFCm\xF6lcs", unit: "db" },
    fahej: { name: "Fah\xE9j", category: "F\u0171szer", unit: "csipet", pantry: true },
    tojas: { name: "Toj\xE1s", category: "Feh\xE9rje", unit: "db" },
    teljesKiorlesuKenyer: { name: "Teljes ki\u0151rl\xE9s\u0171 keny\xE9r", category: "Gabona", unit: "szelet" },
    kenyer: { name: "Keny\xE9r", category: "Gabona", unit: "szelet" },
    turo: { name: "T\xFAr\xF3", category: "Tejterm\xE9k", unit: "g" },
    tejfol: { name: "Tejf\xF6l", category: "Tejterm\xE9k", unit: "g" },
    gorogJoghurt: { name: "G\xF6r\xF6g joghurt", category: "Tejterm\xE9k", unit: "g" },
    muzli: { name: "M\xFCzli", category: "Gabona", unit: "g" },
    afonya: { name: "\xC1fonya", category: "Gy\xFCm\xF6lcs", unit: "g" },
    mez: { name: "M\xE9z", category: "Egy\xE9b", unit: "ml" },
    kefir: { name: "Kefir", category: "Tejterm\xE9k", unit: "ml" },
    fagyasztottEper: { name: "Fagyasztott eper", category: "Gy\xFCm\xF6lcs", unit: "g" },
    avokado: { name: "Avok\xE1d\xF3", category: "Z\xF6lds\xE9g", unit: "db" },
    citromle: { name: "Citroml\xE9", category: "Egy\xE9b", unit: "ml" },
    eper: { name: "Eper", category: "Gy\xFCm\xF6lcs", unit: "g" },
    chiaMag: { name: "Chia mag", category: "Egy\xE9b", unit: "g" },
    // --- ebéd ---
    csirkemell: { name: "Csirkemell", category: "Feh\xE9rje", unit: "g" },
    rizs: { name: "Rizs", category: "Gabona", unit: "g" },
    barnaRizs: { name: "Barna rizs", category: "Gabona", unit: "g" },
    brokkoli: { name: "Brokkoli", category: "Z\xF6lds\xE9g", unit: "g" },
    fokhagyma: {
      name: "Fokhagyma",
      category: "Z\xF6lds\xE9g",
      unit: "gerezd",
      purchase: { unit: "fej", size: 4 }
    },
    daraltPulyka: { name: "Dar\xE1lt pulyka", category: "Feh\xE9rje", unit: "g" },
    teszta: { name: "T\xE9szta", category: "Gabona", unit: "g" },
    paradicsomszosz: { name: "Paradicsomsz\xF3sz", category: "Egy\xE9b", unit: "ml" },
    hagyma: { name: "Hagyma", category: "Z\xF6lds\xE9g", unit: "db" },
    teljesKiorlesuTortilla: { name: "Teljes ki\u0151rl\xE9s\u0171 tortilla", category: "Gabona", unit: "db" },
    fejesSalata: { name: "Fejes sal\xE1ta", category: "Z\xF6lds\xE9g", unit: "g" },
    joghurtosOntet: { name: "Joghurtos \xF6ntet", category: "Egy\xE9b", unit: "ml" },
    ontet: { name: "\xD6ntet", category: "Egy\xE9b", unit: "ml" },
    voroslencse: { name: "V\xF6r\xF6slencse", category: "Gabona", unit: "g" },
    sargarepa: { name: "S\xE1rgar\xE9pa", category: "Z\xF6lds\xE9g", unit: "db" },
    tonhalKonzerv: {
      name: "Tonhal konzerv",
      category: "Feh\xE9rje",
      unit: "g",
      purchase: { unit: "db", size: 140 }
    },
    quinoa: { name: "Quinoa", category: "Gabona", unit: "g" },
    uborka: { name: "Uborka", category: "Z\xF6lds\xE9g", unit: "db" },
    pulykaszelet: { name: "Pulykaszelet", category: "Feh\xE9rje", unit: "g" },
    feherbabKonzerv: { name: "Feh\xE9rbab konzerv", category: "Feh\xE9rje", unit: "g" },
    zoldsegAlaple: { name: "Z\xF6lds\xE9g alapl\xE9", category: "Egy\xE9b", unit: "ml" },
    // --- uzsonna ---
    alma: { name: "Alma", category: "Gy\xFCm\xF6lcs", unit: "db" },
    dio: { name: "Di\xF3", category: "Egy\xE9b", unit: "g" },
    mogyorovaj: { name: "Mogyor\xF3vaj (100% term\xE9szetes)", category: "Egy\xE9b", unit: "g" },
    rizsGaletta: { name: "Rizs galetta", category: "Gabona", unit: "db" },
    // --- vacsora ---
    pulykamell: { name: "Pulykamell", category: "Feh\xE9rje", unit: "g" },
    burgonya: { name: "Burgonya", category: "Z\xF6lds\xE9g", unit: "g" },
    paprika: { name: "Paprika", category: "Z\xF6lds\xE9g", unit: "db" },
    paradicsom: { name: "Paradicsom", category: "Z\xF6lds\xE9g", unit: "db" },
    olivaolaj: { name: "Ol\xEDvaolaj", category: "Egy\xE9b", unit: "ml" },
    lazacfile: { name: "Lazacfil\xE9", category: "Feh\xE9rje", unit: "g" },
    edesburgonya: { name: "\xC9desburgonya", category: "Z\xF6lds\xE9g", unit: "g" },
    csirkecomb: { name: "Csirkecomb (csont n\xE9lk\xFCl)", category: "Feh\xE9rje", unit: "g" },
    bulgur: { name: "Bulgur", category: "Gabona", unit: "g" },
    cukkini: { name: "Cukkini", category: "Z\xF6lds\xE9g", unit: "g" },
    reszeltSajt: { name: "Reszelt sajt", category: "Tejterm\xE9k", unit: "g" },
    zoldbab: { name: "Z\xF6ldbab", category: "Z\xF6lds\xE9g", unit: "g" },
    kapribogyo: { name: "Kapribogy\xF3", category: "Egy\xE9b", unit: "ek" }
  };
  function getFood(id) {
    const food = FOODS[id];
    if (!food) throw new Error(`Ismeretlen \xE9tel a katal\xF3gusban: "${id}"`);
    return food;
  }
  var FOOD_IDS = Object.keys(FOODS);

  // src/domain/progression.ts
  function dayPattern(weekIndex) {
    return weekIndex < 4 ? MENU_PATTERN_14 : MENU_PATTERN_58;
  }
  function phaseFor(weekIndex) {
    return Math.floor(weekIndex / 2) + 1;
  }
  function isRepeatDay(dayIndex) {
    return dayIndex === 1 || dayIndex === 3 || dayIndex === 5;
  }
  function addDays(base, days) {
    const d = new Date(base);
    d.setDate(d.getDate() + days);
    return d;
  }
  function shortDate(d) {
    return `${d.getDate()}. ${MONTHS[d.getMonth()]}`;
  }
  function buildWeeks(weekCount = WEEK_COUNT) {
    const weeks = [];
    for (let w = 0; w < weekCount; w++) {
      const pattern = dayPattern(w);
      const first = addDays(START, w * 7);
      const last = addDays(START, w * 7 + 6);
      const days = [];
      for (let d = 0; d < 7; d++) {
        const date = addDays(START, w * 7 + d);
        days.push({
          name: DAY_NAMES_HU[d],
          key: DAY_KEYS[d],
          dateStr: shortDate(date),
          type: DAY_TYPES[d],
          dm: pattern[d],
          isRepeat: isRepeatDay(d)
        });
      }
      weeks.push({
        label: `${w + 1}. h\xE9t`,
        dates: `${shortDate(first)} \u2014 ${shortDate(last)}`,
        days,
        phase: phaseFor(w)
      });
    }
    return weeks;
  }
  var WEEKS = buildWeeks();

  // src/content/training.ts
  var TRAIN = {
    Mon: {
      focus: "Mell + Tricepsz",
      tag: "push",
      wu: "5 perc: 3\xD710 fekv\u0151t\xE1masz, v\xE1llmobiliz\xE1ci\xF3, k\xE1rk\xF6rz\xE9s",
      ex: [
        { n: "Fekvenyom\xE1s", det: "R\xFAddal", s: 4, r: "8", base: 60 },
        { n: "D\u0151lt pados nyom\xE1s", det: "K\xE9zis\xFAlyok", s: 3, r: "10", base: 22 },
        { n: "T\xE1rogat\xE1s k\xE1belen", det: "Keresztezett", s: 3, r: "12", base: 15 },
        { n: "Francia nyom\xE1s", det: "EZ-r\xFAd", s: 3, r: "10", base: 25 },
        { n: "Tricepsz letol\xE1s", det: "K\xE1bel", s: 3, r: "12", base: 30 }
      ],
      cd: "5 perc ny\xFAjt\xE1s: mellizom, tricepsz"
    },
    Tue: {
      focus: "H\xE1t + Bicepsz",
      tag: "pull",
      wu: "5 perc: v\xE1llmobiliz\xE1ci\xF3, k\xE9zk\xF6rz\xE9s, el\u0151k\xE9sz\xEDt\u0151 h\xFAz\xE1s",
      ex: [
        { n: "H\xFAz\xF3dzkod\xE1s", det: "Semleges fog\xE1s", s: 3, r: "max 6\u201310", base: null },
        { n: "Evez\xE9s r\xFAddal", det: "Hajolt t\xF6rzs", s: 4, r: "8", base: 50 },
        { n: "Lat pulldown", det: "Sz\xE9les fog\xE1s", s: 3, r: "10", base: 55 },
        { n: "K\xE9zis\xFAlyos evez\xE9s", det: "Egykaros", s: 3, r: "12", base: 24 },
        { n: "Bicepsz curl", det: "R\xFAddal", s: 4, r: "10", base: 30 },
        { n: "Kalap\xE1csos curl", det: "K\xE9zis\xFAlyok", s: 3, r: "12", base: 14 }
      ],
      cd: "Ny\xFAjt\xE1s: sz\xE9les h\xE1t, bicepsz, alkar"
    },
    Thu: {
      focus: "V\xE1ll + Has",
      tag: "shoulders",
      wu: "5 perc: oldalemel\xE9s k\xF6nny\u0171 s\xFAllyal, nyakk\xF6rz\xE9s",
      ex: [
        { n: "\xDCl\u0151 v\xE1llnyom\xE1s", det: "K\xE9zis\xFAlyok", s: 4, r: "8", base: 20 },
        { n: "Oldals\xF3 emel\xE9s", det: "K\xE9zis\xFAlyok", s: 3, r: "12", base: 10 },
        { n: "El\u0151emel\xE9s", det: "K\xE9zis\xFAlyok", s: 3, r: "12", base: 10 },
        { n: "H\xE1ts\xF3 deltoid g\xE9p", det: "Hajolva", s: 3, r: "12", base: 20 },
        { n: "Plank", det: "Statikus tart\xE1s", s: 3, r: "45 mp", base: null },
        { n: "Haspr\xE9s", det: "T\xE9rd felh\xFAz\xE1ssal", s: 3, r: "20", base: null },
        { n: "L\xE1bemel\xE9ses haspr\xE9s", det: "Hanyatt fekve", s: 3, r: "15", base: null }
      ],
      cd: "Ny\xFAjt\xE1s: v\xE1ll, der\xE9kt\xE1j, cs\xEDp\u0151"
    },
    Fri: {
      focus: "K\xF6nny\u0171 L\xE1b + \xD6sszefoglal\xF3",
      tag: "legs",
      wu: "5 perc: helyben j\xE1r\xE1s, l\xE1bk\xF6rz\xE9s, guggol\xE1s s\xFAly n\xE9lk\xFCl",
      ex: [
        { n: "L\xE1bnyom\xE1s (g\xE9p)", det: "K\xF6nny\u0171 s\xFAly!", s: 3, r: "12", base: 80 },
        { n: "L\xE1bhajl\xEDt\xE1s g\xE9p", det: "Fekv\u0151", s: 3, r: "12", base: 30 },
        { n: "V\xE1dliemel\xE9s", det: "\xC1llva, k\xE9zis\xFAlyokkal", s: 4, r: "15", base: 20 },
        { n: "Kettlebell swing", det: "Cs\xEDp\u0151lend\xEDt\xE9s", s: 3, r: "15", base: 16 },
        { n: "Pull-through", det: "K\xE1bel, als\xF3 cs\xFAszda", s: 3, r: "12", base: 20 }
      ],
      cd: "10 perc ny\xFAjt\xE1s: comb, v\xE1dli, cs\xEDp\u0151"
    },
    Rest: { focus: "Pihen\u0151nap", tag: "rest", wu: null, ex: [], cd: null }
  };
  var PMULT = [1, 1.05, 1.1, 1.15];

  // src/domain/training.ts
  function trainDay(type, key) {
    if (type === "rest") return TRAIN.Rest;
    if (key === "Mon") return TRAIN.Mon;
    if (key === "Tue") return TRAIN.Tue;
    if (key === "Thu") return TRAIN.Thu;
    return TRAIN.Fri;
  }
  function fmtKg(base, phase) {
    if (base === null) return "\u2014";
    return `${Math.round(base * PMULT[phase - 1])} kg`;
  }

  // src/domain/nutrition.ts
  var ZERO = { kcal: 0, p: 0, c: 0, f: 0 };
  function sum(meals) {
    return meals.reduce(
      (acc, m) => ({
        kcal: acc.kcal + m.kcal,
        p: acc.p + m.p,
        c: acc.c + m.c,
        f: acc.f + m.f
      }),
      ZERO
    );
  }
  function menuTotals(menu) {
    const m = typeof menu === "number" ? getMenu(menu) : menu;
    return sum(m.meals.map((id) => getMeal(id)));
  }
  function dayTotals(day) {
    const base = menuTotals(day.dm);
    if (day.type !== "train") return base;
    return { ...base, kcal: base.kcal + SHAKE.kcal, p: base.p + SHAKE.p };
  }

  // src/types.ts
  var CATEGORY_ORDER = [
    "Feh\xE9rje",
    "Gabona",
    "Tejterm\xE9k",
    "Z\xF6lds\xE9g",
    "Gy\xFCm\xF6lcs",
    "Egy\xE9b"
  ];

  // src/domain/shopping.ts
  function round2(n) {
    return Math.round(n * 100) / 100;
  }
  function formatAmount(amount, unit) {
    const n = round2(amount);
    if (unit === "g" || unit === "ml") return `${n}${unit}`;
    if (unit === "csipet") return "csipet";
    if (unit === "db" && n === 0.5) return "f\xE9l db";
    return `${n} ${unit}`;
  }
  function buildShoppingList(menuId, days = 2) {
    const menu = getMenu(menuId);
    const totals = /* @__PURE__ */ new Map();
    for (let d = 0; d < days; d++) {
      for (const mealId of menu.meals) {
        for (const ing of getMeal(mealId).ingredients) {
          totals.set(ing.food, (totals.get(ing.food) ?? 0) + ing.amount);
        }
      }
    }
    const byCategory = /* @__PURE__ */ new Map();
    for (const [foodId, total] of totals) {
      const food = getFood(foodId);
      if (food.pantry) continue;
      let qty;
      if (food.purchase) {
        const count = Math.ceil(round2(total / food.purchase.size));
        qty = formatAmount(count, food.purchase.unit);
      } else {
        qty = formatAmount(total, food.unit);
      }
      const items = byCategory.get(food.category) ?? [];
      items.push([food.name, qty]);
      byCategory.set(food.category, items);
    }
    const order = CATEGORY_ORDER;
    return order.filter((cat) => byCategory.has(cat)).map((cat) => ({ cat, items: byCategory.get(cat) }));
  }

  // src/bridge.ts
  var M = {};
  for (const [id, meal] of Object.entries(MEALS)) {
    M[id] = {
      lbl: meal.label,
      time: meal.time,
      name: meal.name,
      kcal: meal.kcal,
      p: meal.p,
      c: meal.c,
      f: meal.f,
      ing: meal.ingredients.map((ing) => {
        const food = getFood(ing.food);
        return [ing.label ?? food.name, formatAmount(ing.amount, food.unit)];
      }),
      rec: meal.recipe
    };
  }
  globalThis.BF = {
    M,
    DM: MENUS,
    SHAKE,
    SUPPS,
    WEEKS,
    W14: MENU_PATTERN_14,
    W58: MENU_PATTERN_58,
    trainDay,
    fmtKg,
    buildShopList: buildShoppingList,
    dayTotals,
    menuTotals,
    formatAmount
  };
  return __toCommonJS(bridge_exports);
})();
