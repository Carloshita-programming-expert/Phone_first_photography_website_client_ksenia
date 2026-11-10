export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PhotoshootsPartsFragmentDoc = gql`
    fragment PhotoshootsParts on Photoshoots {
  __typename
  title
  title_ru
  location
  camera
  date
  images
  caption_en
  caption_ru
}
    `;
export const Global_ProfilePartsFragmentDoc = gql`
    fragment Global_profileParts on Global_profile {
  __typename
  name
  bio_en
  bio_ru
  email
  portrait
}
    `;
export const PhotoshootsDocument = gql`
    query photoshoots($relativePath: String!) {
  photoshoots(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PhotoshootsParts
  }
}
    ${PhotoshootsPartsFragmentDoc}`;
export const PhotoshootsConnectionDocument = gql`
    query photoshootsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PhotoshootsFilter) {
  photoshootsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PhotoshootsParts
      }
    }
  }
}
    ${PhotoshootsPartsFragmentDoc}`;
export const Global_ProfileDocument = gql`
    query global_profile($relativePath: String!) {
  global_profile(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...Global_profileParts
  }
}
    ${Global_ProfilePartsFragmentDoc}`;
export const Global_ProfileConnectionDocument = gql`
    query global_profileConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Global_profileFilter) {
  global_profileConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...Global_profileParts
      }
    }
  }
}
    ${Global_ProfilePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    photoshoots(variables, options) {
      return requester(PhotoshootsDocument, variables, options);
    },
    photoshootsConnection(variables, options) {
      return requester(PhotoshootsConnectionDocument, variables, options);
    },
    global_profile(variables, options) {
      return requester(Global_ProfileDocument, variables, options);
    },
    global_profileConnection(variables, options) {
      return requester(Global_ProfileConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
