export async function getUserCountry(): Promise<string | null> {
  try {
    const result = await fetch("http://ip-api.com/json");
    const res = await result.json();
    return res?.country ?? null;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}