import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundComponentComponent } from './notfound-component.component';

describe('NotfoundComponentComponent', () => {
  let component: NotfoundComponentComponent;
  let fixture: ComponentFixture<NotfoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotfoundComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotfoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
