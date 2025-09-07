import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscarCardComponent } from './oscar-card.component';

describe('OscarCardComponent', () => {
  let component: OscarCardComponent;
  let fixture: ComponentFixture<OscarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OscarCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OscarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
