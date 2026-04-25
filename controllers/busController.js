const Bus = require("../models/Bus");

// ── Get all buses ───────────────────────────────────────
const getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch buses", error: error.message });
  }
};

// ── Seed buses ──────────────────────────────────────────
const seedBuses = async (req, res) => {
  try {
    await Bus.deleteMany();

    const sampleBuses = [
      {
        name: "VRL Travels",
        busNumber: "VRL101",
        from: "Chennai",
        to: "Bangalore",
        date: "2026-04-25",
        departureTime: "10:00 PM",
        arrivalTime: "5:00 AM",
        duration: "7h",
        price: 799,
        busType: "AC Sleeper",
        rating: 4.5,
        seats: ["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4"]
      },
      {
        name: "SRS Travels",
        busNumber: "SRS102",
        from: "Chennai",
        to: "Hyderabad",
        date: "2026-04-25",
        departureTime: "9:30 PM",
        arrivalTime: "7:00 AM",
        duration: "9h 30m",
        price: 999,
        busType: "AC Seater",
        rating: 4.2,
        seats: ["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4"]
      },
      {
        name: "KPN Travels",
        busNumber: "KPN103",
        from: "Bangalore",
        to: "Chennai",
        date: "2026-04-25",
        departureTime: "11:00 PM",
        arrivalTime: "6:00 AM",
        duration: "7h",
        price: 699,
        busType: "Non-AC Sleeper",
        rating: 4.0,
        seats: ["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4"]
      },
      {
        name: "Orange Travels",
        busNumber: "ORG104",
        from: "Hyderabad",
        to: "Chennai",
        date: "2026-04-25",
        departureTime: "8:00 PM",
        arrivalTime: "6:30 AM",
        duration: "10h 30m",
        price: 1099,
        busType: "AC Sleeper",
        rating: 4.7,
        seats: ["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4"]
      },
      {
        name: "APSRTC",
        busNumber: "APS105",
        from: "Kadapa",
        to: "Chennai",
        date: "2026-04-25",
        departureTime: "7:00 PM",
        arrivalTime: "1:00 AM",
        duration: "6h",
        price: 499,
        busType: "AC Seater",
        rating: 3.9,
        seats: ["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4"]
      },
      {
        name: "TSRTC",
        busNumber: "TS106",
        from: "Nandyal",
        to: "Hyderabad",
        date: "2026-04-25",
        departureTime: "6:30 PM",
        arrivalTime: "3:30 AM",
        duration: "9h",
        price: 599,
        busType: "Non-AC Seater",
        rating: 4.1,
        seats: ["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4"]
      }
    ];

    const created = await Bus.insertMany(sampleBuses);

    res.json({ message: "Buses seeded successfully", count: created.length, buses: created });

  } catch (error) {
    res.status(500).json({ message: "Failed to seed buses", error: error.message });
  }
};

module.exports = { getBuses, seedBuses };