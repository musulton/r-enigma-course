import Styled from "styled-components";

export const StyledContainer = Styled.div`
    padding: 30px;
    text-align: left;
`

export const StyledTitle = Styled.h1`
    margin-bottom: 20px;
    color: ${props => props.color || "black"}
`
