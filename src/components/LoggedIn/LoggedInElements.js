import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container =styled.div`
    background: #f9f9f9;
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    
    align-items: center;
`
export const Nav = styled.div`
    height: 80px;
    background:#000;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const NavCont = styled.div`
    margin-top: 0;
    height: 80px;
    background:#000;
    max-width: 1100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Icon = styled(Link)`
    margin-left: 24px;
    text-decoration:none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    min-width: 226px;
    /* justify-self: center; */

    @media screen and (max-width: 610px){
        margin-left: 16px;
        font-size: 24px;
    }
`

export const UserWelcome =styled.span`
    margin-right: 24px;
    color: #fff;
    font-weight: 500;
    font-size: 26px;
    text-align: right;

    @media screen and (max-width: 610px){
        margin-right:16px;
        font-size: 18px;
    }
`

export const Services =styled.div`
    margin-top: 40px;
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`
export const ServiceHeading = styled.h2`
    margin: 0 auto;
`
export const ServiceOptionContainer = styled.div`
    min-height: 100px;
    margin-top: 15px;
    
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ServiceOption =styled.div`
    height: 80px;
    width: 80px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    text-align: center;
    background: ${({service,id}) => (parseInt(service)===parseInt(id)) ? '#000' : '#fff'};
    color: ${({service,id}) => (parseInt(service)===parseInt(id)) ? '#fff' : '#000'};
    box-shadow:rgba(195, 195, 195, 0.7) 0px 0px 20px 0px;
    cursor: pointer;
    /* background: ${({service}) => (service ? "inherit" :"black")}; */
`
export const ServiceDate = styled.input.attrs({
    type:"date"
})`
    margin-top: 20px;
`
export const ServiceTime = styled.input.attrs({
    type:"time",
    min:"10:00",
    max:'19:00'

})`
    margin: 20px 0;
`
export const ConfirmButton = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' :'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-bottom: 20px;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`;