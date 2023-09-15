import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

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
    // 제품 사진 cloudinary에 업로드 후 URL 획득
    uploadImage(file) //
      .then((url) => {
        addNewProduct(product, url) //
          .then(() => {
            setSuccess("제품이 추가되었습니다.");
            setTimeout(() => {
              setSuccess(null);
            }, 10000);
          });
        // Firebase에 새로운 제품을 추가
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="w-full text-center">
      <h1 className="text-2xl font-bold my-4">새로운 제품 등록</h1>
      {success && <p className="my-2">✅ {success}</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
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
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          onChange={handleChange}
        />
        <input
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
