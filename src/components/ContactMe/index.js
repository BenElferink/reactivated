import { useState } from 'react';
import Button from '../Button';
import ContactModal from '../Modal/ContactModal';

export default function ContactMe() {
  const [contactModal, setContactModal] = useState(false);

  const wrapperStyles = {
    width: '300px',
    height: '100%',
    margin: '0 0 0 auto',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'var(--darkBgDarker)',
    borderRadius: '0 0 0 1rem',
  };

  return (
    <div style={wrapperStyles}>
      <Button invertStyle onClick={() => setContactModal(true)}>
        Contact Me
      </Button>

      {contactModal && <ContactModal closeModal={() => setContactModal(false)} />}
    </div>
  );
}
