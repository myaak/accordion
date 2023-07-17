import { IAccordion } from "../../models/IAccordion.ts";
import {
  AccordionItemData,
  AccordionItemWrapper
} from "./AccordionItem.styled.ts";
import { AccordionListUl } from "../AccordionList/AccordionList.styled.ts";
import React from "react";

interface AccordionItemProps {
  accordionItem: IAccordion;
  children?: React.ReactNode;
  handleOpenItem: (id: number) => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  accordionItem,
  children,
  handleOpenItem
}) => {
  const { id, isOpened, title } = accordionItem;
  return (
    <AccordionItemWrapper>
      <AccordionItemData onClick={() => handleOpenItem(id)}>
        <span>{isOpened ? "v" : ">"}</span>
        <span>{title}</span>
      </AccordionItemData>
      {isOpened && <AccordionListUl>{children}</AccordionListUl>}
    </AccordionItemWrapper>
  );
};

export default React.memo(AccordionItem);
