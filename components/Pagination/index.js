import { useRouter } from "next/router";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { PaginationContainer, PaginationLink } from "./styles";

const Pagination = ({
  jobsPerPage,
  totalJobs,
  currentPage,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <PaginationContainer>
      {currentPage !== 1 && (
        <PaginationLink onClick={prevPage}>
          <RiArrowLeftSLine />
        </PaginationLink>
      )}
      {pageNumber.map((number) => {
        return (
          <PaginationLink
            key={number}
            active={currentPage === number}
            onClick={() => paginate(number)}
          >
            {number}
          </PaginationLink>
        );
      })}
      {currentPage !== pageNumber.length && (
        <PaginationLink onClick={nextPage}>
          <RiArrowRightSLine />
        </PaginationLink>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
