import { Loader } from "@mantine/core";

const LoadingEffect = () => {
  return (
    <div className="h-96 flex justify-center items-center">
      <div className="bg-white rounded-md p-3">
        <Loader variant="bars" color="dark" />
      </div>
    </div>
  );
};

export { LoadingEffect };
