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

  return (
    <>
    </>
  );
}
