import { Adb } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import pokebolaIcon from '../../../../public/pokebolaIcon.png';
import pokebolaGirando from '../../../assets/pokebola.gif';

const pages = ['Products', 'Pricing', 'Blog'];

export function AppBarMui() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar>
					<Avatar
						sx={{ mr: 2, display: { xs: 'none', md: 'block' } }}
						src={pokebolaIcon}
						alt='Icone da Pokebola'
					/>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						Pokedex
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}>
									<Typography sx={{ textAlign: 'center' }}>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Avatar
						sx={{ p: 1, display: { xs: 'block', md: 'none' } }}
						src={pokebolaIcon}
						alt='Icone da Pokebola'
					/>

					<Typography
						variant='h5'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						Pokedex
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}>
								{page}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton sx={{ p: 0 }}>
								<Avatar
									alt='Remy Sharp'
									src={pokebolaGirando}
									sx={{ p: { xs: 1, sm: 0 }, clipPath: { xs: 'circle(30%)', sm: "circle(48%)" } }}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}></Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
