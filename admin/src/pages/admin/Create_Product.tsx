import { apiAdminAddProductToStore, apiCreateProduct } from "@api/user"
import Button from "@comp/Button/Button"
import Input from "@comp/Input/Input"
import { ICreateProduct } from "@type/@typeProduct"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { apiAdminAddImageOfProduct } from "@api/user"
import { category } from "@util/contant"
import { apiAddProductInCategory } from "@api/user"

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
  const { watch,  register, formState: { errors } } = useForm<FieldValues>({
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
/*   const [loading, setLoading] = useState(false) */
  const [imagePreview, setImagePreview] = useState<string | null>(null);
/*   const [profileImage, setProfileImage] = useState<File | string>(""); */
  const [dataCreateProduct, setDataCreateProduct] = useState<ICreateProduct | null>(null)
  const [addImageProduct, setAddImageProduct] = useState(false)
  const [addProductToStore, setAddProductToStore] = useState(false)
  const [addProductToCategory, setAddProductToCategory] = useState(false)
  const [sizeInput, setSizeInput] = useState<string>('');
  const [quantityInput, setQuantityInput] = useState<string>('');
  const [result, setResult] = useState<{ quantity: number[]; size: string[] }>({ quantity: [], size: [] });
  const [activeTab, setActiveTab] = useState(category[0].id)


  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSizeInput(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityInput(event.target.value);
  };
  const handleAdd = () => {
    const quantities = quantityInput.split(',').map((q) => parseInt(q, 10));
    const sizes = sizeInput.split(',').map((s) => s.trim());
    setResult((prevResult) => ({
      quantity: [...prevResult.quantity, ...quantities],
      size: [...prevResult.size, ...sizes],
    }));
    setSizeInput('');
    setQuantityInput('');
  };
 /*  const updateImageTest = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
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
  }; */
/*   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0];
    setProfileImage(selectedFile);
    if (selectedFile) {
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  }; */
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

  const quatityAndSize = {
    "quantity": [
      30, 50
    ],
    "size": [
      "M", "L"
    ]
  }
  const handleAddImageProduct = async (formattedData: any) => {
    if (dataCreateProduct?.id) {
      const response = await apiAdminAddImageOfProduct(dataCreateProduct?.id, formattedData)
      if (response) {
        toast.success('Add success images of product')
        setAddProductToStore(!addProductToStore)
      } else {
        toast.error('Can not add images product')
      }
    }


  }
  const handleAddProductToStore = async (data: any) => {
    handleAdd()
    if (dataCreateProduct?.id) {
      const response = await apiAdminAddProductToStore(dataCreateProduct?.id, data)
      console.log(response)
      if (response) {
        toast.success('Add success Product To Store')
        setAddProductToCategory(!addProductToCategory)
      } else {
        toast.error('Can not add Product To Store')
      }
    }
  }
  const dataProductCategory={
    "product_id": [
      dataCreateProduct?.id
    ]
  }
  const handleAddProductToCategory = async (data: any) => {
    const response=await apiAddProductInCategory(activeTab,data)
    console.log(response)
    if (response) {
      toast.success('Add success product in category')
      setAddProductToStore(!addProductToStore)
      setAddProductToCategory(!addProductToCategory)
      setAddImageProduct(!addImageProduct)
    } else {
      toast.error('Can not add  product in category')
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
        <>
          <div className="pt-8">Add Product to Store</div>
          <div className="flex gap-2 justify-between py-4">
            <div className='text-gray-800 font-semibold'>Size</div>
            <div className='text-gray-800 font-semibold'>Quantity</div>
          </div>
          <div className="flex gap-5">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="sizeInput">Input size</label>
              <input
                type="text"
                id="sizeInput"
                value={sizeInput}
                onChange={handleSizeChange}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="quantityInput">Input quantiy</label>
              <input
                type="text"
                id="quantityInput"
                value={quantityInput}
                onChange={handleQuantityChange}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div className="py-5">
            <Button label="Add Product To Store" onClick={() => handleAddProductToStore(quatityAndSize)} />
          </div>
        </>
      }
      {
        addProductToCategory && <>
          <div className="pt-8">Add Product to Category</div>
          <div>
            {
              <div>
                {category?.map((el: any) => (
                  <div
                    onClick={() => { setActiveTab(el.id); }}
                    className={`${activeTab === el.id ? "text-gray-900 bg-sky-500 " : "hover:text-gray-700"
                      } rounded-full px-3 py-1.5 text-sm font-medium cursor-pointer text-gray-900 outline-2  outline-sky-300 transition focus-visible:outline
                                  `}
                    key={el.id}
                  >{el.text}
                  </div>
                ))}
              </div>
            }
          </div>
          <Button label="Add Product To Category" onClick={() => handleAddProductToCategory(dataProductCategory)} />
        </>
      }
    </div>
  )
}

export default Create_Product