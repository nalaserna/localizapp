import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpuntomodalPage } from './editpuntomodal.page';

describe('EditpuntomodalPage', () => {
  let component: EditpuntomodalPage;
  let fixture: ComponentFixture<EditpuntomodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpuntomodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpuntomodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
