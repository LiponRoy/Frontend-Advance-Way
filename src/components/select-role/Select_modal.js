import { Button, Modal, Select } from 'antd';
import { useState } from 'react';

const Select_modal = () => {
	const [userData, setUserData] = useState('');
	const [roleData, setRoleData] = useState('');
	// left drop down
	const user = ['Rana', 'Molla', 'Singh', 'Joeeta'];
	const role = ['Admin', 'User', 'Teacher', 'Stuaf'];
	// for modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	// end modal

	const addData = () => {
		console.log(' USer Here :' + userData);
		console.log('Role Here :' + roleData);
	};
	return (
		<div>
			<Button style={{ backgroundColor: 'red' }} type='primary' onClick={showModal}>
				Open Modal
			</Button>
			<Modal title='Basic Modal' width={400} centered open={isModalOpen} footer={[]} onCancel={handleCancel}>
				<div className=' flex flex-col justify-center items-center'>
					{/* user dropDown */}
					<div className=' flex flex-col justify-center items-start gap-y-1'>
						<span>Select User</span>
						<Select
							onChange={(value) => {
								setUserData(value);
							}}
							placeholder='select user'
							style={{ width: '300px', height: '50px' }}>
							{user.map((val, index) => {
								return (
									<Select.Option key={index} value={val}>
										{val}
									</Select.Option>
								);
							})}
						</Select>
					</div>
					{/* End user dropDown */}

					{/* role dropDown */}
					<div className=' flex flex-col justify-center items-start gap-y-1 mt-2'>
						<span>Select Role</span>
						<Select
							onChange={(value) => {
								setRoleData(value);
							}}
							mode='multiple'
							maxTagCount={2}
							placeholder='select frouits'
							style={{ width: '300px' }}>
							{role.map((val, index) => {
								return (
									<Select.Option key={index} value={val}>
										{val}
									</Select.Option>
								);
							})}
						</Select>
					</div>
					{/* role dropDown */}
					{/* <button onClick={() => addData()}>Add</button> */}
					<Button className=' bg-blue-400 w-[300px] mt-4 text-white' onClick={() => addData()}>
						Add Value
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default Select_modal;
