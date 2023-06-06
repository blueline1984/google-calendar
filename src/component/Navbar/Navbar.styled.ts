import styled from "styled-components";

export const Nav = styled.nav`
  height: 56px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 238px;
  flex-grow: 1;
`;

export const Logo = styled.i<{ source: string }>`
  background-image: url(${(props) => props.source});
  background-size: cover;
  width: 40px;
  height: 40px;
`;

export const TooltipWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 4;
`;

export const ButtonIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  color: rgb(60, 64, 67);
  padding: 0 12px;
  border: 1px solid rgb(218, 220, 224);
  border-radius: 2px;
  height: 34px;
  margin-right: 12px;
`;

export const IconWrap = styled.button`
  height: 32px;
  width: 32px;
  color: rgb(95, 99, 104);
  padding: 0;
  background: none;
  border: none;
  border-radius: 50%;

  &:hover {
    border-radius: 50%;
    background: rgb(95, 99, 104);
    transition: all 0.3s ease-out;
  }
`;

export const Icon = styled.i`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  color: #3c4043;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
  padding: 8px;
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;
