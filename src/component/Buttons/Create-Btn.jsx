import { useDispatch, useSelector } from "react-redux";

export default function CreateButton() {
  const dispatch = useDispatch();
  let isAdmin = useSelector((state) => {
    return state.main.admin;
  });
  let isLead = useSelector((state) => {
    return state.main.leadResearcher;
  });
  let isResearcher = useSelector((state) => {
    return state.main.researcher;
  });
  if (isAdmin) {
    return (
      <button className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
        Create New
      </button>
    );
  } else if (isAdmin) {
    return (
      <button className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
        Create New
      </button>
    );
  } else if (isAdmin) {
    return (
      <button className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
        Create New
      </button>
    );
  }
}

//fetch account data
