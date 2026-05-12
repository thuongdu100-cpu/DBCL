import { ROLES } from "../../../auth/roles";

export const ROLE_LABELS = {
  [ROLES.ADMIN]: "Quản trị viên",
  [ROLES.QA]: "Phòng ĐBCL",
  [ROLES.MANAGER]: "Trưởng phòng",
  [ROLES.FACULTY]: "Giảng viên",
  [ROLES.LEADER]: "Trưởng khoa",
};

// RAW → UI
export function toUserView(user) {
  return {
    ...user,
    roleLabel: user.role, // giữ đơn giản
    isActive: user.status === "ACTIVE",
  };
}

// FORM → DATA
export function toUserPayload(form) {
  return {
    username: form.username,
    fullName: form.fullName,
    email: form.email,
    department: form.department,
    role: form.role,
    status: "ACTIVE",
  };
}