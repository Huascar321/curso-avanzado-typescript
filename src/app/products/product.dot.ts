import {Product} from "./product.model";

interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

interface UpdateProductDto extends Partial<CreateProductDto> {}

interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

export {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto
};