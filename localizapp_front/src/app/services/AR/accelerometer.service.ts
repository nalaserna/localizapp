import { Injectable } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccelerometerService {

  constructor(private deviceMotion: DeviceMotion) {

    // Watch device acceleration
    var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log(acceleration);
    });
    
    // Stop watch
    subscription.unsubscribe();
   }

   public getAcceleration():Observable<DeviceMotionAccelerationData>{
    var acceleration = this.deviceMotion.watchAcceleration();
      return acceleration;
   }

  
}
