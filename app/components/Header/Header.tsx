'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Header.module.scss';
import globalStyle from 'style/Globals.module.scss';
import NavDesktop from '@/components/NavDesktop/NavDesktop';
import NavMobile from '@/components/NavMobile/NavMobile';
import SecondaryMobileHeader from '@/components/SecondaryMobileHeader/SecondaryMobileHeader';
import logoImg from '../../../public/logo.png';

const Header: React.FC = () => {
  const [
    isNavMobileOpen,
    setIsNavMobileOpen,
  ] = useState(false);
  const handleNavMobileOpen =
    (): void => {
      setIsNavMobileOpen(
        !isNavMobileOpen
      );
    };
  return (
    <>
      <header
        className={style.container}
      >
        <div
          className={
            style.logoContainer
          }
        >
          <Link href='/'>
            <Image
              src={logoImg}
              alt='Logo'
              className={style.logo}
            />
          </Link>
          <div
            className={
              style.textContainer
            }
          >
            <div
              className={
                style.titleContainer
              }
            >
              <h1
                className={style.title}
              >
                <span
                  className={
                    globalStyle.capitalizeBold
                  }
                >
                  NBT
                </span>{' '}
                Anna Król
              </h1>
              <h2
                className={
                  style.subtitle
                }
              >
                Biuro Tłumaczeń Języka
                Angielskiego
              </h2>
            </div>
          </div>
        </div>
        <NavDesktop
          onClick={handleNavMobileOpen}
        />

        {isNavMobileOpen && (
          <NavMobile
            onClick={
              handleNavMobileOpen
            }
          />
        )}
      </header>
      <SecondaryMobileHeader />
    </>
  );
};

export default Header;
