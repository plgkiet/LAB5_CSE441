export interface Service {
  _id: string;
  name: string;
  price: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Detail {
  _id: string;
  name: string;
  price: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    name: string;
  };
}
