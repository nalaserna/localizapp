export const constants = {
    //Endpoints
    poiListEndpoint: '',

    //Configuration
    SERVICE_TIMEOUT: 5,
    SPLASH_ANIMATION_FADE_IN_DELAY: 500,
    SPLASH_ANIMATION_DELAY: 1500,
    SPLASH_ANIMATION_FADE_OUT_DELAY: 2000,
    TOAST_TIMEOUT: 5000,
    FIRST_LOCATION_PERMISSION_REQUEST: 'FIRST_LOCATION_PERMISSION_REQUEST',
        //Camera view settings
    CAMERA_INIT_DELAY: 3000,
    CAMERA_DEFAULT_FOV: 60,
        //Radar radius in meters
    RADAR_POI_RADIUS: 5000,
        //Gps relevation options
    GPS_MIN_DISTANCE_FILTER: 10,
    GPS_MAXIMUM_AGE: 500,   //5000, //DEBUG
    GPS_ENABLE_HIGH_ACCURACY: true,
    GPS_TIMEOUT_ENABLED: true,
    GPS_TIMEOUT: 500,   //5000, //DEBUG
        //Accelerometer relevation options
    ACCELEROMETER_FREQUENCY: 100,    //5000, //DEBUG
        //Gyroscope relevation options
    GYROSCOPE_FREQUENCY: 100,    //5000, //DEBUG
        //Fusion sensors options
    FUSION_SENSOR_INIT_DELAY: 3000,
    FUSION_SENSOR_FREQUENCY: 150   //10000,    //DEBUG     //This value might be higher than accelerometer and gyroscope frequency
}