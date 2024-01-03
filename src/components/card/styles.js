import styled from 'styled-components';

const StyledCard = styled.div`
	width: 327px;
	background-color: ${({ $bgColor }) => $bgColor};
	color: ${({ $mainTextColor }) => $mainTextColor};
	padding: 1.625rem 2rem 2rem 2rem;
	border-radius: 1rem;
	@media screen and (min-width: 768px) {
		width: auto;
		grid-column: ${({ $gridColumn }) => $gridColumn};
		grid-row: ${({ $gridRow }) => $gridRow};
	}
`;

const StyledCardHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 1.0625rem;
	margin-bottom: 1rem;
`;

const StyledProfileImage = styled.img`
	border-radius: 50%;
	outline: ${({ $borderImage }) => $borderImage && '4px solid' + $borderImage};
`;

const StyledCardName = styled.h2`
	margin: 0;
	font-size: 0.8125rem;
`;

const StyledCardStatus = styled.span`
	color: ${({ $secondaryTextColor }) => $secondaryTextColor};
	font-size: 0.6875rem;
`;

const StyledCardTitle = styled.p`
	margin-top: 1.125rem;
	font-size: 1.25rem;
`;

const StyledCardText = styled.p`
	font-size: 0.8125rem;
	color: ${({ $secondaryTextColor }) => $secondaryTextColor};
	line-height: 1.125rem;
	width: ${({ $width }) => $width};
`;

export {
	StyledCard,
	StyledCardHeader,
	StyledCardName,
	StyledCardStatus,
	StyledCardText,
	StyledCardTitle,
	StyledProfileImage
};
