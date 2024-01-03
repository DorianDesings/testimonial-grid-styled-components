import styled from 'styled-components';

const StyledMain = styled.main`
	display: grid;
	justify-content: center;
	gap: 1.5rem;
	margin-left: auto;
	margin-right: auto;
	padding-block: 4.4375rem;
	max-width: 1110px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 282px);
		gap: 1.5rem;
	}
`;

export { StyledMain };
