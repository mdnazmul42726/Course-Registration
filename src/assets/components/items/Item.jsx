// Define the Item component as a functional component.
const Item = ({ item, selectedBtnHandleClick }) => {
    // Destructure properties from the 'item' prop.
    const { details, price, credit, courseName, image } = item;

    // Render the component.
    return (
        <div className="">
            <div className="card w-80 h-[450px] md:w-72 bg-base-100 shadow-md">
                <figure>
                    {/* Display the item image with the 'alt' attribute set to the course name. */}
                    <img src={image} alt={courseName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{courseName}</h2>
                    <p>{details}</p>
                    <div className="flex justify-between mt-3">
                        <div className="flex">
                            {/* Display a price icon and the item price. */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="font-bold">Price: {price}</h3>
                        </div>
                        {/* Display the item's credit hours. */}
                        <h3 className="font-bold -ml-10">Credit: {credit}hr</h3>
                    </div>
                    <div className="card-actions justify-end">
                        {/* Render a "Select" button and call the 'selectedBtnHandleClick' function when clicked. */}
                        <button className="w-full bg-[#2F80ED] hover:bg-[#27005D] transition-all py-2 mt-4 rounded-md text-[#fff] font-bold" onClick={() => selectedBtnHandleClick(item, credit, price)}>
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the Item component as the default export.
export default Item;
