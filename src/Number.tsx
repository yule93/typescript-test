import React from "react";
import styled from "styled-components";

const Container = styled.span<{isBlue: boolean}>`
    color: ${props => props.isBlue ? props.theme.blueColor : "black"};
`;

interface IProps {
    count: number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => <Container isBlue = {count > 10}>{count}</Container> // IProps 대신에 {count: number}을 넣어줘도 됨

export default Number;