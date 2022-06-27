import { BaseModel } from "../base.models";

enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

interface User extends BaseModel {
  username: string;
  role: ROLES;
}

export { ROLES, User };