export async function loadJSON(src) {
  const response = await fetch(src);
  const json = response.json();

  return json;
}
