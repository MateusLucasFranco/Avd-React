import styled from 'styled-components'

export const Container = styled.header`
    background-color: #577aa9;
    justify-content: space-between;
`

export const Content = styled.div`
    max-width: 1850px;
    margin: 0 auto; 
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        font-size: 1rem;
        color: #000000;
        background-color: #b5d1eb;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2rem;
        border: solid 0.5px;

        transition: filter 0.3s;
        &:hover {
            filter: brightness(0.7);
        }
    }
    
    img {
        display: flex;
        justify-content: space-between;
    }

`