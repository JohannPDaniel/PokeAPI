import { RenderPagination } from './RenderPagination';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setPage } from '../../store/modules/paginationSlice/paginationSlice.reducer';
import { Grid2 } from '@mui/material';

export const Pagination = () => {
	const dispatch = useAppDispatch();
	const { currentPage, itemsPerPage } = useAppSelector(
		(state) => state.pagination
	);
	const { searchTerm, filteredPokemons, allPokemons, status } = useAppSelector(
		(state) => state.pokemon
	);

	const totalItems = searchTerm ? filteredPokemons.length : allPokemons.length;
	const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);

	const handlePageChange = (page: number) => {
		dispatch(setPage(page));
	};

	if (status === 'loading') {
		return <p>Carregando...</p>;
	}

	if (status === 'failed') {
		return <p>Erro ao carregar dados</p>;
	}

	return (
		<Grid2 container>
			<Grid2
				size={12}
				sx={{
					padding: 1,
					borderRadius: 8,
					background: 'red',
				}}>
				<RenderPagination
					handlePageChange={handlePageChange}
					pagination={{
						currentPage,
						totalPages: calculatedTotalPages,
						itemsPerPage,
					}}
					searchTerm={searchTerm}
				/>
			</Grid2>
		</Grid2>
	);
};
