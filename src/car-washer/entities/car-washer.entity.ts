/* eslint-disable prettier/prettier */
import { Car } from "src/car/entities/car.entity";
import { Washer } from "src/washer/entities/washer.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity('carWasher')
export class CarWasher {
    @ManyToOne(() => Washer, washer => washer.carW)
    washer: Washer;

    @ManyToOne(() => Car, car => car.carW)
    car: Car;
};

