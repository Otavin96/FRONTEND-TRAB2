import * as S from "../../Categories/ListCategory/styles";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  useMutation,
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { ProductResponse } from "../Interface/IProduct";
import api from "../../../services/api";
import Loading from "../../../components/Loading/Loading";
import Pagination from "../../../components/Pagination/Pagination";
import Search from "../../../components/Search/Search";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import ProductTable from "./ProductTable";
import EditModal from "../../../components/EditModal/EditModal";
import EditProduct from "../EditProduct/EditProduct";

const ListProduct = () => {
  const queryClient = useQueryClient();
  const [queryParams] = useSearchParams();
  const [sortDirParams] = useSearchParams();
  const [searchParams] = useSearchParams();

  const [isModalDelete, setIsModalDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const [isModalEdit, setIsModalEdit] = useState(false);

  const per_page = queryParams.get("per_page")
    ? Number(queryParams.get("per_page"))
    : 5;

  const page = queryParams.get("page") ? Number(queryParams.get("page")) : 1;

  const sort_dir = sortDirParams.get("sort_dir")
    ? sortDirParams.get("sort_dir")
    : "asc";

  const search = searchParams.get("filter") ? searchParams.get("filter") : "";

  const { data: productsResponse, isLoading } = useQuery<ProductResponse>({
    queryKey: ["products", page, per_page, sort_dir, search],
    queryFn: async () => {
      const response = await api.get(
        `/product/?page=${page}&per_page=${per_page}&sort_dir=${sort_dir}&filter=${search}`
      );
      return response.data;
    },
    placeholderData: keepPreviousData,
  });

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/product/${id}`);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleDeleteClick = (id: string, name: string) => {
    setSelectedName(name);
    setSelectedId(id);
    setIsModalDelete(true);
  };

  const handleConfirmDelete = (id: string) => {
    mutation.mutate(id);
    setIsModalDelete(false);
  };

  const handleEditClick = (id: string) => {
    setSelectedId(id)
    setIsModalEdit(true)
  };

  return (
    <S.Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isModalDelete && selectedId && selectedName && (
            <ConfirmationModal
              setIsOpen={setIsModalDelete}
              title="Atenção"
              message={`Deseja realmente excluir o produto "${selectedName}"?`}
              onConfirm={() => handleConfirmDelete(selectedId)}
              confirmText="Excluir"
              cancelText="Cancelar"
            />
          )}

          {isModalEdit && (
            <EditModal setIsOpen={setIsModalEdit} title="Editar Produto" confirmText="Editar" cancelText="Cancelar">
              <EditProduct id={selectedId}/>
            </EditModal>
          )

          }

          <Search />
          <ProductTable
            products={productsResponse?.items || []}
            onDelete={handleDeleteClick}
            onEdit={handleEditClick}
          />
          {productsResponse && (
            <Pagination
              current_page={page}
              last_page={productsResponse.last_page}
              per_page={per_page}
              total={productsResponse.total}
            />
          )}
        </>
      )}
    </S.Container>
  );
};

export default ListProduct;
