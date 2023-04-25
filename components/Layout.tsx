import React from 'react';
import Head from 'next/head';
import { Container, AppShell, Header } from '@mantine/core';
import Navbar from './Navbar';
import Info from './Info';

interface Props {
  title?: string;
  children?: JSX.Element;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppShell
        padding={0}
        header={
          <Header height={70}>
            <Navbar />
          </Header>
        }
      >
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
