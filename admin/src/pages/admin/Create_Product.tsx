import { apiCreateProduct } from "@api/user"
import Button from "@comp/Button/Button"
import Input from "@comp/Input/Input"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

const Create_Product = () => {
  const { handleSubmit, watch, register, formState: { errors }, reset } = useForm<FieldValues>()

  const [Loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null);


  const [profileImage, setProfileImage] = useState<File | string>("");
  const updateImage = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageURL;
      if (
        profileImage &&
        typeof profileImage !== 'string'
        &&  
        (
        (profileImage as File).type === 'image/png' ||
        (profileImage as File).type === 'image/jpg' ||
        (profileImage as File).type === 'image/jpeg'
        )
      ) {
        const image= new FormData()
        image.append('file', profileImage)
        image.append('cloud_name', "dqotbu16k")
      /*   image.append('upload_preset') */

      } else {
        console.log('Invalid file type or no file selected');
      }
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0];
    setProfileImage(selectedFile);
    if (selectedFile) {
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };
  const handleCreateProduct = () => {

  }
  return (
    <div className="w-full">
      <h2 className='py-5'>Create Products</h2>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <Input
            id="gender"
            label="Gender"
            {...register('gender')}
            errors={errors}
          />
          <Input
            id="material"
            label="Material"
            {...register('material')}
            errors={errors}
          />
        </div>
        <div className="flex gap-5">
          <Input
            id="price"
            label="Price"
            {...register('price')}
            errors={errors}
          />
          <Input
            id="product_name"
            label="Product_name"
            {...register('product_name')}
            errors={errors}
          />
        </div>
        <div className="flex gap-5">
          <Input
            id="size"
            label="Size"
            {...register('size')}
            errors={errors}
          />
          <Input
            id="size_of_model"
            label="Size_of_model"
            {...register('size_of_model')}
            errors={errors}
          />
        </div>
        <div>
          <Input
            id="thumb"
            label="Thumb"
            {...register('thumb')}
            errors={errors}
            onChange={handleImageChange}
            type="file"
          />
        </div>
        {
          imagePreview && (
            <img src={imagePreview && imagePreview} alt="" className="w-60 h-60 object-contain" />
          )
        }
      </div>
      <div className="py-4">
        <Button label="Create Product" onClick={updateImage} />
      </div>
    </div>
  )
}

export default Create_Product