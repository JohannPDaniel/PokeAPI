import { useAppSelector } from '../../store/hook';

export const usePokemon = () => {
	const {
		allPokemons,
		searchTerm,
		status,
		error,
		filteredPokemons,
		previousPageUrl,
	} = useAppSelector((state) => state.pokemon);

	return {
		allPokemons,
		searchTerm,
		status,
		error,
		filteredPokemons,
		previousPageUrl,
	};
};
