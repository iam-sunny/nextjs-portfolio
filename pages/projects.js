import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/projects-item";

export default function Projects({ projects }) {
  // console.log(projects);

  return (
    <Layout>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="오늘도 코딩 중" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen px-10 mb-10">
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid w-full grid-cols-1 gap-8 py-10 m-6 md:grid-cols-2">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// 빌드 타임에 호출
// export async function getStaticProps() {

// 각 요청 때마다 호출
export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      filter: {
        property: "종류",
        select: {
          equals: "프로젝트",
        },
      },
      sorts: [
        {
          property: "작업기간",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  // console.log(result);

  // const projectNames = projects.results.map(
  //   (aProject) => aProject.properties.이름.title[0].plain_text
  // );

  // console.log(`projectNames: ${projectNames}`);

  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // .catch((err) => console.error(err));

  return {
    props: { projects }, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1, // 데이터 변경이 있으면 갱신 1초 마다 - 갱신 주기 설정 가능
  };
}
