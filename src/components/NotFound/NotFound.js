import React from 'react';
import errorMessage from '../../images/404 Error with a cute animal-pana.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='h-[80vh] flex flex-col justify-center items-center'>
			<img className='w-[500px]' src={errorMessage} alt='error' />
            <Link >
                <button className='bg-primary px-4 py-2 rounded-lg text-white'>Home</button>
            </Link>
		</div>
	);
};

export default NotFound;
