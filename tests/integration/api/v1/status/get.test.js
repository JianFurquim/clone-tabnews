test("GET to /api/v1/status should return status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return current DateTime", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(parseUpdatedAt).toEqual(responseBody.updated_at);
});
