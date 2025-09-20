"use client";

import Image from "next/image";

import { useMemo } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const useCurrency = (currency = "USD", locale = "en-US") =>
  useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }),
    [currency, locale]
  );

export default function ProductSectionsClient({ sections }) {
  const fmt = useCurrency("USD");

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                {section.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {section.title === "Best Sellers"
                  ? "Our most loved sunglasses, chosen by thousands of satisfied customers worldwide."
                  : "Fresh designs that define the future of eyewear fashion and functionality."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.products.map((p) => (
                <Card
                  key={p.id}
                  className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border p-0"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg w-full h-52">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      {p.badge && (
                        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full shadow">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">
                        {p.name}
                      </h3>

                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(p.rating || 0)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground ml-2">
                          {p.rating} ({p.reviews})
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-card-foreground">
                            {fmt.format(p.price)}
                          </span>
                          {p.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {fmt.format(p.originalPrice)}
                            </span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center cursor-pointer my-12">
              <Button
                variant="outline"
                size="lg"
                className="border-primary cursor-pointer text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View All {section.title}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
