export interface IAccordion {
  id: number;
  title: string;
  children: IAccordion[];
  isOpened: boolean;
}
