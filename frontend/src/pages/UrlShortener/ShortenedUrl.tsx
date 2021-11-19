import { FunctionComponent, useCallback, useRef } from 'react';

import styled from '@emotion/styled';

const Div = styled.div`
  border: solid;
  border-color: rgba(35, 44, 122, 0.25);
  border-radius: 0.5rem;
  padding: 1rem;

  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
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
  background-color: transparent;
`;

interface ShortenedUrlProps {
  link?: string;
}

const ShortenedUrl: FunctionComponent<ShortenedUrlProps> = (props) => {
  const { link = '' } = props;

  const shortenedUrlRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    shortenedUrlRef.current?.select();
    navigator.clipboard.writeText(shortenedUrlRef.current?.value || '');
  }, []);

  return (
    <Div>
      <Input ref={shortenedUrlRef} disabled value={link} />

      <CopyButton onClick={handleClick}>Copy</CopyButton>
    </Div>
  );
};

export default ShortenedUrl;
