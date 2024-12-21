import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import {
	fetchAllPokemons,
	setSearchTerm,
	setPage,
} from '../store/modules/getPokemonSlice/fetchPokemon.reducer';
import { RenderPagination } from './dsafs';

export const Home = () => {
	const dispatch = useAppDispatch();
	const { currentPagePokemons, pagination, searchTerm, status, error } =
		useAppSelector((state) => state.pokemon);

	useEffect(() => {
		dispatch(fetchAllPokemons());
	}, [dispatch]);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchTerm(event.target.value));
	};

	const handlePageChange = (page: number) => {
		dispatch(setPage(page));
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

			{/* Input de Pesquisa */}
			<div style={{ marginBottom: '20px' }}>
				<input
					type='text'
					placeholder='Pesquise um Pokémon'
					value={searchTerm}
					onChange={handleSearchChange}
					style={{
						padding: '10px',
						fontSize: '16px',
						width: '100%',
						maxWidth: '400px',
					}}
				/>
			</div>

			<ol>
				{currentPagePokemons.map((pokemon) => (
					<li key={pokemon.id}>
						<strong>{pokemon.name}</strong> - Altura: {pokemon.height}, Peso:{' '}
						{pokemon.weight}, Experiência: {pokemon.base_experience}
					</li>
				))}
			</ol>

			{/* <div style={{ display: 'flex', gap: '5px', marginTop: '20px' }}>
				{renderPagination(pagination, handlePageChange, searchTerm)}
			</div> */}
			<div style={{ display: 'flex', gap: '0px', marginTop: '20px' }}>
				<RenderPagination
					handlePageChange={handlePageChange}
					pagination={pagination}
					searchTerm={searchTerm}
				/>
			</div>
		</div>
	);
};
