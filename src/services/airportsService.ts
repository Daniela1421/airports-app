export async function fetchAirports({ search = "", page = 1, limit = 10 }) {
  const apiKey = process.env.AVIATIONSTACK_KEY;
  console.log("api key....", apiKey)

  if (!apiKey) {
    console.error("❌ AVIATIONSTACK_KEY is missing");
    throw new Error("AVIATIONSTACK_KEY is missing in environment variables");
  }

  const offset = (page - 1) * limit;

  const url = `http://api.aviationstack.com/v1/airports?access_key=${apiKey}&limit=${limit}&offset=${offset}`;

  console.log("🔍 Fetching:", url);

  const response = await fetch(url);

  const text = await response.text();

  if (text.startsWith("<")) {
    console.error("API returned HTML:", text.slice(0, 200));
    throw new Error("AviationStack returned HTML (likely invalid API key or request)");
  }

  const data = JSON.parse(text);

  return data;
}

