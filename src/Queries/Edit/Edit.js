import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  exampleValidation,
  queryValidation,
  titleValidation,
} from "../../Shared/Validations";

export const Edit = function Edit() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const update = (data) => {
    alert("Form successfully submitted.");
    const editData = {
      title: data.title,
      query: data.query,
      averageReview: state.averageReview,
      reviewers: state.reviewers,
      example: data.example,
    };
    navigate("../detail/" + id, { state: editData });
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit(update)}>
        <div id="detail-id">id: {id}</div>
        <div>
          <label forhtml="title">title:</label>
          <input
            id="title"
            defaultValue={state.title}
            {...register("title", titleValidation)}
          />
          {errors.title && (
            <span style={{ color: "red" }}>{errors.title.message}</span>
          )}
        </div>
        <div id="review">
          review: {state.averageReview} ({state.reviewers})
        </div>
        <div>
          <label forhtml="query">query:</label>
          <textarea
            id="query"
            defaultValue={state.query}
            {...register("query", queryValidation)}
          />
          {errors.query && (
            <span style={{ color: "red" }}>{errors.query.message}</span>
          )}
        </div>
        <div>
          <label forhtml="example">example:</label>
          <textarea
            id="example"
            defaultValue={state.example}
            {...register("example", exampleValidation)}
          />
          {errors.example && (
            <span style={{ color: "red" }}>{errors.example.message}</span>
          )}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

// export const Edit = function Edit() {
//   const { id } = useParams();
//   const { state } = useLocation();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [title, setTitle] = useState(state.title);
//   const [query, setQuery] = useState(state.query);
//   const [example, setExample] = useState(state.example);

//   const changeTitle = (e) => {
//     console.log(e.target.value);
//     setTitle(e.target.value);
//   };
//   const changeQuery = (e) => {
//     console.log(e.target.value);
//     setQuery(e.target.value);
//   };
//   const changeExample = (e) => {
//     console.log(e.target.value);
//     setExample(e.target.value);
//   };

//   const titleValidation = {
//     required: { value: true, message: "This item is required." },
//     maxLength: {
//       value: 15,
//       message: "limit is " + 15 + "characters.",
//     },
//     pattern: {
//       value: /^[A-Za-z0-9]+$/,
//       message: "Alphanumeric characters only.",
//     },
//   };
//   const queryValidation = {
//     required: { value: true, message: "This item is required." },
//     maxLength: {
//       value: 5000,
//       message: "limit is " + 5000 + "characters.",
//     },
//   };
//   const exampleValidation = {
//     required: { value: true, message: "This item is required." },
//     maxLength: {
//       value: 5000,
//       message: "limit is " + 5000 + "characters.",
//     },
//   };
//   const update = () => {
//     alert("Form successfully submitted.");
//   };
//   return (
//     <div className="Edit">
//       <form onSubmit={handleSubmit(update)}>
//         <div id="detail-id">id: {id}</div>
//         <div>
//           <label forhtml="title">title:</label>
//           <input
//             id="title"
//             value={title}
//             onChange={changeTitle}
//             {...register("title", titleValidation)}
//           />
//           {errors.title && errors.title.message}
//         </div>
//         <div id="review">
//           review: {state.averageReview} ({state.reviewers})
//         </div>
//         <div>
//           <label forhtml="query">title:</label>
//           <input
//             id="query"
//             value={query}
//             onChange={changeQuery}
//             {...register("query", queryValidation)}
//           />
//           {errors.query && errors.query.message}
//         </div>
//         <div>
//           <label forhtml="example">example:</label>
//           <input
//             id="example"
//             value={example}
//             onChange={changeExample}
//             {...register("example", exampleValidation)}
//           />
//           {errors.example && errors.example.message}
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };
