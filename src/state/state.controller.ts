import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { ReturnStateDto } from './dtos/returnState.dto';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) { }

  @Get()
  async getAllState(): Promise<ReturnStateDto[]> {
    return (await (this.stateService.getAllState())).map((stateEntity) => new ReturnStateDto(stateEntity));
  }
}
