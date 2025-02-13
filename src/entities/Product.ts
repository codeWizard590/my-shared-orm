import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity({ name: 'products' }) // Table name in MySQL
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  productName: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  stockQuantity: number;

  @ManyToOne(() => Category, (category) => category.products, { onDelete: 'CASCADE' })
  category: Category;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
