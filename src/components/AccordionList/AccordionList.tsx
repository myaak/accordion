import React from "react";
import { IAccordion } from "../../models/IAccordion.ts";
import AccordionItem from "../AccordionItem/AccordionItem.tsx";
import { AccordionListUl } from "./AccordionList.styled.ts";

interface AccordionListProps {
  accordionData: IAccordion[];
  handleOpenItem: (id: number) => void;
}

const AccordionList: React.FC<AccordionListProps> = ({
  accordionData,
  handleOpenItem
}) => {
  return (
    accordionData.length > 0 && (
      <AccordionListUl>
        {accordionData.map((item: IAccordion) => (
          <AccordionItem
            key={item.id}
            accordionItem={item}
            children={
              <AccordionList
                accordionData={item.children}
                handleOpenItem={handleOpenItem}
              />
            }
            handleOpenItem={handleOpenItem}
          />
        ))}
      </AccordionListUl>
    )
  );
};

export default React.memo(AccordionList);
