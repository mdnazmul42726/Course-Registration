// Import the necessary React hooks and the Item component.
import { useEffect, useState } from "react";
import Item from "./item";

// Define the Items component as a functional component.
const Items = ({ selectedBtnHandleClick }) => {
    // Define state to store the fetched items.
    const [items, setItems] = useState([]);

    // Use the useEffect hook to fetch data from 'data.json' when the component mounts.
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    // Render the component.
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-5 ml-3">
            {/* Map through the 'items' array and render each item using the 'Item' component. */}
            {items.map(item => (
                <Item key={item.price} item={item} selectedBtnHandleClick={selectedBtnHandleClick} />
            ))}
        </div>
    );
};

// Export the Items component as the default export.
export default Items;
