import { ROLE_PERMISSIONS } from "./rolePermissions";

export default function hasPermission(userRole, permission) {

  const permissions =
    ROLE_PERMISSIONS[userRole] || [];

  return permissions.includes(permission);
}