import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarRegistrosComponent } from './gestionar-registros.component';

describe('GestionarRegistrosComponent', () => {
  let component: GestionarRegistrosComponent;
  let fixture: ComponentFixture<GestionarRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarRegistrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
