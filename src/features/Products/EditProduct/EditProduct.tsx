import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Input } from "../../../components/Input/Input"
import { Product } from "../Interface/IProduct";
import { getProduct, updateProduct } from "../../../services/productService";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button/Button";

interface EditProps {
  id: string
}

const schema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.coerce.number().optional(),
  quantity: z.coerce.number().optional(),
  category_id: z.string().optional(),
});

type FormProps = z.infer<typeof schema>;

const EditProduct = ({id}: EditProps) => {


  const queryClient = useQueryClient()
  

  const { register, handleSubmit, formState: {errors} } = useForm<FormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema)
  })

  
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["getProduct"],
    queryFn: () => getProduct(id),
    placeholderData: keepPreviousData,
  });

  const mutation = useMutation({
    mutationFn: async () => updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['products']})
    }
  })
  

  const onSubmit = (product: FormProps) => {
    try {
       mutation.mutate()
      // await updateProduct(id, product)
    } catch (error) {
      console.error(`Erro ao editar o produto: ${product.name}`, error)
    }
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input { ...register("name")} label="Nome" placeholder={product?.name}/>
      <Input { ...register("description")} label="Descrição" placeholder={product?.description} helperText={errors.description?.message}/>
      <Input {...register("price")} label="Preço" placeholder={String(product?.price)}/>
      <Input {...register("quantity")} label="Quantidade" placeholder={String(product?.quantity)}/>
      <Button text="Editar"></Button>
    </form>
  )
}

export default EditProduct