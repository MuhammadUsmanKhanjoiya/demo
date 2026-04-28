import {
  Stethoscope, HeartPulse, Scissors, Brain, Apple, Sparkles,
  Bug, Eye, Activity, Bone,
} from "lucide-react";

export type Specialization = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: typeof Stethoscope;
};

export const SPECIALIZATIONS: Specialization[] = [
  { slug: "general", name: "General Veterinary Medicine", short: "General Practice", icon: Stethoscope, description: "Routine wellness, vaccinations, preventive care and the everyday health of your pet." },
  { slug: "emergency", name: "Emergency & Critical Care", short: "Emergency", icon: HeartPulse, description: "Urgent triage and life-threatening situations, 24/7 specialists ready in minutes." },
  { slug: "surgery", name: "Surgery", short: "Surgery", icon: Scissors, description: "Pre-op consultations, second opinions and post-operative recovery support." },
  { slug: "internal-medicine", name: "Internal Medicine", short: "Internal", icon: Activity, description: "Complex chronic conditions, diagnostics and long-term care plans." },
  { slug: "dermatology", name: "Dermatology", short: "Dermatology", icon: Bug, description: "Skin, coat and allergy specialists for itchy, irritated or recurring conditions." },
  { slug: "ophthalmology", name: "Ophthalmology", short: "Eye Care", icon: Eye, description: "Eye health, vision issues, infections and surgical referrals." },
  { slug: "nutrition", name: "Nutrition", short: "Nutrition", icon: Apple, description: "Diet plans by breed, age, activity and medical needs, built by certified nutritionists." },
  { slug: "behavior", name: "Behavioral Medicine", short: "Behaviour", icon: Brain, description: "Anxiety, aggression and training plans from board-certified animal behaviourists." },
  { slug: "cardiology", name: "Cardiology", short: "Cardiology", icon: HeartPulse, description: "Heart conditions, murmurs and ongoing cardiac monitoring." },
  { slug: "sport-medicine", name: "Sport Medicine & Orthopaedics", short: "Sport & Ortho", icon: Bone, description: "Joint health, injury rehab and performance care for working & sporting animals." },
  { slug: "dentistry", name: "Dentistry", short: "Dentistry", icon: Sparkles, description: "Dental hygiene, gum disease, extractions and oral surgery support." },
  { slug: "pathology", name: "Pathology & Infectious Disease", short: "Pathology", icon: Activity, description: "Lab interpretation, infectious-disease guidance and outbreak management." },
];
