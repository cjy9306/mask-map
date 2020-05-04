import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const InfoContainer = styled.section`
	background-color: hsla(0, 0%, 100%, 0.9);
	display: flex;
	flex-direction: column;
	position: fixed;
	z-index: 10;

	@media only screen and (min-width: 621px) {
		height: 150px;
		padding: 16px;
		right: 16px;
		top: 76px;
		width: 200px;
	}

	@media only screen and (max-width: 620px) {
		height: 110px;
		padding: 8px;
		right: 8px;
		top: 46px;
		width: 140px;
	}
`;

const MarkerItem = styled.div`
	@media only screen and (min-width: 621px) {
		font-size: 16px;
		margin-bottom: 16px;
	}

	@media only screen and (max-width: 620px) {
		font-size: 12px;
		margin-bottom: 12px;
	}
`;

const MarkerIcon = styled(FontAwesomeIcon)`
	color: ${(props) => props.color};

	@media only screen and (min-width: 621px) {
		font-size: 24px;
		margin-right: 16px;
	}

	@media only screen and (max-width: 620px) {
		font-size: 16px;
		margin-right: 8px;
	}
`;

const MapInfo = () => {
	return (
		<InfoContainer>
			<MarkerItem>
				<MarkerIcon icon={faMapMarkerAlt} size="xs" color={'#61bd4f'} />
				100개 이상
			</MarkerItem>
			<MarkerItem>
				<MarkerIcon icon={faMapMarkerAlt} size="xs" color={'#f2d600'} />
				30개 이상 100개 미만
			</MarkerItem>
			<MarkerItem>
				<MarkerIcon icon={faMapMarkerAlt} size="xs" color={'#eb5a46'} />
				2개 이상 30개 미만
			</MarkerItem>
			<MarkerItem>
				<MarkerIcon icon={faMapMarkerAlt} size="xs" color={'#666666'} />
				없음
			</MarkerItem>
		</InfoContainer>
	);
};

export default MapInfo;
