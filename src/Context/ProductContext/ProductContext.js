import React, {useState, createContext} from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([
        {
            name: 'Arduino UNO',
            type: 'Developement',
            description: 'Arduino Uno is a microcontroller board based on the ATmega328P (datasheet). It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator (CSTCE16M0V53-R0), a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started.. You can tinker with your Uno without worrying too much about doing something wrong, worst case scenario you can replace the chip for a few dollars and start over again.',
            price: 20,
            images: [
                '/assets/images/arduino_uno/arduino_uno_1.jpg',
                '/assets/images/arduino_uno/arduino_uno_2.jpg',
                '/assets/images/arduino_uno/arduino_uno_3.jpg',
                '/assets/images/arduino_uno/arduino_uno_4.jpg',
            ],
            rating: 3,
            id: 0,
            table: [
                {
                    name: "Microcontroller",
                    description: "ATmega328P",
                },
                {
                    name: "Operating Voltage",
                    description: "5V",
                },
                {
                    name: "Input Voltage (recommended)",
                    description: "7-12V",
                },
                {
                    name: "Digital I/O Pins",
                    description: "14 (of which 6 provide PWM output)",
                },
                {
                    name: "PWM Digital I/O Pins",
                    description: "6",
                },
                {
                    name: "Analog Input Pins",
                    description: "6",
                },
                {
                    name: "DC Current per I/O Pin",
                    description: "20 mA",
                },
            ],
        },
        {
            name: 'Arduino Nano',
            type: 'Developement',
            description: 'The Arduino Nano is a small, complete, and breadboard-friendly board based on the ATmega328 (Arduino Nano 3.x). It has more or less the same functionality of the Arduino Duemilanove, but in a different package. It lacks only a DC power jack, and works with a Mini-B USB cable instead of a standard one.',
            price: 20,
            images: [
                '/assets/images/arduino_nano/arduino_nano_1.jpg',
                '/assets/images/arduino_nano/arduino_nano_2.jpg',
                '/assets/images/arduino_nano/arduino_nano_3.jpg',
            ],
            rating: 3,
            id: 1,
            table: [
                {
                    name: "Microcontroller",
                    description: "ATmega328",
                },
                {
                    name: "Operating Voltage",
                    description: "5V",
                },
                {
                    name: "Input Voltage (recommended)",
                    description: "7-12V",
                },
                {
                    name: "Digital I/O Pins",
                    description: "22 (6 of which are PWM)",
                },
                {
                    name: "PWM Digital I/O Pins",
                    description: "6",
                },
                {
                    name: "Analog Input Pins",
                    description: "8",
                },
                {
                    name: "DC Current per I/O Pin",
                    description: "19 mA",
                },
            ],
        },
        {
            name: 'Arduino Mega 2560',
            type: 'Developement',
            description: 'The Arduino Mega 2560 is a microcontroller board based on the ATmega2560. It has 54 digital input/output pins (of which 15 can be used as PWM outputs), 16 analog inputs, 4 UARTs (hardware serial ports), a 16 MHz crystal oscillator, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. The Mega 2560 board is compatible with most shields designed for the Uno and the former boards Duemilanove or Diecimila.',
            price: 35,
            images: [
                '/assets/images/arduino_mega/arduino_mega_1.jpg',
                '/assets/images/arduino_mega/arduino_mega_2.jpg',
                '/assets/images/arduino_mega/arduino_mega_3.jpg',
                '/assets/images/arduino_mega/arduino_mega_4.jpg',
            ],
            rating: 3,
            id: 2,
            table: [
                {
                    name: "Microcontroller",
                    description: "ATmega2560",
                },
                {
                    name: "Operating Voltage",
                    description: "5V",
                },
                {
                    name: "Input Voltage (recommended)",
                    description: "7-12V",
                },
                {
                    name: "Digital I/O Pins",
                    description: "54 (of which 15 provide PWM output)",
                },
                {
                    name: "PWM Digital I/O Pins",
                    description: "15",
                },
                {
                    name: "Analog Input Pins",
                    description: "16",
                },
                {
                    name: "DC Current per I/O Pin",
                    description: "20 mA",
                },
            ],
        },
        {
            name: 'Raspbery Pi 3 B+',
            type: 'Developement',
            description: 'Create a media center or budget desktop with this Raspberry Pi 3 Model Plus motherboard. The dual-band wireless networking supports long-range connectivity. Bluetooth technology supports cord-free devices, while the 64-bit quad-core processor runs multiple processes quickly. This Raspberry Pi 3 Model Plus motherboard has a USB card reader for external media, and the two aluminum heat sinks offer thermal management.',
            price: 35,
            images: [
                '/assets/images/raspberry_pi_3/raspberry_pi_3_1.jpg',
                '/assets/images/raspberry_pi_3/raspberry_pi_3_2.jpg',
            ],
            rating: 4.5,
            id: 3,
            table: [
                {
                    name: "CPU",
                    description: "1.4GHz 64-bit quad-core ARMv8",
                },
                {
                    name: "Wireless connectivity",
                    description: "Features 2.4GHz, 5GHz IEEE 802.11.b/g/n/ac wireless LAN, Bluetooth 4.2, BLE",
                },
                {
                    name: "Ports",
                    description: "40-pin GPIO header, HDMI, four USB 2.0 ports, CSI camera port, DSI display port, four-pole stereo output, and composite video port",
                },
            ],
        },
        {
            name: 'Node MCU',
            type: 'Developement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            price: 4.90,
            images: [
                '/assets/images/node_mcu/node_mcu_1.jpg',
                '/assets/images/node_mcu/node_mcu_2.jpg',
                '/assets/images/node_mcu/node_mcu_3.jpg',
            ],
            rating: 4,
            id: 4,
            table: [
                {
                    name: "Microcontroller",
                    description: "ESP8266",
                },
                {
                    name: "Wireless connectivity",
                    description: "WIFI - ESP-12E",
                },
                {
                    name: "Power supply",
                    description: "5V micro USB",
                },
            ],
        },
        {
            name: 'Latte Panda',
            type: 'Developement',
            description:    `
            Latte is a complete a panda mini computer integrated with Arduino running full verions win 10.
            It includes everything a regular PC has and can do anything that a regular PC that does not. It is compatible with almost every gadget you know: Printers, joysticks, cameras and more. Any peripherals that work on your PC will work on Latte Panda.
            Latte Panda comes pre installed with a pre/Full Edition Of Windows 10, including powerful tools such as visual Studio, Nodejs, Java, processing, and more. Using existing Apis, you can develop your own software and hardware projects on Latte Panda as you would on a normal PC, C #, javascript Ruby and so on. Say goodbye to your bulky laptop.
            Latte Panda is also designed with an Arduino compatible Co Processor, which means it can be used to control and sense the physical world, just like an Arduino board. Whether you are a Windows developer, IOT developer, a hardware robotics whizz, or a DIY fanatic, interactive designer maker, Panda can aid your creative process with physical computing projects.
            Latte Panda can run full version of Windows 8/10 and Ubuntu.`,
            price: 120,
            images: [
                '/assets/images/panda/panda.jpg',
            ],
            rating: 4.5,
            id: 5,
            table: [
                {
                    name: "CPU",
                    description: " Intel Cherry Trail Z8300 Quad Core 1.8GHz, ATmega32U4",
                },
                {
                    name: "Wireless",
                    description: "WiFi and Bluetooth 4.0",
                },
                {
                    name: "RAM",
                    description: "2GB DDR3L",
                },
                {
                    name: "Ports",
                    description: "2 GPIOs For Intel chip – 20 GPIOs For Arduino",
                },
            ],
        },
    ]);
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider> 
    );
}