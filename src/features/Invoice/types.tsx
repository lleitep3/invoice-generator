export type InvoiceType = {
  code: string,
  value: string,
  dueDate: string,
  swiftCode: string,
  ibanCode: string,
  service: {
    title: string,
    description: string
  },
  company: {
    name: string,
    registerNumber: string,
    phone: string,
    email: string,
    address: string
  },
  customer: {
    name: string,
    observation?: string,
    phone: string,
    email: string,
    address: string,
    registerNumber: string
  }
}