
// 1) PRODUCTS DATA

const RUGS = {
  // CHECKERED
  // ====== CHECKERED COLLECTION (12 rugs) ======
// ====== CHECKERED RUGS (12) ======
check1: {
  title: "1963",
  collection: "Checkered",
  basePrice: 555,
  desc:
    "A bold navy-and-ivory checkerboard that feels graphic but calm. The hand-drawn grid creates quiet movement across the pile, grounding a space with classic contrast.",
  imperfection: "Quiet asymmetry — a proof of hands.",
  image: "../Images/check1.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 555 },
    { key: "5x8", label: "5' x 8'", price: 740 },
    { key: "8x10", label: "8' x 10'", price: 980 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check2: {
  title: "Verdant Grid",
  collection: "Checkered",
  basePrice: 590,
  desc:
    "Soft sage and moss squares fade in and out like watercolor. The irregular check pattern keeps the look relaxed, perfect for airy rooms that want a hint of color.",
  imperfection: "Each square holds its own shade.",
  image: "../Images/check2.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 590 },
    { key: "5x8", label: "5' x 8'", price: 790 },
    { key: "8x10", label: "8' x 10'", price: 1030 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check3: {
  title: "Coal Microcheck",
  collection: "Checkered",
  basePrice: 640,
  desc:
    "A tight black-and-cream micro-checker framed by a warm terracotta border. Crisp geometry meets handmade texture for a rug that feels both vintage and modern.",
  imperfection: "Small variations make the border sing.",
  image: "../Images/check3.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 640 },
    { key: "5x8", label: "5' x 8'", price: 860 },
    { key: "8x10", label: "8' x 10'", price: 1120 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check4: {
  title: "Indigo Ember Frame",
  collection: "Checkered",
  basePrice: 675,
  desc:
    "Deep indigo checks sit inside a glowing ember-orange frame. The contrast feels lively but still balanced, adding a strong focal point without overwhelming the room.",
  imperfection: "Hand-knotted edges keep it organic.",
  image: "../Images/check4.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 675 },
    { key: "5x8", label: "5' x 8'", price: 905 },
    { key: "8x10", label: "8' x 10'", price: 1180 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check5: {
  title: "Peach Meadow",
  collection: "Checkered",
  basePrice: 520,
  desc:
    "A soft peach ground with a forest-green grid. The spacing feels breathable and light, like sunlight filtered through leaves.",
  imperfection: "The grid softly drifts by hand.",
  image: "../Images/check5.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 520 },
    { key: "5x8", label: "5' x 8'", price: 700 },
    { key: "8x10", label: "8' x 10'", price: 920 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check6: {
  title: "Mist Blush Check",
  collection: "Checkered",
  basePrice: 545,
  desc:
    "Cool gray wool layered with a quiet blush checkerboard. Minimal, soft, and very easy to style in modern interiors.",
  imperfection: "Blush tones shift subtly across the pile.",
  image: "../Images/check6.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 545 },
    { key: "5x8", label: "5' x 8'", price: 730 },
    { key: "8x10", label: "8' x 10'", price: 960 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check7: {
  title: "Olive Linen Grid",
  collection: "Checkered",
  basePrice: 560,
  desc:
    "An ivory base with an orderly olive grid. Clean lines, gentle contrast, and a timeless, design-studio feel.",
  imperfection: "Hand tension gives the grid charm.",
  image: "../Images/check7.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 560 },
    { key: "5x8", label: "5' x 8'", price: 750 },
    { key: "8x10", label: "8' x 10'", price: 990 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check8: {
  title: "Rose Quarry",
  collection: "Checkered",
  basePrice: 585,
  desc:
    "A saturated rose field paired with pale stone checks. The result is warm, playful, and bold in the most grown-up way.",
  imperfection: "Every block carries a human touch.",
  image: "../Images/check8.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 585 },
    { key: "5x8", label: "5' x 8'", price: 780 },
    { key: "8x10", label: "8' x 10'", price: 1040 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check9: {
  title: "Pixel Grove",
  collection: "Checkered",
  basePrice: 610,
  desc:
    "Scattered green squares on a creamy ground, like a pixelated garden. The irregular placement keeps it contemporary and lively.",
  imperfection: "No two ‘pixels’ land the same.",
  image: "../Images/check9.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 610 },
    { key: "5x8", label: "5' x 8'", price: 815 },
    { key: "8x10", label: "8' x 10'", price: 1070 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check10: {
  title: "Greenstone Field",
  collection: "Checkered",
  basePrice: 655,
  desc:
    "A deep green frame surrounds a soft ivory center filled with floating checks. It reads structured from far away, and beautifully handmade up close.",
  imperfection: "Center checks drift naturally.",
  image: "../Images/check10.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 655 },
    { key: "5x8", label: "5' x 8'", price: 875 },
    { key: "8x10", label: "8' x 10'", price: 1150 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check11: {
  title: "Harlequin Fade",
  collection: "Checkered",
  basePrice: 690,
  desc:
    "Diamond harlequin checks dissolve into a lower checkerboard, creating a two-tone rhythm. High contrast, graphic, and full of motion.",
  imperfection: "The fade is never perfectly even.",
  image: "../Images/check11.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 690 },
    { key: "5x8", label: "5' x 8'", price: 920 },
    { key: "8x10", label: "8' x 10'", price: 1210 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

check12: {
  title: "Soft Patchwork",
  collection: "Checkered",
  basePrice: 720,
  desc:
    "A muted patchwork of ivory and warm gray with teal and terracotta accents. It feels like a hand-built mosaic — cozy, artistic, and quietly colorful.",
  imperfection: "Subtle color shifts are part of the charm.",
  image: "../Images/check12.png",

  origin: "Atlas Mountains, Morocco",
  material: "100% Natural Wool",
  weaveTime: "6–10 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 720 },
    { key: "5x8", label: "5' x 8'", price: 960 },
    { key: "8x10", label: "8' x 10'", price: 1260 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},



  // KILIM
   // ====== KILIM COLLECTION (12 rugs) ======
  kilim1: {
    title: "Sahara Stripe",
    collection: "Kilim",
    basePrice: 620,
    desc: "Wide desert stripes in rust and clay create a warm, grounded rhythm. A bold kilim that still feels calm and timeless.",
    imperfection: "Handwoven variations give each stripe its own character.",
    image: "../Images/kili01.png",

    origin: "Marrakech, Morocco",
    material: "Wool + Cotton Blend",
    weaveTime: "5–8 Weeks",
    finish: "Lightly Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 620 },
      { key: "5x8", label: "5' x 8'", price: 900 },
      { key: "8x10", label: "8' x 10'", price: 1300 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim2: {
    title: "Sahara Runner",
    collection: "Kilim",
    basePrice: 540,
    desc: "A long runner version of Sahara Stripe — narrow width, long lines, and a strong sense of movement for hallways or kitchens.",
    imperfection: "Edges may drift slightly — proof of loom work.",
    image: "../Images/kili10.png",

    origin: "Marrakech, Morocco",
    material: "Wool + Cotton Blend",
    weaveTime: "4–7 Weeks",
    finish: "Lightly Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 540 },
      { key: "5x8", label: "5' x 8'", price: 780 },
      { key: "8x10", label: "8' x 10'", price: 1150 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim3: {
    title: "Atlas Coast",
    collection: "Kilim",
    basePrice: 640,
    desc: "Cool blue and sand stripes echo coastal air and open skies. Clean geometry, soft color, easy to pair with neutrals.",
    imperfection: "Subtle shifts in blue tone are natural in dyed wool.",
    image: "../Images/kili02.png",

    origin: "Essaouira, Morocco",
    material: "100% Wool",
    weaveTime: "5–9 Weeks",
    finish: "Stone Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 640 },
      { key: "5x8", label: "5' x 8'", price: 920 },
      { key: "8x10", label: "8' x 10'", price: 1350 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim4: {
    title: "Atlas Runner",
    collection: "Kilim",
    basePrice: 560,
    desc: "A slim runner with the same coastal stripe language — perfect for narrow spaces needing quiet color.",
    imperfection: "Weft lines may show gentle hand tension.",
    image: "../Images/kili04.png",

    origin: "Essaouira, Morocco",
    material: "100% Wool",
    weaveTime: "4–7 Weeks",
    finish: "Stone Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 560 },
      { key: "5x8", label: "5' x 8'", price: 810 },
      { key: "8x10", label: "8' x 10'", price: 1200 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim5: {
    title: "Ochre Field",
    collection: "Kilim",
    basePrice: 690,
    desc: "Large bands of ochre, cream, and dark plum make a confident statement while staying earthy and soft.",
    imperfection: "Color blocking is hand-aligned — slight offsets are expected.",
    image: "../Images/kili03.png",

    origin: "High Atlas, Morocco",
    material: "Wool + Cotton Blend",
    weaveTime: "6–9 Weeks",
    finish: "Sun-dried",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 690 },
      { key: "5x8", label: "5' x 8'", price: 980 },
      { key: "8x10", label: "8' x 10'", price: 1420 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim6: {
    title: "Ochre Runner",
    collection: "Kilim",
    basePrice: 590,
    desc: "A runner cut of Ochre Field — long vertical bands to pull the eye through a space.",
    imperfection: "Hand-spun wool creates tiny texture specks.",
    image: "../Images/kilim.png",

    origin: "High Atlas, Morocco",
    material: "Wool + Cotton Blend",
    weaveTime: "5–8 Weeks",
    finish: "Sun-dried",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 590 },
      { key: "5x8", label: "5' x 8'", price: 860 },
      { key: "8x10", label: "8' x 10'", price: 1250 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim7: {
    title: "Ivory Border",
    collection: "Kilim",
    basePrice: 610,
    desc: "Minimal ivory center framed by deep plum borders. A clean, almost architectural kilim for calm rooms.",
    imperfection: "Border thickness can vary slightly from side to side.",
    image: "../Images/kili06.png",

    origin: "Taznakht, Morocco",
    material: "100% Wool",
    weaveTime: "5–8 Weeks",
    finish: "Lightly Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 610 },
      { key: "5x8", label: "5' x 8'", price: 880 },
      { key: "8x10", label: "8' x 10'", price: 1280 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim8: {
    title: "Ivory Runner",
    collection: "Kilim",
    basePrice: 520,
    desc: "A narrow version of Ivory Border — light in the middle, bold on the edges, made for long corridors.",
    imperfection: "Fringe length may differ slightly between ends.",
    image: "../Images/kili.png",

    origin: "Taznakht, Morocco",
    material: "100% Wool",
    weaveTime: "4–7 Weeks",
    finish: "Lightly Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 520 },
      { key: "5x8", label: "5' x 8'", price: 760 },
      { key: "8x10", label: "8' x 10'", price: 1120 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim9: {
    title: "Olive Lines",
    collection: "Kilim",
    basePrice: 650,
    desc: "Repeating olive and charcoal stripes over a warm natural base. Quiet, versatile, and easy to layer.",
    imperfection: "Natural dye lots create small tone changes.",
    image: "../Images/kili08.png",

    origin: "Ouarzazate, Morocco",
    material: "Wool + Cotton Blend",
    weaveTime: "5–9 Weeks",
    finish: "Stone Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 650 },
      { key: "5x8", label: "5' x 8'", price: 930 },
      { key: "8x10", label: "8' x 10'", price: 1360 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim10: {
    title: "Midnight Bands",
    collection: "Kilim",
    basePrice: 670,
    desc: "Deep navy bands broken by thin rust accents. A strong graphic kilim that still feels handmade and soft.",
    imperfection: "Tiny weave breaks may appear as texture, not defects.",
    image: "../Images/kili09.png",

    origin: "Ouarzazate, Morocco",
    material: "100% Wool",
    weaveTime: "6–10 Weeks",
    finish: "Sun-dried",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 670 },
      { key: "5x8", label: "5' x 8'", price: 960 },
      { key: "8x10", label: "8' x 10'", price: 1390 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim11: {
    title: "Ruby Rhythm",
    collection: "Kilim",
    basePrice: 680,
    desc: "Alternating ruby and golden clay stripes create a lively, warm pulse — perfect for dining or living rooms.",
    imperfection: "Stripe spacing may shift softly along the length.",
    image: "../Images/kili07.png",

    origin: "Marrakech, Morocco",
    material: "Wool + Cotton Blend",
    weaveTime: "5–8 Weeks",
    finish: "Lightly Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 680 },
      { key: "5x8", label: "5' x 8'", price: 970 },
      { key: "8x10", label: "8' x 10'", price: 1410 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },

  kilim12: {
    title: "Evening Runner",
    collection: "Kilim",
    basePrice: 500,
    desc: "A slim runner with soft dark bands and thin orange threads — subtle energy for entryways and long halls.",
    imperfection: "Hand-loom edges may curve slightly.",
    image: "../Images/kili05.png",

    origin: "Marrakech, Morocco",
    material: "Wool + Cotton Blend",
    weaveTime: "4–7 Weeks",
    finish: "Lightly Washed",

    sizes: [
      { key: "3x5", label: "3' x 5'", price: 500 },
      { key: "5x8", label: "5' x 8'", price: 730 },
      { key: "8x10", label: "8' x 10'", price: 1080 },
      { key: "custom", label: "Custom", price: 0 }
    ]
  },


  // ABSTRACT
// ====== ABSTRACT COLLECTION (12 rugs) ======
abs1: {
  title: "Drift 01",
  collection: "Abstract",
  basePrice: 700,
  desc:
    "An abstract field of soft grounding tones with calm geometry — designed to feel modern but timeless in any room.",
  imperfection: "Subtle shifts are proof of hands.",
  image: "../Images/abs1.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 700 },
    { key: "5x8", label: "5' x 8'", price: 980 },
    { key: "8x10", label: "8' x 10'", price: 1450 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs2: {
  title: "Rose Haze",
  collection: "Abstract",
  basePrice: 720,
  desc:
    "Warm rose layers fade into one another like evening light — soft, quiet, and easy to pair with neutrals.",
  imperfection: "Natural variation makes every piece unique.",
  image: "../Images/abs2.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 720 },
    { key: "5x8", label: "5' x 8'", price: 1005 },
    { key: "8x10", label: "8' x 10'", price: 1480 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs3: {
  title: "Blue Interval",
  collection: "Abstract",
  basePrice: 740,
  desc:
    "Cool blue spaces interrupted by subtle tonal blocks — an abstract rug that feels clean, calm, and airy.",
  imperfection: "Handwoven lines never repeat exactly.",
  image: "../Images/abs3.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 740 },
    { key: "5x8", label: "5' x 8'", price: 1030 },
    { key: "8x10", label: "8' x 10'", price: 1520 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs4: {
  title: "Stone Lines",
  collection: "Abstract",
  basePrice: 760,
  desc:
    "Earth-and-stone tones structured into minimal abstract shapes. Quiet texture, strong presence.",
  imperfection: "Soft edges are part of the craft.",
  image: "../Images/abs4.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 760 },
    { key: "5x8", label: "5' x 8'", price: 1045 },
    { key: "8x10", label: "8' x 10'", price: 1550 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs5: {
  title: "Sienna Cut",
  collection: "Abstract",
  basePrice: 780,
  desc:
    "A bold sienna shape grounded by creamy wool. Abstract, warm, and slightly graphic.",
  imperfection: "Every rug carries a quiet asymmetry.",
  image: "../Images/abs5.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 780 },
    { key: "5x8", label: "5' x 8'", price: 1075 },
    { key: "8x10", label: "8' x 10'", price: 1585 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs6: {
  title: "Ochre Field",
  collection: "Abstract",
  basePrice: 805,
  desc:
    "Large ochre and ivory zones meet in soft transitions, like sunlit walls in Marrakech.",
  imperfection: "Woven tone shifts are intentional.",
  image: "../Images/abs6.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 805 },
    { key: "5x8", label: "5' x 8'", price: 1100 },
    { key: "8x10", label: "8' x 10'", price: 1620 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs7: {
  title: "Midnight Block",
  collection: "Abstract",
  basePrice: 820,
  desc:
    "Deep midnight wool balanced with soft cream blocks — abstract contrast with a calm mood.",
  imperfection: "Hand finishing keeps edges organic.",
  image: "../Images/abs7.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 820 },
    { key: "5x8", label: "5' x 8'", price: 1125 },
    { key: "8x10", label: "8' x 10'", price: 1650 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs8: {
  title: "Plum Stripe",
  collection: "Abstract",
  basePrice: 790,
  desc:
    "Vertical abstract stripes in plum and gold tones — soft drama without overwhelming the space.",
  imperfection: "Lines drift slightly by hand.",
  image: "../Images/abs8.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 790 },
    { key: "5x8", label: "5' x 8'", price: 1085 },
    { key: "8x10", label: "8' x 10'", price: 1600 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs9: {
  title: "Quiet Grid",
  collection: "Abstract",
  basePrice: 735,
  desc:
    "A soft abstract grid, balanced and minimal, giving structure while staying gentle and textured.",
  imperfection: "Handwoven geometry will never be perfect.",
  image: "../Images/abs9.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 735 },
    { key: "5x8", label: "5' x 8'", price: 1020 },
    { key: "8x10", label: "8' x 10'", price: 1510 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs10: {
  title: "Sandwave",
  collection: "Abstract",
  basePrice: 750,
  desc:
    "Neutral sand tones blend into abstract waves — understated, warm, and made for calm interiors.",
  imperfection: "Soft variation is expected with wool.",
  image: "../Images/abs10.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 750 },
    { key: "5x8", label: "5' x 8'", price: 1035 },
    { key: "8x10", label: "8' x 10'", price: 1535 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs11: {
  title: "Charcoal Trace",
  collection: "Abstract",
  basePrice: 830,
  desc:
    "A darker abstract field with soft traced movement — bold but still cozy underfoot.",
  imperfection: "Each rug keeps its own rhythm.",
  image: "../Images/abs11.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 830 },
    { key: "5x8", label: "5' x 8'", price: 1135 },
    { key: "8x10", label: "8' x 10'", price: 1665 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},

abs12: {
  title: "Clay Rhythm",
  collection: "Abstract",
  basePrice: 770,
  desc:
    "Gentle clay blocks stack into an abstract rhythm — soft architecture for your floor.",
  imperfection: "Small shifts in tone are part of the design.",
  image: "../Images/abs12.png",

  origin: "High Atlas, Morocco",
  material: "100% Natural Wool",
  weaveTime: "8–12 Weeks",
  finish: "Washed & Sun-dried",

  sizes: [
    { key: "3x5", label: "3' x 5'", price: 770 },
    { key: "5x8", label: "5' x 8'", price: 1065 },
    { key: "8x10", label: "8' x 10'", price: 1570 },
    { key: "custom", label: "Custom", price: 0 }
  ]
},
};


// 2) REVIEWS DATA (kept)

const reviews = [
  {
    stars: 5,
    text:
      "This rug is absolutely beautiful! And it's so soft. I love walking into this room. It's bright and fun while being so comfy under my feet.",
    name: "Angela T."
  },
  {
    stars: 5,
    text:
      "Beautiful works of art. Service is top notch, friendly, prompt, and delivery is fast.",
    name: "Sophie Y."
  },
  {
    stars: 5,
    text:
      "Ordering was simple and my rug arrived even better than expected. Highly recommend.",
    name: "Sarah L."
  }
];


// 3) HELPERS

function getRugIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}


// 4) RENDER PRODUCT

function renderProduct(rug) {
  document.getElementById("product-title").textContent = rug.title;
  document.getElementById("product-desc").textContent = rug.desc;
  document.getElementById("imperfection-note").textContent = rug.imperfection;

  document.getElementById("product-price").textContent = `from $${rug.basePrice}`;
  document.getElementById("cart-price").textContent = `$${rug.basePrice}`;

  document.getElementById("product-image").src = rug.image;

  const bc = document.querySelector(".breadcrumb");
  bc.textContent = `Shop / ${rug.collection} / ${rug.title}`;

  const threadValues = document.querySelectorAll(".atlas-thread .thread-value");
  threadValues[0].textContent = rug.origin;
  threadValues[1].textContent = rug.material;
  threadValues[2].textContent = rug.weaveTime;
  threadValues[3].textContent = rug.finish;

  // Build Size Tiles
  const sizeTiles = document.getElementById("sizeTiles");
  sizeTiles.innerHTML = "";

  rug.sizes.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.className = "size-tile" + (i === 0 ? " selected" : "");
    btn.dataset.size = s.key;
    btn.innerHTML = `<span class="tile-size">${s.label}</span>`;
    btn.addEventListener("click", () => selectSize(rug, s.key));
    sizeTiles.appendChild(btn);
  });
}


// 5) SIZE CHANGE

function selectSize(rug, sizeKey) {
  document.querySelectorAll(".size-tile").forEach(b => {
    b.classList.toggle("selected", b.dataset.size === sizeKey);
  });

  const sizeObj = rug.sizes.find(s => s.key === sizeKey);
  if (!sizeObj) return;

  const priceEl = document.getElementById("product-price");
  const cartPriceEl = document.getElementById("cart-price");

  if (sizeObj.price > 0) {
    priceEl.textContent = `from $${sizeObj.price}`;
    cartPriceEl.textContent = `$${sizeObj.price}`;
  } else {
    priceEl.textContent = "Custom pricing";
    cartPriceEl.textContent = "Request";
  }
}


// 6) ACCORDION CLICK SUPPORT

function initAccordion() {
  document.querySelectorAll(".ha-item").forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}


// 7) INIT

document.addEventListener("DOMContentLoaded", () => {
  initAccordion();

  const id = getRugIdFromUrl();
  const rug = RUGS[id];

  if (!rug) {
    console.warn("Rug not found:", id);
    return;
  }

  renderProduct(rug);
});
