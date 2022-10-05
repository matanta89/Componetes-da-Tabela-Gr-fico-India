import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GraficoComponent } from './Grafico.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        GraficoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GraficoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'chart'`, () => {
    const fixture = TestBed.createComponent(GraficoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('chart');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GraficoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('chart app is running!');
  });
});
