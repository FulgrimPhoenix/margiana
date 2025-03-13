import { IIconListItem } from "@/ui/IconListItem/IconListItem";
import { IconListItem } from "@/ui/index";
import { constants } from "@/utils/constants";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import style from "./ContactsList.module.scss";
import clsx from "clsx";

interface IContactsList
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const ContactsList: FC<IContactsList> = ({ ...props }) => {
  return (
    <ul className={clsx(style["contacts-list"])} {...props}>
      {constants.contactsPage.contacts.contactsList.map(
        (item: IIconListItem) => {
          return (
            <IconListItem
              icon={item.icon}
              itemTitle={{
                text: item.itemTitle.text,
                src: item.itemTitle.src,
              }}
            />
          );
        }
      )}
    </ul>
  );
};

export default ContactsList;
