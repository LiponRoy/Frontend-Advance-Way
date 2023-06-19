import React from 'react';
import { Carousel } from 'antd';
// import image1 from '/img/pic-1.jpg';
// import image2 from '/img/pic-2.jpg';
// import image3 from '/img/pic-3.jpg';

const contentStyle = {
	// height: '360px',
	// color: '#fff',
	// lineHeight: '560px',
	// textAlign: 'center',
	// background: '#364d79',
};
const CarouselAntd = () => {
	return (
		<div className=' mx-52'>
			<Carousel className=' w-full h-[70vh]' autoplay autoplaySpeed={4000} effect='fade'>
				<div style={contentStyle} className=' text-white'>
					<img className=' relative w-full h-full' src='./img/pic1.jpg' alt='noImg' />
					<span className=' absolute bottom-12 left-12 text-[50px] text-white'>Image 1</span>
				</div>
				<div style={contentStyle}>
					<img className=' relative w-full h-full' src='./img/pic-2.jpg' alt='noImg' />
					<span className=' absolute bottom-12 left-12  text-[50px] text-white'>Image 2</span>
				</div>
				<div style={contentStyle}>
					<img className=' relative w-full h-full' src='./img/pic-3.jpg' alt='noImg' />
					<span className=' absolute bottom-12 left-12  text-[50px] text-white'>Image 3</span>
				</div>
			</Carousel>
		</div>
	);
};

export default CarouselAntd;
