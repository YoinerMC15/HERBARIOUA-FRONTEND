import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEspeciesComponent } from './gestionar-especies.component';

describe('GestionarEspeciesComponent', () => {
  let component: GestionarEspeciesComponent;
  let fixture: ComponentFixture<GestionarEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarEspeciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
