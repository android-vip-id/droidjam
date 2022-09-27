import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export const Button = ({ variant, text, href, to, onClick, leftIcon, rightIcon, className, children, ...props }) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		if (href) window.open(href, '_blank');
		else if (to) navigate(to);
		else if (onClick) onClick(e);
	};

	return (
		<button
			className={`flex items-center bg-gray-200 font-semibold rounded-full text-sm text-gray-800 hover:bg-gray-300 transition-all ${className}`}
			onClick={handleClick}
			{...props}
		>
			{leftIcon && <span>{leftIcon}</span>}

			<span>{text || children}</span>

			{rightIcon && <span>{rightIcon}</span>}
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

Button.defaultProps = {};
