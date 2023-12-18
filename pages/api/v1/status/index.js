import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const databaseVersionResults = await database.query("SELECT version();");
  const databaseVersionValue = databaseVersionResults.rows[0].version;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
      },
    },
  });
}

export default status;
