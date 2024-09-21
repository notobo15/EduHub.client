interface Response<T> {
  message: string;
  succeeded: boolean;
  data: T;
}
interface IPost {
  description: string;
  content: string;
  slug: string;
  thumbnail: string;
}

interface IUser {
  id: string;
  phoneNumber: string;
  email: string;
  userName: string;
  accessFailedCount: number;
  emailConfirmed: boolean;
  phoneNumberConfirmed: boolean;
  fullName: string;
  createdAt: string;
  logo: string;
}
