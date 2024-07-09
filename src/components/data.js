async function getInfo() {
  const { backup } = await import("./backup");
  return backup;
}
export default getInfo;
