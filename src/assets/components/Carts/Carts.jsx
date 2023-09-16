// Import the Cart component (assuming it's located in "./Cart").
import Cart from "./Cart";

// Define the Carts component as a functional component.
const Carts = ({ selectedItems, totalcredit, cardTotalPrice, remaining }) => {
    return (
        <div className="w-80 md:w-[25%] ml-5 mr-3 mt-10 md:mt-0">
            <div className="rounded-md bg-[#eee] p-5">
                {/* Display the remaining credits */}
                <h1 className="text-[#2F80ED] font-bold border-b-2 pb-3 border-[#fff]">Credit Hour Remaining {remaining} hr</h1>
                <h2 className="font-bold pt-3">Course Name</h2>
                <div className="mt-2 border-b-2 border-[#fff] pb-8">
                    <ol>
                        {/* Map through the selected items and render each as a Cart component */}
                        {selectedItems.map(item => <Cart key={item.price} item={item} totalcredit={totalcredit} />)}
                    </ol>
                </div>
                <div className="mt-3 border-b-2 border-[#fff] pb-4">
                    {/* Display the total credit hours */}
                    <p className="font-semibold">Total Credit Hour : {totalcredit} hr</p>
                </div>
                <div className="mt-3">
                    {/* Display the total price */}
                    <p className="font-bold">Total Price : {cardTotalPrice} USD</p>
                </div>
            </div>
        </div>
    );
};

// Export the Carts component as the default export.
export default Carts;
