import { backup } from "./backup";
async function getInfo() {
  try {
    const apiKey = import.meta.env.VITE_api_secret;
    const response = await fetch(apiKey);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(backup)
    return backup;
  }
}
export default getInfo;
