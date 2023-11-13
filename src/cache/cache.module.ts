import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheModule as CacheModuleRest } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModuleRest.register({
    ttl: 900000000,
  })],
  providers: [CacheService],
  exports: [CacheService]
})
export class CacheModule { }
