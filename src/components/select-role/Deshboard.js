import React from 'react';
import { useUserGetQuery } from '../../redux/feature/userApi';
// import { useGetUsersQuery } from '../../redux/feature/userSlice';

const Deshboard = () => {
	const { data: dataAll, isFetching } = useUserGetQuery();
	console.log(dataAll);
	return (
		<div>
			{dataAll?.map((val, index) => (
				<div key={index} className=''>
					<span>{val.name}</span>
				</div>
			))}
		</div>
	);
};

export default Deshboard;
