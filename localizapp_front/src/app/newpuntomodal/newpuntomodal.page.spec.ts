import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewpuntomodalPage } from './newpuntomodal.page';

describe('NewpuntomodalPage', () => {
  let component: NewpuntomodalPage;
  let fixture: ComponentFixture<NewpuntomodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpuntomodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewpuntomodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
