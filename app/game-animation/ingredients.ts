export interface Ingredient {
  src: string;
  alt: string;
}

export const allIngredients = [
  { src: "/images/EVS_chr.png", alt: "eversoul" },
  { src: "/images/AA_chr.png", alt: "archage" },
  { src: "/images/ER_chr_v1.png", alt: "eternal return" },
  { src: "/images/WF_chr.png", alt: "world flipper" },

];

const [eversoul, archage, eternal_return, world_flipper] = allIngredients;
export const initialTabs = [eversoul, archage, eternal_return, world_flipper];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
