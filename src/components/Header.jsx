import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstAid, faRedo, faSearch } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
	background-color: #3c779f;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 10;

	@media only screen and (min-width: 621px) {
		height: 60px;
	}

	@media only screen and (max-width: 620px) {
		height: 40px;
	}
`;

const LabelWrapper = styled.div`
	color: white;
	float: left;
	margin-left: 16px;

	@media only screen and (min-width: 621px) {
		font-size: 32px;
		line-height: 60px;
	}

	@media only screen and (max-width: 620px) {
		font-size: 18px;
		line-height: 40px;
	}
`;

const ControlWrapper = styled.div`
	display: flex;
	float: right;
	justify-content: space-between;
	vertical-align: middle;

	@media only screen and (min-width: 621px) {
		margin: 10px 12px;
		width: 310px;
	}

	@media only screen and (max-width: 620px) {
		margin: 5px 12px;
		width: 180px;
	}
`;

const InputField = styled.input.attrs({ type: 'text' })`
	border: none;
	box-shadow: none;
	box-sizing: border-box;
	box-shadow: none;
	border-radius: 3px;
	background-color: hsla(0, 0%, 100%, 0.8);
	outline: 0;

	@media only screen and (min-width: 621px) {
		width: 230px;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		padding: 0 16px;
	}

	@media only screen and (max-width: 620px) {
		width: 120px;
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		padding: 0 8px;
	}
`;

const SearchButton = styled.button`
	background-color: hsla(0, 0%, 100%, 0.6);
	border: none;
	border-radius: 4px;
	box-shadow: none;
	color: black;
	cursor: pointer;
	line-height: 1.499;
	padding: 0 12px;
	text-align: center;
	&:hover {
		background-color: hsla(0, 0%, 100%, 0.8);
	}

	@media only screen and (min-width: 621px) {
		height: 40px;
	}

	@media only screen and (max-width: 620px) {
		height: 30px;
	}
`;

const LogoIcon = styled(FontAwesomeIcon)`
	@media only screen and (min-width: 621px) {
		font-size: 32px;
		margin-right: 16px;
	}

	@media only screen and (max-width: 620px) {
		font-size: 22px;
		margin-right: 8px;
	}
`;

const RefreshIcon = styled(FontAwesomeIcon)`
	color: white;
	cursor: pointer;
	&:hover {
		color: hsla(0, 0%, 100%, 0.3);
	}

	@media only screen and (min-width: 621px) {
		font-size: 20px;
		margin-top: 10px;
		margin-right: 8px;
	}

	@media only screen and (max-width: 620px) {
		font-size: 16px;
		margin-top: 8px;
		margin-right: 4px;
	}
`;

const SearchIcon = styled(FontAwesomeIcon)`
	@media only screen and (min-width: 621px) {
		font-size: 20px;
	}

	@media only screen and (max-width: 620px) {
		font-size: 12px;
	}
`;

// MaskMap의 헤더
const Header = ({ onSearch, onRefresh }) => {
	const [keyword, setKeyword] = useState('');
	const onChange = (e) => {
		setKeyword(e.target.value);
	};

	const onKeyUp = (e) => {
		// enter capture
		if (e.keyCode === 13) {
			onSearch(keyword);
		}
	};

	return (
		<HeaderContainer>
			<LabelWrapper>
				<LogoIcon icon={faFirstAid} size="xs" alt="새로고침" />
				Mask Map
			</LabelWrapper>
			<ControlWrapper>
				<RefreshIcon icon={faRedo} size="xs" onClick={onRefresh} />
				<InputField
					name="keyword"
					value={keyword}
					onChange={onChange}
					onKeyUp={onKeyUp}
					placeholder="지역, 건물 등을 검색하세요"
				/>
				<SearchButton onClick={() => onSearch(keyword)} aria-label="Search">
					<SearchIcon icon={faSearch} size="xs" />
				</SearchButton>
			</ControlWrapper>
		</HeaderContainer>
	);
};

export default Header;
