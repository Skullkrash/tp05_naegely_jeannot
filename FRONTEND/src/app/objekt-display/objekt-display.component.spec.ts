import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektDisplayComponent } from './objekt-display.component';

describe('ObjektDisplayComponent', () => {
  let component: ObjektDisplayComponent;
  let fixture: ComponentFixture<ObjektDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjektDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjektDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
