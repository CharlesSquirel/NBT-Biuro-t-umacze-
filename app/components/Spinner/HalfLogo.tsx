import Square from "./Square";
import style from "./Spinner.module.scss";

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
