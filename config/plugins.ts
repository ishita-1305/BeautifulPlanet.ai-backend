export default ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "YYJ7hhH8XZhLA6Wr9/fnZg=="),
    },
  },
});
