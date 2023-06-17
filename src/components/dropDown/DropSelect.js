import { Select } from 'antd';
import React from 'react';

const DropSelect = () => {
	const frouts = ['Banana', 'apple', 'mango', 'coconut'];
	return (
		<div className=' h-screen w-full flex justify-center items-start'>
			<div className='h-full flex flex-col justify-center items-start gap-y-2'>
				<span>Select your fourits</span>
				<Select placeholder='select frouits' style={{ width: '200px' }}>
					{frouts.map((val, index) => {
						return (
							<Select.Option key={index} value={val}>
								{val}
							</Select.Option>
						);
					})}
				</Select>
			</div>
		</div>
	);
};

export default DropSelect;
