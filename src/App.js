import './App.css';
import Invoices from './pages/Invoices';

import { createServer } from 'miragejs'

createServer({
  routes() {
    this.get('api/invoice', () => {
      return {
        inv_id: "INV-2022-010",
        company: {
          name: "Dipa Inhouse",
          email: "hello@dipainhouse.com",
          address: "Ijen Boulevard Street 101",
          city: "malang city, 65115",
          country: "East Java, Indonesia"
        },
        customer: {
          issued_date: "11 Jan 2022",
          due_date: "18 Jan 2022",
          name: "Zaky Grizzly",
          company: "Monlight Agency LTD",
          address: "New York, USA"
        },
        payment_method: {
          account_name: "Barly Vallendito",
          account_number: "9700 0023 4200 2900",
          routing_number: "084009519"
        },
        tax: "0.00",
        discount: "0.00",
        items: {
          name: "Payment Project - Monlight Mobile Design",
          hours: "120",
          rate: "40.00",
          tax: "0.00"
        }
      }
    })
  }
})

function App() {
  return (
    <div className="App">
      <Invoices />
    </div>
  );
}

export default App;
