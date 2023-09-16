// Define the Cart component as a functional component.
const Cart = ({ item }) => {
    // Destructure the 'item' prop to extract the 'courseName'.
    const { courseName } = item;

    // Render the component.
    return (
        <div className="pl-3">
            <li className="list-decimal">{courseName}</li>
        </div>
    );
};

// Export the Cart component as the default export.
export default Cart;
