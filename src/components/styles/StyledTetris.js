import styled from 'styled-components';

import bgImage from '../../assets/bg.png';

export const StyledTetrisWrapper = styled.div`
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
`

export const StyledTetris = styled.div`
    align-items: flex-start;
    display: flex;
    margin: 0 auto;
    max-width: 900px;
    padding: 40px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`