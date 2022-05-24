import { InvoiceType } from "./types"
import Styles from './styles'
import { Box } from "../../Common/Layout/Box"

type ViewerProps = {
  invoice: InvoiceType
}

const {
  InvoiceContainer,
  InvoiceHeader,
  InvoiceFooter,
  InvoiceBody,
  CompanyName,
} = Styles


export const Viewer = ({ invoice }: ViewerProps) => {

  return (<InvoiceContainer>
    <InvoiceHeader>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column">
            <CompanyName>
              {invoice.company.name}
            </CompanyName>
            <small>{invoice.company.registerNumber}</small>
            <small>
              {invoice.company.address}
            </small>
            <small style={{ fontSize: '1rem', marginTop: '10px' }}>
              {invoice.company.email}
            </small>
            <small>
              {invoice.company.phone}
            </small>
          </Box>
          <Box display="flex" flexDirection="column" marginTop="40px">
            <strong style={{ marginBottom: '10px' }}>INVOICE TO</strong>
            <span>
              {invoice.customer.name}
            </span>
          </Box>
        </Box>

        <Box textAlign="right">
          <strong>Invoice</strong>

          <br />

          <small>
            Nº {String(invoice.code).padStart(3, '0')}
          </small>
        </Box>
      </Box>
      <hr />

      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <small className="subtitle">ISSUE DATE</small>
          <small>{Intl.DateTimeFormat('en-US').format(new Date())}</small>
        </Box>

        <Box display="flex" flexDirection="column">
          <small className="subtitle">DUE DATE</small>
          <small>{invoice.dueDate}</small>
        </Box>

        <Box display="flex" flexDirection="column">
          <small className="subtitle">SWIFT CODE</small>
          <small>{invoice.swiftCode}</small>
        </Box>

        <Box display="flex" flexDirection="column">
          <small className="subtitle">IBAN CODE</small>
          <small>{invoice.ibanCode}</small>
        </Box>

      </Box>
    </InvoiceHeader>
    <InvoiceBody>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column">
          <h4>{invoice.service.title}</h4>
          <span>{invoice.service.description}</span>
        </Box>
        <strong>{invoice.value}</strong>
      </Box>

      <Box display="flex" flexDirection="column" gap="2px" marginTop="40px">
        <strong style={{ marginBottom: '10px' }}>INVOICE TO</strong>

        <span>
          {invoice.customer.name} { invoice.customer.observation ? (<small>*({invoice.customer.observation})</small>) : null}
        </span>

        <small>
          {invoice.customer.address}
        </small>

        <small style={{ marginTop: '10px' }}>
          {invoice.customer.registerNumber}
        </small>
      </Box>
    </InvoiceBody>
    <InvoiceFooter>
      <Box display="flex" flexDirection="column" gap="10px">
        <small>AMOUNT PAYABLE</small>
        <span>{invoice.value}</span>
      </Box>
    </InvoiceFooter>
  </InvoiceContainer>)
}