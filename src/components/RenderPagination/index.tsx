import { RenderPagination } from './RenderPagination';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setPage } from '../../store/modules/getPokemonSlice/fetchPokemon.reducer';
import { Grid2 } from '@mui/material';

export const Pagination = () => {
	const dispatch = useAppDispatch();
	const { pagination, searchTerm } = useAppSelector((state) => state.pokemon);

	const handlePageChange = (page: number) => {
		dispatch(setPage(page));
	};

	return (
		<Grid2 container>
			<Grid2 size={12} sx={{ padding: 1, borderRadius: 8, background: "red"}}>
				<RenderPagination
					handlePageChange={handlePageChange}
					pagination={pagination}
					searchTerm={searchTerm}
				/>
			</Grid2>
		</Grid2>
	);
};
