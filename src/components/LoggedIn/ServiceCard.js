import React from "react"
import {
	ServiceCard,
	CardName,
	CardDiscount,
	CardOldPrice,
	CardNewPrice,
	CardDetails,
	CardDetailElement,
	ServiceBtn,
} from "./ServiceCardCont"

const ServiceCardMain = ({
	packageName,
	packageDiscount,
	oldPrice,
	newPrice,
	feature1,
	feature2,
	feature3,
	feature4,
	confirm,
	id,
	bgdrk
}) => {
	return (
		<>
			<ServiceCard bgdrk={bgdrk}>
				<CardName>{packageName}</CardName>
				<CardDiscount bgdrk={bgdrk}>{packageDiscount}</CardDiscount>
				<CardOldPrice>{oldPrice}</CardOldPrice>
				<CardNewPrice>{newPrice}</CardNewPrice>
				<CardDetails>
					<CardDetailElement>{feature1}</CardDetailElement>
					<CardDetailElement>{feature2}</CardDetailElement>
					<CardDetailElement>{feature3}</CardDetailElement>
					<CardDetailElement>{feature4}</CardDetailElement>
				</CardDetails>
				<ServiceBtn id={id} bgdrk={bgdrk}>{confirm}</ServiceBtn>
			</ServiceCard>
		</>
	)
}

export default ServiceCardMain
