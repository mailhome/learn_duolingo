import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import React from 'react'


type Props = {
    children: React.ReactNode
}

const MarketingLayout = ({
    children
}: Props) => {
  return (
    <div className='min-h-[97vh] flex flex-col'>
        <Header />
        <main className='flex-col flex items-center justify-center flex-1'>
            { children }
        </main>
        <Footer />
    </div>
  )
}

export default MarketingLayout
