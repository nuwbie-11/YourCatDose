export async function fetchBreeds(
  controller: AbortController,
  targetLink: string,
  header?: string
) {
  const res = await fetch(targetLink, {
    signal: controller.signal,
  });

  if (!res.ok) {
    throw new Error("Error Fetching");
  }

  return res.json();
}
