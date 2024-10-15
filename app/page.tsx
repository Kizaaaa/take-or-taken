"use client"

import React from 'react'
import ColorChangeButton from '@/components/ColorChangeButton'
import Image from 'next/image'
import Name from '@/components/Name';

interface City {
  name: string;
  x: number;
  y: number;
  type: 'button' | 'circle';
  color?: '#2336f0' | '#6bbe27' | '#eab80c';
}

const cities: City[] = [
  { name: 'soasio', x: 10, y: 45 , type: 'button'},
  { name: 'ternate', x: 15, y: 55 , type: 'button'},
  { name: 'greenNode', x: 15, y: 65, type: 'circle', color: '#6bbe27' },
  { name: 'makassar', x: 20, y: 30 , type: 'button'},
  { name: 'tidore', x: 22, y: 68 , type: 'button'},
  { name: 'maluku', x: 27, y: 55 , type: 'button'},
  { name: 'ambon', x: 29, y: 40 , type: 'button'},
  { name: 'banten', x: 34, y: 20 , type: 'button'},
  { name: 'jailolo', x: 35, y: 50 , type: 'button'},
  { name: 'tahua', x: 38, y: 68 , type: 'button'},
  { name: 'blueNode', x: 45, y: 17, type: 'circle', color: '#2336f0' },
  { name: 'lombok', x: 45, y: 30 , type: 'button'},
  { name: 'bekasi', x: 45, y: 40 , type: 'button'},
  { name: 'bandara', x: 45, y: 50 , type: 'button'},
  { name: 'kepanjen', x: 45, y: 60 , type: 'button'},
  { name: 'malang', x: 55, y: 68 , type: 'button'},
  { name: 'padang', x: 58, y: 50 , type: 'button'},
  { name: 'bali', x: 60, y: 20 , type: 'button'},
  { name: 'bima', x: 65, y: 38 , type: 'button'},
  { name: 'jakarta', x: 72, y: 58 , type: 'button'},
  { name: 'bandung', x: 70, y: 20 , type: 'button'},
  { name: 'kupang', x: 80, y: 68 , type: 'button'},
  { name: 'alor', x: 80, y: 35 , type: 'button'},
  { name: 'garut', x: 85, y: 45 , type: 'button'},
  { name: 'yellowNode', x: 87, y: 59, type: 'circle', color: '#eab80c' },
]

const connections = [
  ['makassar', 'banten'],
  ['banten', 'lombok'],
  ['lombok', 'bali'],
  ['lombok', 'bekasi'],
  ['bali', 'bandung'],
  ['alor', 'bandung'],
  ['makassar', 'soasio'],
  ['soasio', 'ternate'],
  ['makassar', 'ambon'],
  ['ambon', 'bekasi'],
  ['bekasi', 'bima'],
  ['bima', 'alor'],
  ['bima', 'padang'],
  ['bima', 'bandung'],
  ['garut', 'alor'],
  ['ambon', 'jailolo'],
  ['ambon', 'soasio'],
  ['bekasi', 'bandara'],
  ['bandara', 'padang'],
  ['padang', 'jakarta'],
  ['jakarta', 'garut'],
  ['ternate', 'maluku'],
  ['jailolo', 'kepanjen'],
  ['jailolo', 'bandara'],
  ['kepanjen', 'padang'],
  ['kepanjen', 'tahua'],
  ['kepanjen', 'malang'],
  ['kupang', 'jakarta'],
  ['maluku', 'tidore'],
  ['maluku', 'jailolo'],
  ['tidore', 'tahua'],
  ['tahua', 'malang'],
  ['malang', 'kupang'],
  ['blueNode', 'banten'],
  ['blueNode', 'lombok'],
  ['blueNode', 'bali'],
  ['greenNode', 'ternate'],
  ['greenNode', 'tidore'],
  ['greenNode', 'maluku'],
  ['yellowNode', 'garut'],
  ['yellowNode', 'jakarta'],
  ['yellowNode', 'kupang'],
]

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/map.png"
        alt="Full screen background"
        fill
        sizes="100%"
        className="w-full h-full"
        priority
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <svg className="w-full h-full">
          {connections.map(([from, to]) => {
            const fromCity = cities.find(city => city.name === from)
            const toCity = cities.find(city => city.name === to)
            if (fromCity && toCity) {
              return (
                <line
                  key={`${from}-${to}`}
                  x1={`${fromCity.x + 3}%`}
                  y1={`${fromCity.y + 2}%`}
                  x2={`${toCity.x + 3}%`}
                  y2={`${toCity.y + 2}%`}
                  stroke="orange"
                  strokeWidth="2"
                />
              )
            }
          })}
          {cities.map((city) => (
            city.type === 'button' ? (
              <foreignObject key={city.name} x={`${city.x}%`} y={`${city.y}%`} width="18vw" height="8vh">
                <ColorChangeButton text={city.name} />
              </foreignObject>
            ) : (
              <circle
                key={city.name}
                cx={`${city.x+3}%`}
                cy={`${city.y+1}%`}
                r="15"
                fill={city.color}
                stroke="white"
                strokeWidth="0.5"
              />
            )
          ))}
        </svg>
      </div>
      <div className="absolute mt-[80vh] ml-[50vw] z-10 flex items-end justify-end mb-[10vh] mr-[5vw]">
        <div className="flex border-2 border-[#bf4f51]">
          <Name />
          <Name />
          <Name />
        </div>
      </div>
    </div>
  )
}