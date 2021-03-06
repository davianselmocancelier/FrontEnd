import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CidadesCadastroComponent } from './cidade-cadastro.component';



describe('CidadeCadastroComponent', () => {
  let component: CidadesCadastroComponent;
  let fixture: ComponentFixture<CidadesCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadesCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
