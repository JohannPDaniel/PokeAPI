import { useAppSelector } from '../../store/hook';

export const useHookPagination = () => {
	const { currentPage, itemsPerPage, totalPages } = useAppSelector(
		(state) => state.pagination
	);
	return {
		currentPage,
		itemsPerPage,
		totalPages,
	};
};
