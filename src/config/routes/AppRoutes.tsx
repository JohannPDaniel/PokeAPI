// instale o React-Router-Dom com o comando: npm install react-router-dom

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "../../pages/Home";
import { PokemonDetails } from "../../pages/PokemonDetails";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
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