export class UserByClass {
  id: string;
  email: string;
  name: string;
  gender: string;
  address: string;
  phone: string;
  status: boolean;
  roleName: string;
  roleId: number;
  classId: number | null;

  constructor(data?: any) {
    this.id = data?.id || '';
    this.email = data?.email || '';
    this.name = data?.name || '';
    this.gender = data?.gender || '';
    this.address = data?.address || '';
    this.phone = data?.phone || '';
    this.status = data?.status || false;
    this.roleName = data?.roleName || 0;
    this.roleId = data?.roleId || 0;
    this.classId = data?.classId || null;
  }
}
