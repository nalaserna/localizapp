import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeweventmodalPage } from './neweventmodal.page';

describe('NeweventmodalPage', () => {
  let component: NeweventmodalPage;
  let fixture: ComponentFixture<NeweventmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeweventmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeweventmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
