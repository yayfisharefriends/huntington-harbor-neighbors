import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const species = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/species"
  }),
  schema: z.object({
    slug: z.string(),
    commonName: z.string(),
    scientificName: z.string(),
    animalGroup: z.enum([
      "Birds",
      "Mammals",
      "Reptiles",
      "Amphibians",
      "Fish",
      "Invertebrates"
    ]),
    nativeStatus: z.enum([
      "Native",
      "Introduced",
      "Naturalized",
      "Migratory",
      "Unknown"
    ]).default("Unknown"),

    diet: z.string().optional(),
    ecologicalRole: z.string().optional(),
    description: z.string().optional(),
    coolFacts: z.string().optional(),
    threatsAndConservation: z.string().optional(),

    mainImage: z.string().optional(),
    mainImagePhotographer: z.string().optional(),
    mainImageCredit: z.string().optional(),
    mainImageLicense: z.string().optional(),
    mainImageSourceUrl: z.union([z.string().url(), z.literal("")]).optional(),

    gallery: z.array(z.object({
      image: z.string().optional(),
      caption: z.string().optional(),
      photographer: z.string().optional(),
      credit: z.string().optional(),
      license: z.string().optional(),
      sourceUrl: z.string().url().optional()
    })).default([]),

    status: z.enum([
      "Draft",
      "Needs review",
      "Published"
    ]).default("Draft"),

    featured: z.boolean().default(false)
  })
});

export const collections = { species };
