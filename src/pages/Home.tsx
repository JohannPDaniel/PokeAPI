import { fetchPokemonData } from '../config/services/getPokemon.service';
import { useCallback, useEffect, useState } from 'react';
import { PokemonDetailsTypes } from '../types/pokemonDetails.types';

export const Home = () => {
	const [pokemonList, setPokemonList] = useState<PokemonDetailsTypes[]>([]);
	const [pagination, setPagination] = useState({
		count: 0,
		next: null as string | null,
		previous: null as string | null,
	});

	const fetchData = useCallback(async (url?: string) => {
		const data = await fetchPokemonData(url);

		console.log('fetchData chamado com URL:', url);
		setPokemonList(data.pokemonDetails);
		setPagination({
			count: data.pagination.count,
			next: data.pagination.next,
			previous: data.pagination.previous,
		});
	}, []);

	useEffect(() => {
		fetchData(); // Busca a página inicial
	}, []);

	return (
		<div>
			<h1>Lista de Pokémons</h1>
			<ol>
				{pokemonList.map((pokemon) => (
					<li key={pokemon.id}>
						<strong>{pokemon.name}</strong> - Altura: {pokemon.height}, Peso:{' '}
						{pokemon.weight}
					</li>
				))}
			</ol>

			<div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
				{pagination.previous && (
					<button onClick={() => fetchData(pagination.previous || undefined)}>
						Página Anterior
					</button>
				)}
				{pagination.next && (
					<button onClick={() => fetchData(pagination.next || undefined)}>
						Próxima Página
					</button>
				)}
			</div>
		</div>
	);
};
