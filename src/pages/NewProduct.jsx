import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("제품이 추가되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 8000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="w-full text-center p-5">
      <h1 className="text-2xl font-bold my-4">새로운 제품 등록</h1>
      {success && <p className="my-2">✅ {success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12 h-screen" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <select
          className=" p-4 outline-none border border-gray-300 my-1 text-gray-400"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          required
          onChange={handleChange}
        >
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="신발">신발</option>
        </select>
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          onChange={handleChange}
        />
        <input
          className="mb-10"
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="옵션 ( 콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? "업로드 중 . . ." : "제품 등록하기"}
          disable={isUploading}
        />
      </form>
    </section>
  );
}
