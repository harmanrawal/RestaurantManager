export interface Table {
  id?: number;
  restaurantId: number;
  capacity: number;
  status: 'FREE' | 'RESERVED';
  createdAt?: string;
}
