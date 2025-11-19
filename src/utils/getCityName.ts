export function getCityNameFromTimezone(timezone?: string) {
  if (!timezone) return "Unknown";

  const parts = timezone.split("/");
  const cityRaw = parts[parts.length - 1];

  return cityRaw.replace(/_/g, " ");
}
