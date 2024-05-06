
const moisturePin = AnalogPin.P0;
const pumpPin = DigitalPin.P1;


const dryThreshold = 500; 
const wetThreshold = 800; 


basic.forever(() => {
  
    let moistureLevel = pins.analogReadPin(moisturePin);

    if (moistureLevel < dryThreshold) {
     
        pumpWater();
    } else if (moistureLevel > wetThreshold) {
     
        stopPump();
    }

    
    basic.pause(60000);  minute (adjust as needed)
});


function pumpWater() {
    pins.digitalWritePin(pumpPin, 1); 
    basic.pause(5000); 
    pins.digitalWritePin(pumpPin, 0); 
}


function stopPump() {
    pins.digitalWritePin(pumpPin, 0);
}
