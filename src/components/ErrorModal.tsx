import React from "react";

interface Props {
  errorMessage?: string;
}
const ErrorModal = ({ errorMessage }: Props) => {
  return (
    <div className="container mx-auto text-center bg-red-600 text-white p-4 mt-4">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorModal;
