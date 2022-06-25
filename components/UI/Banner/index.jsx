import React, { useEffect, useState } from 'react'
import Container from '../../Layout/Container'
import cls from './Banner.module.scss'
import Input from '../Input'
import Button from '../Button'
import { motion } from 'framer-motion'

function Banner() {
  const [procedure, setProcedure] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [insurance, setInsurance] = useState('')

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: '-100px' },
      }}
      className={cls.wrapper}
    >
      <Container>
        <div className={cls.banner}>
          <div className={cls.content}>
            <h1 className={cls.title}>
              Find how much <span>your</span> medical care should cost
            </h1>
            <p className={cls.subtitle}>Don&apos;t get caught off guard by your next medical bill.</p>
            <div className={cls.action}>
              <Input value={procedure} onChange={setProcedure} placeholder='Prodecure' />
              <Input value={zipCode} onChange={setZipCode} placeholder='ZIP Code' />
              <Input value={insurance} onChange={setInsurance} placeholder='Insurance' />
              <Button bgColor='#2962FF' color='#fff' classes='h-[48px]'>
                Search
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  )
}

export default Banner
