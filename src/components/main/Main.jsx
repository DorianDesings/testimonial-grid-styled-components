import { CARDS_INFO } from '../../constants/cards-info';
import Card from '../card/Card';
import { StyledMain } from './styles';

const Main = () => {
	return (
		<StyledMain>
			{CARDS_INFO.map(card => {
				return <Card key={card.id} {...card} />;
			})}
		</StyledMain>
	);
};

export default Main;
