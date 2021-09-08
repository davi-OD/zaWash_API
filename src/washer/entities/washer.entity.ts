/* eslint-disable prettier/prettier */
import { CarWasher } from "src/car-washer/entities/car-washer.entity";
import { Expense } from "src/expense/entities/expense.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('washer')
export class Washer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    first_name: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    last_name: string;
    
    @Column({ type: 'varchar', length: 14, nullable: false })
    nin: string;
    
    @Column({ type: 'date', nullable: false })
    date_of_birth: Date;
    
    @OneToMany(() => Expense, expense => expense.washer)
    expense: Expense[];

    @OneToMany(() => CarWasher, carW => carW.washer)
    carW: CarWasher[]
};
