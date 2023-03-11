import { Container } from './App.styled';
import Section from 'components/Section';
import Phonebook from 'components/Phonebook';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
};

export default App;
