import style from './NavMobile.module.scss';
import Link from 'next/link';

interface Props {
  onClick: () => void;
}

const NavMobile: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className={style.navMobile} onClick={onClick}>
      <ul>
        <li>Menu</li>
        <li>
          <Link href="/">O mnie</Link>
        </li>
        <li>
          <Link href="/oferta">Oferta</Link>
        </li>
        <li>
          <Link href="/zaufali">Zaufali mi</Link>
        </li>
        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
