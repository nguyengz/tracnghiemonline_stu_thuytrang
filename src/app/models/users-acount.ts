export class UserAcount {
  email: string;
  password: string;
  name: string;
  gender: string;
  address: string;
  phone: string;
  status: boolean;
  roleId: number;

  constructor(data?: any) {
    this.email = data?.email || '';
    this.password = data?.password || '';
    this.name = data?.name || '';
    this.gender = data?.gender || '';
    this.address = data?.address || '';
    this.phone = data?.phone || '';
    this.status = data?.status || false;
    this.roleId = data?.roleId || 2;
  }
}
