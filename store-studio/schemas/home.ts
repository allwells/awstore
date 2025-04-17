import { ComponentType } from "react";
import { MdHome } from "react-icons/md";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  icon: MdHome as ComponentType,
  fields: [
    defineField({
      name: "featured",
      title: "Featured Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
      validation: (Rule) => Rule.min(2).max(4),
    }),
  ],
  preview: {
    select: {
      featuredProducts: "featured",
    },
    prepare(selection) {
      const { featuredProducts } = selection;
      const productTitles =
        featuredProducts?.map((product: any) => product?.title).join(", ") ||
        "No featured products";
      return {
        title: "Homepage Content",
        subtitle: `Featured: ${productTitles}`,
      };
    },
  },
});
