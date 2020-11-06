import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);

  > div{
    width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #000;
    border-radius: 5px;
    box-shadow: 0 0 3px #1C2833;


    h1{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      border-bottom: 3px solid #1C2833;

      svg{
        margin-right: 7px;
      }

    }


    p{
      text-align: center;
      padding: 30px 20px;
      font-size: 1.2em;
      border-bottom: 3px solid #1C2833;
    }

    button{
      background: #FFF;
      border: none;
      padding: 7px 15px;
      margin: 20px 0;
      border-radius: 4px;
      font-weight: bold;
      font-size: 18px;

      display: flex;
      justify-content: center;
      align-items: center;

      svg{
        margin-right: 7px;
      }

    }
  }

`;
