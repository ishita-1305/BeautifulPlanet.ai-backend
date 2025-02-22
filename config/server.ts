export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "83eda908c136bb5fba7055390c7117214afbd72cc1c7b4b9bf722ec128a8185b",
      "9bcdaef046101d6a24466e565a435579940f1db5e6795d4f2bec2de0edd398c6",
    ]),
  },
});
