import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddPokedexState {
	activeCards: { [id: number]: boolean }; // Estados de cada card
	activeCount: number; // Contador global
}

const initialState: AddPokedexState = {
	activeCards: {},
	activeCount: 0,
};

const addPokedexSlice = createSlice({
	name: 'addPokedex',
	initialState,
	reducers: {
		toggleCardState: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const isActive = state.activeCards[id];

			// Alterna o estado do card e atualiza a contagem
			if (isActive) {
				delete state.activeCards[id];
				state.activeCount -= 1;
			} else {
				state.activeCards[id] = true;
				state.activeCount += 1;
			}
		},
	},
});

export const { toggleCardState } = addPokedexSlice.actions;
export const addPokemonReducer = addPokedexSlice.reducer;
