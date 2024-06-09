import { TestBed } from '@angular/core/testing';

import { GetPlantCategoriesService } from './get-plant-categories.service';

describe('GetPlantCategoriesService', () => {
  let service: GetPlantCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPlantCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
