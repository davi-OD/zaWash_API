/* eslint-disable prettier/prettier */
import { CarWasher } from "src/car-washer/entities/car-washer.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, } from "typeorm";

@Entity('car')
export class Car {
    @PrimaryColumn({ type: 'varchar', length: 7, nullable: false })
    numberPlate: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    model: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    make: string;
    
    @Column({ type: 'varchar', length: 50, nullable: false })
    color: string;
    
    @Column({ type: 'varchar', length: 50, nullable: false })
    package: string;
    
    @CreateDateColumn({ nullable: false })
    arrived: Date;
    
    @CreateDateColumn({ nullable: true })
    finished: Date; 

    @OneToMany(() => CarWasher, carW => carW.car)
    carW: CarWasher[]
};

