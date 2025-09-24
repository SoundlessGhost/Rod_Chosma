const { PrismaClient } = require("@prisma/client");

const slugify = require("slugify");
const prisma = new PrismaClient();

const productCategories = [
  {
    title: "Best Sellers",
    products: [
      {
        name: "Classic Aviator",
        price: 299,
        originalPrice: 399,
        image: "/2.jpeg",
        secondaryImages: ["/2.jpeg", "/2.jpeg"],
        rating: 4.9,
        reviews: 124,
        badge: "Bestseller",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Urban Explorer",
        price: 249,
        image: "/3.jpeg",
        secondaryImages: ["/3.jpeg", "/3.jpeg"],
        rating: 4.8,
        reviews: 89,
        badge: "Popular",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Beach Vibes",
        price: 199,
        image: "/4.jpeg",
        secondaryImages: ["/4.jpeg", "/4.jpeg"],
        rating: 4.7,
        reviews: 156,
        badge: "Summer Hit",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Executive Elite",
        price: 449,
        image: "/5.jpeg",
        secondaryImages: ["/5.jpeg", "/5.jpeg"],
        rating: 5.0,
        reviews: 67,
        badge: "Premium",
        sizes: ["XS", "S", "M", "L", "XL"],
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
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Minimalist Pro",
        price: 279,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-1.jpeg", "/eyeglass-1.jpeg"],
        rating: 4.8,
        reviews: 15,
        badge: "New",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Retro Revival",
        price: 219,
        image: "/eyeglass-1.jpeg",
        secondaryImages: ["/eyeglass-2.jpeg", "/eyeglass-2.jpeg"],
        rating: 4.6,
        reviews: 31,
        badge: "New",
        sizes: ["XS", "S", "M", "L", "XL"],
      },
      {
        name: "Sport Fusion",
        price: 359,
        image: "/1.jpeg",
        secondaryImages: ["/1.jpeg", "/1.jpeg"],
        rating: 4.9,
        reviews: 19,
        badge: "New",
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
          deleteMany: {}, // old products removed
          create: category.products.map((p) => ({
            ...p,
            slug: slugify(p.name, { lower: true, strict: true }),
          })),
        },
      },
      create: {
        title: category.title,
        products: {
          create: category.products.map((p) => ({
            ...p,
            slug: slugify(p.name, { lower: true, strict: true }),
          })),
        },
      },
    });
  }
  console.log("✅ Seed data upserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
