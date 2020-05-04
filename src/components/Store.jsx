import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const StoreContainer = styled.section`
	cursor: pointer;
	text-align: center;
`;

const CustomWrapper = styled.div`
	box-sizing: border-box;
	border-radius: 4px;
	background-color: #666666;
	color: white;
	font-size: 12px;
	margin-bottom: 4px;
	padding: 0 4px;
`;

const AddressWrapper = styled(CustomWrapper)`
	display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const LabelWrapper = styled(CustomWrapper)`
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => (props.backgroundColor === '#f2d600' ? 'black' : 'white')};
`;

const MarkerIcon = styled(FontAwesomeIcon)`
	font-size: 32px;
	color: ${(props) => props.color};
`;

// 약국 컴포넌트
const Store = ({ store }) => {
	let color = '#666666';
	if (store.remain_stat === 'plenty') color = '#61bd4f';
	else if (store.remain_stat === 'some') color = '#f2d600';
	else if (store.remain_stat === 'few') color = '#eb5a46';

	return (
		<StoreContainer>
			<LabelWrapper backgroundColor={color}>{store && store.name}</LabelWrapper>
			<AddressWrapper>{store && store.addr}</AddressWrapper>
			<MarkerIcon icon={faMapMarkerAlt} size="xs" color={color} />
		</StoreContainer>
	);
};

export default Store;
