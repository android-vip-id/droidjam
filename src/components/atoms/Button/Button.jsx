import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import classNames from 'classnames';

export const Button = ({ variant, text, href, to, onClick, leftIcon, rightIcon, className, children, ...props }) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		if (href) window.open(href, '_blank');
		else if (to) navigate(to);
		else if (onClick) onClick(e);
	};

	const whiteClasses = 'bg-white text-gray-800 hover:bg-gray-300';
	const primaryClasses = 'bg-gradient-to-br from-green-500 to-blue-500 opacity-90 hover:opacity-100 text-white';
	const successClasses = 'bg-green-600 text-white hover:bg-green-700';

	const variantClasses = classNames({
		[whiteClasses]: variant === 'white',
		[successClasses]: variant === 'success',
		[primaryClasses]: variant === 'primary',
	});

	return (
		<button
			className={`flex items-center font-semibold rounded-full text-sm transition-all ${className} ${variantClasses}`}
			onClick={handleClick}
			{...props}
		>
			{leftIcon && <span>{leftIcon}</span>}

			<span>{text || children}</span>

			{rightIcon && <span>{rightIcon}</span>}
		</button>
	);
};

Button.defaultProps = {
	variant: 'white',
};
