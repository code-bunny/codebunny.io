import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/logo.svg'

export default function Hero() {
  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <Link href="/" className="block mb-4" aria-label="Code Bunnies">
            <svg className="w-30 h-10 fill-current h1 dark:text-white" viewBox="0 0 1568 265">
              <path d="M308.874 211.592a71.31 71.31 0 0 1-72.479-72.479 70.726 70.726 0 0 1 35.655-62.542 71.31 71.31 0 0 1 36.824-9.645 71.603 71.603 0 0 1 53.483 23.38l-17.535 17.536a41.208 41.208 0 0 0-15.782-11.69 50.56 50.56 0 0 0-20.166-3.8 46.76 46.76 0 0 0-23.38 5.845 46.76 46.76 0 0 0-21.92 40.916c0 9.06 1.754 17.243 5.846 24.257a44.423 44.423 0 0 0 39.454 22.796 44.423 44.423 0 0 0 36.24-15.49l17.243 17.536a71.603 71.603 0 0 1-53.483 23.38Z"/>
              <path d="M433.667 211.592a71.31 71.31 0 0 1-72.479-72.771 70.141 70.141 0 0 1 35.655-62.25 71.31 71.31 0 0 1 36.824-9.645 70.141 70.141 0 0 1 36.532 9.645 69.557 69.557 0 0 1 35.948 62.25 70.726 70.726 0 0 1-35.948 63.127 70.141 70.141 0 0 1-36.532 9.644Zm0-25.426a43.838 43.838 0 0 0 39.455-22.796 52.606 52.606 0 0 0 0-48.514 46.176 46.176 0 0 0-16.074-16.659 47.93 47.93 0 0 0-23.38-5.845 46.76 46.76 0 0 0-23.381 5.845 46.176 46.176 0 0 0-21.92 40.624c0 9.06 1.754 17.243 5.846 24.55a44.423 44.423 0 0 0 39.454 22.795ZM581.84 211.592a63.127 63.127 0 0 1-34.485-9.644 68.388 68.388 0 0 1-24.258-25.718 75.986 75.986 0 0 1-8.767-36.825 71.603 71.603 0 0 1 33.025-62.834 63.127 63.127 0 0 1 34.486-9.645 55.528 55.528 0 0 1 48.514 24.55 56.113 56.113 0 0 1 8.475 26.887v41.793a52.606 52.606 0 0 1-28.64 44.715 60.497 60.497 0 0 1-28.35 6.721Zm4.384-24.841a41.5 41.5 0 0 0 38.286-22.796 56.113 56.113 0 0 0 5.553-24.55 55.528 55.528 0 0 0-5.553-24.841 44.715 44.715 0 0 0-15.49-16.659 43.254 43.254 0 0 0-23.088-6.137 43.254 43.254 0 0 0-38.87 22.796 52.606 52.606 0 0 0-5.553 24.55c0 9.351 1.754 17.535 5.553 24.84a43.254 43.254 0 0 0 39.162 22.797Zm68.68 21.919H628.31V171.26l4.969-33.901-4.969-33.61V0h26.595v208.67ZM739.074 211.592a75.694 75.694 0 0 1-37.409-9.352 70.141 70.141 0 0 1-35.947-63.127 68.68 68.68 0 0 1 35.363-62.542 69.264 69.264 0 0 1 36.24-9.645 61.374 61.374 0 0 1 56.99 33.025c5.844 10.229 8.475 21.92 8.475 35.07l-.293 6.43a98.198 98.198 0 0 1-1.169 7.599H684.13v-21.92h103.166l-9.644 8.476a54.652 54.652 0 0 0-4.969-23.965 37.116 37.116 0 0 0-14.028-15.197 42.085 42.085 0 0 0-21.92-5.26 42.377 42.377 0 0 0-39.454 22.21 52.021 52.021 0 0 0-5.552 24.842c0 9.937 2.045 18.413 5.845 25.719a44.13 44.13 0 0 0 41.5 22.796 52.606 52.606 0 0 0 21.627-4.092 42.67 42.67 0 0 0 16.658-12.274l16.951 17.243a68.095 68.095 0 0 1-24.55 17.827 77.74 77.74 0 0 1-30.686 6.137ZM821.959 208.67v-14.022h67.724a51.017 51.017 0 0 0 35.503-11.934 40.873 40.873 0 0 0 13.127-31.326 41.768 41.768 0 0 0-5.669-22.078 39.68 39.68 0 0 0-16.11-15.215 49.823 49.823 0 0 0-24.166-5.669h-70.41V95.001h68.023c11.934 0 21.48-3.58 28.641-10.144a37.591 37.591 0 0 0 10.442-27.746 35.503 35.503 0 0 0-11.635-28.044 46.542 46.542 0 0 0-31.028-9.845h-64.442V5.199H886.4a71.603 71.603 0 0 1 31.326 6.266 48.928 48.928 0 0 1 19.99 17.9 48.332 48.332 0 0 1 7.16 26.553 49.823 49.823 0 0 1-9.25 29.834 50.718 50.718 0 0 1-25.955 18.2l1.79-5.37c13.425 3.58 23.867 10.441 31.326 19.69 7.757 9.547 11.635 20.884 11.635 34.011a53.702 53.702 0 0 1-8.055 29.238 55.79 55.79 0 0 1-22.972 19.989 79.658 79.658 0 0 1-35.205 7.16H821.96Zm-9.547 0V5.2h15.812v203.47h-15.812ZM1021.55 211.653a57.58 57.58 0 0 1-29.834-7.757 52.21 52.21 0 0 1-20.287-21.48 63.547 63.547 0 0 1-7.459-31.625v-80.85h15.216v80.254a56.685 56.685 0 0 0 5.072 24.464 39.978 39.978 0 0 0 37.293 22.674 38.785 38.785 0 0 0 30.73-12.829 51.613 51.613 0 0 0 11.336-34.31V69.94h15.216v80.851c0 11.934-2.387 22.376-7.459 31.625a52.21 52.21 0 0 1-20.287 21.48 56.685 56.685 0 0 1-29.536 7.757ZM1162.554 63.192c10.229 0 19.89 1.989 28.982 5.683a84.105 84.105 0 0 1 23.583 15.911 76.433 76.433 0 0 1 21.594 52.85v71.034h-14.775v-71.034a58.816 58.816 0 0 0-59.384-59.385 56.543 56.543 0 0 0-41.768 17.332 61.09 61.09 0 0 0-17.617 42.053v71.034h-14.775v-71.034c0-10.23 1.989-19.89 5.967-28.982a71.887 71.887 0 0 1 39.495-39.78 73.876 73.876 0 0 1 28.698-5.682ZM1321.955 63.192c10.229 0 19.89 1.989 28.982 5.683a84.105 84.105 0 0 1 23.583 15.911 76.433 76.433 0 0 1 21.594 52.85v71.034h-14.775v-71.034a58.816 58.816 0 0 0-59.384-59.385 56.543 56.543 0 0 0-41.769 17.332 61.09 61.09 0 0 0-17.616 42.053v71.034h-14.775v-71.034c0-10.23 1.989-19.89 5.967-28.982a71.887 71.887 0 0 1 39.495-39.78 73.876 73.876 0 0 1 28.698-5.682ZM1456.92 208.954l-58.817-132.408h15.912l50.86 117.349h-7.387l53.134-117.349h15.911l-62.226 132.408h-7.387Zm-34.38 55.69 34.096-69.897 7.671 14.207-26.14 55.69h-15.628ZM210.046 131.023c9.772-20.596 5.525-67.076-30.855-72.821-20.196-3.188-42.113 8.917-52.55 15.762-7.759-13.083-26.381-43.074-43.047-58.952C71.901 3.757 57.095 1.249 46.041 8.604c-8.864 5.919-16.315 20.384-8.099 41.713 7.324 19.045 29.091 35.815 52.135 53.574 18.069 13.954 36.829 28.376 47.299 43.413 20.854 29.949 2.891 53.287 2.126 54.202a6.609 6.609 0 0 0-1.47 4.155c0 3.626 2.984 5.99 6.612 5.99h38.436c3.628 0 9.343.213 9.343-3.413s-1.86-8.892-13.199-8.892h-23.269c1.387-3.236 2.48-6.885 3.264-10.317a56.787 56.787 0 0 0 .755-21.096c21.523-3.188 40.867-17.507 50.072-36.91Zm-42.803-24.826h-.01c-4.898 0-8.928-4.03-8.928-8.927 0-4.897 4.03-8.928 8.928-8.928 4.898 0 8.928 4.031 8.928 8.928 0 4.897-4.03 8.927-8.928 8.927h-.032.042Z"/>
              <path d="M112.175 199.346c10.85-.232 11.979 6.967 11.991 9.17.013 2.201-2.229 3.101-5.827 3.135 0 0-28.16-.1-63.404-.568-16.034-.212-24.635-7.623-33.15-15.836-7.986 1.302-19.253-1.958-21.413-10.322-1.23-4.76.14-13.475 11.06-18.101.302-35.804 25.364-53.114 54.18-53.828C38.864 98.6 18.511 75.58 11.577 54.866c-3.982-11.895-5.746-24.053-.956-37.216C15.752 3.551 31.831 1.146 34.392 4.431c1.76 2.258-12.883 5.084-15.559 20.107-2.275 12.775 2.205 24.459 8.351 35.716 9.226 16.898 34.792 37.087 48.019 45.653 10.408 6.739 24.605 21.237 16.089 19.861-5.631-.91-12.445-1.187-21.306-.978-8.351.197-42.001 3.768-45.79 35.895-1.158 9.819 3.359 24.581 14.243 32.227 8.523 5.988 19.785 6.269 28.551 6.434.294.006 34.117.236 45.185 0Z"/>
              <path d="M57.894 157.255a.963.963 0 0 0 0 1.362l7.68 7.678a4.962 4.962 0 0 1 0 7.012l-.126.125a4.958 4.958 0 0 1-7.011 0L44.975 159.97a2.874 2.874 0 0 1 0-4.068l13.462-13.462a4.96 4.96 0 0 1 7.011 0l.126.126a4.96 4.96 0 0 1 0 7.012l-7.68 7.677ZM1533.65 65.29V45.089h2.82V65.29h-2.82Zm-7.05-18.216v-2.576h16.92v2.576h-16.92Zm20.84 18.216V44.498h1.98l8.81 14.478h-1.34l8.81-14.478h1.98V65.29h-2.83V49.441l.65.172-6.95 11.415h-1.98l-6.95-11.415.64-.172V65.29h-2.82Z"/>
            </svg>
          </Link>

          <h1 className="h1 font-aspekta mb-5">
            I write about coding and starting up my{' '}
            <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              video game
            </span>{' '}
            studio.
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Game Designer, Photographer, Developer, and Founder of Code Bunnies Ltd. I write about coding, startups, and my journey to start a game studio.
          </p>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
            Please visit{' '}
            <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              <Link href="https://codebunnies.com">
                https://codebunnies.com
              </Link>
            </span>{' '}
             to find out more.
          </p>
        </div>
      </div>
    </section>
  )
}
