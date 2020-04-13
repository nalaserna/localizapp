import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VereventoComponent } from './verevento.component';

describe('VereventoComponent', () => {
  let component: VereventoComponent;
  let fixture: ComponentFixture<VereventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VereventoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VereventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
