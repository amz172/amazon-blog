const buildConfig = () => {
  const blogId = "cm1dhq4i00000tdtgbxdwcdt1";
  // const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "BREAKING NEWS";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Amazon Blog";
  const defaultDescription = process.env.NEXT_PUBLIC_BLOG_DESCRIPTION || "Blog about Amazon Buying and selling";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_ur",
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();