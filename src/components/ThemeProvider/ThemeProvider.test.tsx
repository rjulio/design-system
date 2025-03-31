import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeProvider';
import userEvent from '@testing-library/user-event';

describe('ThemeProvider', () => {
   const TestComponent = () => {
      const { theme, toggleTheme } = useTheme();
      return (
         <div>
            <span data-testid="current-theme">{theme}</span>
            <button onClick={() => toggleTheme('dark')}>Set Dark Theme</button>
            <button onClick={() => toggleTheme('light')}>Set Light Theme</button>
         </div>
      );
   };

   beforeEach(() => {
      localStorage.clear();
      document.documentElement.removeAttribute('data-theme');
   });

   test('should provide default theme as light', () => {
      render(
         <ThemeProvider>
            <TestComponent />
         </ThemeProvider>
      );

      expect(screen.getByTestId('current-theme').textContent).toBe('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
   });

   test('should toggle theme to dark', async () => {
      render(
         <ThemeProvider>
            <TestComponent />
         </ThemeProvider>
      );

      const darkButton = screen.getByText('Set Dark Theme');
      await userEvent.click(darkButton);

      expect(screen.getByTestId('current-theme').textContent).toBe('dark');
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(localStorage.getItem('theme')).toBe('dark');
   });

   test('should toggle theme back to light', async () => {
      render(
         <ThemeProvider>
            <TestComponent />
         </ThemeProvider>
      );

      const darkButton = screen.getByText('Set Dark Theme');
      const lightButton = screen.getByText('Set Light Theme');

      await userEvent.click(darkButton);
      await userEvent.click(lightButton);

      expect(screen.getByTestId('current-theme').textContent).toBe('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      expect(localStorage.getItem('theme')).toBe('light');
   });

   test('should load theme from localStorage', () => {
      localStorage.setItem('theme', 'dark');

      render(
         <ThemeProvider>
            <TestComponent />
         </ThemeProvider>
      );

      expect(screen.getByTestId('current-theme').textContent).toBe('dark');
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
   });

   test('should throw error if useTheme is used outside ThemeProvider', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

      expect(() => render(<TestComponent />)).toThrow(
         'useTheme must be used within a ThemeProvider'
      );

      consoleErrorSpy.mockRestore();
   });
});