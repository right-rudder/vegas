import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string(),
      heroImageAlt: z.string(),
    }),
});

const flightTraining = defineCollection({
  // Load Markdown and MDX files in the `src/content/flight-training/` directory.
  loader: glob({
    base: "./src/content/flight-training",
    pattern: "**/[^_]*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      siteTitle: z.string(),
      siteDescription: z.string(),
      siteKeywords: z.array(z.string()),
      header: z.object({
        image: z.object({
          src: z.string(),
          alt: z.string(),
        }),
        eyebrow: z.string(),
        title: z.string(),
        subTitle: z.string(),
        cta: z
          .array(
            z.object({
              url: z.string(),
              text: z.string(),
            })
          )
          .optional(),
        heroCards: z.boolean().optional(),
      }),
      sections: z.array(
        z.object({
          eyebrow: z.string(),
          title: z.string(),
          subTitle: z.string(),
          img: z.object({
            src: z.string(),
            alt: z.string(),
          }),
          description: z.string().optional(),
          bullets: z.array(z.string()).optional(),
          cta: z.object({
            url: z.string(),
            text: z.string(),
          }),
        })
      ),
      faqs: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
      costs: z
        .object({
          eyebrow: z.string(),
          title: z.string(),
          subTitle: z.string().optional(),
          courses: z.array(
            z.object({
              title: z.string().optional(),
              bullets: z
                .array(
                  z.object({
                    title: z.string(),
                    cost: z.string(),
                  })
                )
                .optional(),
              total: z
                .object({
                  title: z.string(),
                  cost: z.string(),
                })
                .optional(),
            })
          ),
          cta: z.object({
            url: z.string(),
            text: z.string(),
          }),
        })
        .optional(),
    }),
});

export const collections = { blog, "flight-training": flightTraining };
