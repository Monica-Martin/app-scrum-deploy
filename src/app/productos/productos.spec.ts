import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAnimadosComponent } from './productos';

describe('Productos', () => {
  let component: ProdAnimadosComponent;
  let fixture: ComponentFixture<ProdAnimadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdAnimadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdAnimadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
