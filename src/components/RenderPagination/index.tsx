import { Grid2 } from '@mui/material';
import { RenderPagination } from './RenderPagination';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setPage } from '../../store/modules/getPokemonSlice/fetchPokemon.reducer';

export const Pagination = () => {
	const dispatch = useAppDispatch();
	const { pagination, searchTerm } = useAppSelector((state) => state.pokemon);

	const handlePageChange = (page: number) => {
		dispatch(setPage(page));
	};

	return (
		<Grid2 container>
			<Grid2
				size={12}
				sx={{
					background: 'red',
					borderRadius: 5,
					display: 'flex',
					justifyContent: 'center',
					filter: 'opacity(100%)',
				}}>
				<RenderPagination
					handlePageChange={handlePageChange}
					pagination={pagination}
					searchTerm={searchTerm}
				/>
			</Grid2>
		</Grid2>
	);
};
