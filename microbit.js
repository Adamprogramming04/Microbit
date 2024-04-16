
const moisturePin = AnalogPin.P0;
const pumpPin = DigitalPin.P1;


const dryThreshold = 500; 
const wetThreshold = 800; 


basic.forever(() => {
    // Read moisture level
    let moistureLevel = pins.analogReadPin(moisturePin);

    // Check moisture level
    if (moistureLevel < dryThreshold) {
        // Soil is dry, activate pump
        pumpWater();
    } else if (moistureLevel > wetThreshold) {
        // Soil is too wet, stop pump
        stopPump();
    }

    
    basic.pause(60000);  minute (adjust as needed)
});


function pumpWater() {
    pins.digitalWritePin(pumpPin, 1); 
    basic.pause(5000); // Water for 5 seconds (adjust as needed)
    pins.digitalWritePin(pumpPin, 0); 
}


function stopPump() {
    pins.digitalWritePin(pumpPin, 0);
}
