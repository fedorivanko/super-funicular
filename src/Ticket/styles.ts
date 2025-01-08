import styled, { keyframes } from "styled-components";

export const wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const container = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  margin: auto;
  width: 90vw;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const title = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-250%);
  color: #fff;
`;

export const close = styled.button`
  position: absolute;
  top: -70px;
  left: 0;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
`;
export const imgWrapper = styled.div`
  margin: auto;
  width: 30%;
  border: 2px solid #f2f2f2;
  border-radius: 15px;
  padding: 15px 25px;
  box-shadow: 0px 8px 10px 0px rgba(242, 242, 242, 1);
`;

export const header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const animation = styled.div`
  position: relative;
  height: 50px;
  overflow: hidden;
`;

const move = keyframes`
  -10% {
    right: -55px;
  }

  100% {
    right: 100%;
  }
`;

export const icon = styled.div`
  position: absolute;
  bottom: 5px;
  right: -55px;
  width: 50px;
  animation-name: ${move};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const iconRed = styled(icon)`
  animation-delay: 0.5s;
`;
export const iconBlue = styled(icon)`
  animation-delay: 1s;
`;
export const iconRed_2 = styled(icon)`
  animation-delay: 1.5s;
`;
export const iconBlue_2 = styled(icon)`
  animation-delay: 2s;
`;

export const date = styled.div<{ $percent: number }>`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    width: 100%;
    background-color: #d1d1d1;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    background-color: ${({ $percent }) =>
      $percent < 30 ? "#4da524" : $percent < 60 ? "#e87400" : "#d22f3e"};
    width: ${({ $percent }) => $percent}%;
    z-index: 2;
  }
`;

export const currentTime = styled.h2`
  color: #5b9b21;
`;

export const term = styled.div`
  font-weight: 100;
`;

export const footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
