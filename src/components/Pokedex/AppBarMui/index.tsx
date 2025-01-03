import {
	AppBar,
	Avatar,
	Box,
	Container,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import pokebola from '../../../assets/pokebola.gif';
import pokebolaIcon from '../../../../public/pokebolaIcon.png';

export function AppBarMui() {
	const location = useLocation(); // Hook para verificar a rota atual

	const isHome = location.pathname === '/';
	const linkText = isHome ? 'Pokedex' : 'Home';
	const linkTo = isHome ? '/pokedex' : '/';

	return (
		<AppBar position='fixed'>
			<Container maxWidth='xl'>
				<Toolbar>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							alignItems: 'center',
							width: '100%',
						}}>
						<Avatar
							alt='pokebola'
							src={pokebolaIcon}
							sx={{ clipPath: 'circle(50%)' }}
						/>
						<Typography
							variant='h5'
							noWrap
							sx={{
								m: 'auto',
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}>
							<Link to={linkTo}>{linkText}</Link>
						</Typography>
						<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
							<Tooltip title='Open settings'>
								<Avatar
									alt='pokebola'
									src={pokebola}
									sx={{ clipPath: 'circle(50%)' }}
								/>
							</Tooltip>
						</Box>
					</Box>

					{/* Mobile */}
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<Avatar
							src={pokebolaIcon}
							alt='pokebola'
						/>
					</Box>
					<Typography
						variant='h5'
						noWrap
						sx={{
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						<Link to={linkTo}>{linkText}</Link>
					</Typography>
					<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
						<Tooltip title='Open settings'>
							<Avatar
								alt='pokebola'
								src={pokebola}
								sx={{ clipPath: 'circle(50%)' }}
							/>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
