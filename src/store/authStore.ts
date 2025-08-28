// src/store/authStore.ts
import { create } from "zustand";

type User = {
  id: string;
  username: string;
  role: "admin" | "user";
};

type AuthStore = {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (username, password) => {
    if (username === "admin" && password === "password") {
      set({ user: { id: "1", username: "admin", role: "admin" } });
    } else {
      set({ user: { id: "2", username, role: "user" } });
    }
  },
  logout: () => set({ user: null }),
}));

export default useAuthStore;
