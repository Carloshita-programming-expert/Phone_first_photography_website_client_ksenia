// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || process.env.TINA_PUBLIC_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || process.env.TINA_READ_ONLY_TOKEN || null,
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
            label: "Title (EN)",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "title_ru",
            label: "Title (RU)"
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
        name: "global_profile",
        label: "Global Profile",
        path: "content/profile",
        format: "json",
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false
          }
        },
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
            name: "portrait",
            label: "Portrait Image (Cloudinary ID)"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
