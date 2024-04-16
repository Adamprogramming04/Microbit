

---

# Automatic Plant Watering System with BBC micro:bit

## Introduction:
This project automates the watering of plants based on soil moisture levels sensed by a BBC micro:bit equipped with a soil moisture sensor. The system ensures that the soil doesn't get overwatered by detecting if it's already moist.

---

## Hardware Setup:
1. **BBC micro:bit**: The microcontroller serves as the brain of the project.
2. **Soil Moisture Sensor**: This sensor measures the moisture content of the soil. Connect the sensor to the micro:bit's analog pin (e.g., pin 0).
3. **Water Pump**: The pump delivers water to the plants. Connect it to the micro:bit via a relay module, which further connects to a digital pin (e.g., pin 1).

### Connection Details:
- **Soil Moisture Sensor to micro:bit**:
  - Connect the VCC pin of the sensor to the 3V pin of the micro:bit.
  - Connect the GND pin of the sensor to the GND pin of the micro:bit.
  - Connect the OUT pin of the sensor to the micro:bit's analog pin (e.g., pin 0).

- **Water Pump to micro:bit via Relay Module**:
  - Connect the VCC pin of the relay module to the 3V pin of the micro:bit.
  - Connect the GND pin of the relay module to the GND pin of the micro:bit.
  - Connect the IN pin of the relay module to a digital pin (e.g., pin 1) of the micro:bit.

---

## Code Explanation:
- The JavaScript code continuously reads the soil moisture level using the moisture sensor.
- If the moisture level falls below a certain threshold (`dryThreshold`), indicating dry soil, the pump is activated to water the plants.
- Additionally, if the moisture level exceeds another threshold (`wetThreshold`), indicating overly moist soil, the pump is stopped to prevent overwatering.

---

## Adjustments:
- Customize the `dryThreshold` and `wetThreshold` values based on your sensor's readings.
- Adjust the watering duration (`pumpWater()` function's `basic.pause()` duration) as needed.

---

## Conclusion:
This project provides an efficient and automated solution for watering plants, ensuring optimal soil moisture levels without the risk of overwatering.
