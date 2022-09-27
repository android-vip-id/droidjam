export const SectionBorder = ({ position }) => {
	return (
		<div>
			<img src={require(`@/images/border-divider/shape-1-${position}.svg`)} alt="" />
		</div>
	);
};

SectionBorder.defaultProps = {
	position: 'top',
};
