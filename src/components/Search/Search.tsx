import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [, setSearchParams] = useSearchParams();

  function updateParam(key: string, value: string) {
    setSearchParams((params) => {
      params.set(key, value);
      params.set("page", "1"); // sempre volta pra página 1
      return params;
    });
  }

  function handleSortChange(value: string) {
    updateParam("sort_dir", value);
  }

  function handleSearchChange(value: string) {
    setSearchValue(value);
    updateParam("filter", value);
  }

  // ✅ Limpar após 5 segundos sem digitar
  useEffect(() => {
    if (!searchValue) return;

    const timeout = setTimeout(() => {
      setSearchValue("");
    }, 5000); // 5000ms = 5 segundos

    return () => clearTimeout(timeout); // limpa o timer se o valor mudar
  }, [searchValue]);

  return (
    <S.QueryContainer>
      <S.Order>
        <label htmlFor="sort">Ordenar por:</label>
        <S.SelectQuery
          id="sort"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </S.SelectQuery>
      </S.Order>
      <S.Search>
        <S.QueryInput
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="🔍 Pesquisar produto"
        />
      </S.Search>
    </S.QueryContainer>
  );
};

export default Search;
