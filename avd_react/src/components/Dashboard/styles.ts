import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: -3em;
    div {
        padding: 8rem;
        border-radius: 0.25rem;
        justify-content: space-between;
    
        header {
        display: flex;
        font-size: 2rem;
        font-weight: 250;
        line-height: 2rem;
        align-items: center;
        padding-bottom: 1rem;
    }

    strong {
        display: flex;
        padding-bottom: 0.5rem;
        align-items: center;
        margin-top: 0.5rem;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.5rem;
    }

    .buttons{
        margin-top: -7rem;
        justify-content: space-between;
    }

    .delete {
        max-width: 1120px;
        
        
        font-size: 1rem;
        color: black;
        background-color: #ff0020;
        border: 0;
        padding: 0 1rem;
        height: 2rem;
        border: solid 1px;
        
        transition: filter 0.3s;
        &:hover {
            filter: brightness(0.7);
        }
    }
    .like {
        max-width: 1120px;
        
        
        font-size: 1rem;
        color: black;
        background-color: #0000CD;
        border: 0;
        padding: 0 2rem;
        height: 2rem;
        border: solid 1px;

        transition: filter 0.3s;
        &:hover {
            filter: brightness(0.7);
        }
    }
    .dislike {
        font-size: 1rem;
        color: black;
        background-color: #DC143C;
        border: 0;
        padding: 0 2rem;
        height: 2rem;
        border: solid 1px;

        transition: filter 0.3s;
        &:hover {
            filter: brightness(0.7);
        }
    }

    img {
        border-radius: 1rem;
    }

    button {
        margin-right: 2rem;
        align-items: center;
        margin-top: 1rem;
    }
    }
`