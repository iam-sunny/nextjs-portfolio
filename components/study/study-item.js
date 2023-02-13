// import Image from "next/image";
import Image from "next/legacy/image";

export default function StudyItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const description = data.properties.설명.rich_text[0].plain_text;
  const github = data.properties.Github.url;
  const detail = data.properties.자세히.url;
  const demo = data.properties.데모.url;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    const startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    const endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    // console.log(`startDate: ${startDate}`);
    // console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    // console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <a href={detail}>
        <Image
          className="rounded-t-lg-xl"
          src={imgSrc}
          alt="cover image"
          quality={100}
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="none"
          // object-fit="cover"
          // object-position="responsive"
          // width={500}
          // height={500}
        />
      </a>

      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={github}>깃허브 바로가기</a>
        <a href={demo}>데모 보기</a>
        <p className="my-1 ">
          스터디 기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 space-x-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
