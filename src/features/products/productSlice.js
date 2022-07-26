import { createSlice } from '@reduxjs/toolkit'

const products = [
  {
    id: '629f2f5edeefae3ea824fa17',
    price: 4490,
    countInStock: 10,
    name: 'boAt Airdopes 141',
    image: 'https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg',
    brand: 'boAt',
    category: 'Electronics',
    description:
      '42H Playtime, Beast Mode ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls Bluetooth Truly Wireless in Ear Earbuds with Mic (Bold Black)',
  },
  {
    id: '629f30a4afee6c2ef0052ad5',
    price: 4999,
    name: ' boAt Rockerz 550',
    image: 'https://m.media-amazon.com/images/I/61gYxcIGjvL._SL1500_.jpg',
    brand: 'boAt',
    category: 'Electronics',
    description:
      'Bluetooth Wireless Over Ear Headphones with Mic and with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation (Black)',
  },
  {
    id: '629f3415c16b3a3b24b5f5a0',
    price: 500,
    name: 'Sitting Monkey',
    image: 'https://m.media-amazon.com/images/I/71Cew7mry1L._SL1500_.jpg',
    brand: 'Fuzzbuzz ',
    category: 'toys',
    description:
      'Fuzzbuzz Cute Huggable Sitting Monkey Stuffed Plush Toy Soft Toy Non-Toxic Washable Toy Stuffed Animal For Kids Above 3 Years Of Age - 25Cm.',
  },
  {
    id: '629f34bec16b3a3b24b5f5a1',
    price: 2599,
    name: 'pTron Bassbuds Duo',
    image: 'https://m.media-amazon.com/images/I/51ZT3aMrJIL._SL1100_.jpg',
    brand: 'pTron',
    category: 'Electronics',
    description:
      'pTron Bassbuds Duo in-Ear Earbuds with 32Hrs Total Playtime, Bluetooth 5.1 Wireless Headphones, Stereo Audio, Touch Control TWS, Dual Mic, Type-C Fast Charging, IPX4 & Voice Assistance (Black)',
  },
  {
    id: '629f3508c16b3a3b24b5f5a2',
    price: 4999,
    name: 'Sony WH-CH510',
    image: 'https://m.media-amazon.com/images/I/41i+KMBAFjL.jpg',
    brand: 'Sony',
    category: 'Electronics',
    description:
      'Sony WH-CH510 Bluetooth Wireless On Ear Headphones with up-to 35Hrs Playtime, Lightweight with Mic, Type-C, Play/Pause Control, 30mm Driver, BT Version 5.0, Voice Assistant Support (Blue)',
  },
  {
    id: '629f38b0be2f1438a4462ecb',
    price: 860,
    name: 'ALTON FAM3320 Brass Nozzle',
    image: 'https://m.media-amazon.com/images/I/51iRw45yHsL._SL1000_.jpg',
    brand: 'Alton',
    category: 'Tools & Home improvement',
    description:
      'Material: Brass, Finish: Chrome\nPackage Content: 1-Piece Nozzle Cock, 1-Piece Wall Flange\nTurn: Quarter, Disc Size: 1/2 inch, Installation Type: Wall Mounted\nHigh smoothness technology has been used in ceramic Disc so that its smoothness will always be maintained. reliable Ceramic Disc, survive 500,000 times open and close test. sophisticated ceramic engineering provides both convenience and control precision\n7 Year Warranty Against Manufacturing Defect',
  },
  {
    id: '629f397abe2f1438a4462ecc',
    price: 2500,
    name: ' Bosch Hand Tool Kit',
    image: 'https://m.media-amazon.com/images/I/71rTuYwImRL._SL1000_.jpg',
    brand: 'Bosch ',
    category: 'Tools & Home improvement',
    description:
      'Material: Plastic, Color: Blue, This measuring tape with three lock/stop modes provides easy usage\nItem Dimension: 253mm x 280mm x 45mm\nPackage Contents: 1-Piece Screwdriver, 1-Piece Hammer, 7-Pieces Screwdriver Bits, 1-Piece Plier, 1-Piece Wrench and 1-Piece Measuring Tape\nNo warranty is applicable on this product\nCompact kit\nTake accurate measurement\n12 pcs accessories kit from Bosch is one of the best option for all',
  },
  {
    id: '629f3a0ebe2f1438a4462ecd',
    price: 800,
    name: 'Gold Plated Dangler Earrings',
    image: 'https://m.media-amazon.com/images/I/61pYO5D2R7L._UL1100_.jpg',
    brand: 'Yellow Chimes',
    category: 'Jewellery ',
    description:
      'Rich and appealing Tibetan style hook Earrings handcrafted with red, green, blue & gold laac work.Combo Set All-In-One Color Stop - for the Fashionable Casual Looks\nProduced under Quality Control; One by One Checking; Focus on Detail Processing. Top Quality/ Latest Trend Design/Anti-Allergy. Length: 5.5 CM.\nBeautiful Looks at One Glance- with Intricate High Polish creates Glamorous Reflections and adds Luxurious Looks.\nSkin friendly: Nickel free and lead free as per international standards. Anti-allergic and safe for skin.\nGift for Her - Ideal Valentine, Birthday, Anniversary gift for someone you Love. With Our Packaging that comes in nice Elegant Jewellery Box, you dont have to search out for Gift Box to present.',
  },

  {
    id: '629f3b21be2f1438a4462ecf',
    price: 799,
    name: 'SAFARI 15 Ltrs Denim Blue',
    image: 'https://m.media-amazon.com/images/I/61YRI2+SIIL._UL1500_.jpg',
    brand: 'Safari',
    category: 'Luggage & Bags',
    description:
      'Outer Material: Polyester, Color: Denim Blue; Not water resistant\nCapacity: 15 liters; Weight: 200 grams; Dimensions: 12 cms x 27 cms x 41 cms (LxWxH)\nNumber of compartments: 2\nLaptop Compatibility: No;There might be minor color variation between actual product and image shown on screen due to lighting on the photography\nClosure Type: Drawstring; Age Range Description: Kid; Pocket Description: Utility Pocket\nDrawstring, 2 Compartments, Compact Size',
  },
]

const categories = [
  'Electronics',
  'Luggage & Bags',
  'Jewellery',
  'Tools & Home improvement',
  'toys',
]

const initialState = { products, categories }

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

export default productSlice.reducer
