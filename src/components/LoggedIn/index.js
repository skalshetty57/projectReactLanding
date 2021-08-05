import React, { useState } from "react"
import {
	Nav,
	Container,
	Icon,
	NavCont,
	UserWelcome,
	Services,
	ServiceHeading,
	ServiceOptionContainer,
	ServiceOption,
	ServiceDate,
	ServiceTime,
    ConfirmButton
} from "./LoggedInElements"
import { SubService } from "./ServiceCardCont"
import ServiceCard from "./ServiceCard"
import {
	carWashSilver,
	carWashGold,
	carWashPlatinum,
	carCheckUpSilver,
	carCheckUpGold,
	carCheckUpPlatinum,
	carSilver,
	carGold,
	carPlatinum,
} from "./dataCarWash"
import MessageModal from "../Modal/MessageModal"

const LoggedinDisplay = () => {
	const [service, setService] = useState(0)
	const [selected, setSelected] = useState(20)
	const [ob1, setOb1] = useState(false)
	const [ob2, setOb2] = useState(false)
	const [ob3, setOb3] = useState(false)
    const [show, setShow] = useState(false);

    let x = new Date()
	let xdate = parseInt(x.getDate()) < 10 ? "0" + x.getDate() : x.getDate()
	let xmon =
		parseInt(x.getMonth()) + 1 < 10
			? "0" + parseInt(x.getMonth() + 1)
			: x.getMonth()
	let xx = x.getFullYear() + "-" + xmon + "-" + xdate
	let xt = (parseInt(x.getHours())<10?'0'+x.getHours():x.getHours()) + ":" + (parseInt(x.getMinutes())<10?'0'+x.getMinutes():x.getMinutes())

	let servicesInfo = [
		[carWashSilver, carWashGold, carWashPlatinum],
		[carCheckUpSilver, carCheckUpGold, carCheckUpPlatinum],
		[carSilver, carGold, carPlatinum],
	]
	const changeService = (ev) => {
		let temp = ev.target.id;
		if (temp === "3") temp = service
		setService(parseInt(temp))
		// console.log(service)
	}

	let changeSelected = (ev) => {
		let temp = ev.target.id
		// console.log(temp)
		if (temp === "20") temp = selected
		setSelected(parseInt(temp))
		// console.log(selected);
		setOb1(parseInt(servicesInfo[service][0].id) === parseInt(temp))
		setOb2(parseInt(servicesInfo[service][1].id) === parseInt(temp))
		setOb3(parseInt(servicesInfo[service][2].id) === parseInt(temp))
	}
	servicesInfo[service][0].bgdrk = ob1
	servicesInfo[service][1].bgdrk = ob2
	servicesInfo[service][2].bgdrk = ob3
	
	
    
    let modalset =() =>{
        setShow(true);
    }
    
    

	return (
		<>
			<Container>
				<Nav>
					<NavCont>
						<Icon to="/">Wrench King</Icon>
						<UserWelcome>Welcome to WrenchKing</UserWelcome>
					</NavCont>
				</Nav>
				<Services>
					<ServiceHeading>SELECT A SERVICE</ServiceHeading>
					<ServiceOptionContainer
						id={3}
						onClick={changeService}
						className={service}
					>
						<ServiceOption id={0} data-name='Car Wash' service={service}>
							Car &nbsp; Wash
						</ServiceOption>
						<ServiceOption id={1} data-name='Car Checkup' service={service}>
							Car Checkup
						</ServiceOption>
						<ServiceOption id={2} service={service} data-name='Car Remodel'>
							Car Rental
						</ServiceOption>
					</ServiceOptionContainer>
				</Services>
				<SubService id={20} onClick={changeSelected}>
					<ServiceCard {...servicesInfo[service][0]} />
					<ServiceCard {...servicesInfo[service][1]} />
					<ServiceCard {...servicesInfo[service][2]} />
				</SubService>
				<ServiceDate defaultValue={xx} min="2021-08-08" max="2022-08-12" />
				<ServiceTime defaultValue={xt} />
				<ConfirmButton onClick={modalset} >Confirm Booking</ConfirmButton>
                <MessageModal onClose={() => setShow(false)} show={show} service={service} selected={selected} timing={xx+' '+xt}></MessageModal>
			</Container>
		</>
	)
}

export default LoggedinDisplay
