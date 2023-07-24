import { IAccordion } from "../../types/IAccordion.ts";
import { AccordionItemData, AccordionItemWrapper } from "./AccordionItem.styled.ts";
import { AccordionListUl } from "../AccordionList/AccordionList.styled.ts";
import React from "react";
import { compareChildren } from "./helpers.ts";

interface AccordionItemProps {
  accordionItem: IAccordion;
  children?: React.ReactNode;
  handleOpenItem: (id: number) => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({ accordionItem, children, handleOpenItem }) => {
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

export default React.memo(AccordionItem, (prevProps, nextProps) => {
  if (prevProps.accordionItem.isOpened !== nextProps.accordionItem.isOpened) return false;
  if (prevProps.accordionItem.title !== nextProps.accordionItem.title) return false;

  return compareChildren(prevProps.accordionItem.children, nextProps.accordionItem.children);
});
