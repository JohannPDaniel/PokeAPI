import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "../../pages/Home";
import { PokemonDetails } from "../../pages/PokemonDetails";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Pokedex } from "../../pages/Pokedex";

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout children={<Home />} />,
	},
	{
		path: '/pokedex',
		element: <Pokedex />,
	},
	{
		path: '/pokemon/:id',
		element: <PokemonDetails />,
	},
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;