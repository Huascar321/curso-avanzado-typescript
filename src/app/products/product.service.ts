import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dot";
import { faker } from "@faker-js/faker";

const products: Product[] = [];

const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.productName(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  //delete newProduct['categoryId'];
  // @ts-ignore
  products.push(newProduct);
  // @ts-ignore
  return newProduct;
}

const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

const findProducts = (dto: FindProductDto): Product[] => {
  // code
  // dto.color = 'blue';
  // dto.tags = [];
  // dto.tags?.pop();
  // dto.tags?.push();
  return products;
}

export {
  products,
  addProduct,
  updateProduct,
  findProducts
};