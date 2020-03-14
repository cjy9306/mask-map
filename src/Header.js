import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstAid, faRedo, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #3c779f;
	z-index: 10;

	@media only screen and (min-width: 621px) {
		height: 60px;
	}

	@media only screen and (max-width: 620px) {
		height: 40px;
	}
`;

const LabelWrapper = styled.div`
	float: left;
	color: white;
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
	float: right;
	vertical-align: middle;
	display: flex;
	justify-content: space-between;

	@media only screen and (min-width: 621px) {
		margin: 10px 12px;
		width: 310px;
	}

	@media only screen and (max-width: 620px) {
		margin: 5px 12px;
		width: 180px;
	}
`;

const InputField = styled.input`
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
	padding: 0 12px;
	color: black;
	text-align: center;
	line-height: 1.499;
	cursor: pointer;
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

const Header = ({ onSearch, onRefresh }) => {
	const [keyword, setKeyword] = useState('');
	const onChange = e => {
		setKeyword(e.target.value);
	};

	const onKeyUp = e => {
		if (e.keyCode === 13) {
			onSearch(keyword);
		}
	};

	return (
		<SearchContainer>
			<LabelWrapper>
				<LogoIcon icon={faFirstAid} size="xs" alt="새로고침" />
				Mask Finder
			</LabelWrapper>
			<ControlWrapper>
				<RefreshIcon icon={faRedo} size="xs" onClick={onRefresh} />
				<InputField value={keyword} onChange={onChange} onKeyUp={onKeyUp} placeholder="지역, 건물 등을 검색하세요" />
				<SearchButton onClick={() => onSearch(keyword)}>
					<SearchIcon icon={faSearch} size="xs" />
				</SearchButton>
			</ControlWrapper>
		</SearchContainer>
	);
};

export default Header;
