import { RenderPagination } from './RenderPagination';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setPage } from '../../store/modules/paginationSlice/paginationSlice.reducer';
import { Grid2 } from '@mui/material';

export const Pagination = () => {
	const dispatch = useAppDispatch();
	const { currentPage, totalPages, itemsPerPage } = useAppSelector(
		(state) => state.pagination 
	);
	const { searchTerm } = useAppSelector((state) => state.pokemon);

	const handlePageChange = (page: number) => {
		dispatch(setPage(page)); 
	};

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
					pagination={{ currentPage, totalPages, itemsPerPage }}
					searchTerm={searchTerm} // Agora é passado corretamente
				/>
			</Grid2>
		</Grid2>
	);
};
