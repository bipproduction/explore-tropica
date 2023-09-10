import { funContentList } from '@/app_modules/admin_dashboard/fun/content_list';
import { funGetLanding } from '@/app_modules/fun/get_landing';
import ViewLanding from '@/app_modules/landing/view/landing';
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

  const landing = await funGetLanding()
  const data = await funContentList()
  return (<ViewLanding data={data} isEditable={await isUser()} landing={landing} />);
}
