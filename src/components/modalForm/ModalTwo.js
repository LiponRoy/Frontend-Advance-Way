import React from 'react';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const ModalTwo = () => {
	// react hooks form
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);

		setTimeout(() => {
			setIsModalOpen(false);
		}, 1000);
	};

	// // end hooks form

	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	// const handleOk = () => {
	// 	setIsModalOpen(false);
	// };

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div>
				<Button className=' m-2' type='primary' style={{ backgroundColor: 'blue' }} onClick={showModal}>
					Open Modal
				</Button>
				<Modal title='Login' open={isModalOpen} onCancel={handleCancel} centered width={500} footer={[]}>
					<form className=' flex flex-col justify-center items-start' onSubmit={handleSubmit(onSubmit)}>
						{/* register your input into the hook by invoking the "register" function */}
						<span>Email</span>
						<input className='w-full border-2 border-blue-900 h-4 p-6 my-1 rounded-md' placeholder='Name..' {...register('example')} />

						{/* include validation with required or other standard HTML validation rules */}
						<span>Password</span>
						<input className='w-full border-2 border-blue-900 h-4 p-6 my-1 rounded-md' placeholder='Email..' {...register('exampleRequired', { required: true })} />
						{/* errors will return when field validation fails  */}
						{errors.exampleRequired && <span>This field is required</span>}

						<input className=' bg-blue-700 w-full text-white px-8 py-4 mt-2 cursor-pointer' type='submit' />
					</form>
				</Modal>
			</div>
		</>
	);
};

export default ModalTwo;
