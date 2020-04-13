import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventopuntosComponent } from './eventopuntos.component';

describe('EventopuntosComponent', () => {
  let component: EventopuntosComponent;
  let fixture: ComponentFixture<EventopuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventopuntosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventopuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
