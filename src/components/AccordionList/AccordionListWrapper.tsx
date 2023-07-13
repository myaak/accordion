import AccordionList from "./AccordionList.tsx";
import { ChangeEvent, useCallback, useState } from "react";
import { IAccordion } from "../../models/IAccordion.ts";
import { ACCORDION } from "../../data/accordion.ts";

const AccordionListWrapper = () => {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [accordionData, setAccordionData] = useState<IAccordion[]>(ACCORDION);

  const handleOpenItem = useCallback((id: number) => {
    setAccordionData((prevState: IAccordion[]) => {
      console.log(prevState);
      return prevState.map((item: IAccordion): IAccordion => {
        return item.id === id
          ? { ...item, isOpened: !item.isOpened }
          : item.children.length > 0
          ? { ...item, children: handleOpenChild(id, item.children) }
          : item;
      });
    });
  }, []);

  const handleOpenChild = useCallback((id: number, accordion: IAccordion[]) => {
    return accordion.map((item: IAccordion): IAccordion => {
      return item.id === id
        ? { ...item, isOpened: !item.isOpened }
        : item.children.length > 0
        ? { ...item, children: handleOpenChild(id, item.children) }
        : item;
    });
  }, []);

  const searchForTitle = useCallback(
    (accordion: IAccordion[], targetTitle: string, id = -1): IAccordion[] => {
      return accordion.map((item: IAccordion): IAccordion => {
        item.title.toLowerCase().includes(targetTitle.toLowerCase()) ||
        id === item.id
          ? (id = item.id)
          : id;

        const updatedChildren: IAccordion[] = searchForTitle(
          item.children,
          targetTitle,
          id
        );

        const shouldBeOpened: boolean =
          id === item.id ||
          updatedChildren.some((item: IAccordion) => item.isOpened === true);

        return { ...item, isOpened: shouldBeOpened, children: updatedChildren };
      });
    },
    []
  );

  const handleSearchTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const prompt: string = e.target.value;
    setSearchFilter(prompt);
    prompt === ""
      ? setAccordionData(ACCORDION)
      : setAccordionData(searchForTitle(accordionData, prompt));
  }, []);

  return (
    <>
      <input value={searchFilter} onChange={handleSearchTitle} />
      <AccordionList
        accordionData={accordionData}
        handleOpenItem={handleOpenItem}
      />
    </>
  );
};

export default AccordionListWrapper;
