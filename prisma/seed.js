const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const productCategories = [
  {
    title: "Best Sellers",
    products: [
      {
        name: "Penguin",
        price: 1500,
        image: "/colourful-sunglass/1a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/1a.jpeg",
          "/colourful-sunglass/1a.jpeg",
        ],
        shape: "Square",
        lens: "Polycarbonate Black",
        badge: "Bestseller",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Dhan Shalik",
        price: 1500,
        image: "/colourful-sunglass/2a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/2a.jpeg",
          "/colourful-sunglass/2a.jpeg",
        ],
        shape: "Wayferar",
        lens: "Polycarbonate Revo",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Basonto Bauri",
        price: 1500,
        image: "/colourful-sunglass/3a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/3a.jpeg",
          "/colourful-sunglass/3a.jpeg",
        ],
        shape: "Rectangular",
        lens: "Polycarbonate",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Dahuk",
        price: 1500,
        image: "/colourful-sunglass/4a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/4a.jpeg",
          "/colourful-sunglass/4a.jpeg",
        ],
        shape: "Half Rim",
        lens: "Brown Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Penguin",
        price: 1500,
        image: "/colourful-sunglass/5a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/5a.jpeg",
          "/colourful-sunglass/5a.jpeg",
        ],
        shape: "0-o",
        lens: "Polycarbonate Revo",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Hutum Pecha",
        price: 1500,
        image: "/colourful-sunglass/6a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/6a.jpeg",
          "/colourful-sunglass/6a.jpeg",
        ],
        shape: "Oval",
        lens: "Polycarbonate Black",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Falcon",
        price: 1500,
        image: "/colourful-sunglass/7a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/7a.jpeg",
          "/colourful-sunglass/7a.jpeg",
        ],
        shape: "Cats Eye",
        lens: "Polycarbonate Black",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Vubon Chil",
        price: 1500,
        image: "/colourful-sunglass/8a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/8a.jpeg",
          "/colourful-sunglass/8a.jpeg",
        ],
        shape: "Aviator",
        lens: "Polycarbonate Revo",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Falcon",
        price: 1500,
        image: "/colourful-sunglass/9a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/9a.jpeg",
          "/colourful-sunglass/9a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Bou kotha kow",
        price: 1500,
        image: "/colourful-sunglass/10a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/10a.jpeg",
          "/colourful-sunglass/10a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Peacock",
        price: 1500,
        image: "/colourful-sunglass/11a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/11a.jpeg",
          "/colourful-sunglass/11a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Bosonto Bauri",
        price: 1500,
        image: "/colourful-sunglass/12a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/12a.jpeg",
          "/colourful-sunglass/12a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Kana Kukka",
        price: 1500,
        image: "/colourful-sunglass/13a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/13a.jpeg",
          "/colourful-sunglass/13a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Hutum Pecha",
        price: 1500,
        image: "/colourful-sunglass/14a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/14a.jpeg",
          "/colourful-sunglass/14a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Vubon Chil",
        price: 1500,
        image: "/colourful-sunglass/15a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/15a.jpeg",
          "/colourful-sunglass/15a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Dhan Shalik",
        price: 1500,
        image: "/colourful-sunglass/16a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/16a.jpeg",
          "/colourful-sunglass/16a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Raj hongsho",
        price: 1500,
        image: "/colourful-sunglass/18a.jpeg",
        secondaryImages: [
          "/colourful-sunglass/18a.jpeg",
          "/colourful-sunglass/18a.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
    ],
  },
  {
    title: "New Arrivals",
    products: [
      {
        name: "The Black Raven",
        price: 3500,
        image: "/special/special-1.jpeg",
        secondaryImages: ["/special/special-1.jpeg", "/special/special-1.jpeg"],
        shape: "Square",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "The Nightingale",
        price: 3500,
        image: "/special/special-2.jpeg",
        secondaryImages: ["/special/special-2.jpeg", "/special/special-2.jpeg"],
        shape: "Heart",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "The Magpie Robin",
        price: 3500,
        image: "/special/special-3.jpeg",
        secondaryImages: ["/special/special-3.jpeg", "/special/special-3.jpeg"],
        shape: "Rectangle",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "The Ababil",
        price: 3500,
        image: "/special/special-4.jpeg",
        secondaryImages: ["/special/special-4.jpeg", "/special/special-4.jpeg"],
        shape: "Oval",
        lens: "White Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Sunglass Box",
        price: 1500,
        image: "/special/box.jpeg",
        secondaryImages: ["/special/box1.jpeg", "/special/box1.jpeg"],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Pankouri",
        price: 1300,
        image: "/white-sunglasses/1.jpeg",
        secondaryImages: [
          "/white-sunglasses/1.jpeg",
          "/white-sunglasses/1.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Bosonto Bauri",
        price: 1300,
        image: "/white-sunglasses/2.jpeg",
        secondaryImages: [
          "/white-sunglasses/2.jpeg",
          "/white-sunglasses/2.jpeg",
        ],
        shape: "Butterfly",
        lens: "white Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Hutum Pecha",
        price: 1300,
        image: "/white-sunglasses/3.jpeg",
        secondaryImages: [
          "/white-sunglasses/3.jpeg",
          "/white-sunglasses/3.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Peacock",
        price: 1300,
        image: "/white-sunglasses/4.jpeg",
        secondaryImages: [
          "/white-sunglasses/4.jpeg",
          "/white-sunglasses/4.jpeg",
        ],
        shape: "Butterfly",
        lens: "white Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Kana Kukka",
        price: 1300,
        image: "/white-sunglasses/5.jpeg",
        secondaryImages: [
          "/white-sunglasses/5.jpeg",
          "/white-sunglasses/5.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Raj hongsho",
        price: 1300,
        image: "/white-sunglasses/6.jpeg",
        secondaryImages: [
          "/white-sunglasses/6.jpeg",
          "/white-sunglasses/6.jpeg",
        ],
        shape: "Butterfly",
        lens: "white Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Dahuk",
        price: 1300,
        image: "/white-sunglass/7.jpeg",
        secondaryImages: [
          "/white-sunglass/7.jpeg",
          "/white-sunglass/7.jpeg",
        ],
        shape: "Half Rim",
        lens: "Brown Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Kana Kukka",
        price: 1300,
        image: "/white-sunglasses/8.jpeg",
        secondaryImages: [
          "/white-sunglasses/8.jpeg",
          "/white-sunglasses/8.jpeg",
        ],
        shape: "Butterfly",
        lens: "Black Glass",
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
    ],
  },
];

async function main() {
  for (const category of productCategories) {
    await prisma.category.upsert({
      where: { title: category.title },
      update: {
        products: {
          deleteMany: {},
          create: category.products.map((p) => ({
            ...p,
          })),
        },
      },
      create: {
        title: category.title,
        products: {
          create: category.products.map((p) => ({
            ...p,
          })),
        },
      },
    });
  }
  console.log("✅ Seed data upsert successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
