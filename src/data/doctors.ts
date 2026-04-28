import vet1 from "@/assets/vet-1.jpg";
import vet2 from "@/assets/vet-2.jpg";
import vet3 from "@/assets/vet-3.jpg";
import vet4 from "@/assets/vet-4.jpg";

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  languages: string[];
  rating: number;
  reviews: number;
  price: number;
  next: string;
  country: string;
  flag: string;
  img: string;
  verified: boolean;
};

export const DOCTORS: Doctor[] = [
  { id: "1", name: "Dr. Sarah Mitchell", specialty: "General Veterinary Medicine", languages: ["English", "French"], rating: 4.9, reviews: 312, price: 29, next: "Today · 14:00", country: "United Kingdom", flag: "🇬🇧", img: vet1, verified: true },
  { id: "2", name: "Dr. Kenji Tanaka", specialty: "Internal Medicine", languages: ["English", "Japanese", "Mandarin"], rating: 4.8, reviews: 248, price: 35, next: "Today · 16:30", country: "Japan", flag: "🇯🇵", img: vet2, verified: true },
  { id: "3", name: "Dr. Amara Okafor", specialty: "Dermatology", languages: ["English", "Yoruba", "French"], rating: 5.0, reviews: 184, price: 32, next: "Tomorrow · 09:00", country: "Nigeria", flag: "🇳🇬", img: vet3, verified: true },
  { id: "4", name: "Dr. Carlos Mendes", specialty: "Behavioral Medicine", languages: ["Spanish", "Portuguese", "English"], rating: 4.9, reviews: 521, price: 28, next: "Today · 19:00", country: "Brazil", flag: "🇧🇷", img: vet4, verified: true },
  { id: "5", name: "Dr. Emma Brooks", specialty: "Cardiology", languages: ["English"], rating: 4.7, reviews: 198, price: 45, next: "Tomorrow · 11:00", country: "United States", flag: "🇺🇸", img: vet1, verified: true },
  { id: "6", name: "Dr. Ravi Patel", specialty: "Surgery", languages: ["English", "Hindi", "Gujarati"], rating: 4.9, reviews: 402, price: 40, next: "Today · 17:30", country: "India", flag: "🇮🇳", img: vet2, verified: true },
  { id: "7", name: "Dr. Léa Dubois", specialty: "Ophthalmology", languages: ["French", "English"], rating: 4.8, reviews: 156, price: 38, next: "Tomorrow · 10:00", country: "France", flag: "🇫🇷", img: vet3, verified: true },
  { id: "8", name: "Dr. Marco Rossi", specialty: "Emergency & Critical Care", languages: ["Italian", "English", "Spanish"], rating: 4.9, reviews: 287, price: 42, next: "Today · 22:00", country: "Italy", flag: "🇮🇹", img: vet4, verified: true },
  { id: "9", name: "Dr. Anika Sharma", specialty: "Nutrition", languages: ["English", "Hindi"], rating: 4.8, reviews: 173, price: 26, next: "Today · 15:00", country: "India", flag: "🇮🇳", img: vet1, verified: true },
  { id: "10", name: "Dr. Tomás García", specialty: "Sport Medicine & Orthopaedics", languages: ["Spanish", "English"], rating: 4.7, reviews: 134, price: 36, next: "Tomorrow · 13:00", country: "Mexico", flag: "🇲🇽", img: vet2, verified: true },
  { id: "11", name: "Dr. Linh Nguyen", specialty: "Dentistry", languages: ["Vietnamese", "English"], rating: 4.9, reviews: 142, price: 30, next: "Tomorrow · 14:30", country: "Vietnam", flag: "🇻🇳", img: vet3, verified: true },
  { id: "12", name: "Dr. Hassan Al-Farsi", specialty: "Pathology & Infectious Disease", languages: ["Arabic", "English"], rating: 4.8, reviews: 98, price: 33, next: "Today · 18:00", country: "UAE", flag: "🇦🇪", img: vet4, verified: true },
];
