import styles from "./search-input.module.css";
import { IoSearchSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";

import { RxCross2 } from "react-icons/rx";

interface SearchInputProps {
  placeholder: string;
  onChange: (value: any) => void;
  suggestions: string[];
}

export default function SearchInput({
  placeholder,
  onChange,
  suggestions,
}: SearchInputProps) {
  const [onSearch, setOnSearch] = React.useState<boolean>(false);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [displaySearch, setDisplaySearch] = React.useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="relative">
        <div className={styles.container}>
          <input
            placeholder={placeholder}
            className={styles.input}
            onChange={(e) => onChange(e)}
            onFocus={() => {
              setOnSearch(true);
              setDisplaySearch(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setOnSearch(false);
              }, 500);
            }}
          />
          <IoSearchSharp className={styles.icon} />
        </div>
        {isMobile == false && onSearch && (
          <div className={styles.suggestionContainer}>
            <div className={styles.suggestionOverflow}>
              {suggestions?.length > 0 &&
                suggestions.map((suggestion, key) => {
                  return (
                    <React.Fragment key={key}>
                      <Link
                        href={`/cat/${suggestion}`}
                        className={styles.suggestion}
                      >
                        {suggestion}
                      </Link>
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        )}
      </div>

      {isMobile && displaySearch && (
        <div className={styles.mobileModal}>
          <div className={styles.mobileContainer}>
            <RxCross2
              className={`${styles.icon} ${styles.cross}`}
              onClick={() => setDisplaySearch(false)}
            />
            <div className={styles.mobileSearch}>
              <input
                placeholder={placeholder}
                className={styles.input}
                onChange={(e) => onChange(e)}
                onBlur={() => {
                  setTimeout(() => {
                    setOnSearch(false);
                  }, 500);
                }}
              />
              <div>
                <IoSearchSharp className={styles.icon} />
              </div>
            </div>

            <div className={styles.suggestionMobile}>
              <div className={styles.suggestionOverflow}>
                {suggestions?.length > 0 &&
                  suggestions.map((suggestion, key) => {
                    return (
                      <React.Fragment key={key}>
                        <Link
                          href={`/cat/${suggestion}`}
                          className={styles.suggestion}
                        >
                          {suggestion}
                        </Link>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
