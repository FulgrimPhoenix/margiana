import { IconListItem } from "@/ui/index";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import style from "./ContactsList.module.scss";
import clsx from "clsx";
import { useGetAdminInfoQuery } from "@/store/api/adminApi";
import { CONTACTS_LIST } from "./ContactsList.consts";

interface IContactsList
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

const ContactsList: FC<IContactsList> = ({ ...props }) => {
  const { data, isLoading } = useGetAdminInfoQuery();

  if (isLoading || !data) return <h1>Loading...</h1>;
  return (
    <ul className={clsx(style["contacts-list"])} {...props}>
      {CONTACTS_LIST.map((item) => {
        return item.name !== "contactEmail" ? (
          <IconListItem
            icon={item.icon}
            itemTitle={{
              text: item.title ?? data[item.name],
              src:
                item.name !== "contactPhone"
                  ? data[item.name]
                  : `tel. ${data[item.name]}`,
            }}
          />
        ) : (
          <IconListItem
            icon={item.icon}
            itemTitle={{
              text: item.title ?? data[item.name],
            }}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
