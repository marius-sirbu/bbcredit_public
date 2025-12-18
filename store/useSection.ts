import { RefObject } from "react";
import { create } from "zustand";

interface StoreSection {
  ref: React.RefObject<HTMLDivElement> | RefObject<null>;
  setRef: (value: React.RefObject<HTMLDivElement> | RefObject<null>) => void;
}

export const useStoreSection = create<StoreSection>((set) => ({
  ref: { current: null },
  setRef: (ref: React.RefObject<HTMLDivElement> | RefObject<null>) =>
    set({ ref }),
}));
