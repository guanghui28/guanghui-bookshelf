import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Ratings from "../../ui/Ratings";
import { useBook } from "./useBook";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import BackButton from "../../ui/BackButton";

const StyledContainer = styled.div`
    position: relative;
    min-height: 80rem;
    background-color: var(--color-grey-100);
    box-shadow: var(--shadow-lg);
    border-radius: var(--border-radius-lg);
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Title = styled.h2`
    font-size: 4rem;
    margin-bottom: 2rem;
    font-weight: 700;
    color: var(--color-brand-900);
    text-align: center;
    text-transform: uppercase;
    font-family: "Sono";
    text-shadow: var(--text-shadow-md);
`;

const Introduce = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    padding-bottom: 2rem;
    align-items: center;
    border-bottom: 2px solid var(--color-grey-700);
`;

const Details = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Paragraph = styled.p`
    font-size: 1.8rem;
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    & > strong {
        text-align: right;
        padding: 0.4rem 1rem;
        border-radius: var(--border-radius-md);
        color: var(--color-brand-700);
        min-width: 20rem;
    }
    & > span {
        color: var(--color-grey-700);
        font-weight: 500;
    }

    & img {
        height: 3rem;
    }
`;

const Info = styled.div``;

const ContainerImg = styled.div`
    align-items: flex-end;
`;

const Img = styled.img`
    border-radius: var(--border-radius-sm);
    width: 30rem;
    justify-self: flex-end;
`;

const Summary = styled.div`
    text-align: justify;
    & > p {
        font-size: 1.8rem;

        line-height: 1.8;
    }
    & h4 {
        display: inline-block;
        font-size: 2rem;
        text-transform: uppercase;
        background-color: var(--color-brand-200);
        color: var(--color-brand-900);
        border-radius: var(--border-radius-sm);
        padding: 0.4rem 1rem;
        margin-bottom: 2rem;
    }
`;

function Book() {
    const { isLoading, book, error } = useBook();
    if (error) return <Empty resourceName={"Book details"} />;
    if (isLoading) return <Spinner />;
    return (
        <StyledContainer>
            <Title as="h3">{book.title}</Title>
            <Introduce>
                <ContainerImg>
                    <Img src={book.image} alt={`Image of ${book.title} book`} />
                </ContainerImg>
                <Details>
                    <Info>
                        <Paragraph>
                            <strong>The author&apos;s name</strong>
                            <span>{book.authors.name}</span>
                        </Paragraph>
                        <Paragraph>
                            <strong>Country</strong>
                            <img src={book.authors.flagCountry} />
                        </Paragraph>
                        <Paragraph>
                            <strong>Book genre</strong>
                            <span>{book.genre}</span>
                        </Paragraph>
                        <Paragraph>
                            <strong>Total pages</strong>
                            <span>{book.pages} pages</span>
                        </Paragraph>
                        <Paragraph>
                            <strong>Year of release</strong>
                            <span>In {book.year}</span>
                        </Paragraph>
                        <Paragraph>
                            <strong>Price</strong>
                            <span>{formatCurrency(book.price)}</span>
                        </Paragraph>
                    </Info>
                    <Ratings ratings={book.rating} />
                </Details>
            </Introduce>
            <Summary>
                <h4>Summary</h4>
                <p>{book.summary}</p>
            </Summary>
            <BackButton />
        </StyledContainer>
    );
}

export default Book;
