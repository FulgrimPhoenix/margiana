import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import "./SearchString.css";

interface ISearchingComponent {
  searchParameter: "title";
  itemList: any;
  setEventList: any;
  ItemList: ReactElement;
}

export function SearchingComponent({
  searchParameter,
  itemList,
  setEventList,
  ItemList,
}: ISearchingComponent): ReactElement {
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = itemList.filter((item: any) =>
    item[searchParameter].toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    if (searchValue === "") {
      setEventList(itemList);
    }
    setEventList(filteredItems);
  }, [searchValue]);

  return (
    <>
      <input
        id="search-string"
        className="search-string"
        type="text"
        placeholder="Поиск..."
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {ItemList}
    </>
  );
}
