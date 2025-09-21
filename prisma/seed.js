// prisma/seed.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const productCategories = [
  {
    title: "Best Sellers",
    products: [
      {
        name: "Classic Aviator",
        price: 299,
        originalPrice: 399,
        image: "/Eyeglass-1a.jpeg",
        secondaryImages: ["/Eyeglass-1a.jpeg", "/Eyeglass-1a.jpeg"],
        rating: 4.9,
        reviews: 124,
        badge: "Bestseller",
        sizes: ["XS","S", "M", "L", "XL"],
      },
      {
        name: "Urban Explorer",
        price: 249,
        image: "/Eyeglass-1a.jpeg",
        secondaryImages: ["/Eyeglass-1a.jpeg", "/Eyeglass-1a.jpeg"],
        rating: 4.8,
        reviews: 89,
        badge: "Popular",
        sizes: ["XS","S", "M", "L", "XL"],
      },
      {
        name: "Beach Vibes",
        price: 199,
        image: "/Eyeglass-1a.jpeg",
        secondaryImages: ["/Eyeglass-1a.jpeg", "/Eyeglass-1a.jpeg"],
        rating: 4.7,
        reviews: 156,
        badge: "Summer Hit",
        sizes: ["XS","S", "M", "L", "XL"],
      },
      {
        name: "Executive Elite",
        price: 449,
        image: "/Eyeglass-1a.jpeg",
        secondaryImages: ["/Eyeglass-1a.jpeg", "/Eyeglass-1a.jpeg"],
        rating: 5.0,
        reviews: 67,
        badge: "Premium",
        sizes: ["XS","S", "M", "L", "XL"],
      },
    ],
  },
  {
    title: "New Arrivals",
    products: [
      {
        name: "Sunset Gradient",
        price: 329,
        image: "/Eyeglass-1a.jpeg",
        secondaryImages: ["/Eyeglass-1a.jpeg", "/Eyeglass-1a.jpeg"],
        rating: 4.9,
        reviews: 23,
        badge: "New",
        sizes: ["XS","S", "M", "L", "XL"],
      },
      {
        name: "Minimalist Pro",
        price: 279,
        image: "/Eyeglass-1a.jpeg",
        secondaryImages: ["/Eyeglass-1a.jpeg", "/Eyeglass-1a.jpeg"],
        rating: 4.8,
        reviews: 15,
        badge: "New",
        sizes: ["XS","S", "M", "L", "XL"],
      },
      {
        name: "Retro Revival",
        price: 219,
        image: "/Eyeglass-1a.jpeg",
        secondaryImages: ["/Eyeglass-1a.jpeg", "/Eyeglass-1a.jpeg"],
        rating: 4.6,
        reviews: 31,
        badge: "New",
        sizes: ["XS","S", "M", "L", "XL"],
      },
      {
        name: "Sport Fusion",
        price: 359,
        image: "/Eyeglass-1a.jpeg",
        secondaryImages: ["/Eyeglass-1a.jpeg", "/Eyeglass-1a.jpeg"],
        rating: 4.9,
        reviews: 19,
        badge: "New",
        sizes: ["XS","S", "M", "L", "XL"],
      },
    ],
  },
];

async function main() {
  for (const category of productCategories) {
    await prisma.category.create({
      data: {
        title: category.title,
        products: { create: category.products },
      },
    });
  }
}

main()
  .then(async () => {
    console.log("✅ Seed data inserted!");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
