/**
 * Location utilities for capturing user location information
 * Uses IP-based geolocation only (no permission required)
 */

export interface LocationData {
  // IP-based location (always available)
  ip?: string;
  country?: string;
  countryCode?: string;
  region?: string;
  city?: string;
  timezone?: string;
  isp?: string;

  // Additional info
  userAgent?: string;
  language?: string;
  timestamp?: string;
}

/**
 * Get user's IP address and location using IP geolocation API
 * This works without user permission
 */
export async function getIPLocation(): Promise<Partial<LocationData>> {
  try {
    // Using ipapi.co - free tier allows 1000 requests/day
    // Alternative: ip-api.com (free tier: 45 requests/minute)
    const response = await fetch("https://ipapi.co/json/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("IP geolocation API failed");
    }

    const data = await response.json();

    return {
      ip: data.ip,
      country: data.country_name,
      countryCode: data.country_code,
      region: data.region,
      city: data.city,
      timezone: data.timezone,
      isp: data.org,
      language: navigator.language || navigator.languages?.[0],
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching IP location:", error);

    // Return minimal data if API fails
    return {
      language: navigator.language || navigator.languages?.[0],
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get location data using IP-based geolocation only
 * No user permission required
 */
export async function getLocationData(): Promise<LocationData> {
  // Get IP-based location
  return await getIPLocation();
}

/**
 * Format location data as a readable string for email
 */
export function formatLocationForEmail(location: LocationData): string {
  const parts: string[] = [];

  if (location.ip) {
    parts.push(`IP Adresi: ${location.ip}`);
  }

  if (location.city || location.region || location.country) {
    const locationParts = [
      location.city,
      location.region,
      location.country,
    ].filter(Boolean);
    if (locationParts.length > 0) {
      parts.push(`Konum: ${locationParts.join(", ")}`);
    }
  }

  if (location.countryCode) {
    parts.push(`Ülke Kodu: ${location.countryCode}`);
  }

  if (location.timezone) {
    parts.push(`Saat Dilimi: ${location.timezone}`);
  }

  if (location.isp) {
    parts.push(`ISP: ${location.isp}`);
  }

  if (location.language) {
    parts.push(`Dil: ${location.language}`);
  }

  if (location.timestamp) {
    const date = new Date(location.timestamp);
    parts.push(`Zaman: ${date.toLocaleString("tr-TR")}`);
  }

  return parts.length > 0 ? parts.join("\n") : "Konum bilgisi alınamadı.";
}
