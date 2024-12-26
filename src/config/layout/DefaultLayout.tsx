import { Grid2 } from '@mui/material';
import { GridSizeLeft } from '../../components/GridSizeLeft';
import { GridSizeRight } from '../../components/GridSizeRight';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<Grid2 container>
			<Grid2 size={12}>
				<Grid2 container>
					<GridSizeLeft />
					<Grid2 size={{ xs: 12, sm: 12, md: 6 }}>{children}</Grid2>
					<GridSizeRight />
				</Grid2>
			</Grid2>
		</Grid2>
	);
};
