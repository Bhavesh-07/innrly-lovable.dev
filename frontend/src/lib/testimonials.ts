export interface Testimonial {
  id: number;
  page: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  is_homepage: boolean;
  display_order: number;
  status: string;
}

const isServer = typeof window === 'undefined';
const API_BASE = isServer ? (process.env.BACKEND_URL || "http://127.0.0.1:8005") : "/api";

let testimonialsCache: { [key: string]: { data: Testimonial[]; timestamp: number } } = {};
const CACHE_TTL_MS = 60 * 1000; // 1 minute

export async function fetchTestimonials(page?: string): Promise<Testimonial[]> {
  const cacheKey = page || "all";
  const cached = testimonialsCache[cacheKey];
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  try {
    let url = `${API_BASE}/testimonials`;
    if (page) {
      url += `?page=${encodeURIComponent(page)}`;
    }
    const res = await fetch(url, {
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return cached?.data || [];
    const data = await res.json();
    if (Array.isArray(data)) {
      testimonialsCache[cacheKey] = { data, timestamp: Date.now() };
      return data;
    }
    return cached?.data || [];
  } catch (e) {
    return cached?.data || [];
  }
}

