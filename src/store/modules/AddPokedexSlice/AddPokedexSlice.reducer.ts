import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonCard {
	id: number;
	name: string;
	image: string;
	weight: number;
	types: string[];
}

interface AddPokedexState {
	activeCards: { [id: number]: boolean }; // Estados de cada card
	activeCount: number; // Contador global
	selectedCards: PokemonCard[]; // Cards selecionados para a Pokedex
}

const initialState: AddPokedexState = {
	activeCards: {},
	activeCount: 0,
	selectedCards: [],
};

const addPokedexSlice = createSlice({
	name: 'addPokedex',
	initialState,
	reducers: {
		toggleCardState: (
			state,
			action: PayloadAction<{ id: number; card: PokemonCard }>
		) => {
			const { id, card } = action.payload;
			const isActive = state.activeCards[id];

			if (isActive) {
				delete state.activeCards[id];
				state.activeCount -= 1;
				state.selectedCards = state.selectedCards.filter(
					(selectedCard) => selectedCard.id !== id
				);
			} else {
				state.activeCards[id] = true;
				state.activeCount += 1;
				state.selectedCards.push(card);
			}
		},
	},
});

export const { toggleCardState } = addPokedexSlice.actions;
export const addPokemonReducer = addPokedexSlice.reducer;
