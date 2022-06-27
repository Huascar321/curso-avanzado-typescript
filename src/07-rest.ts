import { User, ROLES } from './01-enums';

const currentUser: User = {
  username: 'huascar321',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

console.log(checkAdminRole());

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  } else if (currentUser.role === role2) {
    return true;
  }
  return false;
}

console.log(checkRole(ROLES.ADMIN, ROLES.SELLER));

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

console.log(checkRoleV2([ROLES.ADMIN, ROLES.SELLER]));

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

console.log(checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER));