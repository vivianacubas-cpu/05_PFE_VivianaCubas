export interface Autor {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email: string;
  phone?: string;
  username?: string;
  image?: string;
  company?: { title?: string; department?: string };
}
