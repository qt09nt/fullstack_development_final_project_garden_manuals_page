import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifcPlantsInCategoryComponent } from './specifc-plants-in-category.component';

describe('SpecifcPlantsInCategoryComponent', () => {
  let component: SpecifcPlantsInCategoryComponent;
  let fixture: ComponentFixture<SpecifcPlantsInCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecifcPlantsInCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecifcPlantsInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
