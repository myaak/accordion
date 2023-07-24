import { IAccordion } from "../types/IAccordion.ts";

export const ACCORDION: IAccordion[] = [
  {
    id: 1,
    title: "common_title",
    children: [{ id: 2, title: "rare_title", children: [], isOpened: false }],
    isOpened: true
  },
  {
    id: 3,
    title: "common_title2",
    children: [
      {
        id: 4,
        title: "rare_title2",
        children: [
          {
            id: 5,
            title: "rare_title4",
            children: [
              {
                id: 6,
                title: "rare_title5",
                children: [],
                isOpened: false
              }
            ],
            isOpened: false
          }
        ],
        isOpened: false
      }
    ],
    isOpened: false
  }
];
