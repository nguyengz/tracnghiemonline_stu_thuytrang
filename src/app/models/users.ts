export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  gender: string;
  address: string;
  phone: string;
  status: string;
  role: {
    id: number;
    name: string;
    status: string;
  };

  constructor(data?: any) {
    this.id = data?.id || 0;
    this.email = data?.email || '';
    this.password = data?.password || '';
    this.name = data?.name || '';
    this.gender = data?.gender || '';
    this.address = data?.address || '';
    this.phone = data?.phone || '';
    this.status = data?.status || '';
    this.role = data?.role || { id: 0, name: '', status: '' };
  }
}
