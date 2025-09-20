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
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-1a.jpeg", "/eyeglass-1b.jpeg"],
        rating: 4.9,
        reviews: 124,
        badge: "Bestseller",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        name: "Urban Explorer",
        price: 249,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-2a.jpeg", "/eyeglass-2b.jpeg"],
        rating: 4.8,
        reviews: 89,
        badge: "Popular",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        name: "Beach Vibes",
        price: 199,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-3a.jpeg", "/eyeglass-3b.jpeg"],
        rating: 4.7,
        reviews: 156,
        badge: "Summer Hit",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        name: "Executive Elite",
        price: 449,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-4a.jpeg", "/eyeglass-4b.jpeg"],
        rating: 5.0,
        reviews: 67,
        badge: "Premium",
        sizes: ["S", "M", "L", "XL"],
      },
    ],
  },
  {
    title: "New Arrivals",
    products: [
      {
        name: "Sunset Gradient",
        price: 329,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-5a.jpeg", "/eyeglass-5b.jpeg"],
        rating: 4.9,
        reviews: 23,
        badge: "New",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        name: "Minimalist Pro",
        price: 279,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-6a.jpeg", "/eyeglass-6b.jpeg"],
        rating: 4.8,
        reviews: 15,
        badge: "New",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        name: "Retro Revival",
        price: 219,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-7a.jpeg", "/eyeglass-7b.jpeg"],
        rating: 4.6,
        reviews: 31,
        badge: "New",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        name: "Sport Fusion",
        price: 359,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-8a.jpeg", "/eyeglass-8b.jpeg"],
        rating: 4.9,
        reviews: 19,
        badge: "New",
        sizes: ["S", "M", "L", "XL"],
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
