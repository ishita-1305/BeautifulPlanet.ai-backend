export default ({ env }) => ({
  auth: {
    secret: env("aGFjnqzqFp+XKJsfyoPQ6A=="),
  },
  apiToken: {
    salt: env("JFoUAEHg865w120XsyxG4g==T"),
  },
  transfer: {
    token: {
      salt: env("RS3jzCzgGfWBpY9c4CLaMg=="),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
