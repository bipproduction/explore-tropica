import ViewLanding from '@/modules/front/landing/landing';
import { funGetHome } from '@/modules/fun/get_home';
import { funListCategory } from '@/modules/fun/list_category';
import { funlistImage } from '@/modules/fun/list_image';
import { funListMediaSosial } from '@/modules/fun/list_media_sosial';
import { funListPage } from '@/modules/fun/list_page';
import { funListSlidebottom } from '@/modules/fun/list_slide_button';
import { unsealData } from 'iron-session';
import _ from 'lodash';
import { cookies } from 'next/headers';

export default async function Page() {
  async function isUser() {
    const c = cookies().get('_xt')
    if (!c || !c.value || _.isEmpty(c.value)) return false
    const userId = await unsealData(c.value, { password: process.env.PWD as any })
    return userId !== null || userId !== ""
  }

  const h = await funGetHome()
  const li = await funlistImage()
  const lc = await funListCategory()
  const lp = await funListPage()
  const ls = await funListSlidebottom()
  const lm = await funListMediaSosial()

  return (
    <>
      <ViewLanding 
      dataHome={h} 
      listImage={li} 
      listCategory={lc} 
      listPage={lp} 
      listSlideBottom={ls}
      listMediaSosial={lm}
       />
    </> 
  );
}
