// import { InfinitySpin } from "react-loader-spinner";
import { DNA } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <DNA visible={true} width="150" color="SteelBlue" ariaLabel="infinity-spin-loading" />
    </div>
  );
};
export default Loader;
