import { TestBed } from '@angular/core/testing';

import { PlantCategoriesService } from './plant-categories.service';

describe('PlantCategoriesService', () => {
  let service: PlantCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
