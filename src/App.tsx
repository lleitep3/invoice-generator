import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './themes/default'

import { Viewer as InvoiceViewer } from './features/Invoice/Viewer';
import { getInvoice } from './features/Invoice/api';


function App() {

  const invoice = getInvoice()

  return (
    <ThemeProvider theme={defaultTheme}>
      <InvoiceViewer invoice={invoice} />
    </ThemeProvider>
  );
}

export default App;
