export default function Footer() {
  return (
    <footer className="bg-gray-800 shadow dark:bg-gray-950 py-10">
      <div className="w-full mx-auto max-w-screen-xl">
        <div className="text-sm text-gray-200 dark:text-gray-300">
          <p className="text-center">
            © 2023 Blog realizzato con{" "}
            <svg
              className="text-gray-200 dark:text-gray-300 w-6 h-6 inline-block mx-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
            </svg>{" "}
            da Andrea Coi
          </p>{" "}
        </div>
      </div>
    </footer>
  );
}
