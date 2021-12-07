export default function handler(req, res) {
  const { AUTH0_TOKEN } = process.env;
  const tx = fetch("https://dev-eqziyxjj.us.auth0.com/api/v2/users", {
    method: "GET",
    headers: {
      authorization: `Bearer ${AUTH0_TOKEN}`,
      "content-type": "application/json",
    },
    params: { search_engine: "v3" },
  }).then((response) => response.json());
  res.json(tx);
}
