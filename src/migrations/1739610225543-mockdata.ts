import { MigrationInterface, QueryRunner } from "typeorm";

export class Mockdata1739610225543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO categories (categoryName, description, isActive) VALUES
            ('Electronics', 'Devices and gadgets', true),
            ('Books', 'Various genres of books', true),
            ('Clothing', 'Apparel and accessories', true);
        `);

        await queryRunner.query(`
            INSERT INTO products (productName, description, price, stockQuantity, categoryId) VALUES
            ('Smartphone', 'Latest model smartphone', 699.99, 50, 1),
            ('Laptop', 'Powerful laptop for work and gaming', 1299.99, 30, 1),
            ('Fiction Book', 'Bestselling fiction novel', 19.99, 100, 2),
            ('T-shirt', 'Comfortable cotton t-shirt', 9.99, 200, 3);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM products WHERE productName IN ('Smartphone', 'Laptop', 'Fiction Book', 'T-shirt');`);
        await queryRunner.query(`DELETE FROM categories WHERE categoryName IN ('Electronics', 'Books', 'Clothing');`);
    }

}
