import { Controller, Get } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';

@Controller()
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}
  @Get('dictionary')
  async getHello() {
    return await this.dictionaryService.getDictionary();
  }
}
