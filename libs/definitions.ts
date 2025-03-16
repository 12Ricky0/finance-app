export interface PaginationProps {
  totalPages: number;
  activePage: number;
  setActivePage: (value: number) => void;
}
