import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './modules/rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [''], // Adicione os slices que você deseja persistir
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Sanitizadores para DevTools
const actionSanitizer = (action: any) =>
	action.type === 'FETCH_LARGE_DATA_SUCCESS' && action.payload
		? { ...action, payload: '<<LARGE_DATA_REMOVED>>' }
		: action;

const stateSanitizer = (state: any) =>
	state.allPokemons?.length > 1000
		? { ...state, allPokemons: '<<DATA_TOO_LARGE>>' }
		: state;

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Desativa verificações de serialização
			immutableCheck: false, // Desativa verificações de imutabilidade
		}),
	devTools: process.env.NODE_ENV !== 'production' && {
		actionSanitizer,
		stateSanitizer,
	},
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
