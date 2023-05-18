import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormsModule } from './forms/forms.module';
import { ItemsModule } from './items/items.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_forms_clone',
      autoLoadEntities: true,
      synchronize: false,
    }),
    FormsModule,
    ItemsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver :ApolloDriver,
      playground:true,
      autoSchemaFile: true
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
