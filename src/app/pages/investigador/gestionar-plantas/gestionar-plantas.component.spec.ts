import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPlantasComponent } from './gestionar-plantas.component';

describe('GestionarPlantasComponent', () => {
  let component: GestionarPlantasComponent;
  let fixture: ComponentFixture<GestionarPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarPlantasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
