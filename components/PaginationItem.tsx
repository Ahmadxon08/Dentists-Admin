import React from "react";
import { Pagination } from "@mui/material";
import useStore from "@/store/useStore";

interface PaginationItemProps<T> {
  data: T[]; // `any[]` o'rniga generik `T[]` ishlatildi
  itemsPerPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  currentPage: number;
}

const PaginationItem = <T,>({
  data,
  itemsPerPage,
  handlePageChange,
  currentPage,
}: PaginationItemProps<T>) => {
  const pageCount = data.length > 0 ? Math.ceil(data.length / itemsPerPage) : 1;

  const { isDarkMode } = useStore();

  return (
    <Pagination
      count={pageCount}
      page={currentPage}
      onChange={handlePageChange}
      color="primary"
      siblingCount={1}
      boundaryCount={1}
      sx={{
        ".MuiPaginationItem-root": {
          color: isDarkMode ? "white" : "black",
        },
        ".MuiPaginationItem-ellipsis": {
          color: isDarkMode ? "white" : "black",
        },
        ".Mui-selected": {
          backgroundColor: isDarkMode ? "#3585ED" : "#f0f0f0",
          color: "white",
        },
        ".MuiPaginationItem-root:hover": {
          backgroundColor: isDarkMode ? "#3585ED" : "#dcdcdc",
          color: "white",
        },
        ".MuiPaginationItem-previous, .MuiPaginationItem-next": {
          color: isDarkMode ? "white" : "black",
          backgroundColor: "#2C2C2C",
        },
        ".MuiPaginationItem-previous:hover, .MuiPaginationItem-next:hover": {
          backgroundColor: isDarkMode ? "#3585ED" : "#dcdcdc",
          color: "white",
        },
      }}
    />
  );
};

export default PaginationItem;
