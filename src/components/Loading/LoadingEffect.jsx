import { Loader } from "@mantine/core";

const LoadingEffect = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Loader variant="bars" color="green" />
    </div>
  );
};

export { LoadingEffect };
