CREATE TABLE cards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bank_name VARCHAR(50),
  name_on_card VARCHAR(50),
  card_number VARCHAR(16) NOT NULL,
  expiration_date DATE NOT NULL,
  cvv VARCHAR(3) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(50),
  phone VARCHAR(10)
);