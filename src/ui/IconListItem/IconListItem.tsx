import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import style from "./IconListItem.module.scss";
import clsx from "clsx";

export interface IIconListItem
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  icon: string;
  itemTitle: {
    text: string;
    src?: string;
  };
}

const IconListItem: FC<IIconListItem> = ({ icon, itemTitle, ...props }) => (
  <li className={clsx(style["list-item"])} {...props}>
    <img className={clsx(style["item-icon"])} src={icon} alt="иконка" />
    {!itemTitle.src ? (
      <p className={clsx(style["item-title"])}>{itemTitle.text}</p>
    ) : (
      <a
        href={itemTitle.src}
        className={clsx(style["item-title"], style["item-title-link"])}
        target="blank"
      >
        {itemTitle.text}
      </a>
    )}
  </li>
);

const memoizedIconListItem = React.memo(
  IconListItem,
  (prevProps, nextProps) => {
    return (
      prevProps.icon === nextProps.icon &&
      prevProps.itemTitle === nextProps.itemTitle
    );
  }
);

export default memoizedIconListItem;
