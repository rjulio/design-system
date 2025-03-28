import './styles/config.css'
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Heading } from './components/Headings/Heading';
import { useTheme } from './components/ThemeProvider/ThemeProvider';
import { Text } from './components/Text';
import { ButtonGroup } from './components/Button/Group';
import { useState } from 'react';
import { Tooltip } from './components/Tooltip/Tooltip';
import { ScrollArea } from './components/ScrollArea/ScrollArea';
import { Modal, ModalBody, ModalFooter, ModalHeader } from './components/Modal';

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
          <Tooltip text="This is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltip" position="bottom">
            <Heading level={1}>Rsbuild with React - { theme }</Heading>
          </Tooltip>
          <Text>Start building amazing things with Rsbuild.</Text>
        </div>
      </div>

      <div className="columns is-multiline">
        <div className="column is-full">
          <Card>
            <Heading level={1}>Hello World</Heading>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          </Card>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalHeader>
              <Heading level={3}>Modal Title</Heading>
            </ModalHeader>
            <ModalBody>
              <ScrollArea maxHeight='200px'>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam corrupti esse amet ad tempora dolore impedit aspernatur, sunt itaque sit molestiae vitae sed architecto recusandae soluta eveniet distinctio nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam corrupti esse amet ad tempora dolore impedit aspernatur, sunt itaque sit molestiae vitae sed architecto recusandae soluta eveniet distinctio nisi!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam corrupti esse amet ad tempora dolore impedit aspernatur, sunt itaque sit molestiae vitae sed architecto recusandae soluta eveniet distinctio nisi!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam corrupti esse amet ad tempora dolore impedit aspernatur, sunt itaque sit molestiae vitae sed architecto recusandae soluta eveniet distinctio nisi!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam corrupti esse amet ad tempora dolore impedit aspernatur, sunt itaque sit molestiae vitae sed architecto recusandae soluta eveniet distinctio nisi!
                </Text>
              </ScrollArea>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </ModalFooter>
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
