import type { GetServerSideProps } from 'next'
import Cards from '../components/Cards'
import React, { ReactElement, useLayoutEffect } from 'react'
import Navbar from '../components/Navbar'
import { InferGetServerSidePropsType } from 'next'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { CreateActionSetBeer } from '../redux/actions/actions'
import { Provider } from 'react-redux'
import store from '../redux/store/store'

React.useLayoutEffect = React.useEffect


export default function Home({ beers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const dispatch = useDispatch();
  //инициализуруем стор обьектом beers
  dispatch(CreateActionSetBeer(beers));

  return (
    <Cards />
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Provider store={store}>
      <Navbar />
      {page}
    </Provider>
  )
}

const fetchData = async (beersURL: string) => await axios.get(beersURL)
  .then(res => ({
    error: false,
    beers: res.data,
  }))
  .catch(() => ({
    error: true,
    beers: null,
  }),
  );

export const getServerSideProps: GetServerSideProps = async ({
}: any) => {

  const beersURL: string = process.env.BEERS_URL as string;
  const data = await fetchData(beersURL);

  return {
    props: data
  };
}