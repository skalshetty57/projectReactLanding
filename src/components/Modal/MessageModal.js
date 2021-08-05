import React from 'react'
import {ModalCont,ModalContent,ModalHeader,ModalHeaderMsg,ModalBody,ModalFooter,ModalButton} from './ModalElements';

const MessageModal = (props) => {
    if(!props.show){
        return null
    }
    let message="";
    if(props.selected===20){
        message="You have not selected a plan."
    }
    else{
        message='Selected '
        message+= props.service===0?'Car Wash':props.service===1?'Car Checkup':'Car Remodel';
        message+= props.selected%3===2?' : Silver Package ':props.selected%3===0?' : Gold Package ':' : Platinum Package ';
        message+='on '+props.timing;
    }
    return (
        <>
            <ModalCont onClick={props.onClose}>
                <ModalContent onClick={e=>e.stopPropagation()}>
                    <ModalHeader>
                        <ModalHeaderMsg>Wrench King</ModalHeaderMsg>
                    </ModalHeader>
                    <ModalBody>
                        {message}
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton onClick={props.onClose}>Close</ModalButton>
                    </ModalFooter>
                </ModalContent>
            </ModalCont>
        </>
    )
}

export default MessageModal
