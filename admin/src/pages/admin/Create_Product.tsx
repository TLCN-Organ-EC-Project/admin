import { apiCreateProduct } from "@api/user"
import Button from "@comp/Button/Button"
import Input from "@comp/Input/Input"
import { FieldValues, useForm } from "react-hook-form"

const Create_Product = () => {
  const { handleSubmit, watch,register, formState: { errors }, reset } = useForm<FieldValues>()
  const handleCreateProduct=()=>{

  }
  return (
    <div className="w-full">
      <h2 className='py-7'>Create Products</h2>
      <div className="flex flex-col gap-10">
          <div className="flex gap-5">
            <Input
              id="gender"
              label="Gender"
              register={register}
              errors={errors}
            />
            <Input
              id="material"
              label="Material"
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex gap-5">
            <Input
             id="price"
             label="Price"
             register={register}
             errors={errors}
            />
            <Input
              id="product_name"
              label="Product_name"
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex gap-5">
            <Input
             id="size"
             label="Size"
             register={register}
             errors={errors}
            />
            <Input
             id="size_of_model"
             label="Size_of_model"
             register={register}
             errors={errors}
            />
          </div>
          <div>
            <Input
             id="thumb"
             label="Thumb"
             register={register}
             errors={errors}
             type="file"
            />
          </div>
      </div>
      <div className="py-4">
      <Button  label="Create Product" onClick={handleCreateProduct()}/>
      </div>
    </div>
  )
}

export default Create_Product