import { useGetAdminInfoQuery } from "@/store/api/adminApi";
import { FC } from "react";

const AdminProfile: FC = () => {
  const { data, isLoading } = useGetAdminInfoQuery();
  console.log(data);

  return <></>;
};

export default AdminProfile;
