import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { animateScroll as scroll } from "react-scroll"
import { useEffect, useState } from "react"

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false)

    useEffect (()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 500) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    })

    return (
        <>
            {showBtn && (
            <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                <Icon iconId={"arrowGoTop"} width="20" height="20" viewBox="0 0 30 30"/>
            </StyledGoTopBtn>
            )}
        </>
    )
}

const StyledGoTopBtn = styled.button`
    background-color: #efbeee;
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`