/* eslint-disable prettier/prettier */
import { Washer } from "src/washer/entities/washer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('expense')
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar', length: 50, nullable: false })
    item: string;
    
    @Column({ type: 'money', nullable: false })
    cost: number;

    @ManyToOne(() => Washer, washer => washer.expense, {onDelete: 'SET NULL'})
    washer: Washer;
}
