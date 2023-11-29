import React from 'react'
import {LiaShippingFastSolid, LiaHandHoldingHeartSolid, LiaCloneSolid} from 'react-icons/lia'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'Contact',
    url: '/contact',
  },
]

export const services = [
  {
    id: 1,
    icon: <LiaHandHoldingHeartSolid/>,
    title: 'Pilih Jenis',
    text:
      'Pilih jenis barang yang ingin kamu customs.',
  },
  {
    id: 2,
    icon: <LiaCloneSolid/>,
    title: 'Pilih Warna dan Ukuran',
    text:
      'Temukan lebih dari 100 macam warna dan 5 ukuran.',
  },
  {
    id: 3,
    icon: <LiaShippingFastSolid />,
    title: 'COD',
    text:
      'Kirim dengan kurir favorit kamu dan bayar COD.',
  },
]

export const products_url =  `${process.env.REACT_APP_SHOP_URL}/products`

export const single_product_url = `${process.env.REACT_APP_SHOP_URL}/product/`
