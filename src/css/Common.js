import styled from '@emotion/styled';
import { css } from '@emotion/react'
import Card from 'antd/lib/card/Card';

export const orangeColor = css`
    background-color: orange
`;

export const BlueColor = styled.div`
    padding: 16px;
    font-size: 24px;
    background-color: blue
`;

export const GreenColorCard = styled(Card)`
    padding: 16px;
    font-size: 24px;
    background-color: green
`;

export const CustomizeColor = styled.div`
    background-color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize ? props.fontSize : '24px'};
`;

export const bgYellow = css`
    background-color: yellow
`;

export const blueFont = css`
    font-size: 28px;
    color: deepskyblue;
`;

export const blueYellow = css`
    background-color: yellow;
    ${blueFont}
`;

