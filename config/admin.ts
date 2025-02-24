export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "aGFjnqzqFp+XKJsfyoPQ6A=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "JFoUAEHg865w120XsyxG4g=="),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "RS3jzCzgGfWBpY9c4CLaMg=="),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
