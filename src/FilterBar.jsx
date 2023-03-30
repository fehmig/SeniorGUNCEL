import { GrLocation } from 'react-icons/gr'

const FilterBar = () => {
    return (
        <div data-aos="fade-down" className="cardDiv grid">


            <div className="destinationInput">
              <label htmlFor="city">Search your destination:</label>
              <div className="input flex">
                <input type="text" placeholder='Enter location here...'
                 
                />
                <GrLocation className="icon" />
              </div>
              <br />
            </div>




            <div className="dateInput">
              <label htmlFor="date">Select your date:</label>
              <div className="input flex">
                <input type="date" id="date" />

              </div>
            </div>


            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="cost">Max cost:</label>
                <h3 className="total">$6000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000" id="cost" />
              </div>
            </div>

            <div className="searchOptions flex">

              <span>SORT BY:</span>


              <select
                name='sort'
                id='sort'
                className=''

              >
                <option value="chl">Cost: High to Low</option>
                <option value="clh">Cost: Low to High</option>
                <option value="opel">Distance</option>
                <option value="audi">Rating</option>
              </select>
            </div>
          </div>
    )
}
export default FilterBar