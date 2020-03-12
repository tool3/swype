import styled from 'styled-components';

export const SwypeWrapper = styled.div`
    overflow: hidden;
`

export const SwypeDiv = styled.div`
    overflow: hidden;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SwypeCard = styled.div`
    height: 70vh;
    width: 80vw;
    border: 1px solid white;
    border-radius: 20px;
    box-shadow: 0 5px 5px 2px black;
    transition: all 0.3s ease;
    margin-bottom: 20px;
    font-size: 40px;
`

export const SwypeCardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12%;
    background: #1e1e1e;
    color: #E8CBC0;
    border-radius: 20px 20px 0px 0px;
`

export const SwypeCardBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
`

export const SwypeCardArrow = styled.div`
    width: 5%;
    height: 100%;
    cursor: pointer;
    color: #1e1e1e;
    filter: blur(10px);

    &:hover {
        filter: blur(0px);
    }

`

export const CarousellIndicator = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
`

export const CarousellIndicatorItem = styled.div`
    transition: all 0.2s ease;
    border: 1px solid white;
    border-radius: 5px;
    width: 10px;
    height: 10px;
    margin: 5px 5px;
    cursor: pointer;
`

export const Selected = styled(CarousellIndicatorItem)`
    background-color: white;
`