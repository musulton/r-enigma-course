import Styled from "styled-components";

const H3 = Styled.h3`
    margin: 20px 0;
`

const EmptyList = (props) => {
    return (
        <H3>{props.text}</H3>
    )
}

export default EmptyList;
