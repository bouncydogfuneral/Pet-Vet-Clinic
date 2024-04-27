import { useState } from "react";
import { useForm } from "react-hook-form";
import { updateData } from "../services/update";
import { postData } from "../services/post";

function Forms({ pet, setUpdate }) {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const regSubmitHandler = async (data) => {
    try {
      if (pet) {
        await updateData(pet.id, data);
      } else {
        postData({ ...data });
      }
      setUpdate((update) => update + 1);
    } catch (error) {
      setError(error.message);
    } finally {
      reset();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(regSubmitHandler)}>
        <div className="RegisterYourPet">
          <div>
            Register your pet for an Appointment!
          </div>
        </div>
        <div className="inputfield">
          <label htmlFor="petsName"> *Your Pets Name:</label>
          <input
            placeholder="Pet's name"
            type="text"
            id="petsName"
            {...register("petsName", { required: "Pets name is required!" })}
          />
        </div>
        <div className="inputfield">
          <label htmlFor="petOwner">*Pet Owner:</label>
          <input
            placeholder="Owner's name"
            type="text"
            id="petOwner"
            {...register("petOwner", { required: " Pet Owner is required!" })}
          />
        </div>
        <div className="inputfield">
          <label htmlFor="appDate">*Date: </label>
          <input
            type="date"
            {...register("appDate", {
              required: " Appointment date is required",
            })}
          />
        </div>
        <div className="inputfield">
          <label htmlFor="appTime">*Time: </label>
          <input
            type="time"
            {...register("appTime", {
              required: "Appointment date is required",
            })}
          />
        </div>
        <div className="inputfield">
          <label htmlFor="aptNote">*Apt.Note</label>
          <input
            type="text"
            id="aptNote"
            placeholder="Appointment Note"
            {...register("aptNote")}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Forms;
