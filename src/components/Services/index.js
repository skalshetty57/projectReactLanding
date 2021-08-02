import React from 'react';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServeiceElements'
import Icon1 from '../../images/image-2.svg';
import Icon2 from '../../images/image-7.svg';
import Icon3 from '../../images/image-8.svg';

const Services=()=>{
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our services</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We provide the best service at the lowest price anywhere in India</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Online booking</ServicesH2>
                <ServicesP>Use our site to book a pickup from anywhere at anytime</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Car remodel</ServicesH2>
                <ServicesP>We offer remodelling services to make old cars as good as new</ServicesP>
            </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    )
}
export default Services;