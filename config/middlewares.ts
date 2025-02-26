// ~/strapi-aws-s3/backend/config/middlewares.js

export default [
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  "strapi::errors",
  /* Replace 'strapi::security', with this snippet */
  /* Beginning of snippet */
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "alphatrend-marketplace-development.s3.us-east-2.amazonaws.com",
            "https://natural-sparkle-d2b3ff7828.nyc3.digitaloceanspaces.com",
            "https://natural-sparkle-d2b3ff7828.media.strapiapp.com",
            "*.strapi.io",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "alphatrend-marketplace-development.s3.us-east-2.amazonaws.com",
            "https://natural-sparkle-d2b3ff7828.nyc3.digitaloceanspaces.com",
            "https://natural-sparkle-d2b3ff7828.media.strapiapp.com",
            "*.strapi.io",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
