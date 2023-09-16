// Import the useState hook from the React library.
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

// Import components from local files.
import 'react-toastify/dist/ReactToastify.css';
import Carts from './assets/components/Carts/Carts';
import Header from './assets/components/header/Header';
import Items from './assets/components/items/Items';
import Footer from './assets/components/Footer/Footer';

// Define the main App component.
function App() {
  // Define state variables and their initial values using useState hook.
  const [selectedItems, setSelectedItems] = useState([]); // Stores selected items in the cart.
  const [totalcredit, setTotalCredit] = useState(0);       // Tracks the total credits used.
  const [cardTotalPrice, setCardTotalPrice] = useState(0); // Tracks the total price of items in the cart.
  const [remaining, setRemaining] = useState(20);        // Tracks the remaining credits.

  // Define a function to handle item selection.
  const selectedBtnHandleClick = (item, credit, price) => {
    // Check if the item is already in the cart.
    const isExist = selectedItems.find((findItem) => findItem.id == item.id);

    // Check if the selected item's credit value is within the remaining credits.
    if (!isExist && credit <= remaining) {
      // If the item is not in the cart and credits are available, update the state.
      setSelectedItems([...selectedItems, item]); // Add the item to selectedItems.
      setTotalCredit(totalcredit + credit);       // Update the total credits used.
      setRemaining(remaining - credit);           // Decrease the remaining credits.
      setCardTotalPrice(cardTotalPrice + price);   // Update the total price of items in the cart.
    } else {
      // If the item is already in the cart or credits are insufficient, show an alert.
      return toast('Sorry!! An item cannot be added to the cart section twice and above 20 credits.')
    }
  };

  // Render the components.
  return (
    <>
      <Header />  {/* Render the header component. */}
      <div className="md:flex">
        <Items selectedBtnHandleClick={selectedBtnHandleClick} /> {/* Render the items component and pass the selection handler function. */}
        <Carts selectedItems={selectedItems} totalcredit={totalcredit} cardTotalPrice={cardTotalPrice} remaining={remaining} /> {/* Render the cart component and pass relevant data. */}
      </div>
      <Footer />  {/* Render the footer component. */}
      <ToastContainer />
    </>
  );
}

// Export the App component as the default export.
export default App;
