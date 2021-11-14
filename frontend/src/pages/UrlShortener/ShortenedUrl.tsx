import styled from "@emotion/styled";
import { FunctionComponent, useCallback, useRef } from "react";

const Div = styled.div`
  border: solid;
  border-color: rgba(35, 44, 122, 0.25);
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  max-width: 75%;
`;

const CopyButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.375rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(35, 44, 122, 0.25);
  }
`;

const Input = styled.input`
  border: none;
  font-size: 18px;
  color: black;
`;

interface ShortenedUrlProps {
  link?: string;
}

const ShortenedUrl: FunctionComponent<ShortenedUrlProps> = (props) => {
  const { link = "" } = props;

  const shortenedUrlRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    // WIP
    // navigator.clipboard.writeText(link);
    /* shortenedUrlRef.current?.select();
    document.execCommand("copy");
    document.getSelection()?.empty(); */
  }, []);

  return (
    <Div>
      <Input ref={shortenedUrlRef} disabled value={link} />

      <CopyButton onClick={handleClick}>Copy</CopyButton>
    </Div>
  );
};

export default ShortenedUrl;
