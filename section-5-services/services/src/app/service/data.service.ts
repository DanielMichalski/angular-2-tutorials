import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {

  private data: string[] = [];

  pushData = new EventEmitter<string>();

  constructor(private logService: LogService) {}

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  getData(): string[] {
    return this.data;
  }

  push(value: string) {
    this.pushData.emit(value);
  }

}
