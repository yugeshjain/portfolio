import { DEFAULT_ARTICLE_ALT, DEFAULT_ARTICLE_COVER } from "src/constants";
import { z, defineCollection } from "astro:content";

export const sideQuestSchema = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      url: z.string(),
      title: z.string(),
      description: z.string(),
      image: z.object({
        src: image().default({ src: DEFAULT_ARTICLE_COVER }),
        alt: z.string().default(DEFAULT_ARTICLE_ALT),
      }),
    }),
});
