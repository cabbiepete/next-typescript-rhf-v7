import { useForm, SubmitHandler } from "react-hook-form";
import { ControlledTextField } from "./ControlledTextField";
type FormFields = {
  fieldname: string;
};

export const ExampleForm = () => {
  const { control, handleSubmit } = useForm<FormFields>();

  const submitLog: SubmitHandler<FormFields> = (data) => {
    console.log("submitted: ", data);
  };

  return (
    <form onSubmit={handleSubmit(submitLog)} noValidate>
      <ControlledTextField label="Field" name="fieldname" control={control} />
    </form>
  );
};
