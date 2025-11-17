import React from "react";
import { StyledPaginationCon, StyledPaginationBtn, StyledPaginationNumber, StyledPaginationWrapper } from "./styled";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import useTranslation from "next-translate/useTranslation";
import { TPagination } from "@/types/mainSchema";

interface PaginationProps {
  pagination: TPagination;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
  const { t } = useTranslation("common");
  const { page, totalPages, hasNext, hasPrev } = pagination;

  const getVisiblePages = () => {
    const pages: number[] = [];
    const start = Math.max(1, page - 1);
    const end = Math.min(totalPages, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <StyledPaginationWrapper>
      <StyledPaginationCon>
        <StyledPaginationBtn onClick={() => onPageChange(page - 1)} disabled={!hasPrev}>
          <MdKeyboardDoubleArrowLeft />
        </StyledPaginationBtn>

        {visiblePages.map((p) => (
          <StyledPaginationNumber key={p} $active={p === page} onClick={() => onPageChange(p)}>
            {p}
          </StyledPaginationNumber>
        ))}

        <StyledPaginationBtn onClick={() => onPageChange(page + 1)} disabled={!hasNext}>
          <MdKeyboardDoubleArrowRight />
        </StyledPaginationBtn>
      </StyledPaginationCon>
    </StyledPaginationWrapper>
  );
};

export default Pagination;
