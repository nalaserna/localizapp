import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusquedamodalPage } from './busquedamodal.page';

describe('BusquedamodalPage', () => {
  let component: BusquedamodalPage;
  let fixture: ComponentFixture<BusquedamodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedamodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusquedamodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
