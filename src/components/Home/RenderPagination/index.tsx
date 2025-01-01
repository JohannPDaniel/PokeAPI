import { Pagination, useMediaQuery, useTheme } from '@mui/material';

export interface PaginationState {
	currentPage: number;
	totalPages: number;
	itemsPerPage: number;
}

interface RenderPaginationProps {
	pagination: PaginationState;
	handlePageChange: (page: number) => void;
	searchTerm: string;
}

export const RenderPagination = ({
	pagination,
	handlePageChange,
}: RenderPaginationProps) => {
	const { currentPage, totalPages } = pagination;

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Pagination
			count={totalPages}
			page={currentPage}
			siblingCount={isMobile ? 1 : 1}
			boundaryCount={isMobile ? 0 : 1}
			shape='circular'
			onChange={(_, page) => handlePageChange(page)}
			showFirstButton={!isMobile}
			showLastButton={!isMobile}
			sx={{
				'& .MuiPaginationItem-root': {
					color: 'yellow',
					backgroundColor: 'red',
					'&.Mui-selected': {
						backgroundColor: 'yellow',
						color: 'red',
					},
					'&:hover': {
						backgroundColor: '#ed6f6f',
						color: 'yellow',
					},
				},
			}}
		/>
	);
};
