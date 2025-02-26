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
            "https://alphatrend-marketplace-development.s3.us-east-2.amazonaws.com/",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "https//:alphatrend-marketplace-development.s3.us-east-2.amazonaws.com/",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
