import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// passing data through Props ListGroup(props: Props)
export default function ListGroup({ items, heading, onSelectItem }: Props) {
  //   const message = cities.length === 0 ? <p>no items found</p> : null;

  // this component will have a state that may change over time
  // A Hook function to utilize builtin react functions
  // the state hook initialized to -1
  //   const arr = useState(-1);
  //   arr[0] // variable - selectedIndex
  //   arr[1]    // updater function
  // instead we can deconstruct the returned array from useState function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Item not found</p>}
      <ul className="list-group">
        {/* when rendering a map array, each item must have a unique key as required by React */}
        {items.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
