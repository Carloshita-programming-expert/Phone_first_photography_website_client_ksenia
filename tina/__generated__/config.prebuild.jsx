// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "photoshoots",
        label: "Photoshoots",
        path: "content/photoshoots",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true
          },
          {
            type: "string",
            name: "camera",
            label: "Camera"
          },
          {
            type: "string",
            name: "date",
            label: "Date"
          },
          {
            type: "string",
            name: "images",
            label: "Cloudinary Public IDs",
            list: true
          },
          {
            type: "string",
            name: "caption_en",
            label: "Caption (EN)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "caption_ru",
            label: "Caption (RU)",
            ui: {
              component: "textarea"
            }
          }
        ]
      },
      {
        name: "profile",
        label: "Profile",
        path: "content/profile",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "bio_en",
            label: "Bio (EN)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "bio_ru",
            label: "Bio (RU)",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "email",
            label: "Email"
          },
          {
            type: "string",
            name: "profile_image",
            label: "Profile Image Cloudinary ID"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
