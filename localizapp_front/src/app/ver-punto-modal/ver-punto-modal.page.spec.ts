import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerPuntoModalPage } from './ver-punto-modal.page';

describe('VerPuntoModalPage', () => {
  let component: VerPuntoModalPage;
  let fixture: ComponentFixture<VerPuntoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPuntoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerPuntoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
