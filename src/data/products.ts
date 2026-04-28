import kibble from "@/assets/products/kibble.jpg";
import treats from "@/assets/products/treats.jpg";
import rope from "@/assets/products/rope.jpg";
import grooming from "@/assets/products/grooming.jpg";
import feeder from "@/assets/products/feeder.jpg";
import catTower from "@/assets/products/cat-tower.jpg";
import layerFeed from "@/assets/products/layer-feed.jpg";
import saddle from "@/assets/products/saddle.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Food" | "Toys" | "Grooming" | "Health" | "Farm Supplies" | "Pre-loved";
  price: number;
  rating: number;
  reviews: number;
  img: string;
  blurb: string;
  details: string[];
};

export const PRODUCTS: Product[] = [
  { slug: "premium-kibble-5kg", name: "Premium Kibble (5kg)", category: "Food", price: 42, rating: 4.9, reviews: 312, img: kibble, blurb: "High-protein, grain-free kibble for adult dogs.", details: ["Grain-free recipe", "30% real chicken", "Vet-approved formula", "Free shipping over $50"] },
  { slug: "organic-treats-pack", name: "Organic Treats Pack", category: "Food", price: 14, rating: 4.8, reviews: 189, img: treats, blurb: "Soft, organic training treats made with single-source protein.", details: ["100% organic", "No artificial colours", "Perfect for training", "Resealable pouch"] },
  { slug: "plush-tug-rope", name: "Plush Tug Rope", category: "Toys", price: 9, rating: 4.6, reviews: 412, img: rope, blurb: "Durable plush rope for tug-of-war and fetch.", details: ["Machine washable", "Reinforced stitching", "Squeaker inside", "For all sizes"] },
  { slug: "vet-grooming-kit", name: "Vet Grooming Kit", category: "Grooming", price: 58, rating: 4.9, reviews: 134, img: grooming, blurb: "Professional-grade grooming kit used by certified groomers.", details: ["12 stainless tools", "Quiet motor clipper", "Travel case", "1-year warranty"] },
  { slug: "smart-feeder-pro", name: "Smart Feeder Pro", category: "Health", price: 129, rating: 4.7, reviews: 88, img: feeder, blurb: "App-controlled smart feeder with portion tracking.", details: ["Wi-Fi enabled", "Voice recording", "10L capacity", "Battery backup"] },
  { slug: "cat-tower-xl", name: "Cat Tower XL", category: "Toys", price: 89, rating: 4.8, reviews: 267, img: catTower, blurb: "5-tier cat tower with sisal posts and cozy hideaways.", details: ["180cm tall", "Real sisal", "Stable wide base", "Easy assembly"] },
  { slug: "egg-layer-feed-25kg", name: "Egg Layer Feed (25kg)", category: "Farm Supplies", price: 36, rating: 4.9, reviews: 156, img: layerFeed, blurb: "Complete layer feed for productive backyard hens.", details: ["16% protein", "Calcium fortified", "Non-GMO grains", "Resealable bag"] },
  { slug: "horse-saddle", name: "English Horse Saddle", category: "Farm Supplies", price: 340, rating: 4.7, reviews: 42, img: saddle, blurb: "Hand-stitched English saddle in premium leather.", details: ["Real leather", "17.5\" seat", "Adjustable gullet", "Made in Italy"] },
];

export const PRODUCT_CATEGORIES = ["All", "Food", "Toys", "Grooming", "Health", "Farm Supplies", "Pre-loved"] as const;
