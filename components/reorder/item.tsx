import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
// import { useRaisedShadow } from "./use-raised-shadow";

interface Props {
  item: string;
  children: React.ReactNode;
}

export const Item = ({ children, item }: Props) => {
  const y = useMotionValue(0);

  return (
    <Reorder.Item value={item} id={item} style={{  y }}>
      {children}
    </Reorder.Item>
  );
};
