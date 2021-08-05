import styled from 'styled-components'

export const ModalCont = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const ModalContent=styled.div`
    max-width: 500px;
    width: 90%;
    background-color: #fff;
`
export const ModalHeader=styled.div`
    width: 100%;
    padding: 10px;
`
export const ModalFooter=styled.div`
    width: 100%;
    padding: 10px;
`
export const ModalHeaderMsg=styled.h4`
    margin: 0;
`
export const ModalBody=styled.div`
    padding: 10px;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
`
export const ModalButton =styled.button`
    padding: 5px;
    border-radius: 7px;
    background:#01BF71;
    cursor: pointer;
`