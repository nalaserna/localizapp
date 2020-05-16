import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarEventoPage } from './editar-evento.page';

describe('EditarEventoPage', () => {
  let component: EditarEventoPage;
  let fixture: ComponentFixture<EditarEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
