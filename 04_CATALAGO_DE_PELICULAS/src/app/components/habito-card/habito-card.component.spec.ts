import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitoCardComponent } from './habito-card.component';

describe('HabitoCardComponent', () => {
  let component: HabitoCardComponent;
  let fixture: ComponentFixture<HabitoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
