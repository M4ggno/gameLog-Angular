import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoForm } from './jogo-form';

describe('JogoForm', () => {
  let component: JogoForm;
  let fixture: ComponentFixture<JogoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
