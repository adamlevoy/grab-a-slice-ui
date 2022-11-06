import { chain } from "wagmi";

export function Form({ slice, setSlice, addTopping, handleSubmit, chain }) {
  return (
    <>
      <form
        className="max-w-sm mx-auto p-5 rounded-2xl shadow-2xl bg-gray-100 dark:bg-slate-800 dark:text-white flex flex-col justify-center items-center text-black"
        id="form"
        onSubmit={handleSubmit}
      >
        <div className="slice-form grid">
          <div className="flex items-center">
            <label htmlFor="crust">Crust</label>
          </div>
          <div className="flex items-center">
            <select
              className="w-full shrink text-gray-900"
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

          {/* toppings */}
          <div className="flex items-center mr-4">
            <label htmlFor="toppings">Toppings</label>
          </div>
          <div className="flex flex-wrap">
            <div className="flex items-center mr-2">
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
            <div className="flex items-center mr-2">
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
            <div className="flex items-center mr-2">
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
            <div className="flex items-center mr-2">
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
            <div className="flex items-center mr-2">
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
            <div className="flex items-center mr-2">
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

          {/* sauce */}
          <div className="flex items-center mr-4">
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
          <div className="flex items-center mr-4">
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

          {/* NAME */}
          <div className="flex items-center mr-4">
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

          {/* MESSAGE */}
          <div className="flex items-center mr-4">
            <label htmlFor="message">Message</label>
          </div>
          <div className="flex-items-center">
            <textarea
              className="w-full"
              name="message"
              id="message"
              cols="30"
              rows="2"
              placeholder="Keep it short and sweet, or salty."
              onChange={(e) => setSlice({ ...slice, message: e.target.value })}
            ></textarea>
          </div>
        </div>
        <button
          className="bg-red-500 rounded-xl py-3 px-4 inline-flex mt-4 w-full text-center justify-center text-white font-semibold shadow disabled:bg-red-200"
          type="submit"
          form="form"
          disabled={chain.id != 80001}
        >
          Grab Slice
        </button>
        {chain.id != 80001 ? (
          <span className="font-bold text-red-500 mt-4">
            Must connect to network Polygon Mumbai!
          </span>
        ) : null}
        {console.log(chain.id)}
      </form>
    </>
  );
}
