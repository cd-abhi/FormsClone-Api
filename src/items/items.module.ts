import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsEntity } from './entity/items.entity';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsEntity])],
  providers: [ItemsResolver, ItemsService],
})
export class ItemsModule {}
