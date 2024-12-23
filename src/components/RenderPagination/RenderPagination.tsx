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

	// Hook do MUI para identificar breakpoints
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
			showFirstButton
			showLastButton
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

// export const renderPagination = (
// 	pagination: PaginationState,
// 	handlePageChange: (page: number) => void,
// 	searchTerm: string
// ) => {
// 	const { currentPage, totalPages } = pagination;
// 	const pages = [];
// 	const maxVisiblePages = 5;
// 	const nextDynamicTarget = Math.min(
// 		Math.ceil(currentPage / 10) * 10,
// 		totalPages
// 	);

// 	let endPage = Math.min(currentPage + 3, totalPages);
// 	let startPage = Math.max(1, endPage - maxVisiblePages + 1);

// 	startPage = Math.max(1, endPage - maxVisiblePages + 1);

// 	pages.push(
// 		<button
// 			key='prev'
// 			onClick={() => handlePageChange(currentPage - 1)}
// 			disabled={currentPage === 1}
// 			style={{
// 				cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
// 				opacity: currentPage === 1 ? 0.5 : 1,
// 				width: 80,
// 			}}>
// 			Anterior
// 		</button>
// 	);

// 	if (startPage > 1) {
// 		pages.push(
// 			<button
// 				key='first'
// 				style={{ width: 30 }}
// 				onClick={() => handlePageChange(1)}>
// 				1
// 			</button>
// 		);
// 		if (startPage > 2) {
// 			pages.push(<span key='dots-start'>...</span>);
// 		}
// 	}

// 	for (let i = startPage; i <= endPage; i++) {
// 		pages.push(
// 			<button
// 				key={i}
// 				style={{ width: 30 }}
// 				onClick={() => handlePageChange(i)}
// 				disabled={i === currentPage}>
// 				{i}
// 			</button>
// 		);
// 	}

// 	if (endPage < totalPages && endPage < nextDynamicTarget) {
// 		pages.push(<span key='dots-next'>...</span>);
// 		pages.push(
// 			<button
// 				key={nextDynamicTarget}
// 				style={{ width: 30 }}
// 				onClick={() => handlePageChange(nextDynamicTarget)}>
// 				{nextDynamicTarget}
// 			</button>
// 		);
// 	}

// 	if (endPage < totalPages && searchTerm === '') {
// 		pages.push(<span key='dots-end'>...</span>);
// 		pages.push(
// 			<button
// 				key={totalPages}
// 				style={{ width: 30 }}
// 				onClick={() => handlePageChange(totalPages)}>
// 				{totalPages}
// 			</button>
// 		);
// 	}

// 	pages.push(
// 		<button
// 			key='next'
// 			onClick={() => handlePageChange(currentPage + 1)}
// 			disabled={currentPage === totalPages}
// 			style={{
// 				cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
// 				opacity: currentPage === totalPages ? 0.5 : 1,
// 				width: 80,
// 			}}>
// 			Próxima
// 		</button>
// 	);

// 	return pages;
// };
