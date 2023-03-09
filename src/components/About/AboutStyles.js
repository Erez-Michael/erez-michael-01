import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 10px 10px 40px;
  @media screen and (max-width: 768px) {
    padding: 10px 10px 10px 10px;
   /* border: solid red 2px;*/
  }
`;

export const Container = styled.div`
  margin-top: 25%;
  background: #485461;
  padding: 20px 80px 20px 80px;
`;
export const Title = styled.div`
  background: #485461;
  display: flex;
  justify-content: flex-start;
  height: 10%;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 40px;

  /* Letter Outline */
  text-shadow: rgb(254, 190, 16) 1px 0px 0px,
    rgb(254, 190, 16) 0.540302px 0.841471px 0px,
    rgb(254, 190, 16) -0.416147px 0.909297px 0px,
    rgb(254, 190, 16) -0.989992px 0.14112px 0px,
    rgb(254, 190, 16) -0.653644px -0.756802px 0px,
    rgb(254, 190, 16) 0.283662px -0.958924px 0px,
    rgb(254, 190, 16) 0.96017px -0.279415px 0px;
`;


export const SubTitle = styled.div`
  background: #485461;
  color: #eee;
  margin-bottom: 40px;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 1.5rem;

  div {
    background-color: rgba(254, 190, 16, 0.5);
    width: fit-content;
    border-radius: 5px;
    border: solid black 1px;
    padding: 5px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 50px -30px #a8a8a8;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 50px -30px #a8a8a8;
  }
`;
export const Body = styled.div`
  background: #485461;
  color: #eee;
  height: 80%;
  letter-spacing: 2px;
  line-height: 2rem;
  span {
    text-decoration: underline;
    background: #485461;
    
  }
`;


export const Tools = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    /*border: solid blue 2px;*/
    font-size: 2rem;
    font-weight: 600;
  }
`;