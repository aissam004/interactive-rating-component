import { useState } from "react";

export default function Card({ listRating = null }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [active, setActive] = useState(null);
  return (
    <div>
      {!isSubmit ? (
        <form>
          <div className="rating-card">
            <div>
              <div className="rating-card-icon">
                <img
                  src={require("../images/icon-star.svg").default}
                  alt="star"
                />
              </div>
            </div>
            <h1 className="rating-card-title">How did we do?</h1>
            <p className="rating-card-content">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>

            <fieldset
              className="rating-card-rating-numbers"
              style={{
                border: 0,
              }}
            >
              {listRating.map((number) => (
                <div key={number} className="input">
                  <label
                    htmlFor={"rating-number" + number}
                    className={
                      "rating-card-rating-number" +
                      (active === number ? " active" : "")
                    }
                    onClick={() => setActive(number)}
                  >
                    {number}
                  </label>
                  <input
                    type="radio"
                    id={"rating-number" + number}
                    name="rating-number"
                    value={number}
                    style={{ display: "none" }}
                  />
                </div>
              ))}
            </fieldset>
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                if (active !== null) {
                  setIsSubmit(true);
                }
              }}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="rating-card" style={{ textAlign: "center" }}>
          <div>
            <img
              src={require("../images/illustration-thank-you.svg").default}
              alt="star"
            />
          </div>
          <div>
            <div className="thank-you">
              You selected {active} out of {listRating[listRating.length - 1]}
            </div>
          </div>
          <div>
            <h1 className="rating-card-title">Thank you!</h1>
          </div>
          <p className="rating-card-content">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}
