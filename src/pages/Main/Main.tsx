import { Carousel } from "@/components";
import { DetailedHTMLProps, DetailsHTMLAttributes, FC } from "react";

const Main: FC<
  DetailedHTMLProps<DetailsHTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <main {...props}>
      <Carousel />
    </main>
  );
};

export default Main;
