import {
	StyledCard,
	StyledCardHeader,
	StyledCardName,
	StyledCardStatus,
	StyledCardText,
	StyledCardTitle,
	StyledProfileImage
} from './styles';

const Card = ({
	image,
	name,
	status,
	title,
	text,
	$bgColor,
	$borderImage,
	$mainTextColor,
	$secondaryTextColor,
	$gridColumn,
	$gridRow,
	$width
}) => {
	return (
		<StyledCard
			$bgColor={$bgColor}
			$borderImage={$borderImage}
			$mainTextColor={$mainTextColor}
			$gridColumn={$gridColumn}
			$gridRow={$gridRow}
		>
			<StyledCardHeader>
				<StyledProfileImage src={image} alt='' $borderImage={$borderImage} />
				<div>
					<StyledCardName>{name}</StyledCardName>
					<StyledCardStatus $secondaryTextColor={$secondaryTextColor}>
						{status}
					</StyledCardStatus>
				</div>
			</StyledCardHeader>
			<StyledCardTitle>{title}</StyledCardTitle>
			<StyledCardText $secondaryTextColor={$secondaryTextColor} $width={$width}>
				{text}
			</StyledCardText>
		</StyledCard>
	);
};

export default Card;
