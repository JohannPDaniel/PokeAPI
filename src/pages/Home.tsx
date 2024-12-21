import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import {
	fetchAllPokemons,
	setSearchTerm,
	setPage,
} from '../store/modules/getPokemonSlice/fetchPokemon.reducer';

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

const renderPagination = () => {
	const { currentPage, totalPages } = pagination;
	const pages = [];
	const maxVisiblePages = 5; // Número máximo de páginas visíveis
	const nextDynamicTarget = Math.min(
		Math.ceil(currentPage / 10) * 10,
		totalPages
	); // Próximo grupo dinâmico ajustado ao total

	let endPage = Math.min(currentPage + 3, totalPages);
	let startPage = Math.max(1, endPage - maxVisiblePages + 1);

	// Ajustar início novamente para manter 5 números
	startPage = Math.max(1, endPage - maxVisiblePages + 1);

	// Adicionar botão "Anterior"
	if (currentPage > 1) {
		pages.push(
			<button
				key='prev'
				onClick={() => handlePageChange(currentPage - 1)}>
				Anterior
			</button>
		);
	}

	// Adicionar botão "1" se não estiver no grupo atual
	if (startPage > 1) {
		pages.push(
			<button
				key='first'
				onClick={() => handlePageChange(1)}>
				1
			</button>
		);
		if (startPage > 2) {
			pages.push(<span key='dots-start'>...</span>);
		}
	}

	// Adicionar páginas numéricas visíveis
	for (let i = startPage; i <= endPage; i++) {
		pages.push(
			<button
				key={i}
				onClick={() => handlePageChange(i)}
				disabled={i === currentPage}>
				{i}
			</button>
		);
	}

	// Adicionar "..." e próximo grupo dinâmico
	if (endPage < totalPages && endPage < nextDynamicTarget) {
		pages.push(<span key='dots-next'>...</span>);
		pages.push(
			<button
				key={nextDynamicTarget}
				onClick={() => handlePageChange(nextDynamicTarget)}>
				{nextDynamicTarget}
			</button>
		);
	}

	// Adicionar última página (se não estiver no grupo atual)
	if (endPage < totalPages && searchTerm === '') {
		pages.push(<span key='dots-end'>...</span>);
		pages.push(
			<button
				key={totalPages}
				onClick={() => handlePageChange(totalPages)}>
				{totalPages}
			</button>
		);
	}

	// Adicionar botão "Próxima"
	if (currentPage < totalPages) {
		pages.push(
			<button
				key='next'
				onClick={() => handlePageChange(currentPage + 1)}>
				Próxima
			</button>
		);
	}

	return pages;
};

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

			{/* Lista de Pokémons */}
			<ol>
				{currentPagePokemons.map((pokemon) => (
					<li key={pokemon.id}>
						<strong>{pokemon.name}</strong> - Altura: {pokemon.height}, Peso:{' '}
						{pokemon.weight}, Experiência: {pokemon.base_experience}
					</li>
				))}
			</ol>

			{/* Paginação */}
			<div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
				{renderPagination()}
			</div>
		</div>
	);
};
