import styled from "@emotion/styled";
import { FunctionComponent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Buttons";
import ShortenedUrl from "./ShortenedUrl";
import UrlShortenerRepositoryContext from "./url-shortener-repository/UrlShortenerRepositoryContext";

const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 0.375rem;
  background-color: white;
  border-color: rgba(35, 44, 122, 0.25);
  height: 1.5rem;

  &:focus {
    border-color: rgba(56, 101, 253, 1);
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: fit-content;
`;

interface UrlShortenerForm {
  link: string;
}

const UrlShortener: FunctionComponent = () => {
  const {
    handleSubmit,
    register,
    formState,
    reset,
  } = useForm<UrlShortenerForm>();

  const [shortenedUrl, setShortenedUrl] = useState<string | undefined>();
  const urlShortenerRepository = useContext(UrlShortenerRepositoryContext);

  const onSubmit = async (data: UrlShortenerForm) => {
    const { shortenedUrl } = await urlShortenerRepository.shorten(data.link);
    setShortenedUrl(shortenedUrl);
    reset();
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="link"
          type="url"
          placeholder="Shorten your link"
          required
          ref={register({ required: true })}
        />
        <Button type="submit" disabled={formState.isSubmitting}>
          Shorten
        </Button>
      </Form>

      {shortenedUrl ? <ShortenedUrl link={shortenedUrl} /> : null}
    </Div>
  );
};

export default UrlShortener;
