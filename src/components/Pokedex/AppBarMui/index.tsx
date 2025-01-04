import {
	AppBar,
	Avatar,
	Badge,
	Box,
	Container,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import pokebola from '../../../assets/pokebola.gif';
import pokebolaIcon from '../../../assets/pokebolaIcon.png';
import { useAppSelector } from '../../../store/hook';

export function AppBarMui() {
	const location = useLocation();
	const activeCount = useAppSelector((state) => state.addPokedex.activeCount);

	const isHome = location.pathname === '/';
	const linkText = isHome ? 'Pokedex' : 'Home';
	const linkTo = isHome ? '/pokedex' : '/';

	return (
		<AppBar position='fixed'>
			<Container maxWidth='xl'>
				<Toolbar>
					{/* Desktop */}
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
						<Badge
							sx={{ m: 'auto' }}
							badgeContent={activeCount}
							color='error'>
							<Typography
								variant='h5'
								noWrap
								sx={{
									m: 'auto',
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: 'inherit',
									textDecoration: 'none',
								}}>
								<Link to={linkTo}>{linkText}</Link>
							</Typography>
						</Badge>

						<Box sx={{ flexGrow: 0 }}>
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
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
							alignItems: 'center',
							width: '100%',
						}}>
						<Avatar
							src={pokebolaIcon}
							alt='pokebola'
							sx={{ clipPath: 'circle(50%)' }}
						/>

						<Badge
							sx={{ m: "auto"}}
							badgeContent={activeCount}
							color='error'>
							<Typography
								variant='h5'
								noWrap
								sx={{
									m: 'auto',
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: 'inherit',
									textDecoration: 'none',
								}}>
								<Link to={linkTo}>{linkText}</Link>
							</Typography>
						</Badge>
						<Avatar
							alt='pokebola'
							src={pokebola}
							sx={{ clipPath: 'circle(50%)' }}
						/>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
