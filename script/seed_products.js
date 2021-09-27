const products = [
  //GPUs
  {
    name: "NVIDIA GeForce RTX 3080 10GB Graphics Card",
    brand: "NVIDIA",
    category: "GPUs / Graphics Cards",
    price: 69999,
    quantity: 0,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429440_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
  },
  {
    name: "NVIDIA GeForce RTX 3060 Ti 8GB Graphics Card",
    brand: "NVIDIA",
    category: "GPUs / Graphics Cards",
    price: 39999,
    quantity: 10,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6439/6439402_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The GeForce RTX 3060 Ti lets you take on the latest games using the power of Ampere—NVIDIA’s 2nd generation RTX architecture. Discover incredible performance with enhanced Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory.",
  },
  {
    name: "NVIDIA GeForce RTX 3070 8GB Graphics Card",
    brand: "NVIDIA",
    category: "GPUs / Graphics Cards",
    price: 49999,
    quantity: 5,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6439/6439402_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The GeForce RTX 3070 is powered by Ampere—NVIDIA’s 2nd gen RTX architecture. Built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory, it gives you the power you need to rip through the most demanding games.",
  },
  {
    name: "NVIDIA GeForce RTX 3090 24GB Graphics Card",
    brand: "NVIDIA",
    category: "GPUs / Graphics Cards",
    price: 149999,
    quantity: 20,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429434_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The GeForce RTX 3090 is colossally powerful in every way, giving you a whole new tier of performance. It’s powered by Ampere—NVIDIA’s 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced RT Cores, Tensor Cores, and new streaming multiprocessors. Plus, it features a staggering 24 GB of G6X memory, all to deliver the ultimate gaming experience.",
  },
  {
    name: "NVIDIA GeForce RTX 3070 Ti 8GB Graphics Card",
    brand: "NVIDIA",
    category: "GPUs / Graphics Cards",
    price: 59999,
    quantity: 0,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465789_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The GeForce RTX 3070 Ti is powered by Ampere— NVIDIA’s 2nd gen RTX architecture. Built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory, it gives you the power you need to rip through the most demanding games.",
  },
  {
    name: "AMD Radeon RX 6900 XT Graphics",
    brand: "GIGABYTE",
    category: "GPUs / Graphics Cards",
    price: 99900,
    quantity: 1,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468934_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The AMD Radeon RX 6900 XT graphics card, powered by AMD RDNA 2 architecture, featuring 80 powerful enhanced Compute Units, 128 MB of all new AMD Infinity Cache and 16GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and serious 4K resolution gaming.",
  },
  {
    name: "AMD Radeon RX 6800 XT Graphics",
    brand: "XFX",
    category: "GPUs / Graphics Cards",
    price: 64900,
    quantity: 16,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441226_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The AMD Radeon RX 6800 XT graphics card, powered by AMD RDNA 2 architecture, featuring 72 powerful enhanced Compute Units, 128 MB of all new AMD Infinity Cache and 16GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and serious 4K resolution gaming.",
  },
  {
    name: "AMD Radeon RX 6800 Graphics",
    brand: "AMD",
    category: "GPUs / Graphics Cards",
    price: 57900,
    quantity: 33,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441226_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The AMD Radeon RX 6800 graphics card, powered by AMD RDNA 2 architecture, featuring 60 powerful enhanced Compute Units, 128 MB of all new AMD Infinity Cache and up to 16GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and serious 4K resolution gaming.",
  },
  {
    name: "AMD Radeon RX 6700 XT Graphics",
    brand: "AMD",
    category: "GPUs / Graphics Cards",
    price: 47900,
    quantity: 21,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441226_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "The AMD Radeon RX 6700 XT graphics card, powered by AMD RDNA 2 architecture, featuring 40 powerful enhanced Compute Units, the all-new AMD Infinity Cache and 12GB of dedicated GDDR6 memory, is engineered to deliver ultra-high frame rates and powerhouse 1440p resolution gaming.",
  },
  {
    name: "PNY - XLR8 Gaming Single Fan NVIDIA GeForce GTX 1660 SUPER",
    brand: "PNY",
    category: "GPUs / Graphics Cards",
    price: 56999,
    quantity: 15,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407309_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Customize your gaming PC with this PNY GeForce GTX 1660 SUPER gaming graphics card. The 6GB of GDDR5 RAM deliver fast, responsive performance, while the PCIe 3.0 interface fits a number of motherboards. This PNY GeForce GTX 1660 SUPER gaming graphics card has HDMI, DVI-D and DisplayPort outputs that let you connect to multiple monitors for advanced gameplay.",
  },
  {
    name: "GIGABYTE - NVIDIA GeForce RTX 3060 12GB",
    brand: "GIGABYTE",
    category: "GPUs / Graphics Cards",
    price: 47999,
    quantity: 2,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468925_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Get the ultimate gaming performance with GIGABYTE RTX 3060 Graphics Cards. Powered by NVIDIA's 2nd gen RTX architecture and refined with WINDFORCE cooling technology, the GeForce RTX 3060 VISION OC 12G (rev. 2.0) brings stunning visuals, amazingly fast frame rates, and AI acceleration to games and creative applications with its enhanced RT Cores and Tensor Cores.",
  },
  {
    name: "GIGABYTE - NVIDIA GeForce RTX 3070TI AORUS MASTER 8GB",
    brand: "GIGABYTE",
    category: "GPUs / Graphics Cards",
    price: 97999,
    quantity: 12,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6467/6467788_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Get the ultimate gaming performance with AORUS RTX 3070 Ti Graphics Cards. Powered by NVIDIA's 2nd gen RTX architecture and refined with AORUS's Max Covered cooling technology, the AORUS GeForce RTX 3070 Ti MASTER 8G brings stunning visuals, amazingly fast frame rates, and AI acceleration to games and creative applications with its enhanced RT Cores and Tensor Cores, and superfast G6X memory.",
  },
  {
    name: "ASUS - NVIDIA GeForce GTX 1660 SUPER OC",
    brand: "ASUS",
    category: "GPUs / Graphics Cards",
    price: 32999,
    quantity: 45,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6405/6405063_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Improve your computer visuals with this Asus TUF Gaming GeForce GTX 1660 SUPER graphics card. The NVIDIA Turing architecture coupled with a blazing-fast GDDR6 memory smoothly handles demanding games, while the DirectCU II copper heat-pipes provide better cooling during long sessions in battlefields. This Asus TUF Gaming GeForce GTX 1660 SUPER graphics card features the GeForce Experience for capturing, live-streaming and sharing content with anyone.",
  },
  {
    name: "GIGABYTE - NVIDIA GeForce RTX 3060 12GB",
    brand: "GIGABYTE",
    category: "GPUs / Graphics Cards",
    price: 159999,
    quantity: 22,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468928_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Get the ultimate gaming performance with GIGABYTE RTX 3060 Graphics Cards. Powered by NVIDIA's 2nd gen RTX architecture and refined with WINDFORCE cooling technology, the GeForce RTX 3060 EAGLE OC 12G (rev. 2.0) brings stunning visuals, amazingly fast frame rates, and AI acceleration to games and creative applications with its enhanced RT Cores and Tensor Cores.",
  },
  {
    name: "ASUS - NVIDIA GeForce RTX 3060 12GB",
    brand: "ASUS",
    category: "GPUs / Graphics Cards",
    price: 52999,
    quantity: 21,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6460/6460665_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "From top to bottom, the ROG Strix GeForce RTX™ 3060 has been designed to push performance boundaries. A fresh design and more metal surrounds a grouping of Axial-tech fans that leverage a new rotation scheme",
  },
  {
    name: "GIGABYTE - NVIDIA GeForce RTX 3070TI EAGLE 8GB",
    brand: "GIGABYTE",
    category: "GPUs / Graphics Cards",
    price: 59999,
    quantity: 79,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6467/6467782_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Get the ultimate gaming performance with AORUS RTX 3070 Ti Graphics Cards. Powered by NVIDIA's 2nd gen RTX architecture and refined with GIGABYTE's WINDFORCE cooling technology, the GeForce RTX 3070 Ti EAGLE 8G brings stunning visuals, amazingly fast frame rates, and AI acceleration to games and creative applications with its enhanced RT Cores and Tensor Cores, and superfast G6X memory.",
  },

  //MONITORS
  {
    name: `Samsung - 390 Series 24" LED Curved FHD FreeSync Monitor`,
    brand: "Samsung",
    category: "Monitors",
    price: 15999,
    quantity: 18,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5044/5044601_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Enjoy an immersive viewing experience with this Samsung 24-inch curved monitor. An ultra-fast video response prevents blurring so you don't miss a detail. This Samsung 24-inch curved monitor provides bold panoramic views and its ultra-slim design is complimented with a simple tilting stand.",
  },
  {
    name: `Dell - SE2719HR 27" IPS LED FHD FreeSync Monitor`,
    brand: "Dell",
    category: "Monitors",
    price: 16999,
    quantity: 29,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394138_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Enjoy crystal-clear HD images on this Dell 27-inch monitor. With a thin-bezel design and built-in power supply, this monitor frees up space without compromising quality. IPS technology keeps colors brilliant from virtually any angle, while a 75Hz refresh rate is ideal for gaming. The flicker-free screen and ComfortView technology on this Dell 27-inch monitor help reduce eyestrain for a comfortable work environment.",
  },
  {
    name: `Samsung - T55 Series 27" LED 1000R Curved FHD FreeSync Monitor`,
    brand: "Samsung",
    category: "Monitors",
    price: 23999,
    quantity: 3,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6402/6402202_sd.jpg;maxHeight=640;maxWidth=550",
    description: `27" Curved Monitor with optimal curvature 1000R`,
  },
  {
    name: `Dell - S2721HGF 27" Gaming - LED Curved FHD FreeSync and G-SYNC Compatible Monitor`,
    brand: "Dell",
    category: "Monitors",
    price: 23999,
    quantity: 55,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425903_sd.jpg;maxHeight=640;maxWidth=550",
    description: `27" Full-HD curved gaming monitor with bold new design. Featuring 144Hz refresh rate and 1ms MPRT for smooth, immersive gameplay.`,
  },
  {
    name: `Samsung - CHG9 Series C49HG90DMN 49" HDR LED Curved FHD FreeSync Monitor`,
    brand: "Samsung",
    category: "Monitors",
    price: 89999,
    quantity: 38,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Enhance your gaming experience with this 49-inch Samsung curved gaming monitor. Quantum Dot technology delivers 1 billion shades of color with extra deep blacks and a black equalizer to let you see what's lurking in every corner. The superfast response time of this Samsung curved gaming monitor reduces motion blur to support your play.",
  },
  {
    name: `LG 34” UltraWide Full HD HDR Monitor with FreeSync`,
    brand: "LG",
    category: "Monitors",
    price: 32999,
    quantity: 0,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451082_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "LG's premium UltraWide monitors immerse you in everything from content creation to gaming. See a panoramic view made possible by the extra wide 21:9 IPS display for true color accuracy at wide angles. Experience easier multitasking, quickly switch between applications and enjoy a full, unencumbered view.",
  },
  {
    name: "Apple - Pro Display XDR - Nano-Texture Glass",
    brand: "Apple",
    category: "Monitors",
    price: 599999,
    quantity: 40,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6949/6949006_sd.jpg;maxHeight=640;maxWidth=550",
    description: `Introducing Apple Pro Display XDR. A massive 32" LCD display with Retina 6K resolution and 20.4 million pixels. Gorgeous P3 wide color and 10-bit depth for over a billion colors and very smooth gradients. Extreme dynamic range (XDR) with quality brightness and contrast for vivid, true-to-life images. Extra-wide viewing angle and reference modes based on industry standards. Nano-texture glass option for minimized glare. Pair with the modular Pro Stand for adjustability and flexibility on the go, or use the VESA mount adapter to attach to VESA mounts or arms. It's a groundbreaking display built for the most demanding professionals. Stand sold separately.`,
  },
  {
    name: "Apple - Pro Display XDR - Standard Glass",
    brand: "Apple",
    category: "Monitors",
    price: 499999,
    quantity: 30,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6949/6949006_sd.jpg;maxHeight=640;maxWidth=550",
    description: `
      Introducing Apple Pro Display XDR. A massive 32" LCD display with Retina 6K resolution and 20.4 million pixels.¹ Gorgeous P3 wide color and 10-bit depth for over a billion colors and very smooth gradients. Extreme dynamic range (XDR) with quality brightness and contrast for vivid, true-to-life images. Extra-wide viewing angle and reference modes based on industry standards. Pair with the modular Pro Stand for adjustability and flexibility on the go, or use the VESA mount adapter to attach to VESA mounts or arms. It's a groundbreaking display built for the most demanding professionals. Stand sold separately.`,
  },
  {
    name: "LG - 38” UltraWide 21:9 Curved WQHD+ Nano IPS HDR Monitor",
    brand: "LG",
    category: "Monitors",
    price: 159999,
    quantity: 18,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419975_sd.jpg;maxHeight=640;maxWidth=550",
    description: `Expansive views to work hard and play harder with a 1ms Nano IPS Display. More than a curved monitor, this is an all-around workhorse. At 38" and 21:9 screen ratio, the Wide QHD IPS Display combines color intensity and purity with ultra-fast 1ms response rates. Complete with multitasking features to work hard and cutting-edge gaming features to play hard, along with an Ergo Stand to keep you comfortable either way.`,
  },
  {
    name: "LG - UltraGear 34” Nano IPS Curved",
    brand: "LG",
    category: "Monitors",
    price: 129999,
    quantity: 10,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451084_sd.jpg;maxHeight=640;maxWidth=550",
    description: `Zero In with LG UltraGear™. Getting into that place where it all flows. How you focus, how you play, how you win. LG UltraGear™ is made to help you find the perfect state. It delivers the latest hardware, specs, ergonomics, and the ultimate sensory experience. With gaming-focused features like an immersive 34” Curved UltraWide QHD (3440 x 1440) screen, NVIDIA® G-SYNC® ULTIMATE, 1ms (GtG) response times, pro-level customization and fast, vivid Nano IPS panels, it's immersion on a whole new level.`,
  },
  {
    name: 'LG - 32" UltraFine IPS LED 4K UHD FreeSync Monitor',
    brand: "LG",
    category: "Monitors",
    price: 129999,
    quantity: 0,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6314/6314048_sd.jpg;maxHeight=640;maxWidth=550",
    description: `Work on professional creative projects with this 31.5-inch LG UltraFine 4K monitor. Nano IPS and VESA DisplayHDR 600 color technologies provide accurate display of image details for precise color grading and efficiency in various post-production tasks. The Thunderbolt 3 interface of this LG UltraFine 4K monitor supports daisy-chaining, high-speed data transfers and laptop charging.`,
  },

  //CPUs
  {
    name: "Intel - Core i7-10700K",
    brand: "Intel",
    category: "CPUs / Processors",
    price: 34999,
    quantity: 60,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6411/6411488cv1d.jpg;maxHeight=640;maxWidth=550",
    description:
      "Build a powerful PC with this 10th Gen Intel Core i7 desktop processor. The eight cores and Hyper-Threading technology support advanced multitasking, while the base clock speeds of up to 3.1GHz deliver speedy responses. This unlocked Intel Core i7 desktop processor features Intel Turbo Boost Max to handle complex content creation tools.",
  },
  {
    name: "AMD - Ryzen 5 5600X",
    brand: "AMD",
    category: "CPUs / Processors",
    price: 27999,
    quantity: 50,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438943_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Game with the Best 6 incredible cores for those who just want to game. Get the high-speed gaming performance of the world’s best desktop processor. AMD StoreMI Technology a fast and easy way to expand and accelerate the storage in a desktop PC with an AMD Ryzen processor.",
  },
  {
    name: "AMD - Ryzen 7 5800X",
    brand: "AMD",
    category: "CPUs / Processors",
    price: 41999,
    quantity: 66,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6439/6439000_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "8 cores optimized for high-FPS gaming rigs. Get the high-speed gaming performance of the world’s best desktop processor. AMD Ryzen Master Utility the Simple and Powerful Overclocking Utility for AMD Ryzen processors.",
  },
  {
    name: "Intel - Core i9-9900K",
    brand: "Intel",
    category: "CPUs / Processors",
    price: 35999,
    quantity: 28,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6302/6302019cv1d.jpg;maxHeight=640;maxWidth=550",
    description:
      "Complete your computer setup with this Intel Core i9 desktop processor. The hyper-threading technology allows for 16-way multitasking, and eight cores combine with Turbo Boost Technology 2.0 for quick operations. This Intel Core i9 desktop processor supports Optane memory for more efficient loading and increased overall responsiveness with faster access to data.",
  },
  {
    name: "Intel - Core i5-10600K",
    brand: "Intel",
    category: "CPUs / Processors",
    price: 22999,
    quantity: 30,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452220_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Set up a powerful desktop PC with this 10th Gen Intel Core i5 processor. DDR4 support and six cores provide accelerated multitasking support, while the base clock speeds of up to 4.1GHz deliver high-speed responses. This Intel Core i5 processor features Intel Turbo Boost technology for enhanced performance to handle demanding applications.",
  },
  {
    name: "AMD - Ryzen 9 5950X",
    brand: "AMD",
    category: "CPUs / Processors",
    price: 74900,
    quantity: 5,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438941_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "One processor that can game as well as it creates. Get the high-speed gaming performance of the world’s best desktop processor. A fast and easy way to expand and accelerate the storage in a desktop PC with an AMD Ryzen processor.",
  },

  //RAM
  {
    name: "CORSAIR - Vengeance RGB PRO 32GB (2x16GB) DDR4",
    brand: "CORSAIR",
    category: "RAM / Memory",
    price: 15799,
    quantity: 100,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449223_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "CORSAIR Vengeance RGB PRO Series DDR4 memory lights up your PC with mesmerizing dynamic multi-zone RGB lighting, while delivering the best in DDR4 performance and stability. Every module boasts ten individually controlled RGB LEDs, while wire-free design makes installation simple. Take control with CORSAIR iCUE software and completely customize every module’s lighting to match your system, or easily synchronize lighting across all your CORSAIR products with Light LINK. A custom designed PCB provides the highest signal quality for the best level of performance and stability on the latest AMD and Intel DDR4 motherboards, while specially screened ICs unlock superior overclocking.",
  },
  {
    name: "CORSAIR - Vengeance LPX 16GB (2x8GB)",
    brand: "CORSAIR",
    category: "RAM / Memory",
    price: 7399,
    quantity: 90,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4895/4895506_sa.jpg;maxHeight=640;maxWidth=550",
    description:
      "Give your computer a performance boost with this Corsair Vengeance LPX DDR4 DRAM desktop memory, which offers high frequencies and bandwidth with low power consumption. XMP 2.0 support enables simple automatic overclocking.",
  },
  {
    name: "CORSAIR - Vengeance RGB PRO SL 32GB (2x16GB)",
    brand: "CORSAIR",
    category: "RAM / Memory",
    price: 14999,
    quantity: 83,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457798_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "CORSAIR Vengeance RGB PRO SL DDR4 memory lights up your PC while delivering peak performance in a compact form factor just 44mm tall for wide compatibility with CPU coolers. Every module boasts ten bright, individually controlled RGB LEDs for brilliant illumination.",
  },
  {
    name: "PNY - XLR8 16GB (2x8GB)",
    brand: "PNY",
    category: "RAM / Memory",
    price: 7999,
    quantity: 78,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441734cv1d.jpg;maxHeight=640;maxWidth=550",
    description:
      "A PNY XLR8 Gaming Chroma RGB Memory Upgrade offers a brilliant RGB design combined with extreme overclocked performance, taking your PC to the extreme. Not only can you destroy the competition, but your system can look good while doing so.",
  },
  {
    name: "HyperX FURY HX426C16FB3K2/16 16GB (2x8GB)",
    brand: "HyperX",
    category: "RAM / Memory",
    price: 8999,
    quantity: 29,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426290cv1d.jpg;maxHeight=640;maxWidth=550",
    description:
      "HyperX FURY DDR4 features an updated heat spreader and speeds up to 3466MHz for a stylish performance boost. FURY DDR4’s XMP-ready and available in 2400MHz–3466MHz speeds, CL15–16 latencies, 8GB and 16GB single module capacities, and 16GB–64GB kit capacities. It features Plug N Play automatic overclocking at 2400MHz and 2666MHz speeds and is compatible with the latest Intel and AMD CPUs.",
  },
  {
    name: "HyperX FURY HX432C16FB3AK2/16 16GB (2x8GB)",
    brand: "HyperX",
    category: "RAM / Memory",
    price: 10399,
    quantity: 44,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426288cv1d.jpg;maxHeight=640;maxWidth=550",
    description:
      "HyperX FURY DDR4 RGB* features RGB lighting and speeds up to 3466MHz** for a stylish performance boost. FURY DDR4 RGB’s XMP-ready and available in 2400MHz–3466MHz speeds, CL15–16 latencies, 8GB and 16GB single module capacities, and 16GB–64GB kit capacities. It features Plug N Play automatic overclocking at 2400MHz and 2666MHz speeds and is compatible with the latest Intel and AMD CPUs. FURY DDR4 RGB’s backed by a lifetime , a worry-free, cost-effective upgrade.",
  },
  {
    name: "CORSAIR - Dominator Platinum RGB 64GB (4x16GB)",
    brand: "CORSAIR",
    category: "RAM / Memory",
    price: 54999,
    quantity: 100,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6337/6337723_sd.jpg;maxHeight=640;maxWidth=550",
    description: `Boost PC performance with this versatile Corsair Dominator Platinum RGB 64GB DDR4 memory kit. Hand-sorted tightly screened memory chips provide high-frequency performance and quick response times, while an integrated heat spreader pushes heat away from the modules to keep the RAM cool. This Corsair Dominator Platinum RGB 64GB DDR4 memory kit is compatible with a variety of Intel and AMD DDR4 motherboards.`,
  },
  {
    name: "HyperX Predator HX432C16PB3AK2/64 64GB (2x32GB)",
    brand: "HyperX",
    category: "RAM / Memory",
    price: 43699,
    quantity: 60,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6459/6459266_sd.jpg;maxHeight=640;maxWidth=550",
    description: `HyperX Predator DDR4 RGB pairs brilliant RGB style with dazzling performance. Easily create your look with HyperX's Infrared Sync technology, no cables required. Predator DDR4 RGB's CL19 latency and speeds up to 4000MHz provide a powerful boost. Featuring Intel XMP-ready profiles optimized for Intel's latest chipsets, it's available in 8GB singles and kits of 2 or 4 with 16GB-32GB capacities.`,
  },
  {
    name: "PNY - 64GB (4x16GB) 3200MHz DDR4",
    brand: "PNY",
    category: "RAM / Memory",
    price: 29999,
    quantity: 6,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6467/6467033_sd.jpg;maxHeight=640;maxWidth=550",
    description: `A PNY XLR8 Gaming EPIC-X RGB Memory Upgrade offers a brilliant RGB design combined with extreme overclocked performance, taking a PC to the next level.`,
  },


  //MOTHERBOARDS
  {
    name: "ASUS - ROG STRIX B550-F",
    brand: "ASUS",
    category: "Motherboards",
    price: 17999,
    quantity: 40,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6422/6422283_sd.jpg;maxHeight=640;maxWidth=550",
    description: `
    ROG Strix B550 Gaming series motherboards offer a feature-set usually found in the higher-end ROG Strix X570 Gaming series, including the latest PCIe® 4.0. With robust power delivery and effective cooling, ROG Strix B550 Gaming is well-equipped to handle 3rd Gen AMD Ryzen™ CPUs`,
  },
  {
    name: "MSI - MPG Z490 GAMING EDGE WIFI",
    brand: "MSI",
    category: "Motherboards",
    price: 22999,
    quantity: 30,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412362_sd.jpg;maxHeight=640;maxWidth=550",
    description: `Set up a high-performance desktop PC with this MSI MPG Z490 Gaming Edge ATX motherboard. The two-way AMD Crossfire graphics support the use of multiple graphics cards, while the premium thermal solution helps keep your devices cool. This MSI MPG Z490 Gaming Edge ATX motherboard features Core Boost technology and DDR4 Boost to unleash maximum performance.`,
  },
  {
    name: "MSI - MPG X570 GAMING EDGE WIFI",
    brand: "MSI",
    category: "Motherboards",
    price: 19900,
    quantity: 25,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6357/6357223_sd.jpg;maxHeight=640;maxWidth=550",
    description: `Build a powerful PC with this MSI MPG X570 Gaming Edge motherboard. The AM4 socket handles second-generation and third-generation AMD Ryzen processors for smooth gaming performance, while DDR4 Boost supports RAM overclocking and rapid data transfer. This MSI MPG X570 Gaming Edge motherboard features a PCIe 4.0 interface for high-end graphics cards and SSDs, and USB 3.2 technology delivers super-fast transfer speeds.`,
  },
  {
    name: "MSI - Z490-A PRO",
    brand: "MSI",
    category: "Motherboards",
    price: 17999,
    quantity: 50,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436464_sd.jpg;maxHeight=640;maxWidth=550",
    description: `PRO series helps users work smarter by delivering an efficient and productive experience. Featuring stable functionality and high-quality assembly, PRO series motherboards provide not only optimized professional workflows but also less troubleshooting and longevity.`,
  },
  {
    name: "MSI - B550 GAMING PLUS",
    brand: "MSI",
    category: "Motherboards",
    price: 14499,
    quantity: 20,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6424/6424047_sd.jpg;maxHeight=640;maxWidth=550",
    description: `
    The MAG series was born through rigorous quality testing and designed to be a symbol of sturdiness and durability. Focused on providing the best user experience, the MAG series has a simple installation process coupled with a friendly user interface making it the best choice for entry level gamers. MAG B550 Gaming PLus features high-bandwidth and low-latency 2.5G plus Gigabit LAN for power users. Onboard 2.5Gbps connectivity provides incredible data transfer speed faster than ever before. MSI LAN Manager automatically classifies and prioritizes the latency-sensitive for your applications, giving you the best online experience with low latency.`,
  },
  {
    name: "MSI - Z590 PRO WIFI",
    brand: "MSI",
    category: "Motherboards",
    price: 19999,
    quantity: 10,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455367_sd.jpg;maxHeight=640;maxWidth=550",
    description: `The Z590 PRO WIFI ATX motherboard employs a robust VRM platform for the Intel Z590 chipset (LGA 1200, 11th Gen Core ready) with a 12 Duet Rail 55A power system (4+8 Pin connector) supported by passive cooling heat sinks and Frozr AI thermal monitoring. Designed to support the latest 11th Gen Intel Core processors, the Z590 PRO WIFI includes future-friendly hardware support options in the form of 4 x DDR4 dual-channel DIMMs (5333 MHz/OC) and a steel-reinforced PCIe 4.0 x16 slot to support heavier GPU’s (2-way AMD CrossFire available via secondary PCIe 3.0 x16 slot).`,
  },
  {
    name: "ASUS - ROG STRIX Z590-E GAMING WIFI",
    brand: "ASUS",
    category: "Motherboards",
    price: 37999,
    quantity: 22,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452560_sd.jpg;maxHeight=640;maxWidth=550",
    description: `The flagship ROG Strix Z590-E Gaming WiFi motherboard is designed with boosted power delivery and optimized cooling to cope with the demands of powerful 11th Generation Intel® Core™ Rocket Lake processors`,
  },
  {
    name: "ASUS - ROG MAXIMUS XIII HERO",
    brand: "ASUS",
    category: "Motherboards",
    price: 48599,
    quantity: 11,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452557_sd.jpg;maxHeight=640;maxWidth=550",
    description: `ROG provides you with the very best gaming-audio inputs and outputs, with special shielded designs, and a collection of carefully selected professional-grade audio components`,
  },
  {
    name: "GIGABYTE Z590 AORUS ELITE AX",
    brand: "GIGABYTE",
    category: "Motherboards",
    price: 23999,
    quantity: 49,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454896_sd.jpg;maxHeight=640;maxWidth=550",
    description: `The Z590 AORUS ELITE AX is a great motherboard for mainstream systems, featuring a robust power design and the latest connecitivity options which allow users to get the most performance out of Intel 11th Gen processors.`,
  },
  {
    name: "MSI - B550 TOMAHAWK",
    brand: "MSI",
    category: "Motherboards",
    price: 18999,
    quantity: 87,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420740_sd.jpg;maxHeight=640;maxWidth=550",
    description: `The MAG series was born through rigorous quality testing and designed to be a symbol of sturdiness and durability. Focused on providing the best user experience, the MAG series has a simple installation process coupled with a friendly user interface making it the best choice for entry level gamers. MAG B550 TOMAHAWK features high-bandwidth and low-latency 2.5G plus Gigabit LAN for power users. Onboard 2.5Gbps connectivity provides incredible data transfer speed faster than ever before. MSI LAN Manager automatically classifies and prioritizes the latency-sensitive for your applications, giving you the best online experience with low latency.`,
  },
  {
    name: "GIGABYTE B550 AORUS PRO",
    brand: "GIGABYTE",
    category: "Motherboards",
    price: 20599,
    quantity: 62,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420397_sd.jpg;maxHeight=640;maxWidth=550",
    description: `B550 AORUS PRO AC motherboard uses an 12*+2 phases digital CPU power design which includes both digital PWM Controller and DrMOS. These 100% digital controller offer incredible precision in delivering power to the motherboard's most power-hungry and energy-sensitive components, allowing enthusiasts to get the absolute maximum performance from 3rd Gen AMD Ryzen™ processors.`,
  },

  //POWER SUPPLIES
  {
    name: "CORSAIR - RMx Series RM850x 80 PLUS Gold",
    brand: "CORSAIR",
    category: "Power Supplies",
    price: 14799,
    quantity: 60,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6459/6459244_sd.jpg;maxHeight=640;maxWidth=550",
    description: `
    CORSAIR RM850x Series power supplies with EPS12V connectors are built with the highest quality components to deliver 80 PLUS Gold efficient power to your PC. RM850x PSUs use only Japanese 105°C capacitors, for long life and reliability backed by a ten-year warranty.`,
  },
  {
    name: "EVGA - GP Series SuperNOVA 1000W ATX 80 Plus Gold",
    brand: "CORSAIR",
    category: "Power Supplies",
    price: 16999,
    quantity: 45,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6209/6209800_sd.jpg;maxHeight=640;maxWidth=550",
    description: `The EVGA SuperNOVA G+ Power Supplies have arrived. Launched in 2013, the EVGA SuperNOVA G1 power supplies have been among the longest-lasting and best-performing power supplies on the market. Despite only a few changes over the years, it's only fitting that these are due for an upgrade. Enter the G+, the new and improved fully-modular power supply line-up from EVGA with an 80+ Gold Efficiency rating.`,
  },
  {
    name: "EVGA - W3 Series 450W",
    brand: "EVGA",
    category: "Power Supplies",
    price: 2999,
    quantity: 71,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6411/6411819_sd.jpg;maxHeight=640;maxWidth=550",
    description: `Nothing beats a great value, and the EVGA 450 W3 80 PLUS Certified power supply is one of the top-performing budget power supplies available with the connectors and protections needed for most system builds. Powered by up to 36A on a single +12V rail gives you more hardware options to improve your system's performance. Save space and reduce case clutter with a small, compact design and fully sleeved cables. Featuring EVGA's standard 3 year limited warranty and ultra-quiet fan design, the EVGA 450 W3 is a perfect compliment to your next build.`,
  },
  {
    name: "CORSAIR - CX-F RGB Series™ CX650F RGB",
    brand: "CORSAIR",
    category: "Power Supplies",
    price: 9499,
    quantity: 39,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449963_sd.jpg;maxHeight=640;maxWidth=550",
    description: `CORSAIR CX-650F RGB Series fully modular power supplies deliver reliable 80 PLUS Bronze efficient power to your system, alongside vibrant customizable lighting from a 120mm RGB fan boasting eight RGB LEDs and a clean aesthetic.`,
  },
  {
    name: "CORSAIR - CX-M Series CX750M",
    brand: "CORSAIR",
    category: "Power Supplies",
    price: 8999,
    quantity: 21,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6459/6459241_sd.jpg;maxHeight=640;maxWidth=550",
    description: `CORSAIR CX-M Series Low-Noise Power Supplies offer 80 PLUS Bronze efficiency and semi-modular cabling for reliable, low-noise operation. With Dual EPS12V cables and two/four PCIe 8-pin power connectors, CX-M PSUs have all the connections needed to power today’s most demanding PC upgrades.`,
  },
  {
    name: "CORSAIR - CX Series Modular CX750M 750W 80 Plus Bronze",
    brand: "CORSAIR",
    category: "Power Supplies",
    price: 10499,
    quantity: 31,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8324/8324202_sa.jpg;maxHeight=640;maxWidth=550",
    description: `This Corsair CX Series Modular CX750M CP-9020061-NA power supply features over- and under-voltage, over-power and short-circuit protection to prevent damage to your components. The flexible modular cabling system accommodates your system configuration.`,
  },
  {
    name: "CORSAIR - RMx Series RM1000x 80 PLUS Gold",
    brand: "CORSAIR",
    category: "Power Supplies",
    price: 18999,
    quantity: 55,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6459/6459246_sd.jpg;maxHeight=640;maxWidth=550",
    description: `
    CORSAIR RM1000x Series power supplies with EPS12V connectors are built with the highest quality components to deliver 80 PLUS Gold efficient power to your PC. RM1000x PSUs use only Japanese 105°C capacitors, for long life and reliability backed by a ten-year warranty.`,
  },
  {
    name: "CORSAIR - CX-F RGB Series CX750F RGB 80 PLUS Bronze",
    brand: "CORSAIR",
    category: "Power Supplies",
    price: 9999,
    quantity: 51,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449965_sd.jpg;maxHeight=640;maxWidth=550",
    description: `
    CORSAIR CX-750F RGB Series fully modular power supplies deliver reliable 80 PLUS Bronze efficient power to your system, alongside vibrant customizable lighting from a 120mm RGB fan boasting eight RGB LEDs and a clean aesthetic.`,
  },
  {
    name: "CORSAIR - RM Series RM850 850W ATX 80 PLUS GOLD",
    brand: "CORSAIR",
    category: "Power Supplies",
    price: 13999,
    quantity: 9,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477389_sd.jpg;maxHeight=640;maxWidth=550",
    description: `CORSAIR RM Series Fully Modular Ultra-Low Noise Power Supplies deliver consistent 80 PLUS Gold efficient power to your PC. With triple EPS12V cables and four PCIe 8-pin power connectors, RM PSUs have all the connections needed to power today’s most demanding PC upgrades. Industrial-grade, 105°C-rated capacitors deliver superb electrical performance and reliability, backed by a ten-year warranty.`,
  },
  {
    name: "EVGA - GQ Series 850W ATX12V/ EPS12V 80 Plus Gold",
    brand: "EVGA",
    category: "Power Supplies",
    price: 15999,
    quantity: 0,
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5622/5622834_sd.jpg;maxHeight=640;maxWidth=550",
    description: `
    Introducing the latest in the EVGA power supply lineup; the GQ series. These power supplies take some of the best features from EVGA award winning power supplies, like EVGA ECO fan mode for near silent operation, Japanese Capacitor Design and a highly efficient design, at an excellent value. These new power supplies are 80 Plus Gold rated and offer an outstanding 5 Year Warranty that backed by world class EVGA support.`,
  },
];

module.exports = products;
