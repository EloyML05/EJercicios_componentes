/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormaterService } from './Formater.service';

describe('Service: Formater', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormaterService]
    });
  });

  it('should ...', inject([FormaterService], (service: FormaterService) => {
    expect(service).toBeTruthy();
  }));
});
