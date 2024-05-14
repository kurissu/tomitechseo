export interface ImageProps {
    src: string;
    alt: string;
  }
  
  export const allImage = [
    { src: "/images/EVS_chr.png", alt: "eversoul" },
    { src: "/images/AA_chr.png", alt: "archage" },
    { src: "/images/ER_chr_v1.png", alt: "eternal return" },
    { src: "/images/WF_chr.png", alt: "world flipper" },
  ];
  
  const [tomato, lettuce, cheese, carrot] = allImage;
  export const initialTabs = [tomato, lettuce, cheese, carrot];
  
  export function getNextIngredient(
    images: ImageProps[]
  ): ImageProps | undefined {
    const existing = new Set(images);
    return allImage.find((images) => !existing.has(images));
  }
  