import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePlantComponent } from './one-plant.component';

describe('OnePlantComponent', () => {
  let component: OnePlantComponent;
  let fixture: ComponentFixture<OnePlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnePlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
