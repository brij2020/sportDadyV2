import * as React from 'react';

export const CarouselItem = (props) => {
	const {children, width } = props;
	return (
		<div className="carousel-item"m style={{width: width }}>
			{ children }
		</div>
	)
} 
const Carousel = (props) => {
	const { children } = props;
	return(
		<div className="carousel">
			<div className="inner" style={{transform: `translateX(-0%)`}}>
				{
					React.Children.map(children,(child, index) => {
						return React.cloneElement(child,{width:"100%"})
					})
				}
			</div>
		</div>
	)
}
export default Carousel;