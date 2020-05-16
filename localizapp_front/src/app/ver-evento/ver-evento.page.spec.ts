import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerEventoPage } from './ver-evento.page';

describe('VerEventoPage', () => {
  let component: VerEventoPage;
  let fixture: ComponentFixture<VerEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
