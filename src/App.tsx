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
    <div className="container is-fluid">

      <div className="header columns">
        <div className="column is-9"></div>
        <div className="column text-right">
          Theme:
          <ButtonGroup>
            <Button size="sm" onClick={() => toggleTheme('light') }>light</Button>
            <Button size="sm" onClick={() => toggleTheme('dark') } variant="secondary">dark</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Heading level={1}>Rsbuild with React { theme }</Heading>
          <Text>Start building amazing things with Rsbuild.</Text>
        </div>
      </div>

      <div className="columns is-multiline">
        <div className="column is-full">
          <Card>
            <Heading level={1}>Hello World</Heading>
            <ButtonGroup>
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            </ButtonGroup>
          </Card>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Heading level={2}>Modal Title</Heading>
            <Text>This is the content of the modal.</Text>
          </Modal>
        </div>
        <div className="column is-full">
          <div className="card">teste</div>
        </div>
        <div className="column">
          <div className="card">teste</div>
        </div>
        <div className="column">
          <div className="card">teste</div>
        </div>
        <div className="column">
          <div className="card">teste</div>
        </div>
        <div className="column">
          <div className="card">teste</div>
        </div>
        <div className="column">
          <div className="card">teste</div>
        </div>
        <div className="column">
          <div className="card">teste</div>
        </div>
      </div>
    </div>
  );
};

export default App;
