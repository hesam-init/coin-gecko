import { NoData } from "../../assets/icons/icon";

const NoInfo = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="text-dracula-primary">
        <NoData />
      </div>
      <h1 className="font-bold">NoData !</h1>
    </div>
  );
};

export { NoInfo };
