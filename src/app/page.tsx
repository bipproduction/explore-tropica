import PageMain from '@/app_modules_v2/main';
import prisma from '../../modules/bin/prisma';
export default async function Page() {
 
  const data = await prisma.content.findMany()
  return (
    <>
      {/* <ViewLanding
        dataHome={h}
        listImage={li}
        listCategory={lc}
        listPage={lp}
        listSlideBottom={ls}
        listMediaSosial={lm}
      /> */}
      {/* <pre>
      {JSON.stringify(data, null, 2)}
      </pre> */}
      <PageMain data={data} />
    </>
  );
}
