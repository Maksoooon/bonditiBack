import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictionaryModule } from 'src/dictionary/dictionary.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'bonditi',
    entities: ['../**/*.entity.{ts}'],
    synchronize: true,
    autoLoadEntities: true
  }),
  DictionaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
