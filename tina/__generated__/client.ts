import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
import fs from "node:fs";
import path from "node:path";

const baseClient = createClient({
  cacheDir: "/home/carlo/photography-portfolio/tina/__generated__/.cache/1794332393799",
  url: "http://localhost:4001/graphql",
  token: "null",
  queries,
});

function getLocalPhotoshoots() {
  const contentDir = path.resolve(process.cwd(), "content/photoshoots");
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".json"));
  return files.map((file) => {
    try {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const data = JSON.parse(raw);
      return {
        cursor: file,
        node: {
          __typename: "Photoshoots" as const,
          id: data.id || file.replace(".json", ""),
          title: data.title || "",
          title_ru: data.title_ru || "",
          category: data.category || "Uncategorized",
          location: data.location || "",
          camera: data.camera || "",
          date: data.date || "",
          images: Array.isArray(data.images) ? data.images : [],
          caption_en: data.caption_en || "",
          caption_ru: data.caption_ru || "",
          _sys: {
            filename: file.replace(".json", ""),
            basename: file,
            hasReferences: false,
            breadcrumbs: [file.replace(".json", "")],
            path: `content/photoshoots/${file}`,
            relativePath: file,
            extension: ".json",
          },
        },
      };
    } catch (_err) {
      return null;
    }
  }).filter(Boolean);
}

function getLocalProfile() {
  const contentDir = path.resolve(process.cwd(), "content/profile");
  if (!fs.existsSync(contentDir)) return null;
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".json"));
  if (files.length === 0) return null;
  try {
    const raw = fs.readFileSync(path.join(contentDir, files[0]), "utf-8");
    const data = JSON.parse(raw);
    return {
      cursor: files[0],
      node: {
        __typename: "Global_profile" as const,
        id: "ksenia",
        name: data.name || "Ksenia",
        bio_en: data.bio_en || "",
        bio_ru: data.bio_ru || "",
        email: data.email || "",
        portrait: data.portrait || data.profile_image || "",
        profile_image: data.portrait || data.profile_image || "",
        _sys: {
          filename: files[0].replace(".json", ""),
          basename: files[0],
          hasReferences: false,
          breadcrumbs: [files[0].replace(".json", "")],
          path: `content/profile/${files[0]}`,
          relativePath: files[0],
          extension: ".json",
        },
      },
    };
  } catch (_err) {
    return null;
  }
}

const originalPhotoshootsConnection = baseClient.queries.photoshootsConnection?.bind(baseClient.queries);
baseClient.queries.photoshootsConnection = async (args?: any, options?: any) => {
  try {
    if (originalPhotoshootsConnection) {
      const res = await originalPhotoshootsConnection(args, options);
      if (res?.data?.photoshootsConnection?.edges?.length) {
        return res;
      }
    }
  } catch (_err) {
    // fallback to local content
  }
  const edges = getLocalPhotoshoots();
  return {
    data: {
      photoshootsConnection: {
        totalCount: edges.length,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: false,
          startCursor: "",
          endCursor: "",
        },
        edges,
      },
    },
    variables: args || {},
    query: "",
  } as any;
};

const originalGlobalProfileConnection = (baseClient.queries as any).global_profileConnection?.bind(baseClient.queries);
const originalProfileConnection = (baseClient.queries as any).profileConnection?.bind(baseClient.queries);

const profileQueryHandler = async (args?: any, options?: any) => {
  try {
    if (originalGlobalProfileConnection) {
      const res = await originalGlobalProfileConnection(args, options);
      if (res?.data?.global_profileConnection?.edges?.length || res?.data?.global_profile) {
        return res;
      }
    }
    if (originalProfileConnection) {
      const res = await originalProfileConnection(args, options);
      if (res?.data?.profileConnection?.edges?.length || res?.data?.profile) {
        return res;
      }
    }
  } catch (_err) {
    // fallback to local content
  }
  const profile = getLocalProfile();
  const edges = profile ? [profile] : [];
  return {
    data: {
      global_profileConnection: {
        totalCount: edges.length,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: false,
          startCursor: "",
          endCursor: "",
        },
        edges,
      },
      profileConnection: {
        totalCount: edges.length,
        pageInfo: {
          hasPreviousPage: false,
          hasNextPage: false,
          startCursor: "",
          endCursor: "",
        },
        edges,
      },
      global_profile: profile?.node || null,
      profile: profile?.node || null,
    },
    variables: args || {},
    query: "",
  } as any;
};

(baseClient.queries as any).global_profileConnection = profileQueryHandler;
(baseClient.queries as any).profileConnection = profileQueryHandler;
(baseClient.queries as any).global_profile = profileQueryHandler;
(baseClient.queries as any).profile = profileQueryHandler;

export const client = baseClient;
export default client;
