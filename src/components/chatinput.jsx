import * as React from 'react';
import { useInput } from '@mui/base';
import { styled } from '@mui/system';

const grey = {
	50: '#F3F6F9',
	100: '#E7EBF0',
	200: '#E0E3E7',
	300: '#CDD2D7',
	400: '#B2BAC2',
	500: '#A0AAB4',
	600: '#6F7E8C',
	700: '#3E5060',
	800: '#2D3843',
	900: '#1A2027',
};

const StyledInputElement = styled('input')(`
	width: 320px;
	font-size: 0.875rem;
	font-family: IBM Plex Sans, sans-serif;
	font-weight: 400;
	line-height: 1.5;
	color: ${grey[300]};
	background: ${grey[900]};
	border: 1px solid ${grey[800]};
	border-radius: 8px;
	padding: 12px 12px;
	width: 100%;
	
	&:focus {
		outline: none;
	}
`,);

const ChatInput = React.forwardRef(function CustomInput(props, ref) {
	const { getRootProps, getInputProps } = useInput(props, ref);

	return (
		<div {...getRootProps()}>
			<StyledInputElement {...props} {...getInputProps()} />
		</div>
	);
});

export default ChatInput;