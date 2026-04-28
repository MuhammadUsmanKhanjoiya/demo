import dogImg from "@/assets/club-dog.jpg";
import catImg from "@/assets/club-cat.jpg";
import adoptionImg from "@/assets/adoption.jpg";
import birdsImg from "@/assets/club-birds-horse.jpg";

export type AdoptablePet = {
  slug: string;
  name: string;
  species: "Dogs" | "Cats" | "Birds" | "Other";
  breed: string;
  age: string;
  location: string;
  img: string;
  story: string;
  vaccinated: boolean;
  neutered: boolean;
};

export const ADOPTABLE_PETS: AdoptablePet[] = [
  { slug: "buddy", name: "Buddy", species: "Dogs", breed: "Golden Retriever", age: "2 yrs", location: "Brooklyn, NY", img: dogImg, story: "Buddy is a calm, affectionate Golden looking for a family with a yard. Loves children and other dogs.", vaccinated: true, neutered: true },
  { slug: "luna", name: "Luna", species: "Cats", breed: "Tabby Cat", age: "1 yr", location: "Austin, TX", img: catImg, story: "Luna is an independent young tabby. Quiet, clean, and perfect for apartment living.", vaccinated: true, neutered: true },
  { slug: "milo-and-bean", name: "Milo & Bean", species: "Other", breed: "Bonded puppy & kitten", age: "4 mo", location: "Seattle, WA", img: adoptionImg, story: "Milo and Bean grew up together at the shelter and must be adopted as a pair. Pure joy.", vaccinated: true, neutered: false },
  { slug: "charlie", name: "Charlie", species: "Dogs", breed: "Labrador Mix", age: "3 yrs", location: "Miami, FL", img: dogImg, story: "Charlie is a beach-loving Lab mix who's all heart. Knows sit, stay, and 'snack time'.", vaccinated: true, neutered: true },
  { slug: "whiskers", name: "Whiskers", species: "Cats", breed: "Persian Cat", age: "5 yrs", location: "Chicago, IL", img: catImg, story: "Whiskers is a regal Persian who loves laps and quiet afternoons. Best as the only pet.", vaccinated: true, neutered: true },
  { slug: "daisy", name: "Daisy", species: "Dogs", breed: "Rescue Mix", age: "8 mo", location: "Portland, OR", img: dogImg, story: "Daisy is a curious, playful pup who needs an active family with patience for training.", vaccinated: true, neutered: false },
  { slug: "kiwi", name: "Kiwi", species: "Birds", breed: "Green-cheeked Conure", age: "2 yrs", location: "San Diego, CA", img: birdsImg, story: "Kiwi is a chatty conure who loves shoulder rides and sunflower seeds.", vaccinated: true, neutered: false },
];
