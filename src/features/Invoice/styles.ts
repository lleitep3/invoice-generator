import styled from '@emotion/styled'
import { darken, lighten } from 'polished'

const InvoiceContainer = styled('div')`
  width: calc(100vw - 50px);
  margin: 30px auto;
  border: 1px solid ${({ theme }) => theme.palette.primary.text};;
  color: ${({ theme }) => theme.palette.primary.text};
  border-radius: 8px;
`

const InvoiceHeader = styled('header')`
  padding: 48px 48px 32px;
  background: ${({ theme }) => theme.palette.primary.bg};
  color: ${({ theme }) => theme.palette.primary.text};
  border-radius: 8px 8px 0 0;

  strong {
    font-size: 1.4rem;
  }

  small {
    font-size: 1rem;

    &.subtitle {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  hr {
    margin: 40px 0;
    border-color: ${(props) => lighten(0.2, props.theme.palette.primary.bg)};
  }
`

const InvoiceFooter = styled('footer')`
  background: ${({ theme }) => theme.palette.secondary.bg};
  padding: 32px 48px;
  text-align: right;
  border-radius: 0 0 8px 8px;

  small {
    font-weight: bold;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.secondary.text};
  }

  span {
    font-weight: bold;
    margin-bottom: 10px;
    color: ${({ theme }) => darken(0.2, theme.palette.secondary.text)};
  }
`

const InvoiceBody = styled('section')`
  padding: 48px 48px 32px;
  background: white;
  color: ${({ theme }) => darken(0.2, theme.palette.secondary.text)};
  min-height: 400px;

  h4 {
    margin-bottom: 5px;
  }

  span {
    font-size: medium;
  }
`

const CompanyName = styled('span')`
  padding-bottom: 4px;
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
`

const Styles = {
  InvoiceContainer,
  InvoiceHeader,
  InvoiceFooter,
  InvoiceBody,
  CompanyName,
}

export default Styles
