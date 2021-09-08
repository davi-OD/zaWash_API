/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'tqhyfkjkoaagqc',
    password: 'f84d72e69be05c4c11432dd8ee410ae3f4a9bf6f05df37d27e55408c82143769',
    port: 5432,
    host: 'ec2-52-0-93-3.compute-1.amazonaws.com',
    database: 'dd45urulqhv2tc',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    ssl:{rejectUnauthorized:false},
};