import PropTypes from 'prop-types'

const WantCook = ({ wantItem, ToastContainer, handlePrepareToCurrentCooking }) => {

    const { recipe_id, recipe_name, preparing_time, calories } = wantItem;
    return (
        <div className='flex shadow p-2 rounded'>
            <p className='w-[30%]'>{recipe_name}</p>
            <p className='w-[20%]'>{preparing_time} Min</p>
            <p className='w-[20%]'>{calories} Calories</p>
            <button className="w-[30%] bg-green-400 hover:bg-transparent hover:border hover:text-black px-5 py-3 rounded" onClick={() =>
                handlePrepareToCurrentCooking(wantItem, preparing_time, calories, recipe_id)
            }>Preparing</button>
            <ToastContainer
                position="top-center"
            ></ToastContainer>
        </div>
    );
};
WantCook.propTypes = {
    wantItem: PropTypes.object,
    ToastContainer: PropTypes.func,
    handlePrepareToCurrentCooking: PropTypes.func
}

export default WantCook;