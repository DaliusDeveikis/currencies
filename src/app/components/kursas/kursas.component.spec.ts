import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursasComponent } from './kursas.component';

describe('KursasComponent', () => {
  let component: KursasComponent;
  let fixture: ComponentFixture<KursasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KursasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KursasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
