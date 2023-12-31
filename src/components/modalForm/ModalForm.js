import { Button, Form, Input, Modal, Radio } from 'antd';
import { useState } from 'react';
const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
	const [form] = Form.useForm();
	return (
		<Modal
			open={open}
			title='Create a new collection'
			okText='Create'
			cancelText='Cancel'
			onCancel={onCancel}
			onOk={() => {
				form
					.validateFields()
					.then((values) => {
						form.resetFields();
						onCreate(values);
					})
					.catch((info) => {
						console.log('Validate Failed:', info);
					});
			}}>
			<Form
				form={form}
				layout='vertical'
				name='form_in_modal'
				initialValues={{
					modifier: 'public',
				}}>
				<Form.Item
					name='title'
					label='Title'
					rules={[
						{
							required: true,
							message: 'Please input the title of collection!',
						},
					]}>
					<Input />
				</Form.Item>
				{/* <Form.Item name='description' label='Description'>
					<Input type='textarea' />
				</Form.Item> */}
				{/* <Form.Item name='modifier' className='collection-create-form_last-form-item'>
					<Radio.Group>
						<Radio value='public'>Public</Radio>
						<Radio value='private'>Private</Radio>
					</Radio.Group>
				</Form.Item> */}
			</Form>
		</Modal>
	);
};
const ModalForm = () => {
	const [open, setOpen] = useState(false);
	const onCreate = (values) => {
		console.log('Received values of form: ', values);
		setOpen(false);
	};
	return (
		<div className=' h-screen w-full justify-center items-center bg-slate-400'>
			<Button
				style={{ backgroundColor: 'green' }}
				type='primary'
				onClick={() => {
					setOpen(true);
				}}>
				New Collection
			</Button>
			<CollectionCreateForm
				open={open}
				onCreate={onCreate}
				onCancel={() => {
					setOpen(false);
				}}
			/>
		</div>
	);
};
export default ModalForm;
// .collection-create-form_last-form-item {
//   margin-bottom: 0;
// }
