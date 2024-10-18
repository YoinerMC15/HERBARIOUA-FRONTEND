import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbarioComponent } from './herbario.component';

describe('HerbarioComponent', () => {
  let component: HerbarioComponent;
  let fixture: ComponentFixture<HerbarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerbarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerbarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
