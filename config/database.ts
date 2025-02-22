import path from "path";

export default ({ env }) => {
  const client = "postgres"; // Force PostgreSQL as the database client

  const connections = {
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"), // Use PostgreSQL connection string
        ssl: env.bool("DATABASE_SSL", true)
          ? { rejectUnauthorized: false }
          : false, // Enable SSL for Render
      },
      pool: { min: 2, max: 10 },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000,
    },
  };
};
