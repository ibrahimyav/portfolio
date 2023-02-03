const postalCodes = ["K1K0A3", "K1K0A4", "K1K0A5", "K1K0A6", "K1K0A7", "K1K0A8", "K1K0A9", "K1K0B1", "K1K0B2", "K1K0B3", "K1K0B4", "K1K0B5", "K1K0B6", "K1K0B7", "K1K0B8", "K1K0B9", "K1K0C1", "K1K0C2", "K1K0C3", "K1K0C4", "K1K0C5", "K1K0C6", "K1K0C7", "K1K0C8", "K1K0C9", "K1K0E1", "K1K0E2", "K1K0E3", "K1K0E4", "K1K0E5", "K1K0E6", "K1K0E7", "K1K0E8", "K1K0E9", "K1K0G1", "K1K0G2", "K1K0G3", "K1K0G4", "K1K0G5", "K1K0G6", "K1K0G7", "K1K0G8", "K1K0G9", "K1K0H1", "K1K0H2", "K1K0H3", "K1K0H4", "K1K0H5", "K1K0H6", "K1K0H7", "K1K0H8", "K1K0H9", "K1K0J3", "K1K0J4", "K1K0J5", "K1K0J6", "K1K0J7", "K1K0J8", "K1K0J9", "K1K0K1", "K1K0K2", "K1K0K3", "K1K0K4", "K1K0K5", "K1K0K6", "K1K0K7", "K1K0M3", "K1K0M4", "K1K0M5", "K1K0M6", "K1K0M7", "K1K0M8", "K1K0M9", "K1K0N6", "K1K0N7", "K1K0N8", "K1K0N9", "K1K0R1", "K1K0R2", "K1K0R3", "K1K0R4", "K1K0R5", "K1K0R6", "K1K0R7", "K1K0R8", "K1K0R9", "K1K0S1", "K1K0S2", "K1K0S3", "K1K0S4", "K1K0S5", "K1K0S6", "K1K0S7", "K1K0S8", "K1K0S9", "K1K0T1", "K1K0T2", "K1K0T3", "K1K0T4", "K1K0T5", "K1K0T6", "K1K0T7", "K1K0T8", "K1K0T9", "K1K0V1", "K1K0V2", "K1K0V3", "K1K0V4", "K1K0V5", "K1K0V6", "K1K0V7", "K1K0V8", "K1K0V9", "K1K0W1", "K1K0W2", "K1K0W3", "K1K0W4", "K1K0W5", "K1K0W6", "K1K0W7", "K1K0W8", "K1K0W9", "K1K0X1", "K1K0X2", "K1K0X3", "K1K0X4", "K1K0X6", "K1K0X7", "K1K0X8", "K1K0X9", "K1K0Y1", "K1K0Y2", "K1K0Y3", "K1K0Y4", "K1K0Y5", "K1K0Y6", "K1K0Y7", "K1K0Y8", "K1K0Y9", "K1K0Z1", "K1K0Z2", "K1K0Z3", "K1K0Z4", "K1K0Z5", "K1K0Z6", "K1K0Z7", "K1K0Z8", "K1K0Z9", "K1K1A1", "K1K1A2", "K1K1A3", "K1K1A4", "K1K1A5", "K1K1A6", "K1K1A7", "K1K1A8", "K1K1A9", "K1K1B1", "K1K1B2", "K1K1B3", "K1K1B4", "K1K1B5", "K1K1B6", "K1K1B7", "K1K1B8", "K1K1B9", "K1K1C1", "K1K1C2", "K1K1C3", "K1K1C4", "K1K1C5", "K1K1C6", "K1K1C7", "K1K1C8", "K1K1C9", "K1K1E1", "K1K1E2", "K1K1E3", "K1K1E4", "K1K1E5", "K1K1E6", "K1K1E7", "K1K1E8", "K1K1E9", "K1K1G1", "K1K1G2", "K1K1G3", "K1K1G4", "K1K1G5", "K1K1G6", "K1K1G7", "K1K1G8", "K1K1G9", "K1K1H1", "K1K1H2", "K1K1H3", "K1K1H4", "K1K1H5", "K1K1H6", "K1K1H7", "K1K1H8", "K1K1H9", "K1K1J1", "K1K1J2", "K1K1J3", "K1K1J4", "K1K1J5", "K1K1J6", "K1K1J7", "K1K1J8", "K1K1J9", "K1K1K1", "K1K1K2", "K1K1K3", "K1K1K4", "K1K1K5", "K1K1K6", "K1K1K7", "K1K1K8", "K1K1K9", "K1K1L1", "K1K1L2", "K1K1L3", "K1K1L4", "K1K1L5", "K1K1L6", "K1K1L7", "K1K1L8", "K1K1L9", "K1K1M1", "K1K1M2", "K1K1M3", "K1K1M4", "K1K1M5", "K1K1M6", "K1K1M7", "K1K1M8", "K1K1M9", "K1K1N1", "K1K1N2", "K1K1N3", "K1K1N4", "K1K1N5", "K1K1N6", "K1K1N7", "K1K1N8", "K1K1N9", "K1K1P1", "K1K1P2", "K1K1P3", "K1K1P4", "K1K1P5", "K1K1P6", "K1K1P7", "K1K1P8", "K1K1P9", "K1K1R1", "K1K1R2", "K1K1R3", "K1K1R4", "K1K1R5", "K1K1R6", "K1K1R7", "K1K1R8", "K1K1R9", "K1K1S1", "K1K1S2", "K1K1S3", "K1K1S4", "K1K1S5", "K1K1S6", "K1K1S7", "K1K1S8", "K1K1S9", "K1K1T1", "K1K1T2", "K1K1T3", "K1K1T4", "K1K1T5", "K1K1T6", "K1K1T7", "K1K1T8", "K1K1T9", "K1K1V1", "K1K1V2", "K1K1V3", "K1K1V4", "K1K1V5", "K1K1V6", "K1K1V7", "K1K1V8", "K1K1V9", "K1K1W1", "K1K1W2", "K1K1W3", "K1K1W4", "K1K1W5", "K1K1W6", "K1K1W7", "K1K1W8", "K1K1W9", "K1K1X1", "K1K1X2", "K1K1X3", "K1K1X4", "K1K1X5", "K1K1X6", "K1K1X7", "K1K1X8", "K1K1X9", "K1K1Y1", "K1K1Y2", "K1K1Y3", "K1K1Y4", "K1K1Y5", "K1K1Y6", "K1K1Y7", "K1K1Y8", "K1K1Y9", "K1K1Z1", "K1K1Z2", "K1K1Z3", "K1K1Z4", "K1K1Z5", "K1K1Z6", "K1K1Z7", "K1K1Z8", "K1K1Z9", "K1K2A1", "K1K2A2", "K1K2A3", "K1K2A4", "K1K2A5", "K1K2A6", "K1K2A7", "K1K2A8", "K1K2A9", "K1K2B1", "K1K2B2", "K1K2B3", "K1K2B4", "K1K2B5", "K1K2B6", "K1K2B7", "K1K2B8", "K1K2B9", "K1K2C1", "K1K2C2", "K1K2C3", "K1K2C4", "K1K2C5", "K1K2C6", "K1K2C7", "K1K2C8", "K1K2E1", "K1K2E6", "K1K2E7", "K1K2E8", "K1K2E9", "K1K2G1", "K1K2G2", "K1K2G3", "K1K2G4", "K1K2G5", "K1K2G6", "K1K2G7", "K1K2G8", "K1K2G9", "K1K2H1", "K1K2H2", "K1K2H3", "K1K2J3", "K1K2J4", "K1K2J8", "K1K2J9", "K1K2K1", "K1K2K2", "K1K2K3", "K1K2K4", "K1K2K5", "K1K2K6", "K1K2K7", "K1K2K8", "K1K2K9", "K1K2L1", "K1K2L2", "K1K2L3", "K1K2L4", "K1K2L5", "K1K2L6", "K1K2L7", "K1K2L8", "K1K2L9", "K1K2M1", "K1K2M2", "K1K2M3", "K1K2M4", "K1K2M5", "K1K2M6", "K1K2M7", "K1K2M8", "K1K2M9", "K1K2N1", "K1K2N2", "K1K2N3", "K1K2N4", "K1K2N5", "K1K2N6", "K1K2N7", "K1K2N8", "K1K2N9", "K1K2P1", "K1K2P2", "K1K2P3", "K1K2P4", "K1K2P5", "K1K2P6", "K1K2P7", "K1K2P8", "K1K2P9", "K1K2R1", "K1K2R2", "K1K2R3", "K1K2R4", "K1K2R5", "K1K2R6", "K1K2R7", "K1K2R8", "K1K2R9", "K1K2S1", "K1K2S2", "K1K2S3", "K1K2S4", "K1K2S5", "K1K2S6", "K1K2S7", "K1K2S8", "K1K2S9", "K1K2T1", "K1K2T2", "K1K2T3", "K1K2T4", "K1K2T5", "K1K2T6", "K1K2T7", "K1K2T8", "K1K2T9", "K1K2V1", "K1K2V2", "K1K2V3", "K1K2V4", "K1K2V5", "K1K2V6", "K1K2V8", "K1K2W2", "K1K2W3", "K1K2W6", "K1K2W7", "K1K2W9", "K1K2X2", "K1K2X3", "K1K2X4", "K1K2X5", "K1K2X6", "K1K2X7", "K1K2X8", "K1K2X9", "K1K2Y1", "K1K2Y2", "K1K2Y3", "K1K2Y4", "K1K2Y6", "K1K2Y7", "K1K2Y8", "K1K2Y9", "K1K2Z1", "K1K2Z2", "K1K2Z3", "K1K2Z4", "K1K2Z5", "K1K2Z6", "K1K2Z7", "K1K2Z8", "K1K2Z9", "K1K3A1", "K1K3A3", "K1K3A4", "K1K3A5", "K1K3A6", "K1K3A7", "K1K3A8", "K1K3A9", "K1K3B1", "K1K3B2", "K1K3B3", "K1K3B4", "K1K3B5", "K1K3B6", "K1K3B7", "K1K3B8", "K1K3B9", "K1K3C1", "K1K3C2", "K1K3C3", "K1K3C4", "K1K3C5", "K1K3C6", "K1K3C7", "K1K3C8", "K1K3C9", "K1K3E1", "K1K3E2", "K1K3E3", "K1K3E4", "K1K3E5", "K1K3E6", "K1K3E7", "K1K3E8", "K1K3E9", "K1K3G1", "K1K3G2", "K1K3G3", "K1K3G4", "K1K3G5", "K1K3G6", "K1K3G7", "K1K3G8", "K1K3G9", "K1K3H1", "K1K3H2", "K1K3H3", "K1K3H4", "K1K3H5", "K1K3H7", "K1K3H8", "K1K3H9", "K1K3J1", "K1K3J2", "K1K3J3", "K1K3J4", "K1K3J5", "K1K3J6", "K1K3J7", "K1K3J8", "K1K3J9", "K1K3K1", "K1K3K2", "K1K3K3", "K1K3K4", "K1K3K5", "K1K3K6", "K1K3K7", "K1K3K8", "K1K3K9", "K1K3L1", "K1K3L2", "K1K3L3", "K1K3L4", "K1K3L5", "K1K3L6", "K1K3L7", "K1K3L8", "K1K3L9", "K1K3M1", "K1K3M2", "K1K3M3", "K1K3M4", "K1K3M5", "K1K3M6", "K1K3M7", "K1K3M8", "K1K3M9", "K1K3N1", "K1K3N2", "K1K3N3", "K1K3N4", "K1K3N5", "K1K3N6", "K1K3N7", "K1K3N8", "K1K3N9", "K1K3P1", "K1K3P2", "K1K3P3", "K1K3P4", "K1K3P5", "K1K3P6", "K1K3P7", "K1K3P8", "K1K3P9", "K1K3R1", "K1K3R2", "K1K3R3", "K1K3R4", "K1K3R5", "K1K3R6", "K1K3R7", "K1K3R8", "K1K3R9", "K1K3S1", "K1K3S2", "K1K3S3", "K1K3S4", "K1K3S5", "K1K3S6", "K1K3S7", "K1K3S8", "K1K3S9", "K1K3T1", "K1K3T2", "K1K3T3", "K1K3T4", "K1K3T5", "K1K3T6", "K1K3T7", "K1K3T8", "K1K3T9", "K1K3V1", "K1K3V2", "K1K3V3", "K1K3V4", "K1K3V5", "K1K3V6", "K1K3V7", "K1K3V8", "K1K3V9", "K1K3W1", "K1K3W2", "K1K3W4", "K1K3W5", "K1K3W7", "K1K3W9", "K1K3X1", "K1K3X2", "K1K3X4", "K1K3X5", "K1K3X6", "K1K3X9", "K1K3Y1", "K1K3Y2", "K1K3Y3", "K1K3Y4", "K1K3Y5", "K1K3Y6", "K1K3Y7", "K1K3Y8", "K1K3Y9", "K1K3Z1", "K1K3Z2", "K1K3Z3", "K1K3Z4", "K1K3Z5", "K1K3Z6", "K1K3Z7", "K1K3Z8", "K1K3Z9", "K1K4A1", "K1K4A2", "K1K4A3", "K1K4A4", "K1K4A5", "K1K4A6", "K1K4A7", "K1K4A8", "K1K4A9", "K1K4B1", "K1K4B2", "K1K4B3", "K1K4B4", "K1K4B5", "K1K4B6", "K1K4B7", "K1K4B8", "K1K4B9", "K1K4C1", "K1K4C2", "K1K4C3", "K1K4C4", "K1K4C5", "K1K4C6", "K1K4C7", "K1K4C8", "K1K4C9", "K1K4E1", "K1K4E2", "K1K4E3", "K1K4E5", "K1K4E6", "K1K4E7", "K1K4E8", "K1K4E9", "K1K4G1", "K1K4G2", "K1K4G3", "K1K4G4", "K1K4G5", "K1K4G6", "K1K4G7", "K1K4G8", "K1K4G9", "K1K4H1", "K1K4H2", "K1K4H3", "K1K4H4", "K1K4H5", "K1K4H6", "K1K4H7", "K1K4H8", "K1K4H9", "K1K4J1", "K1K4J2", "K1K4J3", "K1K4J4", "K1K4J5", "K1K4J6", "K1K4J7", "K1K4J8", "K1K4J9", "K1K4K1", "K1K4K2", "K1K4K3", "K1K4K4", "K1K4K5", "K1K4K6", "K1K4K8", "K1K4K9", "K1K4L1", "K1K4L2", "K1K4L3", "K1K4L4", "K1K4L5", "K1K4L6", "K1K4L7", "K1K4L8", "K1K4L9", "K1K4M1", "K1K4M2", "K1K4M3", "K1K4M4", "K1K4M5", "K1K4M6", "K1K4M7", "K1K4M9", "K1K4N1", "K1K4N2", "K1K4N3", "K1K4N4", "K1K4N5", "K1K4N6", "K1K4N7", "K1K4N8", "K1K4N9", "K1K4P1", "K1K4P2", "K1K4P3", "K1K4P4", "K1K4P5", "K1K4P7", "K1K4P8", "K1K4R1", "K1K4R2", "K1K4R3", "K1K4R4", "K1K4R5", "K1K4R6", "K1K4R7", "K1K4R8", "K1K4R9", "K1K4S1", "K1K4S2", "K1K4S3", "K1K4S4", "K1K4S5", "K1K4S6", "K1K4S7", "K1K4S8", "K1K4S9", "K1K4T1", "K1K4T2", "K1K4T3", "K1K4T4", "K1K4T5", "K1K4T6", "K1K4T7", "K1K4T8", "K1K4T9", "K1K4V1", "K1K4V2", "K1K4V3", "K1K4V4", "K1K4V5", "K1K4V6", "K1K4V7", "K1K4V8", "K1K4V9", "K1K4W1", "K1K4W2", "K1K4W3", "K1K4W4", "K1K4W5", "K1K4W6", "K1K4W7", "K1K4W8", "K1K4W9", "K1K4X1", "K1K4X2", "K1K4X3", "K1K4X4", "K1K4X5", "K1K4X6", "K1K4X7", "K1K4X8", "K1K4X9", "K1K4Y1", "K1K4Y2", "K1K4Y3", "K1K4Y4", "K1K4Y5", "K1K4Y6", "K1K4Y7", "K1K4Y8", "K1M0A1", "K1M0A2", "K1M0A3", "K1M0A4", "K1M0A5", "K1M0A6", "K1M0A7", "K1M0A8", "K1M0A9", "K1M0B1", "K1M0B2", "K1M0B3", "K1M0B4", "K1M0B5", "K1M0B6", "K1M0B7", "K1M0B8", "K1M0B9", "K1M0C1", "K1M0C2", "K1M0C3", "K1M0C4", "K1M0C5", "K1M0C6", "K1M0C7", "K1M0C8", "K1M0C9", "K1M0E1", "K1M0E2", "K1M0E3", "K1M0E4", "K1M0E5", "K1M0E6", "K1M0E7", "K1M0E8", "K1M0E9", "K1M0G1", "K1M0G2", "K1M0G3", "K1M0G4", "K1M0G5", "K1M0G6", "K1M0G7", "K1M0G8", "K1M0G9", "K1M0H1", "K1M0H2", "K1M0H3", "K1M0H4", "K1M0H5", "K1M0H6", "K1M0H7", "K1M0H8", "K1M0H9", "K1M0J1", "K1M0J2", "K1M0J3", "K1M0J4", "K1M0J5", "K1M0J6", "K1M0J7", "K1M0J8", "K1M0J9", "K1M0K1", "K1M0K2", "K1M0K3", "K1M0K4", "K1M0K5", "K1M0K6", "K1M0K7", "K1M0K8", "K1M0K9", "K1M0L1", "K1M0L2", "K1M0L3", "K1M0L4", "K1M0L5", "K1M0L6", "K1M0L7", "K1M0L8", "K1M0L9", "K1M0M1", "K1M0M2", "K1M0M3", "K1M0M4", "K1M0M5", "K1M0M6", "K1M0M7", "K1M0M8", "K1M0M9", "K1M0N1", "K1M0N2", "K1M0N3", "K1M0N4", "K1M0N5", "K1M0N6", "K1M0N7", "K1M0N8", "K1M0N9", "K1M0P1", "K1M0P2", "K1M0P3", "K1M0P4", "K1M0P5", "K1M0P6", "K1M0P7", "K1M0P8", "K1M0P9", "K1M0R1", "K1M0R2", "K1M0R3", "K1M0R4", "K1M0R5", "K1M0R6", "K1M0R7", "K1M0R8", "K1M0R9", "K1M0S1", "K1M0S2", "K1M0S3", "K1M0S4", "K1M0S5", "K1M0S6", "K1M0S7", "K1M0S8", "K1M0S9", "K1M0T1", "K1M0T2", "K1M0T3", "K1M0T4", "K1M0T5", "K1M0T6", "K1M0T7", "K1M0T8", "K1M0T9", "K1M0V1", "K1M0V2", "K1M0V3", "K1M0V4", "K1M0V5", "K1M0V6", "K1M0V7", "K1M0V8", "K1M0V9", "K1M0W1", "K1M0W2", "K1M0W3", "K1M0W4", "K1M0W5", "K1M0W6", "K1M0W7", "K1M0W8", "K1M0W9", "K1M0X1", "K1M0X2", "K1M0X3", "K1M0X4", "K1M0X5", "K1M0X6", "K1M0X7", "K1M0X8", "K1M0X9", "K1M0Y1", "K1M0Y2", "K1M0Y3", "K1M0Y4", "K1M0Y5", "K1M0Y6", "K1M0Y7", "K1M0Y8", "K1M0Y9", "K1M0Z1", "K1M0Z2", "K1M0Z3", "K1M0Z4", "K1M0Z5", "K1M0Z6", "K1M0Z7", "K1M0Z8", "K1M0Z9", "K1M1A1", "K1M1A2", "K1M1A3", "K1M1A4", "K1M1A5", "K1M1A6", "K1M1A7", "K1M1A8", "K1M1A9", "K1M1B1", "K1M1B2", "K1M1B3", "K1M1B4", "K1M1B5", "K1M1B6", "K1M1B7", "K1M1B8", "K1M1B9", "K1M1C1", "K1M1C2", "K1M1C3", "K1M1C4", "K1M1C5", "K1M1C6", "K1M1C7", "K1M1C8", "K1M1C9", "K1M1E1", "K1M1E2", "K1M1E3", "K1M1E4", "K1M1E5", "K1M1E6", "K1M1E7", "K1M1E8", "K1M1E9", "K1M1G1", "K1M1G2", "K1M1G3", "K1M1G4", "K1M1G5", "K1M1G6", "K1M1G7", "K1M1G8", "K1M1G9", "K1M1H1", "K1M1H2", "K1M1H3", "K1M1H4", "K1M1H5", "K1M1H6", "K1M1H7", "K1M1H8", "K1M1H9", "K1M1J1", "K1M1J2", "K1M1J3", "K1M1J4", "K1M1J5", "K1M1J6", "K1M1J7", "K1M1J8", "K1M1J9", "K1M1K1", "K1M1K2", "K1M1K3", "K1M1K4", "K1M1K5", "K1M1K6", "K1M1K7", "K1M1K8", "K1M1K9", "K1M1L1", "K1M1L2", "K1M1L3", "K1M1L4", "K1M1L5", "K1M1L6", "K1M1L7", "K1M1L8", "K1M1L9", "K1M1M1", "K1M1M2", "K1M1M3", "K1M1M4", "K1M1M5", "K1M1M6", "K1M1M7", "K1M1M8", "K1M1M9", "K1M1N1", "K1M1N2", "K1M1N3", "K1M1N4", "K1M1N5", "K1M1N6", "K1M1N7", "K1M1N8", "K1M1N9", "K1M1P1", "K1M1P2", "K1M1P3", "K1M1P4", "K1M1P5", "K1M1P6", "K1M1P7", "K1M1P8", "K1M1P9", "K1M1R1", "K1M1R2", "K1M1R3", "K1M1R4", "K1M1R5", "K1M1R6", "K1M1R7", "K1M1R8", "K1M1R9", "K1M1S1", "K1M1S2", "K1M1S3", "K1M1S4", "K1M1S5", "K1M1S6", "K1M1S7", "K1M1S8", "K1M1S9", "K1M1T1", "K1M1T2", "K1M1T3", "K1M1T4", "K1M1T5", "K1M1T6", "K1M1T7", "K1M1T8", "K1M1T9", "K1M1V1", "K1M1V2", "K1M1V3", "K1M1V4", "K1M1V5", "K1M1V6", "K1M1V7", "K1M1V8", "K1M1V9", "K1M1W1", "K1M1W2", "K1M1W3", "K1M1W4", "K1M1W5", "K1M1W8", "K1M1W9", "K1M1X1", "K1M1X2", "K1M1X3", "K1M1X4", "K1M1X5", "K1M1X6", "K1M1X7", "K1M1X8", "K1M1X9", "K1M1Y1", "K1M1Y2", "K1M1Y3", "K1M1Y4", "K1M1Y5", "K1M1Y6", "K1M1Y7", "K1M1Y8", "K1M1Y9", "K1M1Z1", "K1M1Z2", "K1M1Z3", "K1M1Z4", "K1M1Z5", "K1M1Z6", "K1M1Z7", "K1M1Z8", "K1M1Z9", "K1M2A1", "K1M2A2", "K1M2A3", "K1M2A4", "K1M2A5", "K1M2A6", "K1M2A7", "K1M2A8", "K1M2A9", "K1M2B1", "K1M2B2", "K1M2B3", "K1M2B4", "K1M2B5", "K1M2B6", "K1M2B7", "K1M2B8", "K1M2B9", "K1M2C1", "K1M2C2", "K1M2C3", "K1M2C4", "K1M2C5", "K1M2C6", "K1M2C7", "K1M2C8", "K1M2C9", "K1M2E1", "K1M2E2", "K1M2E3", "K1M2E4", "K1M2E5", "K1M2E6", "K1M2E7", "K1M2E8", "K1M2E9", "K1M2G1", "K1M2G2", "K1M2G3", "K1M2G4", "K1M2G5", "K1M2G6", "K1M2G7", "K1M2G8", "K1M2G9", "K1M2H1", "K1M2H2", "K1M2H3", "K1M2H4", "K1M2H5", "K1M2H6", "K1M2H7", "K1M2H8", "K1M2H9", "K1M2J1", "K1M2J2", "K1M2J4", "K1M2J5", "K1M2J6", "K1M2J7", "K1M2J8", "K1M2J9", "K1M2K2", "K1M2K3"];