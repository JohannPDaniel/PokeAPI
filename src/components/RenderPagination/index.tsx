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
		<Grid2
			container
			sx={{ marginTop: '20px' }}>
			<Grid2
				size={{
					xs: 10.2, 
					sm: 6.8,
					md: 5,
					lg: 3.8,
				}}
				offset={{
					xs: 0.8, 
					sm: 2.6,
					md: 3.5,
					lg: 4.1,
				}}
				sx={{
					background: 'red',
					borderRadius: 5,
					display: "flex",
					justifyContent: "center"
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
