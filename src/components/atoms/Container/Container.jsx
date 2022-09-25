import classNames from 'classnames';
import React from 'react';

export const Container = ({ className, children }) => {
	const classes = classNames('container max-w-screen-2xl', className);

	return <div className={classes}>{children}</div>;
};

Container.defaultProps = {
	className: '',
};
