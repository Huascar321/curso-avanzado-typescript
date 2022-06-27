import { BaseModel } from "../base.models";

interface Category extends BaseModel {
  category: {
    name: string;
  }
}

export { Category };