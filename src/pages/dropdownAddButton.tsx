import { useState } from 'react';
import styles from '../styles/components/DropdownAddButton.module.css';

export default function DropdownAddButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.addButton} onClick={handleToggle}>
        + Add Item
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <button className={styles.dropdownButton}>Create Items</button>
          <button className={styles.dropdownButton}>Transfer Items</button>
        </div>
      )}
    </div>
  );
}
