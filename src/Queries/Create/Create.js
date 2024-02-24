import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  exampleValidation,
  queryValidation,
  titleValidation,
} from "../../Shared/Validations";

export const Create = function Create() {
  const id = "new-query-id";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const create = (data) => {
    alert("Form successfully submitted.");
    const createData = {
      title: data.title,
      query: data.query,
      averageReview: 0.0,
      reviewers: 0,
      example: data.example,
    };
    navigate("../detail/" + id, { state: createData });
  };
  return (
    <div className="Create">
      <form onSubmit={handleSubmit(create)}>
        <div>
          <label forhtml="title">title:</label>
          <input id="title" {...register("title", titleValidation)} />
          {errors.title && (
            <span style={{ color: "red" }}>{errors.title.message}</span>
          )}
        </div>
        <div>
          <label forhtml="query">query:</label>
          <textarea id="query" {...register("query", queryValidation)} />
          {errors.query && (
            <span style={{ color: "red" }}>{errors.query.message}</span>
          )}
        </div>
        <div>
          <label forhtml="example">example:</label>
          <textarea id="example" {...register("example", exampleValidation)} />
          {errors.example && (
            <span style={{ color: "red" }}>{errors.example.message}</span>
          )}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
