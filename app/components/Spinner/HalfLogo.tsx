import style from "./Spinner.module.scss";
import Square from "./Square";

const HalfLogo: React.FC = () => {
  return (
    <div className={style.halfLogoBox}>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

export default HalfLogo;
