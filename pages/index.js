import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/mainlayout'

export default function Home({isUserAuthenticated}) {
  return (
    <MainLayout isUserAuthenticated={isUserAuthenticated}></MainLayout>
  )
}
