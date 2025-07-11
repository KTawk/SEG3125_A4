import Image1 from "./Images/MacBookPro14_Silver.png";
import Image1_1 from "./Images/MacbookPro14_SpaceGray.png";
import Image2 from "./Images/MacBookAirM2_Silver.png";
import Image2_1 from "./Images/MacbookAirM2_Midnight.png"; 
import Image3 from "./Images/XPS13_Silver.png";
import Image3_1 from "./Images/XPS13_Black.jpg";
// import Image4 from "./Images/XPS15_Black.png";
// import Image4_1 from "./Images/XPS15_Silver.jpg";

import Image4 from "./Images/XPS15_Silver.jpg";
import Image4_1 from "./Images/XPS15_Black.png";


import Image5 from "./Images/ThinkPadX1CarbonGen11_Black.jpg";
import Image6 from "./Images/YogaSlim7i_MineralGrey.jpg";
import Image7 from "./Images/Spectrex36014_NightfallBlack.webp";
import Image7_1 from "./Images/Spectrex36014_PoseidonBlue.webp";
import Image8 from "./Images/ENVY15_MicaSilver.jpg";
import Image9 from "./Images/ZenBook14_PineGrey.jpg";
import Image9_1 from "./Images/ZenBook14_LilacMist.webp";
import Image10 from "./Images/ROGZephyrusG14_EclipseGray.jpg";
import Image11 from "./Images/SurfaceLaptop 5_Platinum.webp";
import Image11_1 from "./Images/SurfaceLaptop 5_MatteBlack.jpg"; 
import Image12 from "./Images/Swift3_Silver.jpg";   
import Image12_1 from "./Images/Swift3_Gold.jpg";
import Image13 from "./Images/iPhone15_Yellow.png";
import Image13_1 from "./Images/iPhone15_Blue.png";
import Image13_2 from "./Images/iPhone15_Pink.png";
import Image13_3 from "./Images/iPhone15_Green.png";
import Image14 from "./Images/iPhone15Pro_White.png";
import Image14_1 from "./Images/iPhone15Pro_Gold.png";
import Image14_2 from "./Images/iPhone15Pro_Black.png";
import Image14_3 from "./Images/iPhone15Pro_Silver.png";
import Image15 from "./Images/GalaxyS24_PhantomBlack.png";
import Image15_1 from "./Images/GalaxyS24_Cream.png";
import Image15_2 from "./Images/GalaxyS24_Graphite.png";
import Image16 from "./Images/GalaxyS24Plus_PhantomBlack.png";
import Image16_1 from "./Images/GalaxyS24Plus_LightViolet.png";
import Image16_2 from "./Images/GalaxyS24Plus_Green.png";
import Image17 from "./Images/Pixel8_Lemongrass.png";
import Image17_1 from "./Images/Pixel8_Obsidian.png";
import Image17_2 from "./Images/Pixel8_Rose.png";  
import Image18 from "./Images/Pixel8Pro_Hazel.png"; 
import Image18_1 from "./Images/Pixel8Pro_Bay.png";
import Image18_2 from "./Images/Pixel8Pro_Obsidian.png";
import Image19 from "./Images/OnePlus11_MirrorBlack.png";
import Image19_1 from "./Images/OnePlus11_EternalGreen.png";


