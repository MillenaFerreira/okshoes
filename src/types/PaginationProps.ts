export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
