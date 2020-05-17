import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewFuncionmodalPage } from './new-funcionmodal.page';

describe('NewFuncionmodalPage', () => {
  let component: NewFuncionmodalPage;
  let fixture: ComponentFixture<NewFuncionmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFuncionmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewFuncionmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
