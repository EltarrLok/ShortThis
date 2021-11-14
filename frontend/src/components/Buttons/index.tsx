import styled from "@emotion/styled";

const Button = styled.button`
  font-size: 18px;
  border: none;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background-color: #3865fd;
  color: white;
  height: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.4),
      0 4px 6px -2px rgba(0, 0, 0, 0.2);
    border-color: white;
  }
`;

export default Button;
