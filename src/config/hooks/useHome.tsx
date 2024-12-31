import { useAppDispatch } from '../../store/hook';
import { setSearchTerm } from '../../store/modules/getPokemonSlice/fetchPokemon.reducer';
import { useHookPagination } from './useHookPagination';
import { usePokemon } from './usePokemon';

export const useHome = () => {
	const dispatch = useAppDispatch();
	const { allPokemons, searchTerm, status, error } = usePokemon();
	const { currentPage, itemsPerPage } = useHookPagination();
	// Lista de Pokémon filtrados
	const filteredPokemonsList = searchTerm
		? allPokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
		: allPokemons;

	// Total de páginas baseado nos Pokémon filtrados
	const totalPages = Math.ceil(filteredPokemonsList.length / itemsPerPage);

	// Pokémon da página atual
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentPagePokemons = filteredPokemonsList.slice(
		startIndex,
		startIndex + itemsPerPage
	);

	// Função para lidar com a alteração no campo de busca
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchTerm(event.target.value));
	};

	return {
		dispatch,
		allPokemons,
		searchTerm,
		status,
		error,
		currentPage,
		itemsPerPage,
		filteredPokemonsList,
		totalPages,
		currentPagePokemons,
		handleSearchChange,
	};
};
