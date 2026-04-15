import { create } from "zustand";

type BottomSheetState = {
  visible: boolean;
  content: React.ReactNode | null;

  openSheet: (content: React.ReactNode) => void;
  closeSheet: () => void;
};

export const useBottomSheetStore = create<BottomSheetState>((set) => ({
  visible: false,
  content: null,

  openSheet: (content) => {
    set({
      visible: true,
      content,
    });
  },

  closeSheet: () => {
    set({
      visible: false,
      content: null,
    });
  },
}));