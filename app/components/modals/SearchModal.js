"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSearchModal from "@/app/actions/use-search-modal";

const SearchModal = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const closeModal = useSearchModal((state) => state.onClose);
  const isOpen = useSearchModal((state) => state.isOpen);
  const inputRef = useRef(null);

  const router = useRouter();

  search ? search.get("search_query") : "";
  const handleClose = () => {
    closeModal();
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (typeof searchQuery !== "string") return;
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/results?search_query=${encodedSearchQuery}`);
    closeModal();
    setSearchQuery("");
  };

  useEffect(() => {
    setIsMounted(true);
    if (inputRef.current) {
      // Focus the input if it is not already focused.
      if (!inputRef.current.hasFocus()) {
        inputRef.current.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const bodyElement = document.body;
      if (isOpen) {
        bodyElement.classList.add("cartMenu-open");
      } else {
        bodyElement.classList.remove("cartMenu-open");
      }
    }
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-lg grid place-content-center z-[9999]">
      <div className="bg-white w-72 border rounded-md grid place-content-center relative">
        <button
          onClick={() => handleClose()}
          className="cusor-pointer bg-white hover:bg-red-600 hover:text-white hover:border-red-600 absolute -top-2 -right-2 p-2 border aspect-square h-6 rounded-full grid place-content-center"
        >
          X
        </button>
        <form onSubmit={onSearch}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={inputRef}
            className="p-5 text-lg border-none outline-none focus:outline-none"
            placeholder="Search for a product..."
          />
        </form>
      </div>
    </div>
  );
};

export default SearchModal;