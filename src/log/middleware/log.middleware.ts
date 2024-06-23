import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LogService } from '../log.service';
import { CreateLogDto } from '../dto/create-log.dto';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  constructor(private readonly logService: LogService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    res.on('finish', async () => {
      const duration = Date.now() - start;
      const log: CreateLogDto = {
        route: req.url,
        method: req.method,
        responseTime: duration,
      };
      await this.logService.create(log);
    });
    next();
  }
}
