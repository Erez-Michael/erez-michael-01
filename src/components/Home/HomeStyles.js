import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /*border: solid red 2px;*/
  @media screen and (max-width: 768px) {
flex-direction:column;
height: 40%;
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  width: 35%;
 /* border: solid blue 5px;*/
  height: 500vh;
  left: 0;
  @media screen and (max-width: 768px) {
    position: relative;
    height: 0vh;
    background: #485461;
  }
`;
  export const RightContainer = styled.div`
    /*border: solid blueviolet 4px;*/
    position: relative;
    display: flex;
    flex-direction: column;
    width: 65%;
    right: 0;
    height: 500vh;
    @media screen and (max-width: 768px) {
      height: 40vh;
      width: 100%;
    }
  `;
