// Mock expo-font to prevent font loading issues in tests
jest.mock("expo-font", () => ({
    loadAsync: jest.fn().mockResolvedValue(true),
    isLoaded: jest.fn().mockReturnValue(true),

  }));
  
  // Mock React Navigation to prevent errors with useNavigation()
  jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  }));