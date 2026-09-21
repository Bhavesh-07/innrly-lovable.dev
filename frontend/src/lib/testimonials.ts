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

export async function fetchTestimonials(page?: string): Promise<Testimonial[]> {
  try {
    let url = `${API_BASE}/testimonials`;
    if (page) {
      url += `?page=${encodeURIComponent(page)}`;
    }
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Failed to fetch testimonials", e);
    return [];
  }
}
