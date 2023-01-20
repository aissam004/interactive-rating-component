
import { useState } from 'react';

export default function Card({ listRating =null}) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [active, setActive] = useState(null);
  return (
    <div>
      {!isSubmit ? (
        <div className='rating-card'>
          <div>
            <div className='rating-card-icon'>
              <img
                src={require('../images/icon-star.svg').default}
                alt='star'
              />
            </div>
          </div>
          <h1 className='rating-card-title'>How did we do?</h1>
          <p className='rating-card-content'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <ul className='rating-card-rating-numbers'>
            {listRating.map((number) => (
              <div
                className={
                  'rating-card-rating-number' +
                  (active === number ? ' active' : '')
                }
                onClick={() => setActive(number)}
                key={number}
              >
                {number}
              </div>
            ))}
          </ul>
          <button
            className='button'
            onClick={() => {
              if (active !== null) {
                setIsSubmit(true);
              }
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className='rating-card' style={{ textAlign: 'center' }}>
          <div>
            <img
              src={require('../images/illustration-thank-you.svg').default}
              alt='star'
            />
          </div>
          <div>
            <div class='thank-you'>
              You selected {active} out of {listRating[listRating.length - 1]}
            </div>
          </div>
          <div>
            <h2 className='rating-card-title'>Thank you!</h2>
          </div>
          <p className='rating-card-content'>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}
