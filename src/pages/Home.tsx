import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { fetchPokemonData } from '../store/modules/getPokemonSlice/fetchPokemon.reducer';

export const Home = () => {
	const dispatch = useAppDispatch();
	const { pokemonList, pagination, status, error } = useAppSelector(
		(state) => state.pokemon
	);

	useEffect(() => {
		const initialUrl = '/pokemon?offset=0&limit=10';
		dispatch(fetchPokemonData(initialUrl));
	}, [dispatch]);

	const handlePagination = (url: string | null) => {
		if (url) {
			dispatch(fetchPokemonData(url));
		}
	};

	if (status === 'loading') {
		return <p>Carregando...</p>;
	}

	if (status === 'failed') {
		return <p>Erro: {error}</p>;
	}

	return (
		<div>
			<h1>Lista de Pokémons</h1>
			<ol>
				{pokemonList.map((pokemon) => (
					<li key={pokemon.id}>
						<strong>{pokemon.name}</strong> - Altura: {pokemon.height}, Peso:{' '}
						{pokemon.weight}, Experiência: {pokemon.base_experience}
					</li>
				))}
			</ol>

			<div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
				{pagination.previous && (
					<button onClick={() => handlePagination(pagination.previous)}>
						Página Anterior
					</button>
				)}
				{pagination.next && (
					<button onClick={() => handlePagination(pagination.next)}>
						Próxima Página
					</button>
				)}
			</div>
		</div>
	);
};
