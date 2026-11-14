import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const species = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/species" }),
  schema: z.object({
    slug: z.string(),
    commonName: z.string(),
    scientificName: z.string(),
    animalGroup: z.enum(["Birds", "Mammals", "Reptiles", "Amphibians", "Fish", "Invertebrates"]),
    family: z.string().optional(),
    order: z.string().optional(),
    nativeStatus: z.string().optional(),
    localOccurrence: z.string().optional(),
    habitats: z.array(z.string()).default([]),
    localNotes: z.string().optional(),
    mainImage: z.string().optional(),
    gallery: z.array(z.object({
      image: z.string().optional(),
      caption: z.string().optional(),
      photographer: z.string().optional(),
      credit: z.string().optional(),
      license: z.string().optional(),
      sourceUrl: z.string().optional()
    })).default([]),
    identification: z.string().optional(),
    similarSpecies: z.string().optional(),
    size: z.string().optional(),
    diet: z.string().optional(),
    behavior: z.string().optional(),
    reproduction: z.string().optional(),
    ecologicalRole: z.string().optional(),
    conservationStatus: z.string().optional(),
    iucnStatus: z.string().optional(),
    californiaStatus: z.string().optional(),
    federalStatus: z.string().optional(),
    threats: z.string().optional(),
    observationTips: z.string().optional(),
    interestingFacts: z.string().optional(),
    references: z.array(z.object({
      title: z.string().optional(),
      organization: z.string().optional(),
      url: z.string().optional(),
      publicationDate: z.string().optional(),
      accessedDate: z.string().optional(),
      notes: z.string().optional()
    })).default([]),
    lastReviewed: z.string().optional(),
    reviewer: z.string().optional(),
    status: z.enum(["Draft", "Needs review", "Published"]).default("Draft"),
    featured: z.boolean().default(false)
  })
});

export const collections = { species };