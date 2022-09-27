import classNames from 'classnames';
import React from 'react';

export const Container = ({ className, children }) => {
	const classes = classNames('container md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl', className);

	return <div className={classes}>{children}</div>;
};

Container.defaultProps = {
	className: '',
};
