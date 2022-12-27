import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 김성연입니다
          <br className="hidden lg:inline-block" />
          오늘도 힘찬 코딩!
        </h1>
        <p className="mb-8 leading-relaxed">
          그림자는 얼마나 되는 그들에게 넣는 운다. 우리 곳이 꾸며 구하지
          더운지라 부패뿐이다. 끝에 심장의 평화스러운 있을 이상, 것은 있는
          듣는다. 끓는 봄날의 청춘을 모래뿐일 대중을 청춘의 시들어 인생에
          봄바람이다. 피는 곳이 그들의 품었기 실로 끓는 위하여, 옷을 구하지
          것이다. 찾아다녀도, 예가 그러므로 품고 방지하는 아름다우냐? 있는
          인간이 그들에게 그것을 꽃이 그것은 듣는다. 원질이 영락과 품고 피가 든
          때문이다. 낙원을 귀는 커다란 약동하다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
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
