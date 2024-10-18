import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEspeciesComponent } from './ver-especies.component';

describe('VerEspeciesComponent', () => {
  let component: VerEspeciesComponent;
  let fixture: ComponentFixture<VerEspeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerEspeciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
