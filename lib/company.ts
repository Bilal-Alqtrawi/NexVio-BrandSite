export const COMPANY = {
  name: "NexVio",
  phoneDisplay: "056 403 0208",
  phoneTel: "+971564030208",
  phoneInternational: "+971 56 403 0208",
  email: "office@nex-vio.com",
  supportEmail: "Support@nex-vio.com",
  locationLabel: "United Arab Emirates",
  locationDetail:
    "Dubai · Abu Dhabi · Sharjah · Ajman · Ras Al Khaimah · Umm Al Quwain · Fujairah",
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
  { id: "abu-dhabi", name: "Abu Dhabi", nameAr: "أبوظبي", x: "36%", y: "73%" },
  { id: "dubai", name: "Dubai", nameAr: "دبي", x: "61%", y: "54%" },
  { id: "sharjah", name: "Sharjah", nameAr: "الشارقة", x: "65%", y: "46%" },
  { id: "ajman", name: "Ajman", nameAr: "عجمان", x: "67%", y: "40%" },
  {
    id: "umm-al-quwain",
    name: "Umm Al Quwain",
    nameAr: "أم القيوين",
    x: "69%",
    y: "34%"
  },
  {
    id: "rak",
    name: "Ras Al Khaimah",
    nameAr: "رأس الخيمة",
    x: "73%",
    y: "24%"
  },
  { id: "fujairah", name: "Fujairah", nameAr: "الفجيرة", x: "73%", y: "46%" }
] as const;
