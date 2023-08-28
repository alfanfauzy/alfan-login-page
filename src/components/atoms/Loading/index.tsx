type LoadingProps = {
	size: 's' | 'm' | 'l';
};

const Loading = ({size}: LoadingProps) => {
	const sizeLoading = {
		s: 'w-4 h-4',
		m: 'w-8 h-8',
		l: 'w-16 h-16',
	};

	return (
		<div className="flex justify-center">
			<div
				className={`${sizeLoading[size]} animate-spin rounded-full border-2 border-[inherit] border-b-transparent`}
			/>
		</div>
	);
};

export default Loading;
