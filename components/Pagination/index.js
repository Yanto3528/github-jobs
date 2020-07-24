import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineEllipsis } from "react-icons/ai";
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
  const totalPage = Math.ceil(totalJobs / jobsPerPage);
  let shouldShowEllipsis = true;

  for (let i = 1; i <= totalPage; i++) {
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
        if (currentPage + 2 > number && number !== totalPage) {
          if (number !== 1 && currentPage - number >= 2) {
            if (shouldShowEllipsis) {
              shouldShowEllipsis = false;
              return (
                <PaginationLink>
                  <AiOutlineEllipsis size="1.8rem" />
                </PaginationLink>
              );
            }
          } else {
            return (
              <PaginationLink
                key={number}
                active={currentPage === number}
                onClick={() => paginate(number)}
              >
                {number}
              </PaginationLink>
            );
          }
        } else if (number - currentPage === 3 && currentPage < 8) {
          return (
            <PaginationLink>
              <AiOutlineEllipsis size="1.8rem" />
            </PaginationLink>
          );
        }
      })}
      <PaginationLink
        active={currentPage === totalPage}
        onClick={() => paginate(totalPage)}
      >
        {totalPage}
      </PaginationLink>
      {currentPage !== pageNumber.length && (
        <PaginationLink onClick={nextPage}>
          <RiArrowRightSLine />
        </PaginationLink>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
