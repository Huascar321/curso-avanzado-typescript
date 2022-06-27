import { BaseModel } from "../base.models";
import { Product } from "../products/product.model";
import { User } from "../users/user.model";

interface Order extends BaseModel {
  products: Product[];
  user: User;
}

export { Order };