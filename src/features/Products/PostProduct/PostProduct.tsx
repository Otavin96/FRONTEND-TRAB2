import { Input } from '../../../components/Input/Input'
import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../../../components/Button/Button'
import { useEffect, useState } from 'react'
import { fetchCategories } from '../../../services/categoryService'
import { CategoryType } from '../../Categories/types/categoryType'

const schema = z.object({
    name: z.string().min(1, "Campo é obrigatório"),
    description: z.string().min(1, "Campo é obrigatório"),
    price: z.coerce.number(),
    quantity: z.coerce.number(),
    category_id: z.string()
})

type FormProps = z.infer<typeof schema>

const PostProduct = () => {

    const [categories, setCategories] = useState<CategoryType[]>()

    const { register, handleSubmit, setValue, formState: {errors}, } = useForm<FormProps>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(schema)
    })


    useEffect(() => {
        try {
            const listCategories = async () => {
                setCategories(await fetchCategories())
            }

            listCategories()
        } catch (error) {
            console.log("Erro ao buscar as categorias no banco", error)
        }
    }, [])

  return (
    <S.Container>
        <S.PostProduct>
            <S.Title>Cadastrar Produto</S.Title>

            <Input {...register("name")} type="text" placeholder='Digite o nome do produto' label='Nome' helperText={errors.name?.message}/>
            <Input {...register("description")} type="text" placeholder='Digite a descrição' label='Descrição' helperText={errors.description?.message}/>
            <Input {...register("price")} type="number" placeholder='Digite o valor' label='Valor' helperText={errors.price?.message}/>    
            <Input {...register("quantity")} type="number" placeholder='Digite a quantidade' label='Quantidade' helperText={errors.quantity?.message}/>

            <Button text='Cadastrar' type='submit'/>

        </S.PostProduct>       
    </S.Container>
  )
}

export default PostProduct