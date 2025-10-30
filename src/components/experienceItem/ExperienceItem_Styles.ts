import styled from "styled-components"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"
import { FlexWrapper } from "../FlexWrapper"

const ExperienceItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
    position: relative;
    
    &::before {
        content: " ";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.fontLine};
    
        position: absolute;
        bottom: -20px;
        left: 10px;
        right: 10px;
        z-index: 1; 
    }

    & > ${FlexWrapper}:first-child {
        width: 60%;
        justify-content: center;

        & > ${FlexWrapper} > ${FlexWrapper}:first-child {   
            width: 80% ;
            justify-content: flex-start;
        }
    }

    & > ${FlexWrapper}:last-child {
        width: 27%;
        
        & >${FlexWrapper} {
            justify-content: flex-start;            
        }

        @media ${theme.media.mobile} {
            white-space: nowrap;  
            width: 31% ;
        }
    }
    
    span {
        width: 90%;
        font-size: 9px;
        text-align: center;
        vertical-align: middle;
        text-align: end;
        color: #018c0f;
        padding-right: 20px;
        position: relative;
        z-index: 0;
        line-height: 26px;


        &::after {
            content: "";
            display: inline-block;
            height: 25px;
            width: 85px;
            top: 0;
            right: 0;
            bottom: 0;
            border-radius: 100px;
            background-color: #D7FFE0;

            position: absolute;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        svg {
                display: none;
            }
    }

`
const ExperienceDiscription = styled.h4`
    ${font({ weight: 400, Fmax: 20, Fmin: 14})}
    letter-spacing: 1px;
` 


export const S = {
    ExperienceDiscription,
    ExperienceItem
}