import './styles/config.css'
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Heading } from './components/Headings/Heading';
import { useTheme } from './components/ThemeProvider/ThemeProvider';
import { Text } from './components/Text';
import { ButtonGroup } from './components/Button/Group';
import { Modal } from './components/Modal';
import { useState } from 'react';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="content">
      <Heading level={1}>Rsbuild with React { theme }</Heading>
      <Text>Start building amazing things with Rsbuild.</Text>

      { Array.from({length:10}).map((item, idx) => (
        <Card key={`${idx}-${item}`}>
          <Heading level={1}>Hello World {++idx}</Heading>
          <ButtonGroup>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Button onClick={() => toggleTheme('light') }>light</Button>
            <Button onClick={() => toggleTheme('dark') } variant="secondary">dark</Button>
          </ButtonGroup>
        </Card>
      ))}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Heading level={2}>Modal Title</Heading>
        <Text>This is the content of the modal.</Text>
      </Modal>
    </div>
  );
};

export default App;
