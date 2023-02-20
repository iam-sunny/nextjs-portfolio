import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요👋
          <br className="hidden lg:inline-block" />
          오늘도 힘차게 코딩!
        </h1>
        <p className="mb-8 leading-relaxed">
          {/* 어제보다 나은 오늘을 꿈꾸고, 사람에 가치를 두며, 세상을 이롭게 만들고
          싶은 김성연입니다. */}
          안녕하세요! 프론트엔드 개발자로서 사용자 경험을 고려한 웹을 만들기
          위해 노력하는 김성연입니다.
          <br />웹 개발에 대한 무한한 열정과 호기심을 가지고 있으며, 이 매력적인
          세계에 빠져들었습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/study" className="btn-project mr-5">
            스터디 보러가기
          </Link>
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button> */}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              > */}
        <Animation />
      </div>
    </>
  );
}
