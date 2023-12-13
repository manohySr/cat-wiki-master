import styles from "./search-input.module.css";
import { IoSearchSharp } from "react-icons/io5";
import React from "react";
import Link from "next/link";

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
  return (
    <>
      <div className="relative">
        <div className={styles.container}>
          <input
            placeholder={placeholder}
            className={styles.input}
            onChange={(e) => onChange(e)}
            onFocus={() => setOnSearch(true)}
            onBlur={() => {
              setTimeout(() => {
                setOnSearch(false);
              }, 500);
            }}
          />
          <IoSearchSharp className={styles.icon} />
        </div>
        {onSearch && (
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
    </>
  );
}
