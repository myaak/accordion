import { IAccordion } from "../../models/IAccordion.ts";

export const compareChildren = (prevChildren: IAccordion[], nextChildren: IAccordion[]) => {
  if (prevChildren.length !== nextChildren.length) return false;

  for (let i = 0; i < prevChildren.length; i++) {
    if (prevChildren[i].isOpened !== nextChildren[i].isOpened) return false;

    if (prevChildren[i].children.length > 0 && nextChildren[i].children.length > 0) {
      const areNestedChildrenEqual = compareChildren(prevChildren[i].children, nextChildren[i].children);

      if (!areNestedChildrenEqual) return false;
    }
  }

  return true;
};
