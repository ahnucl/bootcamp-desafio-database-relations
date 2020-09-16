import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AlterOrdersForeignKey1600216668800
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('orders', 'OrderCustomer');

    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'Orders_Customers',
        referencedTableName: 'customers',
        referencedColumnNames: ['id'],
        columnNames: ['customer_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'OrderCustomer',
        referencedTableName: 'customers',
        referencedColumnNames: ['id'],
        columnNames: ['customer_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.dropForeignKey('orders', 'Orders_Customers');
  }
}
