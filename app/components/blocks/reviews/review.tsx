export enum Rating {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export type Review = {
  name: string;
  starRating: Rating;
  comment: string;
};

type Props = {
  review: Review;
};

const getStars = (val: number) => {
  const res = [];
  for (let x = 0; x < val; x++) {
    res.push(
      <svg
        key={x}
        className="w-8 h-8"
        fill="rgb(253 186 116)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    );
  }

  return res;
};

export const Review = (props: Props) => {
  return (
    <div className="flex p-8 gap-4 flex-col bg-slate-100 rounded h-full">
      <div className="flex flex-row align-center">
        <p className="text-3xl font-bold font-cor text-left">
          {props.review.name}
        </p>
        <img className="ms-auto w-8 h-8" src="./assets/png/google.png" />
      </div>
      <div className="text-left flex flex-row gap-1">
        {getStars(props.review.starRating)}
      </div>
      <p className="text-lg text-left">
        {props.review.comment.slice(0, 100)}...
      </p>
      <a className="cursor-pointer text-left">Read more...</a>
    </div>
  );
};
