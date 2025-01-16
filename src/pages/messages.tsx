import DashboardLayout from '@/components/system/DashboardLayout';
import Head from 'next/head';
import React from 'react';

const Messages = () => {
  return (
    <>
      <Head>
        <title>Tourismo - Messages</title>
      </Head>
      <DashboardLayout activeTab='messages'>
          <div>Messages</div>
      </DashboardLayout>
    </>
  )
}

export default Messages