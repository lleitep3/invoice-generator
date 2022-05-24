import { InvoiceType } from "./types";

export const getInvoice = () => ({
  code: '0000',
  value: '€ 99.999,00',
  dueDate: '12/24/2022',
  swiftCode: 'SWIFT0000',
  ibanCode: 'BG9999999999000000088888888C1',
  service: {
    title: 'Software Development',
    description: 'Referring to services provided in the month of <month> 2022'
  },
  company: {
    name: 'Your Company Name LTDA',
    registerNumber: '00.000.000/0000-00',
    phone: '+55 (11)99 999 8888',
    email: 'your@email.com',
    address: 'AVenida Paulista, 1000 CEP 00000-000 - São Paulo - SP',
  },
  customer: {
    name: 'Your Customer Company Name',
    observation: '',
    phone: '+31 (0)99 999 9999',
    email: 'finance@customercompanyemail.com',
    address: 'street name 262, locale state, country',
    registerNumber: 'ID 99999 9999 9999'
  }
}) as InvoiceType