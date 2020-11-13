import React from "react"
import styled from "styled-components"
import colors from "../theme/colors"

const Wrapper = styled.div `
    width: 100%;
    height: 80vh;
    background-color: tomato;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    grid-column: span 24;
`

const HeaderAnimation = () => {
    return(
        <Wrapper>Hello</Wrapper>
    )
}

export default HeaderAnimation;