import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitoListaComponent } from './habito-lista.component';

describe('HabitoListaComponent', () => {
  let component: HabitoListaComponent;
  let fixture: ComponentFixture<HabitoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
