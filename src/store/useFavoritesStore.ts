// interface FavoritesItem{
//     id: number[]
// }

// interface FavoritesStore{
//     favorites: FavoritesItem[]
//     toggleFavorite(id)
//     isFavorite(id)
// }


import {create} from 'zustand';

interface FavoritesStore {
    favorites: number[]
    toggleFavorite: (id: number) => void
    isFavorite: (id: number) => boolean
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
        favorites: [],

        toggleFavorite: (id) =>
            set((state) => ({
                favorites: state.favorites.includes(id)
                ? state.favorites.filter((favoriteId) => favoriteId !== id)
                : [...state.favorites, id],
    })),

    isFavorite: (id) => get().favorites.includes(id),
}));