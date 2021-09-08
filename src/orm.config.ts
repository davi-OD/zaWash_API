/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: '',
    password: '',
    port: 5432,
    host: '',
    database: '',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
};