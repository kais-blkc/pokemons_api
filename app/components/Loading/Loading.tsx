import './Loading.scss';
import Image from 'next/image';
import { FC } from 'react';

export const Loading: FC = () => {
	return (
		<div className="loading">
			<Image src="/pokemon-loading.gif" alt="loading" width={500} height={500} priority />
		</div>
	);
};
