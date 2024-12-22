import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";

export default function CircularDeterminate() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 100 ? 0 : prevProgress + 10
			);
		}, 800);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Stack
			spacing={2}
			direction='row'>
			<CircularProgress
				variant='determinate'
				value={progress}
			/>
		</Stack>
	);
}
