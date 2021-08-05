import styled from "styled-components"

export const SubService = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    max-width: 1100px;
    width: 100%;

    @media screen and (max-width:700px){
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-start;
    }
`

export const ServiceCard = styled.div`
    /* background: #fff; */
    background: ${({bgdrk}) => (bgdrk ?'#000':'#fff')};
    color:${({bgdrk}) => (bgdrk ?'#fff':'#000')};
    box-shadow:rgba(195, 195, 195, 0.9) 0px 0px 35px 0px;
    border-radius: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 300px;
    width: 100%;
    margin: 30px 15px 0 15px;
    transition: all 0.3s ease-in-out;
    &:hover{
        background: black;
        color: white;
    }
    &:hover span{
        background: white;
        color: black;
    }
    &:hover button{
        border-color: white;
    }
    /* @media screen and (max-width:700px){
        
    } */
`

export const CardName =styled.h3`
    text-align:center;
    font-weight: 700;
    font-size: 18px;
    color: #01BF71;
    margin-top: 20px;
    
`
export const CardDiscount =styled.span`
    /* background: black; */
    background: ${({bgdrk}) => (bgdrk ? '#fff' :'#000')};
    color: ${({bgdrk}) => (bgdrk ? '#000' :'#fff')};
    /* color: white; */
    font-weight: 700;
    font-size: 16px;
    padding: 0.1em 0.7em;
    border-radius: 15px;
    margin-top: 17px;
    transition: all 0.3s ease-in-out;
`
export const CardOldPrice=styled.p`
    font-weight: 400;
    font-size: 18px;
    text-decoration: line-through;
    margin-top: 7px;
    
`
export const CardNewPrice=styled.p`
    font-weight: 400;
    font-size: 18px;
    margin-top: 5px;
    /* text-decoration: line-through; */
    
`
export const CardDetails=styled.ul`
    list-style-type: none;
    margin-top: 15px;
`

export const CardDetailElement = styled.li`
    
    margin-top: 3px;

    &::before{
        content: '✓';
        color: #01BF71;
        font-weight: bold;
    }
`
export const ServiceBtn = styled.button`
    outline: none;
    font-size: 17px;
    border: 1px solid black;
    border-color: ${({bgdrk}) => (bgdrk ? '#fff' :'#000')};
    border-radius: 10px;
    background: #01BF71;
    margin-top: 17px;
    margin-bottom: 25px;
    padding: 0 0.6em;
    transition: all 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
    }
`

