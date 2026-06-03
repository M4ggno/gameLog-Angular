import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoLista } from './jogo-lista';

describe('JogoLista', () => {
  let component: JogoLista;
  let fixture: ComponentFixture<JogoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoLista],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