import Image20 from "./Images/Image20.png";
import Image20_1 from "./Images/Image20_1.png";
import Image21 from "./Images/Image21.png";
import Image21_1 from "./Images/Image21_1.png";
import Image22 from "./Images/Image22.png";
import Image22_1 from "./Images/Image22_1.png";
import Image23 from "./Images/Image23.png";
import Image23_1 from "./Images/Image23_1.png";
import Image23_2 from "./Images/Image23_2.png";
import Image24 from "./Images/Image24.png";
import Image24_1 from "./Images/Image24_1.png";
import Image25 from "./Images/Image25.avif";
import Image26 from "./Images/Image26.png";
import Image26_1 from "./Images/Image26_1.png";
import Image26_2 from "./Images/Image26_2.png";
import Image27 from "./Images/Image27.jpg";
import Image27_1 from "./Images/Image27_1.webp";
import Image28 from "./Images/Image28.jpg";
import Image28_1 from "./Images/Image28_1.jpg";
import Image29 from "./Images/Image29.jpg";
import Image30 from "./Images/Image30.jpg";
import Image30_1 from "./Images/Image30_1.jpg";
import Image31 from "./Images/Image31.png";
import Image31_1 from "./Images/Image31_1.png";
import Image32 from "./Images/Image32.jpg";
import Image33 from "./Images/Image33.png";
import Image34 from "./Images/Image34.png";
import Image35 from "./Images/Image35.png";
import Image36 from "./Images/Image36.png";
import Image37 from "./Images/Image37.png";
import Image38 from "./Images/Image38.png";
import Image39 from "./Images/Image39.png";
import Image40 from "./Images/Image40.png";
import Image40_1 from "./Images/Image40_1.png";
import Image41 from "./Images/Image41.webp";
import Image41_1 from "./Images/Image41_1.png";
import Image42 from "./Images/Image42.webp";
import Image42_1 from "./Images/Image42_1.webp";
import Image42_2 from "./Images/Image42_2.png";
import Image43 from "./Images/Image43.png";
import Image43_1 from "./Images/Image43_1.webp";
import Image44 from "./Images/Image44.png";
import Image45 from "./Images/Image45.png";
import Image46 from "./Images/Image46.webp";
import Image47 from "./Images/Image47.png";
import Image47_1 from "./Images/Image47_1.png";
import Image48 from "./Images/Image48.png";
import Image49 from "./Images/Image49.png";
import Image50 from "./Images/Image50.png";
import Image50_1 from "./Images/Image50_1.png";
import Image51 from "./Images/Image51.png";

export const Categories = [
  "Laptops",
  "Phones",
  "Tablets",
  "TVs",
  "Accessories",
];

