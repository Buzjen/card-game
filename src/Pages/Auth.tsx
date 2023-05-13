import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
}

interface IFormInput {
  firstName: String;
  lastName: string;
  email: string;
  message: string;
  gender: GenderEnum;
}

export const Auth = () => {
  const uploadField = (event) => {
    if (event.target.files[0].size > 2400000) {
      alert("файл слишком большой");
      event.preventDefault();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    alert(JSON.stringify(data));

  return (
    <form
      className="container mx-auto max-w-[400px] max-h-[550px] pt-4 h-screen w-screen bg-purple-400 py-2 px-2 mt-4 shadow-md rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-2">
        <label className="mb-2">Имя</label>
        <input
          className="border py-1 px-2 w-full focus:outline-none rounded-md"
          {...register("firstName", {
            required: "Please enter your first name.",
            maxLength: 20,
            minLength: 3,
          })}
        />
        {errors.firstName && (
          <span className="text-white font-bold">Введите имя</span>
        )}
      </div>
      <div className="mb-2">
        <label className="mb-2">Фамилия</label>
        <input
          className="border py-1 px-2 w-full focus:outline-none rounded-md"
          {...register("lastName", {
            required: "Please enter your last name.",
            maxLength: 20,
            minLength: 3,
          })}
        />
        {errors.lastName && (
          <span className="text-white font-bold">Введите фамилию</span>
        )}
      </div>
      <div className="mb-2">
        <label className="mb-2">Введите email</label>
        <input
          type="email"
          className="border py-1 px-2 w-full focus:outline-none rounded-md"
          {...register("email", {
            required: "Please enter your email.",
            minLength: 4,
          })}
        />
        {errors.email && (
          <span className="text-white font-bold">Введите email</span>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-2">Введите сообщение</label>
        <input
          className="border py-1 px-2 w-full focus:outline-none rounded-md"
          {...register("message", {
            required: "Please enter your message.",
            minLength: 10,
          })}
        />
        {errors.message && (
          <span className="text-white font-bold">
            Введите сообщение минимум 10 символов
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-2">Укажите свой пол</label>
        <select
          className="w-48 border-0 ml-6 focus:outline-none rounded-md"
          {...register("gender", {
            required: "Please enter your gender.",
          })}
        >
          <option value=""></option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        {errors.gender && (
          <span className="text-white font-bold">Выберите пол</span>
        )}
      </div>
      <div className="mb-2">
        <input
          type="file"
          id="file-upload"
          accept="image/jpeg, image/png"
          onChange={uploadField}
        />
      </div>
      <div>
        <input
          type="submit"
          className="py-2 px-4 bg-rose-500 border-stone-950 text-white cursor-pointer rounded-md"
        />
      </div>
    </form>
  );
};
