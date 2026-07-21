export const COMPANY = {
  name: "NexVio",
  phoneDisplay: "056 403 0208",
  phoneTel: "+971564030208",
  phoneInternational: "+971 56 403 0208",
  email: "office@nex-vio.com",
  locationLabel: "United Arab Emirates",
  locationDetail: "Dubai · Abu Dhabi · Sharjah · Ajman · Ras Al Khaimah",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dubai%2C%20United%20Arab%20Emirates",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    x: "https://x.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/971564030208"
  }
} as const;

export const UAE_OFFICES = [
  { id: "dubai", name: "Dubai", x: "52%", y: "58%" },
  { id: "abu-dhabi", name: "Abu Dhabi", x: "38%", y: "68%" },
  { id: "sharjah", name: "Sharjah", x: "56%", y: "52%" },
  { id: "ajman", name: "Ajman", x: "58%", y: "48%" },
  { id: "rak", name: "Ras Al Khaimah", x: "62%", y: "38%" }
] as const;
