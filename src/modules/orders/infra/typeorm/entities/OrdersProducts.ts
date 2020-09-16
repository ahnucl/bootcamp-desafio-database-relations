import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import Product from '@modules/products/infra/typeorm/entities/Product';

// @Entity('orders_products')
class OrdersProducts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // TODO: Parece que com o segundo argumento do ManyToOne não precisa o JoinColumn, testar

  // @ManyToOne(() => Order, order => order.order_products)
  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_products' })
  order: Order;

  // @ManyToOne(() => Product, product => product.order_products)
  @ManyToOne(() => Product)
  @JoinColumn({ name: 'order_products' })
  product: Product;

  @Column()
  product_id: string;

  @Column()
  order_id: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrdersProducts;
