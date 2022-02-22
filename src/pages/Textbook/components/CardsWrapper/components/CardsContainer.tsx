import { FC } from "react";
import { StyledCardsContainer } from "./CardsContainer.styles"

const CardsContainer: FC = ({ children }) => {
  return (
    <StyledCardsContainer>
      {children}
    </StyledCardsContainer>
  )
};

export default CardsContainer;