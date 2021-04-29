import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAddressComponent } from './dialog-delete-address.component';

describe('DialogDeleteAddressComponent', () => {
  let component: DialogDeleteAddressComponent;
  let fixture: ComponentFixture<DialogDeleteAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
