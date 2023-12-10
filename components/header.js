import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <Link
            href="/"
            className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
            </svg>
            <span className="ml-3 text-xl">Sunny 포트폴리오</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            {/* <Link href="/">
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>

            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">프로젝트</a>
            </Link> */}

            <Link href="/" className="mr-5 hover:text-gray-900">
              홈
            </Link>

            <Link href="/study" className="mr-5 hover:text-gray-900">
              스터디
            </Link>

            <Link href="/projects" className="mr-5 hover:text-gray-900">
              프로젝트
            </Link>

            {/* <a
              href="https://iam-sunny.github.io/"
              className="mr-5 hover:text-gray-900"
            >
              블로그
            </a> */}
          </nav>
          {/* 다크모드 토글 버튼 작업 */}
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