export const mockData = [
  // Laptops
  {
    id: 1,
    images: [Image1, Image1_1],
    name: "MacBook Pro 14-inch",
    price: 1999.99,
    category: "Laptops",
    brand: "Apple",
    screenSize: "14″",
    ram: "16 GB",
    processor: "Apple M2 Pro",
    colors: ["Space Gray", "Silver"],
  },
  {
    id: 2,
    images: [Image2, Image2_1],
    name: "MacBook Air M2",
    price: 1299.99,
    category: "Laptops",
    brand: "Apple",
    screenSize: "13.6″",
    ram: "8 GB",
    processor: "Apple M2",
    colors: ["Silver", "Midnight"],
  },
  {
    id: 3,
    images: [Image3, Image3_1],
    name: "XPS 13",
    price: 1199.99,
    category: "Laptops",
    brand: "Dell",
    screenSize: "13.4″",
    ram: "8 GB",
    processor: "Intel Core i5-1240P",
    colors: ["Silver", "Black"],
  },
  {
    id: 4,
    images: [Image4, Image4_1],
    name: "XPS 15",
    price: 1599.99,
    category: "Laptops",
    brand: "Dell",
    screenSize: "15.6″",
    ram: "16 GB",
    processor: "Intel Core i7-12700H",
    colors: ["Silver", "Black"],
  },
  {
    id: 5,
    images: [Image5],
    name: "ThinkPad X1 Carbon Gen 11",
    price: 1599.99,
    category: "Laptops",
    brand: "Lenovo",
    screenSize: "14″",
    ram: "16 GB",
    processor: "Intel Core i7-1360P",
    colors: ["Black"],
  },
  {
    id: 6,
    images: [Image6],
    name: "Yoga Slim 7i",
    price: 999.99,
    category: "Laptops",
    brand: "Lenovo",
    screenSize: "14″",
    ram: "8 GB",
    processor: "Intel Core i5-1235U",
    colors: ["Mineral Grey"],
  },
  {
    id: 7,
    images: [Image7, Image7_1],
    name: "Spectre x360 14",
    price: 1399.99,
    category: "Laptops",
    brand: "HP",
    screenSize: "13.5″",
    ram: "16 GB",
    processor: "Intel Core i7-1255U",
    colors: ["Nightfall Black", "Poseidon Blue"],
  },
  {
    id: 8,
    images: [Image8],
    name: "ENVY 15",
    price: 1199.99,
    category: "Laptops",
    brand: "HP",
    screenSize: "15.6″",
    ram: "16 GB",
    processor: "AMD Ryzen 7 5800H",
    colors: ["Mica Silver"],
  },
  {
    id: 9,
    images: [Image9, Image9_1],
    name: "ZenBook 14",
    price: 1099.99,
    category: "Laptops",
    brand: "Asus",
    screenSize: "14″",
    ram: "16 GB",
    processor: "Intel Core i7-1260P",
    colors: ["Pine Grey", "Lilac Mist"],
  },
  {
    id: 10,
    images: [Image10],
    name: "ROG Zephyrus G14",
    price: 1499.99,
    category: "Laptops",
    brand: "Asus",
    screenSize: "14″",
    ram: "16 GB",
    processor: "AMD Ryzen 9 6900HS",
    colors: ["Eclipse Gray"],
  },
  {
    id: 11,
    images: [Image11, Image11_1],
    name: "Surface Laptop 5",
    price: 1299.99,
    category: "Laptops",
    brand: "Microsoft",
    screenSize: "13.5″",
    ram: "8 GB",
    processor: "Intel Core i5-1235U",
    colors: ["Platinum", "Matte Black"],
  },
  {
    id: 12,
    images: [Image12],
    name: "Swift 3",
    price: 799.99,
    category: "Laptops",
    brand: "Acer",
    screenSize: "14″",
    ram: "8 GB",
    processor: "Intel Core i5-1135G7",
    colors: ["Silver"],
  },

  // Phones
  {
    id: 13,
    images: [Image13, Image13_1, Image13_2, Image13_3],
    name: "iPhone 15",
    price: 999.99,
    category: "Phones",
    brand: "Apple",
    screenSize: "6.1″",
    ram: "6 GB",
    storage: "128 GB",
    camera: "48 MP",
    colors: ["Yellow", "Blue", "Pink", "Green"],
  },
  {
    id: 14,
    images: [Image14, Image14_1, Image14_2, Image14_3],
    name: "iPhone 15 Pro",
    price: 1199.99,
    category: "Phones",
    brand: "Apple",
    screenSize: "6.1″",
    ram: "8 GB",
    storage: "256 GB",
    camera: "48 MP",
    colors: ["White", "Gold", "Black", "Silver"],
  },
  {
    id: 15,
    images: [Image15, Image15_1, Image15_2],
    name: "Galaxy S24",
    price: 899.99,
    category: "Phones",
    brand: "Samsung",
    screenSize: "6.2″",
    ram: "8 GB",
    storage: "256 GB",
    camera: "50 MP",
    colors: ["Phantom Black", "Cream", "Graphite"],
  },
  {
    id: 16,
    images: [Image16, Image16_1, Image16_2],
    name: "Galaxy S24+",
    price: 999.99,
    category: "Phones",
    brand: "Samsung",
    screenSize: "6.7″",
    ram: "8 GB",
    storage: "256 GB",
    camera: "50 MP",
    colors: ["Phantom Black", "Light Violet", "Green"],
  },
  {
    id: 17,
    images: [Image17, Image17_1, Image17_2],
    name: "Pixel 8",
    price: 699.99,
    category: "Phones",
    brand: "Google",
    screenSize: "6.2″",
    ram: "8 GB",
    storage: "128 GB",
    camera: "50 MP",
    colors: ["Lemongrass", "Obsidian", "Rose"],
  },
  {
    id: 18,
    images: [Image18, Image18_1, Image18_2],
    name: "Pixel 8 Pro",
    price: 999.99,
    category: "Phones",
    brand: "Google",
    screenSize: "6.7″",
    ram: "12 GB",
    storage: "256 GB",
    camera: "50 MP",
    colors: ["Hazel", "Bay", "Obsidian"],
  },
  {
    id: 19,
    images: [Image19, Image19_1],
    name: "OnePlus 11",
    price: 749.99,
    category: "Phones",
    brand: "OnePlus",
    screenSize: "6.7″",
    ram: "8 GB",
    storage: "128 GB",
    camera: "50 MP",
    colors: ["Mirror Black", "Eternal Green"],
  },
  {
    id: 20,
    images: [Image20, Image20_1],
    name: "OnePlus 11 Pro",
    price: 799.99,
    category: "Phones",
    brand: "OnePlus",
    screenSize: "6.7″",
    ram: "12 GB",
    storage: "256 GB",
    camera: "50 MP",
    colors: ["Dawn Light", "Volcanic Black"],
  },
  {
    id: 21,
    images: [Image21, Image21_1],
    name: "Xiaomi 13",
    price: 799.99,
    category: "Phones",
    brand: "Xiaomi",
    screenSize: "6.36″",
    ram: "8 GB",
    storage: "128 GB",
    camera: "50 MP",
    colors: ["Black", "White"],
  },
  {
    id: 22,
    images: [Image22, Image22_1],
    name: "Xiaomi 13 Pro",
    price: 849.99,
    category: "Phones",
    brand: "Xiaomi",
    screenSize: "6.73″",
    ram: "12 GB",
    storage: "256 GB",
    camera: "50 MP",
    colors: ["Black", "Blue"],
  },

  // Tablets (new items id 23-30)
  {
    id: 23,
    images: [Image23, Image23_1, Image23_2],
    name: "iPad Mini",
    price: 499.99,
    category: "Tablets",
    brand: "Apple",
    screenSize: "8.3″",
    storage: "64 GB",
    connectivity: "Wi-Fi",
    colors: ["Space Gray", "Pink", "Purple"],
  },
  {
    id: 24,
    images: [Image24, Image24_1],
    name: "Galaxy Tab S7 FE",
    price: 549.99,
    category: "Tablets",
    brand: "Samsung",
    screenSize: "12.4″",
    storage: "64 GB",
    connectivity: "Wi-Fi + LTE",
    colors: ["Mystic Black", "Mystic Silver"],
  },
  {
    id: 25,
    images: [Image25],
    name: "Tab P11",
    price: 329.99,
    category: "Tablets",
    brand: "Lenovo",
    screenSize: "11″",
    storage: "128 GB",
    connectivity: "Wi-Fi",
    colors: ["Slate Grey"],
  },
  {
    id: 26,
    images: [Image26, Image26_1, Image26_2],
    name: "Fire HD 8",
    price: 89.99,
    category: "Tablets",
    brand: "Amazon",
    screenSize: "8″",
    storage: "32 GB",
    connectivity: "Wi-Fi",
    colors: ["Black", "Twilight Blue", "Plum"],
  },
  {
    id: 27,
    images: [Image27, Image27_1],
    name: "Galaxy Tab A7 Lite",
    price: 159.99,
    category: "Tablets",
    brand: "Samsung",
    screenSize: "8.7″",
    storage: "32 GB",
    connectivity: "Wi-Fi",
    colors: ["Gray", "Silver"],
  },
  {
    id: 28,
    images: [Image28, Image28_1],
    name: "Pixel Tablet",
    price: 499.99,
    category: "Tablets",
    brand: "Google",
    screenSize: "10.95″",
    storage: "128 GB",
    connectivity: "Wi-Fi",
    colors: ["Rose", "Porcelain"],
  },
  {
    id: 29,
    images: [Image29],
    name: "Tab M10 FHD Plus",
    price: 199.99,
    category: "Tablets",
    brand: "Lenovo",
    screenSize: "10.3″",
    storage: "64 GB",
    connectivity: "Wi-Fi",
    colors: ["Slate Grey"],
  },
  {
    id: 30,
    images: [Image30, Image30_1],
    name: "Surface Pro 9",
    price: 999.99,
    category: "Tablets",
    brand: "Microsoft",
    screenSize: "13″",
    storage: "128 GB",
    connectivity: "Wi-Fi + 5G",
    colors: ["Platinum", "Graphite"],
  },

  // TVs (new items id 31-38)
  {
    id: 31,
    images: [Image31, Image31_1],
    name: "Samsung Frame 55″",
    price: 1499.99,
    category: "TVs",
    brand: "Samsung",
    screenSize: "55″",
    resolution: "4K UHD",
    smartTv: true,
    colors: ["Beige", "White"],
  },
  {
    id: 32,
    images: [Image32],
    name: "LG C2 OLED 42″",
    price: 1299.99,
    category: "TVs",
    brand: "LG",
    screenSize: "42″",
    resolution: "4K UHD",
    smartTv: true,
    colors: ["Black"],
  },
  {
    id: 33,
    images: [Image33],
    name: "Sony X80L 50″",
    price: 599.99,
    category: "TVs",
    brand: "Sony",
    screenSize: "50″",
    resolution: "4K UHD",
    smartTv: true,
    colors: ["Black"],
  },
  {
    id: 34,
    images: [Image34],
    name: "TCL 65″ Q6 QLED",
    price: 799.99,
    category: "TVs",
    brand: "TCL",
    screenSize: "65″",
    resolution: "4K UHD",
    smartTv: true,
    colors: ["Black"],
  },
  {
    id: 35,
    images: [Image35],
    name: "Hisense U6G 55″",
    price: 699.99,
    category: "TVs",
    brand: "Hisense",
    screenSize: "55″",
    resolution: "4K UHD",
    smartTv: true,
    colors: ["Black"],
  },
  {
    id: 36,
    images: [Image36],
    name: "Vizio M-Series 65″",
    price: 999.99,
    category: "TVs",
    brand: "Vizio",
    screenSize: "65″",
    resolution: "4K UHD",
    smartTv: true,
    colors: ["Black"],
  },
  {
    id: 37,
    images: [Image37],
    name: "Philips Ambilight 55″",
    price: 1199.99,
    category: "TVs",
    brand: "Philips",
    screenSize: "55″",
    resolution: "4K UHD",
    smartTv: true,
    colors: ["Black"],
  },
  {
    id: 38,
    images: [Image38],
    name: "Panasonic TX-43JX750",
    price: 499.99,
    category: "TVs",
    brand: "Panasonic",
    screenSize: "43″",
    resolution: "4K HD",
    smartTv: false,
    colors: ["Black"],
  },

  // Accessories (new items id 39-51)
  {
    id: 39,
    images: [Image39],
    name: "MagSafe Charger",
    price: 39.99,
    category: "Accessories",
    brand: "Apple",
    batteryLife: null,
    compatibility: "iPhone 12+",
    colors: ["White"],
  },
  {
    id: 40,
    images: [Image40, Image40_1],
    name: "Wireless Charger Duo",
    price: 79.99,
    category: "Accessories",
    brand: "Samsung",
    batteryLife: null,
    compatibility: "Qi devices",
    colors: ["Black", "White"],
  },
  {
    id: 41,
    images: [Image41, Image41_1],
    name: "MX Master 3 Mouse",
    price: 99.99,
    category: "Accessories",
    brand: "Logitech",
    batteryLife: "70 days",
    colors: ["Graphite", "Midnight Teal"],
  },
  {
    id: 42,
    images: [Image42, Image42_1, Image42_2],
    name: "K380 Bluetooth Keyboard",
    price: 39.99,
    category: "Accessories",
    brand: "Logitech",
    batteryLife: "2 years",
    colors: ["Off-white", "Rose", "Graphite"],
  },
  {
    id: 43,
    images: [Image43, Image43_1],
    name: "PowerLine+ USB-C Cable",
    price: 19.99,
    category: "Accessories",
    brand: "Anker",
    length: "3 ft",
    colors: ["Red", "Black"],
  },
  {
    id: 44,
    images: [Image44],
    name: "SanDisk Extreme 128GB SD Card",
    price: 24.99,
    category: "Accessories",
    brand: "SanDisk",
    readSpeed: "150MB/s",
    colors: ["Red & Black"],
  },
  {
    id: 45,
    images: [Image45],
    name: "Surge Protector 6-Outlet",
    price: 29.99,
    category: "Accessories",
    brand: "Belkin",
    maxLoad: "1875W",
    colors: ["Black"],
  },
  {
    id: 46,
    images: [Image46],
    name: "C920 HD Webcam",
    price: 69.99,
    category: "Accessories",
    brand: "Logitech",
    resolution: "1080p",
    colors: ["Black"],
  },
  {
    id: 47,
    images: [Image47, Image47_1],
    name: "Yeti USB Microphone",
    price: 129.99,
    category: "Accessories",
    brand: "Blue",
    polarPattern: "Cardioid",
    colors: ["Silver", "Blackout"],
  },
  {
    id: 48,
    images: [Image48],
    name: "DeathAdder V2 Mouse",
    price: 49.99,
    category: "Accessories",
    brand: "Razer",
    connection: "Wired",
    colors: ["Black"],
  },
  {
    id: 49,
    images: [Image49],
    name: "K95 RGB Keyboard",
    price: 199.99,
    category: "Accessories",
    brand: "Corsair",
    switchType: "Cherry MX Red",
    colors: ["Black"],
  },
  {
    id: 50,
    images: [Image50, Image50_1],
    name: "WH-CH710N Headphones",
    price: 149.99,
    category: "Accessories",
    brand: "Sony",
    batteryLife: "35 hrs",
    colors: ["Blue", "Black"],
  },
  {
    id: 51,
    images: [Image51],
    name: "SoundLink II Speaker",
    price: 179.99,
    category: "Accessories",
    brand: "Bose",
    batteryLife: "8 hrs",
    colors: ["Black"],
  },
];