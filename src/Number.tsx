import React from "react";
import styled from "styled-components";

const Container = styled.span``;

interface IProps {
    count: number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => <Container>{count}</Container> // IProps 대신에 count: number을 넣어줘도 됨

export default Number;