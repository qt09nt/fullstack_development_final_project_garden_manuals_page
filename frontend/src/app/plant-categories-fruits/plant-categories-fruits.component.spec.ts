import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCategoriesFruitsComponent } from './plant-categories-fruits.component';

describe('PlantCategoriesFruitsComponent', () => {
  let component: PlantCategoriesFruitsComponent;
  let fixture: ComponentFixture<PlantCategoriesFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantCategoriesFruitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantCategoriesFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
