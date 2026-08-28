import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitoFormularioComponent } from './habito-formulario.component';

describe('HabitoFormularioComponent', () => {
  let component: HabitoFormularioComponent;
  let fixture: ComponentFixture<HabitoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitoFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
