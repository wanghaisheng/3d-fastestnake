import create from "zustand";

interface MenuState {
  isVisible: boolean;
  titleMenu: string;
  toggleModal: () => void;
  selectTitleMenu: (text: string) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isVisible: true,
  titleMenu: "start",
  toggleModal: () => set((state) => ({ isVisible: !state.isVisible })),
  selectTitleMenu: (text) => set({ titleMenu: text }),
}));
interface PauseState {
  isPause: boolean;
  togglePause: () => void;
}
export const usePauseStore = create<PauseState>((set) => ({
  isPause: true,
  togglePause: () => set((state) => ({ isPause: !state.isPause })),
}));
