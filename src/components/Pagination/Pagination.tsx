import { PaginationType } from "../../features/Products/types/Product.type";
import * as S from "./styles";
import { useSearchParams } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Pagination = ({
  total,
  current_page,
  per_page,
  last_page,
}: PaginationType) => {
  const [, setPageParams] = useSearchParams();
  const [queryParams] = useSearchParams();
  const currentPerPage = queryParams.get("per_page") || "5";

  function perPage(e: string) {
    setPageParams((params) => {
      params.set("per_page", e);
      params.set("page", "1"); // resetar página
      return params;
    });
  }

  function previousPage() {
    if (current_page - 1 <= 0) {
      return;
    }

    setPageParams((params) => {
      params.set("page", String(current_page - 1));

      return params;
    });
  }

  function nextPage() {
    if (current_page + 1 > last_page) {
      return;
    }
    setPageParams((params) => {
      params.set("page", String(current_page + 1));

      return params;
    });
  }

  return (
    <S.Pagination>
      <S.Text>
        Showing {per_page} of {total} items
      </S.Text>

      <S.BtnGroup>
        <S.Text>
          Page {current_page} of {last_page}
        </S.Text>
        <S.BtnPag
          onClick={previousPage}
          disabled={current_page - 1 <= 0}
          aria-label="Página anterior"
        >
          <AiFillCaretLeft />
        </S.BtnPag>

        <S.BtnPag
          onClick={nextPage}
          disabled={current_page + 1 > last_page}
          aria-label="Próxima página"
        >
          <AiFillCaretRight />
        </S.BtnPag>
      </S.BtnGroup>

      <S.BtnGroup>
        <S.Text>Per Page</S.Text>
        <S.Select
          value={currentPerPage}
          onChange={(e) => perPage(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </S.Select>
      </S.BtnGroup>
    </S.Pagination>
  );
};

export default Pagination;
