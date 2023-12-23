import { apiCreateProduct } from "@api/user"
import Button from "@comp/Button/Button"
import Input from "@comp/Input/Input"
import { ICreateProduct } from "@type/@typeProduct"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { apiAdminAddImageOfProduct } from "@api/user"
import AddProductToStore from "@comp/ManagerProduct/AddProductToStore"

interface IProduct {
  gender: string,
  material: string,
  price: number,
  product_name: string,
  size: string,
  size_of_model: string,
  thumb: string,
}
const Create_Product = () => {
  const { handleSubmit, watch, setValue, register, formState: { errors }, reset } = useForm<FieldValues>({
    defaultValues: {
      gender: '',
      material: '',
      price: '',
      product_name: '',
      size: ' ',
      size_of_model: '',
      thumb: '',
      imageproduct: '',
    }
  })
  const [Loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<File | string>("");
  const [dataCreateProduct, setDataCreateProduct] = useState<ICreateProduct | null>(null)
  const [addImageProduct, setAddImageProduct] = useState(true)
  const [addProductToStore,setAddProductToStore]=useState(true)
  console.log(dataCreateProduct)
  const updateImageTest = async (e: any) => {
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
        const image = new FormData()
        image.append('file', profileImage)
        image.append('cloud_name', "dqotbu16k")
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
  let ICreateProduct: IProduct = {
    gender: watch('gender'),
    material: watch('material'),
    price: parseInt(watch('price')),
    product_name: watch('product_name'),
    size: watch('size'),
    size_of_model: watch('size_of_model'),
    thumb: watch('thumb'),
  }


  const handleCreateProduct = async (data: ICreateProduct) => {
    const response = await apiCreateProduct(data)
    console.log(response)
    if (response?.data) {
      setDataCreateProduct(response?.data)
      toast.success('Create success product')
      setAddImageProduct(!addImageProduct)
    } else {
      toast.error('Can not create product')
    }
  }
  const imageString = watch('imageproduct')
  const imageArray = imageString.split(',');
  const trimmedImageArray = imageArray.map((image: string) => image.trim());
  const formattedData = {
    images: trimmedImageArray,
  };

  const handleAddImageProduct = async (formattedData: any) => {
    if (dataCreateProduct?.id) {
      const response = await apiAdminAddImageOfProduct(dataCreateProduct?.id, formattedData)
      console.log(response)
      if (response) {
        toast.success('Add success images of product')
        setAddProductToStore(!addProductToStore)
      } else {
        toast.error('Can not add images product')
      }
    }


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
            type="number"
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
            /*   onChange={handleImageChange}  */
            type="text"
          />
        </div>
        {
          imagePreview && (
            <img src={imagePreview && imagePreview} alt="" className="w-60 h-60 object-contain" />
          )
        }
      </div>
      <div className="py-4">
        <Button label="Create Product" onClick={() => handleCreateProduct(ICreateProduct)} />
      </div>
      {
        addImageProduct &&
        <>
          <div>Add Image of Product </div>
          <div className="pt-10">
            <Input
              id="imageproduct"
              label="Image of Product"
              {...register('imageproduct')}
              errors={errors}
            />
          </div>
          <div className="py-5">
            <Button label="Add Image Of Product" onClick={() => handleAddImageProduct(formattedData)} />
          </div>
        </>
      }
      {
        addProductToStore && 
          <AddProductToStore/>
      }
    </div>
  )
}

export default Create_Product