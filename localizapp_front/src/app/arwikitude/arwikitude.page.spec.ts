import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArwikitudePage } from './arwikitude.page';

describe('ArwikitudePage', () => {
  let component: ArwikitudePage;
  let fixture: ComponentFixture<ArwikitudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArwikitudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArwikitudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
