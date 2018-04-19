import { TestBed, async } from '@angular/core/testing';
import { DataGathererComponent } from './data-gatherer.component';
describe('DataGathererComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataGathererComponent
      ],
    }).compileComponents();
  }));
  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(DataGathererComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(DataGathererComponent);
    const component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.title);
  }));
});
