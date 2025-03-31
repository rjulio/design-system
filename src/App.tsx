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
import { Wizard } from './components/Wizard';
import { Content1 } from './mocks/test/Content1';
import { Content2 } from './mocks/test/Content2';
import { Content3 } from './mocks/test/Content3';
import { Content4 } from './mocks/test/Content4';
import { Content5 } from './mocks/test/Content5';
import { Input } from './components/Input';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [step, setStep] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('')

  const changeStep = (step: number) => {
    setStep(step);
  }

  const content = [
    <Content1 key={1} changeStep={changeStep} />,
    <Content2 key={2} changeStep={changeStep} />,
    <Content3 key={3} changeStep={changeStep} />,
    <Content4 key={4} changeStep={changeStep} />,
    <Content5 key={5} changeStep={changeStep} />
  ];

  return (
    <div className="container is-fluid">

      <div className="header columns">
        <div className="column is-9"></div>
        <div className="column text-right">
          Theme:
          <ButtonGroup>
            <Button size="sm" onClick={() => toggleTheme('light')}>light</Button>
            <Button size="sm" onClick={() => toggleTheme('dark')} variant="secondary">dark</Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <Card>
            <Input
              label="Name"
              id="teste"
              placeholder="placeholder test"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Card>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <Tooltip text="This is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltipThis is a tooltip" position="bottom">
            <Heading level={1}>Rsbuild with React - {theme}</Heading>
          </Tooltip>
          <Text>Start building amazing things with Rsbuild.</Text>
        </div>
      </div>

      <div className="columns">
        <div className="column is-full">
          <Wizard
            step={step}
            setStep={setStep}
            content={content}
            canChangeStep={false} />
        </div>
      </div>

      <div className="columns is-multiline">
        <div className="column is-full">
          <Card title="teste de title no card">
            <Heading level={1} title="teste title no heading">Hello World</Heading>
            <Button title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam corrupti esse amet ad tempora dolore impedit aspernatur, sunt itaque sit molestiae vitae sed architecto recusandae soluta eveniet distinctio nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam corrupti esse amet ad tempora dolore impedit aspernatur, sunt itaque sit molestiae vitae sed architecto recusandae soluta eveniet distinctio nisi!" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
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
