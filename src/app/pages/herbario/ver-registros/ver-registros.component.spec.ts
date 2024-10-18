import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRegistrosComponent } from './ver-registros.component';

describe('VerRegistrosComponent', () => {
  let component: VerRegistrosComponent;
  let fixture: ComponentFixture<VerRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerRegistrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
