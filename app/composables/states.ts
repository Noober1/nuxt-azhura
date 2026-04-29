export const useIsDarkMode = () => {
  const isDarkMode = useState('isDarkMode', () => false)
  return {
    isDarkMode,
    toggleDarkMode: () => {
      isDarkMode.value = !isDarkMode.value
    }
  }
}