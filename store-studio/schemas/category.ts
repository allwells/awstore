import { defineType, defineField } from "sanity";
import { MdCategory } from "react-icons/md";
import { ComponentType } from "react";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: MdCategory as ComponentType,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      slug: "slug.current",
    },
    prepare(selection) {
      const { title, slug } = selection;
      return {
        title,
        subtitle: slug ? `Slug: ${slug}` : "No slug",
      };
    },
  },
});
