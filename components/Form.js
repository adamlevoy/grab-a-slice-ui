export function Form({ slice, setSlice, addTopping, handleSubmit }) {
  return (
    <>
      <form
        className="max-w-sm mx-auto py-4 px-8 rounded-lg shadow-2xl bg-gray-100 flex flex-col justify-center items-center border-dashed border-2 border-gray-200 text-black"
        id="form"
        onSubmit={handleSubmit}
      >
        <div className="slice-form">
          <div className="flex items-center">
            <label htmlFor="crust">Crust</label>
          </div>
          <div className="flex items-center">
            <select
              className="w-full"
              name="crust"
              id="crust"
              required
              onChange={(e) => setSlice({ ...slice, crust: e.target.value })}
            >
              <option value="classic" defaultValue>
                Classic
              </option>
              <option value="thin">Thin</option>
              <option value="deep">Deep</option>
              <option value="roman">Roman</option>
              <option value="cauliflower">Cauliflower</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="toppings">Toppings</label>
          </div>

          {/* toppings */}
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Pepperoni"
                  name="Pepperoni"
                  value="Pepperoni"
                  className="mr-2"
                  onChange={addTopping}
                />
                <label data-for="topping" htmlFor="Pepperoni">
                  Pepperoni
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Jalapeno"
                  name="Jalapeno"
                  value="Jalapeno"
                  className="mr-2"
                  onChange={addTopping}
                />
                <label data-for="topping" htmlFor="Jalapeno">
                  Jalapeno
                </label>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Mushroom"
                  name="Mushroom"
                  value="Mushroom"
                  className="mr-2"
                  onChange={addTopping}
                />
                <label data-for="topping" htmlFor="Mushroom">
                  Mushroom
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Sausage"
                  name="Sausage"
                  value="Sausage"
                  className="mr-2"
                  onChange={addTopping}
                />
                <label data-for="topping" htmlFor="Sausage">
                  Sausage
                </label>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Pepper"
                  name="Pepper"
                  value="Pepper"
                  className="mr-2"
                  onChange={addTopping}
                />
                <label data-for="topping" htmlFor="Pepper">
                  Pepper
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Tomato"
                  name="Tomato"
                  value="Tomato"
                  className="mr-2"
                  onChange={addTopping}
                />
                <label data-for="topping" htmlFor="Tomato">
                  Tomato
                </label>
              </div>
            </div>
          </div>

          {/* sauce */}
          <div className="flex items-center">
            <label htmlFor="sauce">Sauce</label>
          </div>
          <div className="flex items-center">
            <select
              className="w-full"
              name="sauce"
              id="sauce"
              required
              onChange={(e) => setSlice({ ...slice, sauce: e.target.value })}
            >
              <option value="Marinera" defaultValue>
                Marinera
              </option>
              <option value="Pesto">Pesto</option>
              <option value="BBQ">BBQ</option>
              <option value="None">None</option>
            </select>
          </div>
          {/* cheese */}
          <div className="flex items-center">
            <label htmlFor="Cheese">Cheese</label>
          </div>
          <div className="flex items-center">
            <select
              className="w-full"
              name="Cheese"
              id="Cheese"
              required
              onChange={(e) => setSlice({ ...slice, cheese: e.target.value })}
            >
              <option value="Mozzarella" defaultValue>
                Mozzarella
              </option>
              <option value="Vegan">Vegan</option>
              <option value="None">None</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="name">Name</label>
          </div>
          <div className="flex items-center">
            <input
              className="w-full"
              type="text"
              placeholder="Anonymous"
              onChange={(e) => setSlice({ ...slice, name: e.target.value })}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="message">Message</label>
          </div>
          <div className="flex-items-center">
            <textarea
              className="w-full"
              name="message"
              id="message"
              cols="30"
              rows="2"
              placeholder="Keep it short and sweet, or salty :)"
              onChange={(e) => setSlice({ ...slice, message: e.target.value })}
            ></textarea>
          </div>
        </div>
        <button className="btn-primary mt-4 w-full" type="submit" form="form">
          Grab Slice
        </button>
      </form>
    </>
  );
}
