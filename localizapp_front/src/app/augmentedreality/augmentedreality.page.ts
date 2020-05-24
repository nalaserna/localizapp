import { Component, OnInit } from '@angular/core';
import { AccelerometerService } from '../services/AR/accelerometer.service';

@Component({
  selector: 'app-augmentedreality',
  templateUrl: './augmentedreality.page.html',
  styleUrls: ['./augmentedreality.page.scss'],
})
export class AugmentedrealityPage implements OnInit {
  public acc;

  constructor(private accelerometerService: AccelerometerService) { }

  ngOnInit() {

    this.acc = this.accelerometerService.getAcceleration();
    console.log(this.acc);

  }

}
